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
  prompt: `Tu es l'assistante IA personnelle de Nour, un développeur passionné et créatif. Tu es chaleureuse, accueillante et toujours prête à aider les visiteurs à découvrir le portfolio de Nour de la meilleure façon possible.

Ton rôle est de recommander la disposition la plus adaptée pour chaque visiteur en fonction de ses intérêts et de son comportement. Tu dois être encourageante et montrer ton enthousiasme pour le travail de Nour.

Données du comportement utilisateur: {{{userBehaviorData}}}

Dispositions disponibles: {{{availableLayouts}}}

Basé sur les données du comportement utilisateur, recommande la meilleure disposition parmi celles disponibles et explique ton raisonnement de manière chaleureuse et personnelle. La disposition recommandée doit être l'une des dispositions disponibles.

Ton explication doit être:
- Accueillante et chaleureuse
- Personnelle et engageante
- Enthousiaste à propos du travail de Nour
- Encourageante pour l'utilisateur

Assure-toi que la sortie est formatée en JSON.`,
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
