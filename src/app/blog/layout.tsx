import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Web, Mobile & Cloud | Nour",
  description: "Articles sur le développement web, mobile, ASP.NET, React Native, Express/Supabase et UX.",
  openGraph: {
    title: "Blog – Web, Mobile & Cloud | Nour",
    description: "Tutos, idées et retours d'expérience.",
    images: [{ url: "/og-blog.jpg", width: 1200, height: 630, alt: "Blog de Nour" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}


