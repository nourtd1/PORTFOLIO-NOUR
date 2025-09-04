"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Briefcase, GraduationCap, Award, Code, Users } from "lucide-react";

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineEvents = [
    {
      year: "2024",
      title: "Freelance Front‑End",
      description: "Création d'interfaces performantes avec Next.js et Tailwind CSS.",
      icon: Briefcase,
      color: "from-blue-500 to-blue-600",
      position: "left"
    },
    {
      year: "2023",
      title: "Stage Développement Web",
      description: "Participation à un tableau de bord analytique et à un blog headless.",
      icon: Code,
      color: "from-purple-500 to-purple-600",
      position: "right"
    },
    {
      year: "2022",
      title: "Formation",
      description: "Spécialisation React/TypeScript, UX/UI, bonnes pratiques et accessibilité.",
      icon: GraduationCap,
      color: "from-emerald-500 to-emerald-600",
      position: "left"
    }
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

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 mb-6">
            <Calendar className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              Parcours Professionnel
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mon Parcours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les étapes clés de mon évolution professionnelle dans le développement web.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Ligne de temps centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500" />
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className={`relative flex items-center ${event.position === 'left' ? 'justify-start' : 'justify-end'}`}
                variants={itemVariants}
              >
                {/* Contenu de l'événement */}
                <div className={`w-5/12 ${event.position === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    className="relative p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Icône */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${event.color} flex items-center justify-center mb-4 ${event.position === 'left' ? 'ml-auto' : 'mr-auto'}`}>
                      <event.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Année */}
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {event.year}
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>

                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                </div>

                {/* Point central sur la ligne de temps */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-slate-800 rounded-full border-4 border-blue-500 shadow-lg z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section de statistiques du parcours */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-800">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 mx-auto">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                3+
              </div>
              <div className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                Années d'Expérience
              </div>
              <p className="text-blue-600/80 dark:text-blue-400/80 text-sm">
                Développement professionnel
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200 dark:border-purple-800">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 mx-auto">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                15+
              </div>
              <div className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                Projets Réalisés
              </div>
              <p className="text-purple-600/80 dark:text-purple-400/80 text-sm">
                Applications web et mobiles
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 border border-emerald-200 dark:border-emerald-800">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                100%
              </div>
              <div className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                Satisfaction Client
              </div>
              <p className="text-emerald-600/80 dark:text-emerald-400/80 text-sm">
                Projets livrés avec succès
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
