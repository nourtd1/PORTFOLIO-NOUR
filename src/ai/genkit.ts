import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI({
    apiKey: process.env.GEMINI_API_KEY || 'AIzaSyBD9skP2K1ueV_3mVZKYKlvD7o-1WqY8ek',
  })],
  model: 'googleai/gemini-2.0-flash',
});
