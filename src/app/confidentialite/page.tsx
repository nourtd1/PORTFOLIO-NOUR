import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Nour'dev",
  description: "Politique de confidentialité et protection des données personnelles.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">
            Politique de Confidentialité
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Collecte des Informations</h2>
              <p className="text-muted-foreground mb-4">
                Je collecte les informations que vous me fournissez directement, notamment :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Nom et adresse email lors de l'utilisation du formulaire de contact</li>
                <li>Informations de projet lors de demandes de devis</li>
                <li>Données de navigation (cookies techniques)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Utilisation des Informations</h2>
              <p className="text-muted-foreground mb-4">
                Les informations collectées sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Répondre à vos demandes de contact</li>
                <li>Fournir des devis et propositions de projet</li>
                <li>Améliorer l'expérience utilisateur du site</li>
                <li>Analyser les performances du site (anonymement)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Protection des Données</h2>
              <p className="text-muted-foreground mb-4">
                Vos données personnelles sont protégées et ne sont jamais vendues, louées ou partagées 
                avec des tiers sans votre consentement explicite, sauf si requis par la loi.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Ce site utilise des cookies techniques nécessaires au bon fonctionnement. 
                Aucun cookie de tracking ou publicitaire n'est utilisé.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Vos Droits</h2>
              <p className="text-muted-foreground mb-4">
                Conformément au RGPD, vous avez le droit de :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Accéder à vos données personnelles</li>
                <li>Rectifier vos données</li>
                <li>Demander la suppression de vos données</li>
                <li>Vous opposer au traitement</li>
                <li>Demander la portabilité de vos données</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Contact</h2>
              <p className="text-muted-foreground mb-4">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                contactez-moi à : <a href="mailto:nourr.td@gmail.com" className="text-primary hover:underline">nourr.td@gmail.com</a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
              <p className="text-muted-foreground mb-4">
                Cette politique de confidentialité peut être mise à jour. La date de dernière modification 
                sera indiquée en haut de cette page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
