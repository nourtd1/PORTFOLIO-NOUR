"use client";

import { useState, useMemo } from 'react';
import { ProjectCard } from "@/components/ProjectCard";
import { projects, skills, personalInfo } from "@/lib/data";
import { LayoutPersonalizer } from '@/components/LayoutPersonalizer';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowRight, 
  Code, 
  Palette, 
  Zap, 
  Users, 
  Star, 
  Calendar,
  ExternalLink,
  Github,
  Eye,
  Filter,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';

const ProjectFilters = dynamic(() => import('@/components/ProjectFilters').then(m => m.ProjectFilters), { ssr: false });

// Import des nouveaux composants
const ProjectsHeroSection = dynamic(() => import("@/components/ProjectsHeroSection"), { ssr: false, loading: () => null });
const ExpertiseSection = dynamic(() => import("@/components/ExpertiseSection"), { ssr: false, loading: () => null });
const ProjectsCTASection = dynamic(() => import("@/components/ProjectsCTASection"), { ssr: false, loading: () => null });

export default function ProjectsPage() {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [activeFilter, setActiveFilter] = useState<string>('Tous');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'name'>('recent');

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return ['Tous', ...Array.from(techSet).sort()];
  }, []);

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;
    
    if (activeFilter !== 'Tous') {
      filtered = projects.filter(project => project.technologies.includes(activeFilter));
    }

    // Tri des projets
    switch (sortBy) {
      case 'name':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case 'popular':
        // Simulation de popularité basée sur la complexité du projet
        return filtered.sort((a, b) => b.technologies.length - a.technologies.length);
      case 'recent':
      default:
        return filtered;
    }
  }, [activeFilter, sortBy]);

  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Section Moderne */}
      <ProjectsHeroSection />

      {/* Section 2: Expertise Technique */}
      <ExpertiseSection />

      {/* Section 3: Projets avec Filtres */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projets Récents
              </h2>
              <p className="text-lg text-muted-foreground">
                Une sélection de mes meilleurs travaux, du concept à la livraison
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <LayoutPersonalizer onLayoutChange={setLayout} />
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'recent' | 'popular' | 'name')}
                  aria-label="Trier les projets"
                  className="bg-background border border-input rounded-md px-3 py-1 text-sm"
                >
                  <option value="recent">Plus récents</option>
                  <option value="popular">Plus populaires</option>
                  <option value="name">Ordre alphabétique</option>
                </select>
              </div>
            </div>
          </div>

          <ProjectFilters 
            filters={allTechnologies}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div
            className={cn(
              "transition-all duration-500",
              layout === 'grid'
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-8"
            )}
          >
            {filteredAndSortedProjects.map((project) => (
              layout === 'grid' ? (
                <ProjectCard key={project.slug} project={project} />
              ) : (
                <Link href={`/projets/${project.slug}`} key={project.slug} className="group block">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/3 aspect-[3/2] relative overflow-hidden rounded-lg shrink-0">
                          <Image
                            src={project.imageUrl}
                            alt={`Image du projet ${project.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={project.imageHint}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-headline text-2xl font-bold mb-2 group-hover:text-primary transition-colors bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {project.title}
                              </h3>
                              <p className="text-muted-foreground mb-2">{project.role}</p>
                            </div>
                            <div className="flex gap-2">
                              {project.githubUrl && project.githubUrl !== '#' && (
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={project.githubUrl} target="_blank">
                                    <Github className="h-4 w-4" />
                                  </Link>
                                </Button>
                              )}
                              {project.liveUrl && project.liveUrl !== '#' && (
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={project.liveUrl} target="_blank">
                                    <ExternalLink className="h-4 w-4" />
                                  </Link>
                                </Button>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 line-clamp-2">{project.shortDescription}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center text-sm font-semibold text-primary group-hover:underline">
                            Voir le cas d'étude complet
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            ))}
          </div>

          {filteredAndSortedProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Aucun projet trouvé</h3>
              <p className="text-muted-foreground mb-6">
                Essayez de modifier vos filtres pour voir plus de projets
              </p>
              <Button onClick={() => setActiveFilter('Tous')}>
                Voir tous les projets
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Section 4: CTA Final Moderne */}
      <ProjectsCTASection />
    </div>
  );
}
