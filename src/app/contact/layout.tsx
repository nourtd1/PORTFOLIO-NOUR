import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Collaborons sur votre projet | Nour",
  description: "Discutons de vos besoins web, mobile ou cloud. Réponse sous 24h.",
  openGraph: {
    title: "Contact – Collaborons sur votre projet | Nour",
    description: "Démarrons votre projet: web, mobile, ASP.NET, React Native, Express/Supabase.",
    images: [{ url: "/og-contact.jpg", width: 1200, height: 630, alt: "Contact Nour" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}


