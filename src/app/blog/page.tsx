"use client";

import { useState, useMemo } from 'react';
import Link from "next/link";
import { posts } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  BookOpen, 
  TrendingUp, 
  Filter,
  Search,
  Tag,
  Users,
  Eye,
  MessageSquare,
  Share2,
  ExternalLink,
  PenTool,
  Code,
  Palette
} from "lucide-react";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Image from "next/image";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'title'>('recent');
  const [searchQuery, setSearchQuery] = useState('');

  // Calcul des statistiques du blog
  const blogStats = useMemo(() => {
    const totalPosts = posts.length;
    const totalTags = new Set(posts.flatMap(p => p.tags)).size;
    const avgWordsPerPost = Math.round(posts.reduce((acc, p) => acc + p.content.split(' ').length, 0) / totalPosts);
    const latestPost = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

    return { totalPosts, totalTags, avgWordsPerPost, latestPost };
  }, []);

  // Toutes les catégories disponibles
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    posts.forEach(post => {
      post.tags.forEach(tag => categories.add(tag));
    });
    return ['Tous', ...Array.from(categories).sort()];
  }, []);

  // Filtrage et tri des articles
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts;

    // Filtrage par catégorie
    if (activeCategory !== 'Tous') {
      filtered = filtered.filter(post => post.tags.includes(activeCategory));
    }

    // Filtrage par recherche
    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Tri des articles
    switch (sortBy) {
      case 'title':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case 'popular':
        // Simulation de popularité basée sur la longueur du contenu
        return filtered.sort((a, b) => b.content.length - a.content.length);
      case 'recent':
      default:
        return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }, [activeCategory, sortBy, searchQuery]);

  // Articles mis en avant (les 3 plus récents)
  const featuredPosts = useMemo(() => {
    return posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              {blogStats.totalPosts} articles publiés
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-headline mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Partagez mes connaissances, expériences et réflexions sur le développement web, 
              le design UX/UI et les dernières tendances technologiques. 
              Chaque article est écrit pour inspirer et éduquer.
            </p>
          </div>

          {/* Statistiques du blog */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{blogStats.totalPosts}</div>
                <div className="text-sm text-muted-foreground">Articles Publiés</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{blogStats.totalTags}</div>
                <div className="text-sm text-muted-foreground">Catégories</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{blogStats.avgWordsPerPost}</div>
                <div className="text-sm text-muted-foreground">Mots/Article</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Année Active</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Articles en Vedette */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Articles en Vedette</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mes articles les plus récents et populaires
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/50 backdrop-blur-sm overflow-hidden">
                  {post.imageUrl && (
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={post.imageUrl}
                        alt={`Image de l'article ${post.title}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={post.imageHint}
                      />
                      {index === 0 && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Populaire
                          </Badge>
                        </div>
                      )}
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}
                    </div>
                    <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center text-sm font-semibold text-primary">
                      Lire l'article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Tous les Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Tous les Articles</h2>
              <p className="text-lg text-muted-foreground">
                Explorez ma collection complète d'articles et tutoriels
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'recent' | 'popular' | 'title')}
                  className="bg-background border border-input rounded-md px-3 py-2 text-sm"
                >
                  <option value="recent">Plus récents</option>
                  <option value="popular">Plus populaires</option>
                  <option value="title">Ordre alphabétique</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-2 mb-8">
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="text-sm"
              >
                <Tag className="h-3 w-3 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* Grille des articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-white/50 backdrop-blur-sm">
                {post.imageUrl && (
                     <div className="aspect-[3/2] relative overflow-hidden">
                        <Image
                        src={post.imageUrl}
                        alt={`Image de l'article ${post.title}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={post.imageHint}
                        />
                    </div>
                )}
                <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}
                      <Separator orientation="vertical" className="h-4" />
                      <Clock className="h-4 w-4" />
                      {Math.ceil(post.content.split(' ').length / 200)} min
                    </div>
                    <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex items-center text-sm font-semibold text-primary">
                        Lire la suite
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </CardFooter>
             </Card>
          </Link>
        ))}
      </div>

          {filteredAndSortedPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">Aucun article trouvé</h3>
              <p className="text-muted-foreground mb-6">
                Essayez de modifier vos filtres ou votre recherche
              </p>
              <Button onClick={() => {
                setActiveCategory('Tous');
                setSearchQuery('');
              }}>
                Voir tous les articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Section Newsletter */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4" />
              Restez informé
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
              Ne manquez aucun article
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Recevez mes derniers articles directement dans votre boîte mail. 
              Pas de spam, juste du contenu de qualité sur le développement et le design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button size="lg">
                <Share2 className="mr-2 h-4 w-4" />
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Call-to-Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
              Envie de contribuer ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Vous avez une idée d'article ou souhaitez collaborer sur un sujet technique ? 
              N'hésitez pas à me contacter pour discuter de vos propositions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <PenTool className="mr-2 h-5 w-5" />
                  Proposer un article
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
