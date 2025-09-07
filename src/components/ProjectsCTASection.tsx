"use client";

import { motion, useInView, easeOut, easeInOut } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Eye, Rocket, Mail, Calendar } from "lucide-react";
import Link from "next/link";

const ProjectsCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Rocket,
      title: "Développement Rapide",
      description: "Prototypage et développement agile pour des résultats rapides"
    },
    {
      icon: Mail,
      title: "Communication Fluide",
      description: "Suivi régulier et transparence totale sur l'avancement"
    },
    {
      icon: Calendar,
      title: "Respect des Délais",
      description: "Livraison dans les temps avec une qualité optimale"
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
        ease: easeOut,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Arrière-plan avec éléments décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        
        {/* Cercles flottants */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Rocket className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Prêt à collaborer sur votre prochain projet ?</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Transformons vos idées en
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              réalité digitale
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Que vous ayez une idée innovante ou un projet existant à améliorer, 
            je suis là pour transformer votre vision en réalité. 
            Discutons de vos besoins et créons quelque chose d'extraordinaire ensemble.
          </motion.p>
        </motion.div>

        {/* Fonctionnalités */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center group"
              variants={itemVariants}
            >
              <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Boutons CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button asChild size="lg" className="group bg-white text-blue-600 hover:bg-white/90 border-0 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Link href="/contact">
              <Users className="mr-2 h-5 w-5" />
              Démarrer un projet
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
            <Link href="/a-propos">
              <Eye className="mr-2 h-5 w-5" />
              En savoir plus sur moi
            </Link>
          </Button>
        </motion.div>

        {/* Informations de contact rapide */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-white/80 mb-4">
            Ou contactez-moi directement :
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="mailto:contact@nour-dev.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
              contact@nour-dev.com
            </Link>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <Calendar className="h-4 w-4" />
              Réponse sous 24h
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsCTASection;
