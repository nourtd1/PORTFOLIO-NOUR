"use client";

import { ContactForm } from "@/components/ContactForm";
import { socialLinks, personalInfo } from "@/lib/data";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  Calendar,
  CheckCircle,
  Zap
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import des nouveaux composants
import ContactHeroSection from "@/components/ContactHeroSection";
import FAQSection from "@/components/FAQSection";
import ContactCTASection from "@/components/ContactCTASection";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Section Moderne */}
      <ContactHeroSection />

      {/* Section 2: Formulaire de Contact */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulaire de Contact */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Envoyez-moi un message
                </h2>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="secondary" className="px-3 py-1 text-xs">
                    <Clock className="h-3 w-3 mr-1" /> Réponse sous 24h
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-xs">
                    <Calendar className="h-3 w-3 mr-1" /> 7j/7
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1 text-xs">
                    <Mail className="h-3 w-3 mr-1" /> Priorité aux demandes détaillées
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground">
                  Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
                </p>
              </div>

              {/* Form wrapper | glassmorphism */}
              <Card className="border-white/20 dark:border-slate-700/50 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-4">
                    Astuce: donnez un maximum de contexte (objectifs, public cible, délais) pour accélérer l'estimation.
                  </div>
                  <ContactForm />
                  <div className="mt-3 text-xs text-muted-foreground">
                    En soumettant ce formulaire, vous acceptez d’être contacté par email. Aucune donnée n’est partagée à des tiers.
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Informations de Contact */}
            <div className="space-y-8">
              {/* Contact Direct */}
              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Contact Direct
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <a href={`mailto:${socialLinks.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {socialLinks.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                      <div className="font-medium">Téléphone</div>
                      <a href={`tel:${socialLinks.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {socialLinks.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                      <div className="font-medium">Localisation</div>
                      <div className="text-muted-foreground">Rwanda (Gisenyi)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                      <div className="font-medium">Disponibilité</div>
                      <div className="text-muted-foreground">Lun-Ven, 9h-18h</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Réseaux Sociaux */}
              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Réseaux Sociaux
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <Link 
                      href={socialLinks.github} 
                      target="_blank" 
                      aria-label="GitHub"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-xs font-medium">GitHub</span>
                    </Link>
                    
                    <Link 
                      href={socialLinks.linkedin} 
                      target="_blank" 
                      aria-label="LinkedIn"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-xs font-medium">LinkedIn</span>
                    </Link>
                    {socialLinks.youtube && (
                      <Link 
                        href={socialLinks.youtube}
                        target="_blank" 
                        aria-label="YouTube"
                        className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <svg viewBox="0 0 24 24" className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.7 2.5 12 2.5 12 2.5h0s-4.7 0-8.2.4c-.5.1-1.5.1-2.4 1C.7 4.6.5 6.2.5 6.2S.3 8.1.3 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2.1.9 2.7 1 1.9.2 8 .4 8 .4s4.7 0 8.2-.4c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8ZM9.8 13.9V7.9l6.4 3-6.4 3Z"/></svg>
                        </div>
                        <span className="text-xs font-medium">YouTube</span>
                      </Link>
                    )}
                    {socialLinks.instagram && (
                      <Link 
                        href={socialLinks.instagram}
                        target="_blank" 
                        aria-label="Instagram"
                        className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <svg viewBox="0 0 24 24" className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5m0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5M18 6.5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 18 6.5Z"/></svg>
                        </div>
                        <span className="text-xs font-medium">Instagram</span>
                      </Link>
                    )}
                    {socialLinks.tiktok && (
                      <Link 
                        href={socialLinks.tiktok}
                        target="_blank" 
                        aria-label="TikTok"
                        className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <svg viewBox="0 0 24 24" className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true"><path fill="currentColor" d="M12.7 2h3.1c.3 2.1 1.8 3.8 3.9 4.1v3.1c-1.4 0-2.8-.5-3.9-1.3v6.8c0 4-3.4 7.2-7.5 6.3-2.5-.5-4.5-2.5-5-5-.9-4.1 2.3-7.5 6.3-7.5.4 0 .8 0 1.1.1V11c-.4-.1-.7-.1-1.1-.1-2.3 0-4.1 1.9-4.1 4.2s1.9 4.1 4.2 4.1c2.2 0 4.1-1.8 4.1-4V2Z"/></svg>
                        </div>
                        <span className="text-xs font-medium">TikTok</span>
                      </Link>
                    )}
                    {socialLinks.facebook && (
                    <Link 
                        href={socialLinks.facebook}
                      target="_blank" 
                        aria-label="Facebook"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <svg viewBox="0 0 24 24" className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true"><path fill="currentColor" d="M13 3h4V0h-4a5 5 0 0 0-5 5v3H5v4h3v12h4V12h3.1l.9-4H12V5a2 2 0 0 1 2-2Z"/></svg>
                      </div>
                        <span className="text-xs font-medium">Facebook</span>
                    </Link>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Types de Projets */}
              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Types de Projets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Sites Web</Badge>
                    <Badge variant="secondary" className="text-xs">Applications</Badge>
                    <Badge variant="secondary" className="text-xs">E-commerce</Badge>
                    <Badge variant="secondary" className="text-xs">Dashboards</Badge>
                    <Badge variant="secondary" className="text-xs">UI/UX Design</Badge>
                    <Badge variant="secondary" className="text-xs">Consulting</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: FAQ */}
      <FAQSection />

      {/* Section 4: CTA Final Moderne */}
      <ContactCTASection />
    </div>
  );
}
