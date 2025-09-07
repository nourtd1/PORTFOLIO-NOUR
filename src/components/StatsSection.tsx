"use client";

import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Cloud, Users, Award, Clock } from "lucide-react";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { 
      label: "Projets Réalisés", 
      value: 12, 
      icon: Code,
      suffix: "+",
      color: "from-blue-500 to-blue-600"
    },
    { 
      label: "Années d'Expérience", 
      value: 2, 
      icon: Clock,
      suffix: "",
      color: "from-purple-500 to-purple-600"
    },
    { 
      label: "Clients Satisfaits", 
      value: 8, 
      icon: Users,
      suffix: "+",
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      label: "Technologies Maîtrisées", 
      value: 15, 
      icon: Smartphone,
      suffix: "+",
      color: "from-orange-500 to-orange-600"
    },
    { 
      label: "Certifications", 
      value: 3, 
      icon: Award,
      suffix: "",
      color: "from-pink-500 to-pink-600"
    },
    { 
      label: "Solutions Cloud", 
      value: 5, 
      icon: Cloud,
      suffix: "+",
      color: "from-indigo-500 to-indigo-600"
    },
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mon Impact en Chiffres
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les réalisations qui témoignent de mon expertise et de mon engagement 
            dans la création de solutions digitales innovantes.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative"
              variants={itemVariants}
            >
              <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Icône avec gradient */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>

                {/* Valeur avec animation de comptage */}
                <motion.div
                  className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {isInView && (
                    <motion.span
                      initial={{ number: 0 }}
                      animate={{ number: stat.value }}
                      transition={{ duration: 2, delay: 0.5 + index * 0.1, ease: easeOut }}
                    >
                      {Math.round(stat.value)}
                    </motion.span>
                  )}
                  {stat.suffix}
                </motion.div>

                {/* Label */}
                <div className="text-sm text-muted-foreground text-center font-medium leading-tight">
                  {stat.label}
                </div>

                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section de compétences avec marquee */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Technologies & Compétences</h3>
            <p className="text-muted-foreground">
              Un éventail de technologies modernes pour créer des solutions robustes et innovantes
            </p>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              animate={{
                x: [0, -50],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[
                "React Native", "ASP.NET", "Express.js", "Supabase", "TypeScript",
                "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Firebase",
                "React Native", "ASP.NET", "Express.js", "Supabase", "TypeScript",
                "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Firebase"
              ].map((tech, index) => (
                <motion.span
                  key={`${tech}-${index}`}
                  className="px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
