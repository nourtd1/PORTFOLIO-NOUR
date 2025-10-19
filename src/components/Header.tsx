"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Code2, Sparkles, X, Circle, Zap, ChevronDown, ArrowRight, Home, Briefcase, Settings, FileText, User, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Badge } from "./ui/badge";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion";

const navLinks = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/projets", label: "Projets", icon: Briefcase },
  { href: "/services", label: "Services", icon: Settings },
  { href: "/blog", label: "Blog", icon: FileText },
  { href: "/a-propos", label: "À propos", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLElement>(null);

  // Handle scroll effect with smooth transitions
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Mouse tracking for advanced hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (headerRef.current) {
      headerRef.current.addEventListener('mousemove', handleMouseMove);
      return () => {
        if (headerRef.current) {
          headerRef.current.removeEventListener('mousemove', handleMouseMove);
        }
      };
    }
  }, []);

  // Prefetch key routes for performance
  useEffect(() => {
    const routesToPrefetch = navLinks.map((l) => l.href);
    routesToPrefetch.forEach((route) => {
      try {
        router.prefetch(route);
      } catch {}
    });
  }, [router]);

  return (
    <motion.header 
      ref={headerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out",
        isScrolled 
          ? "bg-background/90 backdrop-blur-3xl border-b border-border/20 shadow-lg shadow-black/5" 
          : "bg-background/70 backdrop-blur-xl"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      {/* Dynamic gradient background that follows mouse */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary), 0.1), transparent 40%)`
        }}
      />
      
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8 relative z-10">
        {/* Modern Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative"
        >
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl p-1 -m-1"
          >
            <div className="relative">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </motion.div>
              
              {/* Floating sparkle */}
              <motion.div 
                className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full shadow-lg"
                animate={{ 
                  y: [0, -4, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: easeInOut
                }}
              />
            </div>
            
            <div className="flex flex-col">
              <motion.span 
                className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                whileHover={{ 
                  backgroundPosition: "200% center",
                  transition: { duration: 0.6 }
                }}
                style={{
                  backgroundSize: "200% auto",
                  backgroundImage: "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))"
                }}
              >
                Nour'dev
              </motion.span>
              <span className="text-xs text-muted-foreground font-medium">Développeur Créatif</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((link, index) => {
            const IconComponent = link.icon;
            const isActive = pathname === link.href || 
              (link.href !== '/' && pathname.startsWith(link.href));
            
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onHoverStart={() => setHoveredLink(link.href)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2.5 rounded-xl transition-all duration-300 group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                    isActive 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-2.5 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconComponent className="h-4 w-4" />
                    </motion.div>
                    <span className="font-medium text-sm">{link.label}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Hover background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  />
                  
                  {/* Shimmer effect on hover */}
                  {hoveredLink === link.href && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
          
          {/* Action buttons */}
          <div className="ml-6 flex items-center gap-3">
            {/* Status Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge 
                variant="secondary" 
                className={cn(
                  "text-xs px-3 py-1.5 rounded-full border-0 cursor-pointer transition-all duration-300",
                  isAvailable 
                    ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20" 
                    : "bg-red-500/10 text-red-600 hover:bg-red-500/20"
                )}
                onClick={() => setIsAvailable(!isAvailable)}
              >
                <motion.div
                  className="flex items-center gap-1.5"
                  animate={isAvailable ? { x: [0, 1, 0] } : {}}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <Circle className={cn(
                    "h-2 w-2",
                    isAvailable ? "text-emerald-500" : "text-red-500"
                  )} />
                  <span className="font-medium">
                    {isAvailable ? "Disponible" : "Indisponible"}
                  </span>
                </motion.div>
              </Badge>
            </motion.div>
            
            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <span className="font-medium">Collaborer</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile Status Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge 
              variant="secondary" 
              className={cn(
                "text-xs px-2 py-1 rounded-full border-0",
                isAvailable 
                  ? "bg-emerald-500/10 text-emerald-600" 
                  : "bg-red-500/10 text-red-600"
              )}
            >
              <Circle className={cn(
                "h-1.5 w-1.5 mr-1",
                isAvailable ? "text-emerald-500" : "text-red-500"
              )} />
              {isAvailable ? "Dispo" : "Indispo"}
            </Badge>
          </motion.div>
          
          {/* Mobile Theme Toggle */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ThemeToggle />
          </motion.div>
          
          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="w-10 h-10 rounded-xl hover:bg-muted/50 transition-all duration-300"
                >
                  <motion.div
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    className="flex flex-col items-center justify-center w-5 h-5"
                  >
                    <motion.span
                      className="w-5 h-0.5 bg-foreground rounded-full"
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: 45, y: 6 }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="w-5 h-0.5 bg-foreground rounded-full mt-1"
                      variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="w-5 h-0.5 bg-foreground rounded-full mt-1"
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: -45, y: -6 }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <span className="sr-only">Menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            
            <SheetContent 
              side="right" 
              className="w-80 bg-background/95 backdrop-blur-2xl border-l border-border/20 p-0"
            >
              <motion.div 
                className="flex flex-col h-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-border/20">
                  <Link 
                    href="/" 
                    className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl p-1 -m-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                      <Code2 className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Nour'dev
                      </span>
                      <span className="text-xs text-muted-foreground">Développeur Créatif</span>
                    </div>
                  </Link>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-xl hover:bg-muted/50"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-1 p-4 flex-1">
                  {navLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    const isActive = pathname === link.href || 
                      (link.href !== '/' && pathname.startsWith(link.href));
                    
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                            isActive 
                              ? "text-primary bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary font-medium" 
                              : "text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5"
                          )}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <IconComponent className="h-4 w-4" />
                          </motion.div>
                          <span className="font-medium">{link.label}</span>
                          
                          {isActive && (
                            <motion.div 
                              className="absolute right-4 w-2 h-2 bg-primary rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile Footer */}
                <motion.div 
                  className="p-6 border-t border-border/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Prêt à collaborer sur votre prochain projet ?
                    </p>
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        <Zap className="h-4 w-4" />
                        Démarrer un projet
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}