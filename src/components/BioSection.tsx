"use client";

import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, Award, Users, Calendar } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const BioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        ease: easeOut,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Portrait */}
          <motion.div 
            className="lg:col-span-1 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative group">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/20 transition-all duration-300 group-hover:scale-105">
                <Image 
                  src="/images/profil.png" 
                  alt="Photo de profil" 
                  fill 
                  className="object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full shadow-lg" />
            </div>
          </motion.div>

          {/* Contenu */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            variants={itemVariants}
          >
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Biographie
              </motion.h2>
              
              <motion.div 
                className="space-y-6 text-muted-foreground leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p>
                  Développeur créatif, j'aime concevoir des interfaces claires et efficaces. 
                  J'accorde une attention particulière à la performance, l'accessibilité et aux détails qui rendent une expérience mémorable.
                </p>
                <p>
                  J'ai travaillé sur des projets allant d'outils analytiques à des plateformes e-commerce, 
                  avec une stack moderne centrée sur React/Next.js, TypeScript et Tailwind CSS.
                </p>
                <p>
                  Mon approche combine expertise technique et sensibilité design pour créer des solutions 
                  qui allient fonctionnalité et esthétique, toujours dans l'optique d'améliorer l'expérience utilisateur.
                </p>
              </motion.div>
            </div>

            {/* Compétences clés */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                Compétences clés
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Code, label: "Front‑End", color: "from-blue-500 to-blue-600" },
                  { icon: Palette, label: "UI/UX", color: "from-purple-500 to-purple-600" },
                  { icon: Zap, label: "Performance", color: "from-emerald-500 to-emerald-600" },
                  { icon: Award, label: "Qualité", color: "from-orange-500 to-orange-600" },
                  { icon: Users, label: "Collaboration", color: "from-pink-500 to-pink-600" },
                  { icon: Calendar, label: "Agile", color: "from-indigo-500 to-indigo-600" }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="text-sm px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color} mr-2`} />
                      {skill.label}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Statistiques personnelles */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-800">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 mx-auto">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">React/Next.js</div>
                <div className="text-sm text-blue-700 dark:text-blue-300">Stack principale</div>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200 dark:border-purple-800">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">UI/UX</div>
                <div className="text-sm text-purple-700 dark:text-purple-300">Design centré utilisateur</div>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 border border-emerald-200 dark:border-emerald-800">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">Performance</div>
                <div className="text-sm text-emerald-700 dark:text-emerald-300">Optimisation continue</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;
