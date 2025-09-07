import dynamic from "next/dynamic";
import { ProjectCard } from "@/components/ProjectCard";
const ProjectsCarousel = dynamic(() => import("@/components/ProjectsCarousel").then(m => m.ProjectsCarousel), { loading: () => null });
import { personalInfo, projects, posts, skills, testimonials, socialLinks } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection").then(m => m.TestimonialsSection), { loading: () => null });
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

// Import des nouveaux composants
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SocialProofSection from "@/components/SocialProofSection";
import FinalCTASection from "@/components/FinalCTASection";
import { ContextualWelcome } from "@/components/ContextualWelcome";

export const metadata: Metadata = {
  title: "Nour – Web, Mobile & Cloud | Étudiant en Software Engineering",
  description: "Étudiant en Software Engineering (3e année). Développement web, mobile & cloud. Projets React Native, ASP.NET, Express/Supabase.",
  openGraph: {
    title: "Nour – Web, Mobile & Cloud",
    description: "Création de solutions utiles, accessibles et performantes.",
    url: "https://example.com",
    siteName: "Nour'dev",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Nour – Web, Mobile & Cloud",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 2);
  const siteUrl = "https://example.com";

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: personalInfo.name,
            jobTitle: "Développeur Front-End",
            url: siteUrl,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Gisenyi",
              addressCountry: "Rwanda",
            },
            sameAs: [
              socialLinks.linkedin,
              socialLinks.github,
              "https://www.behance.net/"
            ]
          })
        }}
      />

      {/* Section 1: Hero Section Moderne */}
      <HeroSection />

      {/* Message d'accueil contextuel */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <ContextualWelcome className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Section 2: Statistiques avec Animations */}
      <StatsSection />

      {/* Section 3: Preuve Sociale */}
      <SocialProofSection />

      {/* Section 4: Projets Phares */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projets Phares
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations les plus significatives, 
              témoignant de mon expertise technique et de ma créativité.
            </p>
          </div>

        <div className="max-w-6xl mx-auto">
          <ProjectsCarousel projects={featuredProjects} />
        </div>
          
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="secondary" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-semibold">
            <Link href="/projets">
              Voir tous les projets 
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          </div>
        </div>
      </section>

      {/* Section 5: Témoignages */}
      <TestimonialsSection />
      
      {/* Section 6: Articles Récents */}
      <section id="latest-posts" className="py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Derniers Articles
        </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partagez mes réflexions sur le développement web, les nouvelles technologies 
              et les bonnes pratiques du métier.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {latestPosts.map((post) => (
             <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                 <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border-white/20 dark:border-slate-700/50 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
                  <CardHeader>
                        <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-accent">
                          {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}
                        </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                  </CardContent>
               </Card>
            </Link>
          ))}
        </div>
          
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="secondary" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-semibold">
            <Link href="/blog">
              Visiter le blog 
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Final Moderne */}
      <FinalCTASection />
    </div>
  );
}
