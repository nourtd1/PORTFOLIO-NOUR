import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { personalInfo, projects, posts, skills, testimonials, socialLinks } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, MapPin } from "lucide-react";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Développeur Front-End – Nour | Expériences web fluides",
  description: "Portfolio de Nour, développeur front-end. Projets, blog et prestations.",
  openGraph: {
    title: "Nour – Développeur Front-End",
    description: "Création d'expériences web fluides et mémorables.",
    url: "https://example.com",
    siteName: "Nour'dev",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Nour – Développeur Front-End",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const trustedByLogos = [
  { name: "TechInnovate" },
  { name: "Creativio" },
  { name: "Spark Agency" },
  { name: "QuantumLeap" },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 2);
  const heroTitle = "Je conçois des expériences web fluides et mémorables.";
  const heroSubtitle = personalInfo.title;
  const stats = [
    { label: "Projets", value: projects.length },
    { label: "Années d'expérience", value: Number(personalInfo.yearsOfExperience) },
    { label: "Clients satisfaits", value: testimonials.length },
  ];
  const siteUrl = "https://example.com";

  return (
    <div className="container mx-auto px-4">
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
      {/* Section 1: Hero */}
      <section id="hero" className="relative min-h-[80vh] flex flex-col justify-center items-center text-center py-16 md:py-20">
        {/* Decorative background (valid arbitrary value) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-gradient-to-tr from-primary/20 via-accent/20 to-transparent blur-3xl" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            {personalInfo.name} // Développeur Front-End
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-6 max-w-4xl tracking-tight leading-tight">
             {heroTitle}
          </h1>
          {/* Location */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-sm backdrop-blur">
            <MapPin className="h-4 w-4 text-primary" />
            Rwanda • Gisenyi
          </div>
          {/* Availability badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-sm backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Disponible pour de nouveaux projets
          </div>
          <p className="max-w-2xl text-muted-foreground mb-6 text-lg">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button asChild size="lg" className="group">
              <Link href="/projets">
                Découvrir mes projets
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Me contacter</Link>
            </Button>
          </div>
          {/* Quick social actions */}
          <div className="mt-5 flex items-center gap-3">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
              <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="Contact">
              <Link href={`mailto:${socialLinks.email}`}>
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          {/* Key stack badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
            {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full border bg-background/70 backdrop-blur">
                {chip}
              </span>
            ))}
          </div>
          {/* Scroll cue */}
          <div className="mt-10">
            <Link href="#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              Faire défiler
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1.5: Stats strip */}
      <section aria-label="Statistiques" className="my-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-xl border bg-card text-card-foreground p-6 text-center">
              <div className="text-4xl font-bold">{item.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1.8: Skills marquee */}
      <section aria-label="Compétences" className="py-8 border-y">
        <div className="overflow-hidden">
          <div className="skills-marquee flex items-center gap-6">
            {[...skills.languages, ...skills.frameworks, ...skills.design, ...skills.other, ...skills.languages, ...skills.frameworks, ...skills.design, ...skills.other].map((skill, idx) => (
              <span key={`${skill}-${idx}`} className="px-4 py-2 rounded-full border bg-background/60 backdrop-blur text-sm whitespace-nowrap">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Preuve Sociale */}
      <section id="social-proof" className="py-12 border-y">
        <div className="text-center">
          <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-8">Collaborations</h3>
          <div className="flex justify-center items-center gap-x-12 md:gap-x-16 flex-wrap">
            {trustedByLogos.map((logo) => (
              <span key={logo.name} className="text-xl font-semibold text-muted-foreground/80 hover:text-foreground transition-colors duration-300 opacity-80 hover:opacity-100 hover:scale-105 inline-block">
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Projets Phares */}
      <section id="projects" className="py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">
          Projets Phares
        </h2>
        <div className="max-w-6xl mx-auto">
          <ProjectsCarousel projects={featuredProjects} />
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/projets">
              Voir tous les projets 
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Section 4: Témoignages */}
      <TestimonialsSection />
      
      {/* Section 5: Articles Récents */}
      <section id="latest-posts" className="py-16 md:py-20 border-t">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">
          Derniers Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {latestPosts.map((post) => (
             <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
               <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                  <CardHeader>
                      <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      <CardDescription className="text-accent">{format(new Date(post.date), "d MMMM yyyy", { locale: fr })}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                  </CardContent>
               </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/blog">
              Visiter le blog 
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
