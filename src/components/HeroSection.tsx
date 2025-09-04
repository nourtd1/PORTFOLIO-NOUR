"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Code, Smartphone, Cloud } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const stats = [
    { label: "Projets", value: "12+", icon: Code },
    { label: "Années d'expérience", value: personalInfo.yearsOfExperience, icon: Smartphone },
    { label: "Clients satisfaits", value: "8+", icon: Cloud },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Arrière-plan animé moderne */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        
        {/* Cercles flottants animés */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grille de points subtile */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)]" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contenu principal */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Badge de statut */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800"
              variants={itemVariants}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Disponible pour de nouveaux projets
              </span>
            </motion.div>

            {/* Titre principal avec effet de surbrillance */}
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Je conçois des
              </span>
              <br />
              <span className="text-foreground">
                solutions digitales
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                qui impactent
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              {personalInfo.title} — Création d'applications web, mobiles et cloud 
              avec une approche centrée sur l'expérience utilisateur.
            </motion.p>

            {/* Localisation et disponibilité */}
            <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Rwanda • Gisenyi</span>
              </div>
            </motion.div>

            {/* Technologies clés */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={itemVariants}
            >
              {["React Native", "ASP.NET", "Express.js", "Supabase", "TypeScript"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Boutons CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg font-semibold">
                <Link href="/projets">
                  Découvrir mes projets
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold">
                <Link href="/contact">Me contacter</Link>
              </Button>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div
              className="flex items-center gap-3"
              variants={itemVariants}
            >
              <span className="text-sm text-muted-foreground">Suivez-moi :</span>
              <div className="flex gap-2">
                <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Link href={`mailto:${socialLinks.email}`}>
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Section droite avec image et stats */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            {/* Carte principale */}
            <motion.div
              className="relative rounded-3xl bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/80 dark:to-slate-800/40 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 p-8 shadow-2xl"
              variants={floatingVariants}
              animate="animate"
            >
              {/* Image de profil */}
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20">
                  <Image
                    src="/images/profil.png"
                    alt="Nour - Développeur Full Stack"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badge de statut sur l'image */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>

              {/* Titre de la carte */}
              <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Web, Mobile & Cloud
              </h3>
              
              <p className="text-center text-muted-foreground mb-8 leading-relaxed">
                Création de solutions utiles, accessibles et performantes avec un sens du détail et de l'impact.
              </p>

              {/* Stats dynamiques */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Call to action */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  Explorer mes projets
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Éléments décoratifs flottants */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur de défilement */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
