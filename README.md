# Portfolio "Nour's Creations" - Template Next.js & IA

Bienvenue sur le dépôt du portfolio de Nour. Conçu pour être bien plus qu'une simple galerie de travaux, ce projet est une vitrine moderne, performante et interactive, construite avec des technologies de pointe. Il est également pensé comme un template de haute qualité, prêt à être personnalisé et vendu.

## ✨ Fonctionnalités Clés

- **Architecture Moderne** : Construit avec Next.js et l'App Router, utilisant les Server Components pour des performances optimales.
- **Design System Cohérent** : Utilise Tailwind CSS et ShadCN/UI pour une interface utilisateur élégante, responsive et cohérente.
- **Mode Clair / Sombre** : Thème adaptable aux préférences de l'utilisateur.
- **Personnalisation par IA** : Une fonctionnalité unique sur la page des projets permet à une IA (via Genkit) de suggérer la disposition (grille ou liste) la plus adaptée aux intérêts de l'utilisateur.
- **Contenu Dynamique** : Les projets et les articles de blog sont gérés via un fichier central (`src/lib/data.ts`), simulant un CMS headless et facilitant les mises à jour.
- **Optimisation SEO** : Chaque page de projet et d'article génère dynamiquement des métadonnées (titre, description, balises Open Graph) pour un meilleur référencement et un partage social amélioré.
- **Formulaire de Contact Fonctionnel** : Un formulaire de contact sécurisé utilisant les Server Actions de Next.js avec une validation via Zod et React Hook Form.

## 🛠️ Stack Technique

- **Framework Principal** : [Next.js](https://nextjs.org/) (App Router)
- **Bibliothèque UI** : [React](https://react.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Composants UI** : [Shadcn/UI](https://ui.shadcn.com/)
- **Fonctionnalités IA** : [Genkit](https://firebase.google.com/docs/genkit) (Google AI)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Validation de Formulaire** : [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Déploiement** : [Firebase App Hosting](https://firebase.google.com/docs/hosting)

## 📂 Structure du Projet

Le projet suit une structure organisée pour une maintenabilité et une clarté maximales :

```
/
├── src/
│   ├── app/                # Routes, pages et mises en page (App Router)
│   │   ├── api/            # Routes API (si nécessaire)
│   │   ├── projets/
│   │   │   ├── [slug]/     # Page de détail d'un projet
│   │   │   └── page.tsx    # Page listant tous les projets
│   │   ├── blog/
│   │   │   ├── [slug]/     # Page d'un article de blog
│   │   │   └── page.tsx    # Page listant tous les articles
│   │   ├── layout.tsx      # Mise en page racine
│   │   └── page.tsx        # Page d'accueil
│   │
│   ├── ai/                 # Logique liée à l'IA avec Genkit
│   │   ├── flows/          # Définition des flows Genkit
│   │   └── genkit.ts       # Configuration de Genkit
│   │
│   ├── components/         # Composants React réutilisables
│   │   ├── ui/             # Composants de base de ShadCN/UI
│   │   └── *.tsx           # Composants personnalisés (Header, Footer, etc.)
│   │
│   ├── lib/                # Fonctions utilitaires et données
│   │   ├── data.ts         # Données des projets, articles, témoignages
│   │   └── utils.ts        # Fonctions utilitaires (ex: cn)
│   │
│   └── types/              # Définitions des types TypeScript
│       └── index.ts
│
├── public/                 # Fichiers statiques (images, polices, etc.)
└── tailwind.config.ts      # Configuration de Tailwind CSS
```

## 🚀 Démarrage en Local

Pour lancer le projet sur votre machine, suivez ces étapes :

1.  **Clonez le dépôt :**
    ```bash
    git clone [URL_DU_DEPOT]
    cd [NOM_DU_DOSSIER]
    ```

2.  **Installez les dépendances :**
    ```bash
    npm install
    ```

3.  **Configurez les variables d'environnement :**
    Créez un fichier `.env.local` à la racine du projet. Pour utiliser les fonctionnalités d'IA, vous aurez besoin d'une clé API pour l'API Gemini. Vous pouvez en obtenir une depuis [Google AI Studio](https://aistudio.google.com/app/apikey).
    ```
    GEMINI_API_KEY=VOTRE_CLE_API_ICI
    ```
     
4.  **Lancez le serveur de développement :**
    ```bash
    npm run dev
    ```

Le site sera accessible à l'adresse `http://localhost:3000`.

## 🌐 Déploiement en Ligne avec Firebase App Hosting

Ce projet est pré-configuré pour un déploiement facile et performant sur Firebase App Hosting.

**Prérequis :**
- Un compte Google.
- [Node.js](https://nodejs.org/) installé sur votre machine.
- La Firebase CLI installée globalement : `npm install -g firebase-tools`.

**Étapes du déploiement :**

1.  **Connexion à Firebase :**
    ```bash
    firebase login
    ```

2.  **Initialisation du projet :**
    Ce projet contient déjà les fichiers `firebase.json` et `.firebaserc`. Vous devez simplement le lier à votre projet Firebase.
    ```bash
    # (Optionnel si non lié) Liste vos projets Firebase
    firebase projects:list
    
    # Lie ce dossier à votre projet Firebase
    firebase use VOTRE_ID_DE_PROJET_FIREBASE
    ```
    
3.  **Configuration de la clé API pour la production :**
    Pour que la fonctionnalité d'IA fonctionne en ligne, vous devez stocker votre clé API Gemini de manière sécurisée.
    - Allez dans la [console Google Cloud](https://console.cloud.google.com/), sélectionnez votre projet Firebase.
    - Naviguez vers **Sécurité > Secret Manager**.
    - Créez un nouveau secret nommé `GEMINI_API_KEY`.
    - Collez votre clé API comme valeur du secret.
    - Assurez-vous que le service `apphosting.yaml` a la permission d'accéder à ce secret.

4.  **Déployez !**
    ```bash
    firebase apphosting:backends:deploy
    ```
    Suivez les instructions pour choisir le backend à déployer. Après quelques minutes, votre site sera en ligne !

## 💰 Vendre ce Projet comme Template

Ce portfolio a été conçu avec une architecture de haute qualité, le rendant idéal pour être vendu comme un template premium sur des plateformes comme [ThemeForest](https://themeforest.net/), [Gumroad](https://gumroad.com/), ou directement à des clients.

**Arguments de Vente :**
- **Stack Technique Moderne :** Next.js App Router est un argument de vente majeur pour la performance et le SEO.
- **Fonctionnalité IA Unique :** Le personnalisateur de layout est une fonctionnalité distinctive qui se démarque de la concurrence.
- **Facile à Personnaliser :** Le contenu (projets, articles, etc.) est centralisé dans `src/lib/data.ts`, le rendant très simple à modifier pour les acheteurs, même avec peu de connaissances en code.
- **Design Professionnel Inclus :** Basé sur ShadCN/UI et Tailwind CSS, le design est à la fois esthétique et facile à étendre.

**Comment fixer un prix ?**
- **Marché :** Analysez les prix des templates Next.js similaires sur les plateformes (généralement entre 49$ et 99$).
- **Positionnement :** Étant donné la qualité de la stack et la fonctionnalité IA, vous pouvez viser le haut de la fourchette de prix.
- **Licence :** Proposez différentes licences (ex: Licence Personnelle pour un seul site, Licence Commerciale pour plusieurs sites) pour maximiser vos revenus.

Assurez-vous de créer une documentation claire pour vos acheteurs, expliquant comment personnaliser le contenu, les couleurs et déployer le site.