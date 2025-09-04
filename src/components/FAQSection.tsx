"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HelpCircle, Clock, Globe, DollarSign, Users, Zap } from "lucide-react";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "Quels sont vos délais de réponse ?",
      answer: "Je réponds généralement dans les 24h, souvent même dans la journée. Pour les urgences, n'hésitez pas à me contacter par téléphone.",
      icon: Clock,
      color: "from-blue-500 to-blue-600"
    },
    {
      question: "Travaillez-vous à distance ?",
      answer: "Oui, je travaille principalement en remote. Je peux me déplacer pour des réunions importantes si nécessaire.",
      icon: Globe,
      color: "from-purple-500 to-purple-600"
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Mes tarifs varient selon la complexité du projet. Contactez-moi pour un devis personnalisé basé sur vos besoins.",
      icon: DollarSign,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      question: "Acceptez-vous les petits projets ?",
      answer: "Absolument ! Je travaille sur des projets de toutes tailles, du simple site vitrine aux applications complexes.",
      icon: Users,
      color: "from-orange-500 to-orange-600"
    },
    {
      question: "Quelle est votre méthodologie de travail ?",
      answer: "J'utilise une approche agile avec des sprints courts, des feedbacks réguliers et une communication transparente tout au long du projet.",
      icon: Zap,
      color: "from-pink-500 to-pink-600"
    },
    {
      question: "Proposez-vous un support post-livraison ?",
      answer: "Oui, je propose un support technique et des mises à jour pendant 3 mois après la livraison du projet.",
      icon: HelpCircle,
      color: "from-indigo-500 to-indigo-600"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 mb-6">
            <HelpCircle className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              Informations Utiles
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quelques informations utiles pour mieux comprendre comment nous pouvons travailler ensemble
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <div className="relative h-full rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative p-8">
                  {/* Icône */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${faq.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <faq.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Question */}
                  <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>

                  {/* Réponse */}
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>

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
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                24h
              </div>
              <div className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                Délai de Réponse
              </div>
              <p className="text-blue-600/80 dark:text-blue-400/80 text-sm">
                Réponse garantie
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200 dark:border-purple-800">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 mx-auto">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                100%
              </div>
              <div className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                Travail Remote
              </div>
              <p className="text-purple-600/80 dark:text-purple-400/80 text-sm">
                Collaboration mondiale
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 border border-emerald-200 dark:border-emerald-800">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                50+
              </div>
              <div className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                Clients Satisfaits
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

export default FAQSection;
