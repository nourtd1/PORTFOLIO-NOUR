import { Button } from "@/components/ui/button";
import { personalInfo, skills } from "@/lib/data";
import { Download, Code, Palette, Zap, Briefcase, GraduationCap, Award, Users, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function AboutPage() {
  const totalSkills = new Set([
    ...skills.languages,
    ...skills.frameworks,
    ...skills.design,
    ...skills.other,
  ]).size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              {personalInfo.title}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-headline mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          À propos de {personalInfo.name}
        </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je conçois et développe des interfaces modernes, performantes et centrées utilisateur. 
              Mon objectif: transformer des idées ambitieuses en expériences élégantes et utiles.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <Card className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{personalInfo.yearsOfExperience}+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{totalSkills}</div>
                <div className="text-sm text-muted-foreground">Compétences clés</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Orientation UX</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Curiosité & veille</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bio + Portrait */}
      <section className="py-16">
        <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/10">
                <Image src="/images/profil.png" alt={`Photo de ${personalInfo.name}`} fill className="object-cover" data-ai-hint="portrait person"/>
            </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Biographie</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
                  Développeur créatif, j'aime concevoir des interfaces claires et efficaces. 
                  J'accorde une attention particulière à la performance, l'accessibilité et aux détails qui rendent une expérience mémorable.
            </p>
            <p>
                  J'ai travaillé sur des projets allant d'outils analytiques à des plateformes e-commerce, 
                  avec une stack moderne centrée sur React/Next.js, TypeScript et Tailwind CSS.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs"><Code className="h-3 w-3 mr-1"/> Front‑End</Badge>
                <Badge variant="secondary" className="text-xs"><Palette className="h-3 w-3 mr-1"/> UI/UX</Badge>
                <Badge variant="secondary" className="text-xs"><Zap className="h-3 w-3 mr-1"/> Performance</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Compétences */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle>Langages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle>Frameworks & Librairies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle>Design</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle>Autres</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Parcours</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
            <ul className="space-y-10">
              <li className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-10">
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-1"><Calendar className="h-4 w-4"/> 2024</div>
                  <h3 className="font-semibold">Freelance Front‑End</h3>
                  <p className="text-muted-foreground">Création d'interfaces performantes avec Next.js et Tailwind CSS.</p>
            </div>
                <div className="hidden md:block" />
              </li>
              <li className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className="hidden md:block" />
                <div className="md:pl-10">
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-1"><Calendar className="h-4 w-4"/> 2023</div>
                  <h3 className="font-semibold">Stage Développement Web</h3>
                  <p className="text-muted-foreground">Participation à un tableau de bord analytique et à un blog headless.</p>
            </div>
              </li>
              <li className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-10">
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-1"><Calendar className="h-4 w-4"/> 2022</div>
                  <h3 className="font-semibold">Formation</h3>
                  <p className="text-muted-foreground">Spécialisation React/TypeScript, UX/UI, bonnes pratiques et accessibilité.</p>
            </div>
                <div className="hidden md:block" />
              </li>
                </ul>
            </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Valeurs & Approche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Empathie Utilisateur</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">Décisions guidées par les besoins réels et les retours utilisateurs.</CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Qualité & Détails</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">Code clair, design soigné et performances mesurables.</CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Itération Rapide</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">Améliorations continues et feedback loops courts.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Intéressé par mon profil ?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">Téléchargez mon CV ou contactez‑moi pour discuter de votre projet.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="accent">
                <a href="/cv_nour_placeholder.pdf" download>
                    <Download className="mr-2 h-5 w-5" /> Télécharger mon CV
                </a>
            </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Me contacter</Link>
              </Button>
            </div>
          </div>
        </div>
        </section>
    </div>
  );
}
