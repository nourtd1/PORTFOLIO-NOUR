"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Award, Star } from "lucide-react";

const SocialProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const companies = [
    { name: "TechInnovate", logo: "🚀", category: "Startup Tech" },
    { name: "Creativio", logo: "🎨", category: "Agence Créative" },
    { name: "Spark Agency", logo: "⚡", category: "Marketing Digital" },
    { name: "QuantumLeap", logo: "🔬", category: "Innovation" },
    { name: "DigitalFlow", logo: "🌊", category: "Solutions Web" },
    { name: "CloudSync", logo: "☁️", category: "Infrastructure Cloud" },
  ];

  const testimonials = [
    {
      text: "Nour a transformé notre vision en réalité avec une expertise technique exceptionnelle.",
      author: "Marie Dubois",
      role: "CEO, TechInnovate",
      rating: 5
    },
    {
      text: "Un partenaire de développement fiable qui comprend parfaitement nos besoins.",
      author: "Julien Lefebvre",
      role: "CTO, Creativio",
      rating: 5
    },
    {
      text: "Excellence technique et créativité au service de projets innovants.",
      author: "Sophie Martin",
      role: "Directrice Produit, Spark Agency",
      rating: 5
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
    hidden: { opacity: 0, y: 20 },
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
    <section ref={ref} className="py-16 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6">
            <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Collaborations de confiance
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ils m'ont fait confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des entreprises innovantes qui ont choisi de collaborer avec moi pour 
            transformer leurs idées en solutions digitales performantes.
          </p>
        </motion.div>

        {/* Logos des entreprises */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="group text-center"
              variants={itemVariants}
            >
              <div className="relative p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {company.logo}
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                  {company.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {company.category}
                </p>
                
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistiques de confiance */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-800">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 mx-auto">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
            <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">
              Entreprises partenaires
            </div>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200 dark:border-purple-800">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
            <div className="text-sm text-purple-700 dark:text-purple-300 font-medium">
              Projets livrés à temps
            </div>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 border border-emerald-200 dark:border-emerald-800">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center mb-4 mx-auto">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">5.0</div>
            <div className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
              Note moyenne client
            </div>
          </div>
        </motion.div>

        {/* Témoignages */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
            >
              <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Étoiles */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Citation */}
                <blockquote className="text-slate-700 dark:text-slate-300 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Auteur */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
