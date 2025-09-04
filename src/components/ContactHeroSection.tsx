"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Clock, CheckCircle, Zap, Calendar, Mail, Phone, MapPin } from "lucide-react";

const ContactHeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactStats = [
    { 
      icon: MessageSquare, 
      value: "24h", 
      label: "Temps de réponse",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: CheckCircle, 
      value: "100%", 
      label: "Messages traités",
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      icon: Zap, 
      value: "5min", 
      label: "Premier contact",
      color: "from-purple-500 to-purple-600"
    },
    { 
      icon: Calendar, 
      value: "7j/7", 
      label: "Disponibilité",
      color: "from-orange-500 to-orange-600"
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 dark:from-slate-900/50 dark:via-slate-800/50 dark:to-slate-900/50" />
        
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
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Badge de statut */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-8"
            variants={itemVariants}
          >
            <MessageSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Prêt à collaborer
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            className="text-5xl lg:text-7xl font-bold leading-tight mb-8"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Entrons en contact
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
            variants={itemVariants}
          >
            Que vous ayez une question, une proposition de projet ou que vous souhaitiez simplement 
            dire bonjour, je suis là pour vous écouter et vous accompagner dans vos projets.
          </motion.p>

          {/* Statistiques de contact */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {contactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative"
                variants={statsVariants}
              >
                <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground text-center font-medium">
                    {stat.label}
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Méthodes de contact rapides */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
            Méthodes de contact
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              { icon: Mail, label: "Email", color: "from-blue-500 to-blue-600" },
              { icon: Phone, label: "Téléphone", color: "from-emerald-500 to-emerald-600" },
              { icon: MapPin, label: "Localisation", color: "from-purple-500 to-purple-600" },
              { icon: Calendar, label: "Rendez-vous", color: "from-orange-500 to-orange-600" }
            ].map((method, index) => (
              <motion.div
                key={method.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${method.color}`} />
                {method.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Indicateur de défilement */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
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

export default ContactHeroSection;
