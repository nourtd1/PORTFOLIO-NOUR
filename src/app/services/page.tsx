"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Code, Smartphone, Cloud, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Sites Web Modernes",
      desc: "Sites performants, accessibles et SEO‑friendly avec Next.js/TypeScript.",
      price: "À partir de 300$",
    },
    {
      icon: Smartphone,
      title: "Apps Mobiles (React Native)",
      desc: "Apps Android/iOS avec Expo, notifications et intégrations backend.",
      price: "À partir de 500$",
    },
    {
      icon: Cloud,
      title: "APIs & Cloud",
      desc: "APIs Express, Supabase/Postgres, automatisations n8n et déploiement.",
      price: "Sur devis",
    },
  ];

  const features = [
    "Design responsive et accessible",
    "Perf & meilleures pratiques",
    "Code maintenable et documenté",
    "Suivi et itérations rapides",
  ];

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <div className="min-h-screen">
      {/* Hero animé */}
      <section className="relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center max-w-3xl py-16 md:py-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-4">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Offre de services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-5 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Des solutions web, mobiles et cloud alignées sur vos objectifs.
          </p>
        </motion.div>
      </section>

      {/* Tabs + cartes services */}
      <section className="py-16 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-xl mx-auto bg-background/70 backdrop-blur border">
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
            </TabsList>

            {/* Web */}
            <TabsContent value="web">
              <motion.div variants={container} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.slice(0, 1).map(({ icon: Icon, title, desc, price }) => (
                  <motion.div key={title} variants={item} className="md:col-span-3">
                    <Card className="border-white/20 dark:border-slate-700/50 shadow-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground mb-4">{desc}</p>
                        <div className="font-semibold mb-6">{price}</div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">Obtenir un devis</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Brief rapide</DialogTitle>
                            </DialogHeader>
                            <form className="space-y-3" action="mailto:nourr.td@gmail.com">
                              <Input placeholder="Nom" required />
                              <Input type="email" placeholder="Email" required />
                              <Input placeholder="Budget estimé (USD)" />
                              <Textarea placeholder="Décrivez votre besoin..." required />
                              <div className="flex justify-end gap-2">
                                <Button type="submit">Envoyer</Button>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Mobile */}
            <TabsContent value="mobile">
              <motion.div variants={container} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.slice(1, 2).map(({ icon: Icon, title, desc, price }) => (
                  <motion.div key={title} variants={item} className="md:col-span-3">
                    <Card className="border-white/20 dark:border-slate-700/50 shadow-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground mb-4">{desc}</p>
                        <div className="font-semibold mb-6">{price}</div>
                        <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <Link href="/contact">Demander un devis</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Cloud */}
            <TabsContent value="cloud">
              <motion.div variants={container} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.slice(2, 3).map(({ icon: Icon, title, desc, price }) => (
                  <motion.div key={title} variants={item} className="md:col-span-3">
                    <Card className="border-white/20 dark:border-slate-700/50 shadow-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground mb-4">{desc}</p>
                        <div className="font-semibold mb-6">{price}</div>
                        <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <Link href="/contact">Demander un devis</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Inclus + Processus */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto text-center mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ce qui est inclus</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f) => (
              <motion.div key={f} variants={item} className="flex items-start gap-3 rounded-xl border bg-background/60 p-4">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">{f}</span>
              </motion.div>
            ))}
          </motion.div>
          <div className="max-w-3xl mx-auto mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Processus</h3>
            <motion.div variants={container} initial="hidden" animate="visible" className="grid md:grid-cols-4 gap-4">
              {["Brief", "Proposition", "Design/Dev", "Livraison"].map((step, idx) => (
                <motion.div key={step} variants={item} className="rounded-xl border bg-background/60 p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mx-auto mb-3 flex items-center justify-center text-lg font-bold">
                    {idx + 1}
                  </div>
                  <div className="text-sm text-muted-foreground">{step}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center"
        >
          <div className="max-w-3xl mx-auto rounded-2xl border bg-card text-card-foreground p-10 shadow-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Parlons de votre projet</h2>
            <p className="text-lg text-muted-foreground mb-8">Expliquez vos besoins, je vous réponds sous 24h avec une proposition adaptée.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link href="/contact" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Me contacter
                </Link>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">Brief rapide</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Brief rapide</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-3" action="mailto:nourr.td@gmail.com">
                    <Input placeholder="Nom" required />
                    <Input type="email" placeholder="Email" required />
                    <Textarea placeholder="Décrivez votre besoin..." required />
                    <div className="flex justify-end gap-2">
                      <Button type="submit">Envoyer</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
