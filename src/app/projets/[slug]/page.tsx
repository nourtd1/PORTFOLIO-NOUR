import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Projet non trouvé",
      description: "Le projet que vous cherchez n'existe pas.",
    };
  }

  return {
    title: `${project.title} | Projets`,
    description: project.metaDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: `Image du projet ${project.title}`,
        },
      ],
      type: 'article',
      url: `/projets/${project.slug}`,
    },
     twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.shortDescription,
      images: [project.imageUrl],
    },
  };
}

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }
  
  const currentIndex = projects.findIndex(p => p.slug === params.slug);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <article>
        <header className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <div className="text-lg text-muted-foreground">
            <p><span className="font-semibold">Mon Rôle :</span> {project.role}</p>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: project.title,
                description: project.metaDescription || project.shortDescription,
                url: `/projets/${project.slug}`,
                author: {
                  "@type": "Person",
                  name: "Nour",
                },
                image: [project.imageUrl],
              }),
            }}
          />
        </header>

        <div className="relative aspect-[16/8] w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg mb-16">
          <Image
            src={project.imageUrl}
            alt={`Image principale du projet ${project.title}`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
            data-ai-hint={project.imageHint}
          />
        </div>
        
        <div className="max-w-3xl mx-auto space-y-12">
            <div className="flex justify-center gap-4">
                {project.githubUrl && (
                    <Button asChild variant="secondary">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Voir le code
                        </a>
                    </Button>
                )}
                {project.liveUrl && (
                    <Button asChild>
                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Voir le site
                        </a>
                    </Button>
                )}
            </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b pb-2">Le Défi</h2>
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b pb-2">Ma Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </section>
          
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 border-b pb-2">Les Résultats</h2>
            <p className="text-muted-foreground leading-relaxed">{project.results}</p>
          </section>
        </div>
      </article>

      <nav className="mt-16 md:mt-24 pt-8 border-t">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
            {previousProject ? (
                <Link href={`/projets/${previousProject.slug}`} className="text-left group">
                    <span className="text-sm text-muted-foreground">Projet Précédent</span>
                    <div className="flex items-center font-semibold text-primary">
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        {previousProject.title}
                    </div>
                </Link>
            ) : <div />}
            {nextProject && (
                 <Link href={`/projets/${nextProject.slug}`} className="text-right group">
                    <span className="text-sm text-muted-foreground">Projet Suivant</span>
                    <div className="flex items-center font-semibold text-primary">
                        {nextProject.title}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </Link>
            )}
        </div>
      </nav>
    </div>
  );
}
