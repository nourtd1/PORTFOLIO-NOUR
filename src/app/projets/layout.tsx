import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets – Web, Mobile & Cloud | Nour",
  description: "Mes projets en React Native, ASP.NET, Express/Supabase et intégrations front‑end.",
  openGraph: {
    title: "Projets – Web, Mobile & Cloud | Nour",
    description: "Études de cas et démonstrations techniques.",
    images: [{ url: "/og-projects.jpg", width: 1200, height: 630, alt: "Projets de Nour" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}


