"use server";

import { personalizeLayout } from "@/ai/flows/personalize-layout";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
}) {
  const parsedData = contactFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: "Données invalides." };
  }

  // In a real app, you'd send an email, save to a DB, etc.
  console.log("Contact form submitted:", parsedData.data);

  // Simulate success
  return { success: true, message: "Merci! Votre message a été envoyé." };
}


export async function personalizeLayoutOnServer(
  userBehaviorData: string,
  availableLayouts: string
) {
  try {
    // Debug: Log des variables d'environnement
    console.log('🔍 Debug - Variables d\'environnement:');
    console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'DÉFINIE' : 'NON DÉFINIE');
    console.log('Toutes les clés env:', Object.keys(process.env).filter(key => key.includes('GEMINI')));
    
    // Solution temporaire: utiliser directement la clé API
    const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyBD9skP2K1ueV_3mVZKYKlvD7o-1WqY8ek';
    console.log('🔑 API Key utilisée:', apiKey ? 'DÉFINIE' : 'NON DÉFINIE');
    
    if (!apiKey) {
      return {
        recommendedLayout: "grid",
        reasoning:
          "La personnalisation IA est désactivée: clé API manquante. Ajoutez GEMINI_API_KEY dans votre fichier .env.local.",
      };
    }
    const result = await personalizeLayout({
      userBehaviorData,
      availableLayouts,
    });
    return result;
  } catch (error) {
    console.error("Error in personalizeLayoutOnServer:", error);
    // Return a default/fallback layout in case of an AI error
    return {
      recommendedLayout: "grid",
      reasoning:
        "Une erreur est survenue lors de la personnalisation. Grille par défaut utilisée.",
    };
  }
}
