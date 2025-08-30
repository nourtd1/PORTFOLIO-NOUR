
"use client";

import { useState, useMemo } from 'react';
import { ProjectCard } from "@/components/ProjectCard";
import { projects, skills, personalInfo } from "@/lib/data";
import { LayoutPersonalizer } from '@/components/LayoutPersonalizer';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
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
import { ProjectFilters } from '@/components/ProjectFilters';

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

  // Statistiques calculées
  const stats = useMemo(() => {
    const totalProjects = projects.length;
    const totalTechnologies = new Set(projects.flatMap(p => p.technologies)).size;
    const completedProjects = projects.filter(p => p.liveUrl !== '#').length;
    const avgTechnologiesPerProject = Math.round(projects.reduce((acc, p) => acc + p.technologies.length, 0) / totalProjects);

    return { totalProjects, totalTechnologies, completedProjects, avgTechnologiesPerProject };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Code className="h-4 w-4" />
              Portfolio de {personalInfo.yearsOfExperience}+ années d'expérience
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-headline mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mes Projets
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez une collection de projets qui démontrent ma passion pour l'innovation, 
              la performance et l'expérience utilisateur. Chaque projet raconte une histoire 
              de défi, de solution créative et de résultats concrets.
            </p>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stats.totalProjects}</div>
                <div className="text-sm text-muted-foreground">Projets Réalisés</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stats.totalTechnologies}</div>
                <div className="text-sm text-muted-foreground">Technologies Maîtrisées</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stats.completedProjects}</div>
                <div className="text-sm text-muted-foreground">Projets Livrés</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stats.avgTechnologiesPerProject}</div>
                <div className="text-sm text-muted-foreground">Techs/Projet</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Expertise Technique</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une maîtrise approfondie des technologies modernes pour créer des solutions innovantes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <div className="absolute inset-0 -z-10">
                <Image src="/images/projects/dashboard-analytics.jpg" alt="Background développement" fill className="object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/50" />
              </div>
              <CardHeader className="text-center relative">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Développement</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <div className="absolute inset-0 -z-10">
                <Image src="/images/projects/ecommerce-platform.jpg" alt="Background frameworks" fill className="object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/50" />
              </div>
              <CardHeader className="text-center relative">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <div className="absolute inset-0 -z-10">
                <Image src="/images/blog/ux-design.jpg" alt="Background design" fill className="object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/50" />
              </div>
              <CardHeader className="text-center relative">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Design & UX</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Projets Récents</h2>
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
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-1/3 aspect-[3/2] relative overflow-hidden rounded-lg shrink-0">
                    <Image
                      src={project.imageUrl}
                      alt={`Image du projet ${project.title}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                  <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="font-headline text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
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

      {/* Section Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
              Prêt à collaborer sur votre prochain projet ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Que vous ayez une idée innovante ou un projet existant à améliorer, 
              je suis là pour transformer votre vision en réalité. 
              Discutons de vos besoins et créons quelque chose d'extraordinaire ensemble.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Users className="mr-2 h-5 w-5" />
                  Démarrer un projet
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/a-propos">
                  <Eye className="mr-2 h-5 w-5" />
                  En savoir plus sur moi
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
