"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Zap, Heart, Target, Shield } from "lucide-react";

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Users,
      title: "Empathie Utilisateur",
      description: "Décisions guidées par les besoins réels et les retours utilisateurs.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      darkBgColor: "from-blue-900/30 to-blue-800/30"
    },
    {
      icon: Award,
      title: "Qualité & Détails",
      description: "Code clair, design soigné et performances mesurables.",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      darkBgColor: "from-purple-900/30 to-purple-800/30"
    },
    {
      icon: Zap,
      title: "Itération Rapide",
      description: "Améliorations continues et feedback loops courts.",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      darkBgColor: "from-emerald-900/30 to-emerald-800/30"
    },
    {
      icon: Heart,
      title: "Passion & Créativité",
      description: "Amour du code propre et recherche constante d'innovation.",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      darkBgColor: "from-pink-900/30 to-pink-800/30"
    },
    {
      icon: Target,
      title: "Objectifs Mesurables",
      description: "Définition claire des KPIs et suivi des performances.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      darkBgColor: "from-orange-900/30 to-orange-800/30"
    },
    {
      icon: Shield,
      title: "Sécurité & Fiabilité",
      description: "Applications robustes et sécurisées pour la production.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      darkBgColor: "from-indigo-900/30 to-indigo-800/30"
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
        ease: "easeOut",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
            <Heart className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Philosophie de Travail
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Valeurs & Approche
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les principes qui guident mon travail et ma relation avec les clients pour 
            créer des solutions exceptionnelles et durables.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group relative"
              variants={itemVariants}
            >
              <div className="relative h-full rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative p-8">
                  {/* Icône */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Contenu */}
                  <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>

                  {/* Effet de brillance au survol */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section de méthodologie */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Méthodologie de Travail
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Une approche structurée et collaborative pour garantir la réussite de vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">Découverte</h4>
              <p className="text-sm text-muted-foreground">Analyse des besoins et définition des objectifs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">Conception</h4>
              <p className="text-sm text-muted-foreground">Architecture technique et maquettes UX/UI</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">Développement</h4>
              <p className="text-sm text-muted-foreground">Codage itératif avec tests et feedback</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">Livraison</h4>
              <p className="text-sm text-muted-foreground">Déploiement et support post-lancement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
