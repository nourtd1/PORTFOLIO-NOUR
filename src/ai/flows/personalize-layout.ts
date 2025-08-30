'use server';

/**
 * @fileOverview A Genkit flow for personalizing portfolio layouts based on user behavior.
 *
 * - personalizeLayout - A function that personalizes the portfolio layout.
 * - PersonalizeLayoutInput - The input type for the personalizeLayout function.
 * - PersonalizeLayoutOutput - The return type for the personalizeLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeLayoutInputSchema = z.object({
  userBehaviorData: z
    .string()
    .describe(
      'A string containing data about the user behavior on the portfolio, such as pages visited, time spent on each page, and interactions with elements.'
    ),
  availableLayouts: z
    .string()
    .describe(
      'JSON array of available layout options. Each object in the array should contain a name and description property.'
    ),
});
export type PersonalizeLayoutInput = z.infer<typeof PersonalizeLayoutInputSchema>;

const PersonalizeLayoutOutputSchema = z.object({
  recommendedLayout: z
    .string()
    .describe(
      'The name of the recommended layout based on the user behavior data.'
    ),
  reasoning: z
    .string()
    .describe(
      'Explanation of why the layout was recommended, based on the user behavior data.'
    ),
});
export type PersonalizeLayoutOutput = z.infer<typeof PersonalizeLayoutOutputSchema>;

export async function personalizeLayout(input: PersonalizeLayoutInput): Promise<PersonalizeLayoutOutput> {
  return personalizeLayoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeLayoutPrompt',
  input: {schema: PersonalizeLayoutInputSchema},
  output: {schema: PersonalizeLayoutOutputSchema},
  prompt: `You are an expert in user experience and portfolio design. Given the user behavior data and available layout options, you will recommend the most suitable layout for the user.

User Behavior Data: {{{userBehaviorData}}}

Available Layouts: {{{availableLayouts}}}

Based on the user behavior data, recommend the best layout from the available layouts and explain your reasoning. The outputted layout must be one of the available layouts.

Ensure that the output is formatted as JSON.`,
});

const personalizeLayoutFlow = ai.defineFlow(
  {
    name: 'personalizeLayoutFlow',
    inputSchema: PersonalizeLayoutInputSchema,
    outputSchema: PersonalizeLayoutOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
