"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Code2, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Badge } from "./ui/badge";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Accueil", icon: "🏠" },
  { href: "/projets", label: "Projets", icon: "💼" },
  { href: "/blog", label: "Blog", icon: "📝" },
  { href: "/a-propos", label: "À propos", icon: "👨‍💻" },
  { href: "/contact", label: "Contact", icon: "📧" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b shadow-sm" 
        : "bg-background/80 backdrop-blur-sm"
    )}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Code2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold font-headline text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nour'dev
            </span>
            <div className="flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-accent" />
              <span className="text-xs text-muted-foreground">Développeur Créatif</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || 
              (link.href !== '/' && pathname.startsWith(link.href));
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-lg transition-all duration-200 group",
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                )}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                </div>
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
                <div className={cn(
                  "absolute inset-0 rounded-lg transition-opacity duration-200",
                  isActive ? "bg-primary/5" : "bg-transparent group-hover:bg-muted/30"
                )} />
              </Link>
            );
          })}
          
          <div className="ml-4 flex items-center gap-2">
            <Badge variant="secondary" className="text-xs px-2 py-1">
              <Sparkles className="h-3 w-3 mr-1" />
              Disponible
            </Badge>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <Badge variant="secondary" className="text-xs px-2 py-1">
            <Sparkles className="h-3 w-3 mr-1" />
            Disponible
          </Badge>
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="relative"
              >
                <Menu className="h-5 w-5 transition-transform duration-200" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-md">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Code2 className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold font-headline text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Nour'dev
                      </span>
                      <span className="text-xs text-muted-foreground">Développeur Créatif</span>
                    </div>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href || 
                      (link.href !== '/' && pathname.startsWith(link.href));
                    
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                          isActive 
                            ? "text-primary bg-primary/10 border-l-4 border-primary" 
                            : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                        )}
                      >
                        <span className="text-lg">{link.icon}</span>
                        <span className="font-medium">{link.label}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile Footer */}
                <div className="mt-auto pt-6 border-t">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Prêt à collaborer sur votre prochain projet ?
                    </p>
                    <Button 
                      asChild 
                      className="w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/contact">
                        Démarrer un projet
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
