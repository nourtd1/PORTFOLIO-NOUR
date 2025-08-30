import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions Légales | Nour'dev",
  description: "Mentions légales et informations légales du site.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">
            Mentions Légales
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Éditeur du Site</h2>
              <div className="text-muted-foreground mb-4">
                <p><strong>Nom :</strong> Nour</p>
                <p><strong>Profession :</strong> Développeur Front-End</p>
                <p><strong>Adresse :</strong> Gisenyi, Rwanda</p>
                <p><strong>Email :</strong> <a href="mailto:nourr.td@gmail.com" className="text-primary hover:underline">nourr.td@gmail.com</a></p>
                <p><strong>Téléphone :</strong> <a href="tel:+250798977292" className="text-primary hover:underline">+250 798 977 292</a></p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
              <p className="text-muted-foreground mb-4">
                Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Propriété Intellectuelle</h2>
              <p className="text-muted-foreground mb-4">
                L'ensemble de ce site relève de la législation rwandaise et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-muted-foreground mb-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit 
                est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Responsabilité</h2>
              <p className="text-muted-foreground mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement 
                remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>
              <p className="text-muted-foreground mb-4">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien 
                vouloir le signaler par email à l'adresse <a href="mailto:nourr.td@gmail.com" className="text-primary hover:underline">nourr.td@gmail.com</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Liens Hypertextes</h2>
              <p className="text-muted-foreground mb-4">
                Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres 
                ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Nour.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Le site peut-être amené à vous demander l'acceptation des cookies pour des besoins de statistiques 
                et d'affichage. Un cookie ne nous permet pas de vous identifier ; il sert uniquement à enregistrer 
                les informations relatives à la navigation de votre ordinateur sur notre site.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Droit Applicable</h2>
              <p className="text-muted-foreground mb-4">
                Tout litige en relation avec l'utilisation du site <strong>nourdev.com</strong> est soumis au droit rwandais. 
                En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de la compétence 
                aux tribunaux compétents de Gisenyi.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
              <p className="text-muted-foreground mb-4">
                Pour toute question concernant ces mentions légales, contactez-moi à : 
                <a href="mailto:nourr.td@gmail.com" className="text-primary hover:underline"> nourr.td@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
