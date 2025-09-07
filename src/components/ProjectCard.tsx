import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group block aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <Link href={`/projets/${project.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Voir le cas d'étude de {project.title}</span>
      </Link>
      
      {!imageError ? (
        <Image
          src={project.imageUrl}
          alt={project.imageHint || `Image du projet ${project.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-2">📁</div>
            <div className="text-sm font-medium">{project.title}</div>
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
        <h3 className="font-headline text-2xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-white/80 mb-4">{project.role}</p>
        <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.slice(0,3).map(tech => <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>)}
        </div>
        {project.liveUrl && (
          <Button 
            asChild 
            size="sm" 
            variant="secondary" 
            className="w-fit bg-white/20 hover:bg-white/30 text-white border-white/30 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Voir le projet
            </a>
          </Button>
        )}
      </div>
      
      <div className="absolute top-0 inset-x-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-right">
         <Badge className="text-xs uppercase tracking-widest font-semibold bg-primary text-primary-foreground">Voir le cas d'étude</Badge>
      </div>
    </div>
  );
}
