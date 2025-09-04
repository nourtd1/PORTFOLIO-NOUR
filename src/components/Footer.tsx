"use client";

import Link from "next/link";
import { useState } from "react";
import { socialLinks } from "@/lib/data";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Code2, Github, Linkedin, Mail, MapPin, Send, Palette, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Adresse email invalide",
        description: "Veuillez saisir une adresse email valide.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Merci de votre intérêt !",
      description: "Vous êtes bien inscrit à la newsletter.",
    });
    setEmail("");
  }

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4">
        <div className="py-12 md:py-16 grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand / About */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold font-headline text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {socialLinks.name}
                </span>
                <span className="text-xs text-muted-foreground">Développeur Créatif</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Je conçois et développe des expériences web modernes, performantes et centrées sur l’utilisateur. Travaillons ensemble pour donner vie à vos idées.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link href={socialLinks.github} target="_blank" aria-label="GitHub" className="inline-flex">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              <Link href={socialLinks.linkedin} target="_blank" aria-label="LinkedIn" className="inline-flex">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
              {socialLinks.youtube && (
                <Link href={socialLinks.youtube} target="_blank" aria-label="YouTube" className="inline-flex">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.7 2.5 12 2.5 12 2.5h0s-4.7 0-8.2.4c-.5.1-1.5.1-2.4 1C.7 4.6.5 6.2.5 6.2S.3 8.1.3 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2.1.9 2.7 1 1.9.2 8 .4 8 .4s4.7 0 8.2-.4c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8ZM9.8 13.9V7.9l6.4 3-6.4 3Z"/></svg>
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-foreground mb-4">Ressources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Articles & Guides
                </Link>
              </li>
              <li>
                <Link href="/projets" className="text-muted-foreground hover:text-foreground transition-colors">
                  Études de cas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Devis & Collaboration
                </Link>
              </li>
              <li>
                <a href={`mailto:${socialLinks.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {socialLinks.email}
                </a>
              </li>
              <li>
                <a href={`tel:${socialLinks.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {socialLinks.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Recevez des insights design & front-end, pas de spam.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
              />
              <Button type="submit" className="shrink-0">
                <Send className="w-4 h-4 mr-2" />
                S'inscrire
              </Button>
            </form>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Mail className="w-3 h-3" />
              <span>Un clic pour se désabonner à tout moment</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-sm text-muted-foreground">
            © {new Date().getFullYear()} {socialLinks.name}. Tous droits réservés.
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Rwanda • Gisenyi</span>
            </div>
            <Link href="/confidentialite" className="hover:text-foreground transition-colors">Confidentialité</Link>
            <Link href="/mentions-legales" className="transition-colors">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 hover:bg-accent hover:text-accent-foreground">
                <FileText className="w-3.5 h-3.5" />
                Mentions légales
              </span>
            </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
