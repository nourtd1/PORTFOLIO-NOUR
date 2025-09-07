"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Code2, Sparkles, X, Circle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Badge } from "./ui/badge";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion";

const navLinks = [
  { href: "/", label: "Accueil", icon: "🏠" },
  { href: "/projets", label: "Projets", icon: "💼" },
  { href: "/services", label: "Services", icon: "🛠️" },
  { href: "/blog", label: "Blog", icon: "📝" },
  { href: "/a-propos", label: "À propos", icon: "👨‍💻" },
  { href: "/contact", label: "Contact", icon: "📧" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prefetch key routes to speed up navigation
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
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-700 ease-out",
      isScrolled 
          ? "bg-background/85 backdrop-blur-2xl border-b border-border/30 shadow-2xl shadow-black/10" 
          : "bg-background/60 backdrop-blur-xl"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-50" />
      
      <div className="container flex h-16 md:h-20 items-center justify-between px-6 md:px-8 relative z-10">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
        <Link href="/" className="flex items-center gap-3 group mr-4 md:mr-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xl">
          <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/25">
              <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <motion.div 
                className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: easeInOut
                }}
              />
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: easeInOut
                }}
              />
          </div>
          <div className="flex flex-col">
              <motion.span 
                className="font-bold font-headline text-lg bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent"
                whileHover={{ 
                  backgroundPosition: "200% center",
                  transition: { duration: 0.8 }
                }}
                style={{
                  backgroundSize: "200% auto",
                  backgroundImage: "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))"
                }}
              >
              Nour'dev
              </motion.span>
            <div className="flex items-center gap-1">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
              <Sparkles className="h-3 w-3 text-accent" />
                </motion.div>
              <span className="text-xs text-muted-foreground">Développeur Créatif</span>
            </div>
          </div>
        </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 md:gap-3 relative">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href || 
              (link.href !== '/' && pathname.startsWith(link.href));
            
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
                onHoverStart={() => setHoveredLink(link.href)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                <Link
                href={link.href}
                className={cn(
                    "relative px-4 md:px-5 py-2.5 rounded-xl transition-all duration-500 group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                  isActive 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <div className="flex items-center gap-2 relative z-10">
                    <motion.span 
                      className="text-sm transition-all duration-300"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {link.icon}
                    </motion.span>
                  <span className="font-medium text-[15px]">{link.label}</span>
                </div>
                  
                  {/* Animated underline for active page */}
                {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      layoutId="activeTab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-full h-full bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x" />
                    </motion.div>
                  )}
                  
                  {/* Hover underline effect */}
                  {hoveredLink === link.href && !isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Hover background effect */}
                  <motion.div 
                    className={cn(
                      "absolute inset-0 rounded-xl transition-all duration-500",
                      isActive 
                        ? "bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/30 shadow-lg shadow-primary/10" 
                        : "bg-transparent group-hover:bg-gradient-to-r group-hover:from-primary/8 group-hover:to-accent/8"
                    )}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: isActive ? "0 10px 25px rgba(var(--primary), 0.2)" : "0 5px 15px rgba(var(--primary), 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Glow effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
              </Link>
              </motion.div>
            );
          })}
          
          <div className="ml-6 md:ml-8 flex items-center gap-3 md:gap-4">
            {/* Availability Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge 
                variant="secondary" 
                className={cn(
                  "text-xs px-4 py-2 rounded-full border transition-all duration-500 cursor-pointer relative overflow-hidden",
                  isAvailable 
                    ? "bg-green-500/10 text-green-600 border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50" 
                    : "bg-red-500/10 text-red-600 border-red-500/30 hover:bg-red-500/20 hover:border-red-500/50"
                )}
                onClick={() => setIsAvailable(!isAvailable)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <Circle className={cn(
                  "h-2.5 w-2.5 mr-2 transition-all duration-300",
                  isAvailable 
                    ? "text-green-500" 
                    : "text-red-500"
                )} />
                <motion.span
                  animate={isAvailable ? { color: "#16a34a" } : { color: "#dc2626" }}
                  transition={{ duration: 0.3 }}
                >
                  {isAvailable ? "Disponible" : "Indisponible"}
                </motion.span>
            </Badge>
            </motion.div>
            
            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <ThemeToggle />
            </motion.div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          {/* Availability Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge 
              variant="secondary" 
              className={cn(
                "text-xs px-3 py-1.5 rounded-full border",
                isAvailable 
                  ? "bg-green-500/10 text-green-600 border-green-500/30" 
                  : "bg-red-500/10 text-red-600 border-red-500/30"
              )}
            >
              <Circle className={cn(
                "h-2 w-2 mr-1.5",
                isAvailable ? "text-green-500" : "text-red-500"
              )} />
              {isAvailable ? "Dispo" : "Indispo"}
          </Badge>
          </motion.div>
          
          {/* Theme Toggle */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <ThemeToggle />
          </motion.div>
          
          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Button 
                variant="ghost" 
                size="icon"
                  className="relative w-10 h-10 rounded-xl hover:bg-muted/50 transition-all duration-300"
                >
                  <motion.div
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    className="flex flex-col items-center justify-center w-5 h-5"
                  >
                    <motion.span
                      className="w-5 h-0.5 bg-foreground rounded-full origin-center"
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
                      className="w-5 h-0.5 bg-foreground rounded-full mt-1 origin-center"
                      variants={{
                        closed: { rotate: 0, y: 0 },
                        open: { rotate: -45, y: -6 }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-80 bg-background/95 backdrop-blur-2xl border-l border-border/30"
            >
              <motion.div 
                className="flex flex-col h-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-xl">
                      <Code2 className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold font-headline text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Nour'dev
                      </span>
                      <span className="text-xs text-muted-foreground">Développeur Créatif</span>
                    </div>
                  </Link>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                      className="rounded-xl hover:bg-muted/50"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                  </motion.div>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-2.5 flex-1">
                  {navLinks.map((link, index) => {
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
                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                          isActive 
                              ? "text-primary bg-gradient-to-r from-primary/15 to-accent/15 border-l-4 border-primary" 
                              : "text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/8 hover:to-accent/8"
                          )}
                        >
                          <motion.span 
                            className="text-lg transition-all duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            {link.icon}
                          </motion.span>
                        <span className="font-medium text-[15px]">{link.label}</span>
                        {isActive && (
                            <motion.div 
                              className="absolute right-4 w-2 h-2 bg-primary rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                      </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile Footer */}
                <motion.div 
                  className="mt-auto pt-6 border-t border-border/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Prêt à collaborer sur votre prochain projet ?
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                    <Button 
                      asChild 
                        className="w-full rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/25"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Link href="/contact" className="flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                        Démarrer un projet
                      </Link>
                    </Button>
                    </motion.div>
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
