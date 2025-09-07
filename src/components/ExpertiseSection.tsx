"use client";

import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, Database, Smartphone, Cloud } from "lucide-react";
import { skills } from "@/lib/data";
import Image from "next/image";

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const expertiseAreas = [
    {
      icon: Code,
      title: "Développement",
      description: "Maîtrise des langages de programmation modernes",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      darkBgColor: "from-blue-900/30 to-blue-800/30",
      skills: skills.languages,
      image: "/images/projects/dashboard-analytics.jpg"
    },
    {
      icon: Zap,
      title: "Frameworks",
      description: "Expertise des frameworks et bibliothèques populaires",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      darkBgColor: "from-purple-900/30 to-purple-800/30",
      skills: skills.frameworks,
      image: "/images/projects/ecommerce-platform.jpg"
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Création d'interfaces utilisateur modernes et intuitives",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      darkBgColor: "from-pink-900/30 to-pink-800/30",
      skills: skills.design,
      image: "/images/blog/ux-design.jpg"
    },
    {
      icon: Database,
      title: "Base de Données",
      description: "Gestion et optimisation des données",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      darkBgColor: "from-emerald-900/30 to-emerald-800/30",
      skills: skills.other,
      image: "/images/projects/chat-app.jpg"
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Développement d'applications mobiles natives et hybrides",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      darkBgColor: "from-orange-900/30 to-orange-800/30",
      skills: ["React Native", "Expo", "Mobile UI/UX"],
      image: "/images/projects/blog-cms.jpg"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Déploiement et infrastructure cloud",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      darkBgColor: "from-indigo-900/30 to-indigo-800/30",
      skills: ["Supabase", "Firebase", "Vercel", "Git"],
      image: "/images/projects/portfolio-template.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
            <Code className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Expertise Technique
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Compétences & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une maîtrise approfondie des technologies modernes pour créer des solutions 
            innovantes et performantes dans tous les domaines du développement.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="group relative"
              variants={itemVariants}
            >
              <div className="relative h-full rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Image de fond */}
                <div className="absolute inset-0 -z-10">
                  <Image 
                    src={area.image} 
                    alt={`Background ${area.title}`} 
                    fill 
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 dark:to-slate-800/80" />
                </div>

                <div className="relative p-8">
                  {/* Icône */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Contenu */}
                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Compétences */}
                  <div className="flex flex-wrap gap-2">
                    {area.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                    {area.skills.length > 4 && (
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        +{area.skills.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Effet de brillance au survol */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section de statistiques supplémentaires */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-800">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 mx-auto">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {skills.languages.length + skills.frameworks.length}
              </div>
              <div className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                Technologies Maîtrisées
              </div>
              <p className="text-blue-600/80 dark:text-blue-400/80 text-sm">
                Langages, frameworks et outils
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200 dark:border-purple-800">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                3+
              </div>
              <div className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                Années d'Expérience
              </div>
              <p className="text-purple-600/80 dark:text-purple-400/80 text-sm">
                Développement professionnel
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 border border-emerald-200 dark:border-emerald-800">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 mx-auto">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                100%
              </div>
              <div className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                Projets Livrés
              </div>
              <p className="text-emerald-600/80 dark:text-emerald-400/80 text-sm">
                Satisfaction client garantie
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
