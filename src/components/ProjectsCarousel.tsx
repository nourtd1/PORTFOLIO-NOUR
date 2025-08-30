"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/types";

type ProjectsCarouselProps = {
  projects: Project[];
};

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {projects.map((project) => (
            <div key={project.slug} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
        <div className="pointer-events-auto pl-2">
          <Button variant="secondary" size="icon" onClick={scrollPrev} aria-label="Précédent">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>
        <div className="pointer-events-auto pr-2">
          <Button variant="secondary" size="icon" onClick={scrollNext} aria-label="Suivant">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}


