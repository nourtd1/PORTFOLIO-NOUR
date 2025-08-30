import { ContactForm } from "@/components/ContactForm";
import { socialLinks, personalInfo } from "@/lib/data";
import { 
  Github, 
  Linkedin, 
  Dribbble, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  Calendar,
  CheckCircle,
  Zap
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  const contactStats = [
    { icon: MessageSquare, value: "24h", label: "Temps de réponse" },
    { icon: CheckCircle, value: "100%", label: "Messages traités" },
    { icon: Zap, value: "5min", label: "Premier contact" },
    { icon: Calendar, value: "7j/7", label: "Disponibilité" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4" />
              Prêt à collaborer
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-headline mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Entrons en contact
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Que vous ayez une question, une proposition de projet ou que vous souhaitiez simplement 
              dire bonjour, je suis là pour vous écouter et vous accompagner dans vos projets.
            </p>
          </div>

          {/* Stats de Contact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {contactStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulaire de Contact */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                  Envoyez-moi un message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Informations de Contact */}
            <div className="space-y-8">
              {/* Contact Direct */}
              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Contact Direct
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <a href={`mailto:${socialLinks.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {socialLinks.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                      <div className="font-medium">Téléphone</div>
                      <a href={`tel:${socialLinks.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {socialLinks.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                      <div className="font-medium">Localisation</div>
                      <div className="text-muted-foreground">Rwanda (Gisenyi)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary"/>
                    </div>
                    <div>
                      <div className="font-medium">Disponibilité</div>
                      <div className="text-muted-foreground">Lun-Ven, 9h-18h</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Réseaux Sociaux */}
              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Réseaux Sociaux
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <Link 
                      href={socialLinks.github} 
                      target="_blank" 
                      aria-label="GitHub"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-xs font-medium">GitHub</span>
                    </Link>
                    
                    <Link 
                      href={socialLinks.linkedin} 
                      target="_blank" 
                      aria-label="LinkedIn"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-xs font-medium">LinkedIn</span>
                    </Link>
                    
                    <Link 
                      href={socialLinks.behance} 
                      target="_blank" 
                      aria-label="Behance"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Dribbble className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-xs font-medium">Behance</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Types de Projets */}
              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Types de Projets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Sites Web</Badge>
                    <Badge variant="secondary" className="text-xs">Applications</Badge>
                    <Badge variant="secondary" className="text-xs">E-commerce</Badge>
                    <Badge variant="secondary" className="text-xs">Dashboards</Badge>
                    <Badge variant="secondary" className="text-xs">UI/UX Design</Badge>
                    <Badge variant="secondary" className="text-xs">Consulting</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ/Informations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quelques informations utiles pour mieux comprendre comment nous pouvons travailler ensemble
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Quels sont vos délais de réponse ?</h3>
                <p className="text-muted-foreground text-sm">
                  Je réponds généralement dans les 24h, souvent même dans la journée. 
                  Pour les urgences, n'hésitez pas à me contacter par téléphone.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Travaillez-vous à distance ?</h3>
                <p className="text-muted-foreground text-sm">
                  Oui, je travaille principalement en remote. Je peux me déplacer 
                  pour des réunions importantes si nécessaire.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Quels sont vos tarifs ?</h3>
                <p className="text-muted-foreground text-sm">
                  Mes tarifs varient selon la complexité du projet. 
                  Contactez-moi pour un devis personnalisé basé sur vos besoins.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Acceptez-vous les petits projets ?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolument ! Je travaille sur des projets de toutes tailles, 
                  du simple site vitrine aux applications complexes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Final */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              N'attendez plus pour transformer vos idées en réalité. 
              Contactez-moi dès maintenant pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Envoyer un email
              </Link>
              <Link 
                href={`tel:${socialLinks.phone}`}
                className="inline-flex items-center justify-center px-8 py-3 border border-input bg-background rounded-md font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Appeler maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
