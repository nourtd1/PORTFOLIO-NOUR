import type { Metadata } from 'next';
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookText, FileText, Shield, LinkIcon, Cookie, Gavel, Mail as MailIcon, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales | Nour'dev",
  description: "Mentions légales et informations légales du site.",
};

export default function LegalPage() {
  const updated = new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: '2-digit' });
  const toc = [
    { id: 'editeur', label: "Éditeur du Site", icon: FileText },
    { id: 'hebergement', label: "Hébergement", icon: Server },
    { id: 'propriete', label: "Propriété Intellectuelle", icon: BookText },
    { id: 'responsabilite', label: "Responsabilité", icon: Shield },
    { id: 'liens', label: "Liens Hypertextes", icon: LinkIcon },
    { id: 'cookies', label: "Cookies", icon: Cookie },
    { id: 'droit', label: "Droit Applicable", icon: Gavel },
    { id: 'contact', label: "Contact", icon: MailIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Retour
            </Link>
            <Badge variant="secondary" className="text-xs">Dernière mise à jour: {updated}</Badge>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">Mentions Légales</h1>
            <p className="text-muted-foreground">Informations légales et conditions d'utilisation du site.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <aside className="md:col-span-4 lg:col-span-3">
              <Card className="sticky top-24 border-0 shadow-lg bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-base">Sommaire</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {toc.map(({ id, label, icon: Icon }) => (
                    <a key={id} href={`#${id}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                      <Icon className="h-4 w-4" /> {label}
                    </a>
                  ))}
                </CardContent>
              </Card>
            </aside>

            <main className="md:col-span-8 lg:col-span-9 space-y-6">
              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm" id="editeur">
                <CardHeader>
                  <CardTitle>1. Éditeur du Site</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p><strong>Nom :</strong> Nour</p>
                  <p><strong>Profession :</strong> Développeur Front-End</p>
                  <p><strong>Adresse :</strong> Gisenyi, Rwanda</p>
                  <p><strong>Email :</strong> <a href="mailto:nourr.td@gmail.com" className="text-primary hover:underline">nourr.td@gmail.com</a></p>
                  <p><strong>Téléphone :</strong> <a href="tel:+250798977292" className="text-primary hover:underline">+250 798 977 292</a></p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm" id="hebergement">
                <CardHeader>
                  <CardTitle>2. Hébergement</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm" id="propriete">
                <CardHeader>
                  <CardTitle>3. Propriété Intellectuelle</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>
                    L'ensemble de ce site relève de la législation rwandaise et internationale sur le droit d'auteur
                    et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour
                    les documents téléchargeables et les représentations iconographiques et photographiques.
                  </p>
                  <p>
                    La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit
                    est formellement interdite sauf autorisation expresse du directeur de la publication.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm" id="responsabilite">
                <CardHeader>
                  <CardTitle>4. Responsabilité</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>
                    Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement
                    remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                  </p>
                  <p>
                    Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien
                    vouloir le signaler par email à l'adresse <a href="mailto:nourr.td@gmail.com" className="text-primary hover:underline">nourr.td@gmail.com</a>.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm" id="liens">
                <CardHeader>
                  <CardTitle>5. Liens Hypertextes</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres
                  ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Nour.
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm" id="cookies">
                <CardHeader>
                  <CardTitle>6. Cookies</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Le site peut-être amené à vous demander l'acceptation des cookies pour des besoins de statistiques
                  et d'affichage. Un cookie ne nous permet pas de vous identifier ; il sert uniquement à enregistrer
                  les informations relatives à la navigation de votre ordinateur sur notre site.
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm" id="droit">
                <CardHeader>
                  <CardTitle>7. Droit Applicable</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Tout litige en relation avec l'utilisation du site <strong>nourdev.com</strong> est soumis au droit rwandais.
                  En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de la compétence
                  aux tribunaux compétents de Gisenyi.
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm" id="contact">
                <CardHeader>
                  <CardTitle>8. Contact</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Pour toute question concernant ces mentions légales, contactez-moi à :
                  <a href="mailto:nourr.td@gmail.com" className="text-primary hover:underline"> nourr.td@gmail.com</a>
                </CardContent>
              </Card>

              <Separator />
              <div className="flex justify-between items-center pt-2 text-xs text-muted-foreground">
                <span>© {new Date().getFullYear()} Nour</span>
                <Link href="/confidentialite" className="hover:text-foreground">Politique de confidentialité</Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
