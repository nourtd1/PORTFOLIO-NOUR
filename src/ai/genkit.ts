import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

if (!process.env.GEMINI_API_KEY) {
  throw new Error(
    'GEMINI_API_KEY is not defined. Please add it to your .env.local file.\n' +
    'Get your API key from: https://aistudio.google.com/app/apikey'
  );
}

export const ai = genkit({
  plugins: [googleAI({
    apiKey: process.env.GEMINI_API_KEY,
  })],
  model: 'googleai/gemini-2.0-flash',
});
