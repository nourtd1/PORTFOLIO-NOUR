import type { Project, Post, Testimonial } from '@/types';

export const personalInfo = {
  name: "Nour",
  title: "Développeur créatif passionné par les expériences utilisateurs intuitives",
  yearsOfExperience: "2",
  targetAudience: "Startups technologiques, agences de design",
  portfolioGoal: "Décrocher un emploi à temps plein",
};

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "Plateforme E-commerce Moderne",
    shortDescription: "Une plateforme e-commerce complète avec une expérience utilisateur fluide.",
    metaDescription: "Développement d'une plateforme e-commerce moderne et performante avec Next.js, TypeScript et Stripe pour une expérience d'achat en ligne optimisée.",
    role: "Développement Front-End",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    imageUrl: "/images/projects/ecommerce-platform.jpg",
    imageHint: "ecommerce website",
    challenge: "Créer une expérience d'achat en ligne rapide, intuitive et sécurisée, capable de gérer un grand catalogue de produits et des milliers de transactions.",
    solution: "J'ai développé une architecture front-end robuste avec Next.js pour le rendu côté serveur et la performance. L'interface a été construise avec React et Tailwind CSS pour une flexibilité maximale. L'intégration de Stripe a permis de sécuriser les paiements.",
    results: "La plateforme a vu une augmentation de 25% des conversions et une réduction de 50% du temps de chargement des pages, offrant une expérience utilisateur grandement améliorée.",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    slug: "dashboard-analytics",
    title: "Tableau de Bord Analytique",
    shortDescription: "Un outil de visualisation de données pour les équipes marketing.",
    metaDescription: "Création d'un tableau de bord analytique interactif avec React et D3.js pour transformer des données complexes en visualisations claires et décisionnelles.",
    role: "Développement React",
    technologies: ["React", "Vite", "D3.js", "TypeScript", "Shadcn UI"],
    imageUrl: "/images/projects/dashboard-analytics.jpg",
    imageHint: "dashboard analytics",
    challenge: "Transformer des données brutes et complexes en visualisations claires et interactives pour aider les équipes marketing à prendre des décisions éclairées.",
    solution: "Utilisation de React et D3.js pour créer des graphiques dynamiques et personnalisables. L'interface, basée sur Shadcn UI, est à la fois esthétique et fonctionnelle, permettant un filtrage et une exploration aisée des données.",
    results: "L'outil a permis de réduire le temps d'analyse de données de 40% et a amélioré la précision des rapports marketing.",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
    {
    slug: "blog-cms-integration",
    title: "Blog avec intégration CMS",
    shortDescription: "Un blog performant avec gestion de contenu via un CMS headless.",
    metaDescription: "Développement d'un blog rapide et optimisé pour le SEO avec Next.js et un CMS headless, permettant une gestion de contenu simple et autonome.",
    role: "Développement Web",
    technologies: ["Next.js", "GraphQL", "Tailwind CSS", "Headless CMS"],
    imageUrl: "/images/projects/blog-cms.jpg",
    imageHint: "blog article",
    challenge: "Développer un blog qui soit à la fois rapide, optimisé pour le SEO, et facilement administrable par des non-développeurs.",
    solution: "J'ai utilisé Next.js pour ses capacités de rendu statique (SSG), garantissant des temps de chargement quasi-instantanés. Le contenu est géré via un CMS headless et requêté avec GraphQL, offrant une grande flexibilité pour l'édition du contenu.",
    results: "Le site a obtenu un score de 98/100 sur PageSpeed Insights, et l'équipe de contenu a pu publier des articles de manière autonome, augmentant la fréquence de publication de 200%.",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    slug: "portfolio-template",
    title: "Template de Portfolio Créatif",
    shortDescription: "Un template de portfolio personnalisable pour les créatifs.",
    metaDescription: "Conception et développement d'un template de portfolio ultra-performant et personnalisable avec Astro et GSAP pour les créatifs.",
    role: "Design & Développement",
    technologies: ["Astro", "JavaScript", "CSS", "GSAP"],
    imageUrl: "/images/projects/portfolio-template.jpg",
    imageHint: "portfolio website",
    challenge: "Concevoir un template de portfolio qui soit à la fois visuellement percutant, facile à personnaliser pour des non-développeurs et extrêmement performant.",
    solution: "J'ai opté pour Astro pour sa performance et son architecture 'zero-JS' par défaut. Des animations subtiles ont été ajoutées avec GSAP pour une touche de dynamisme, et un système de thèmes CSS simple permet une personnalisation facile.",
    results: "Le template a été téléchargé plus de 5000 fois et a reçu d'excellents retours pour sa simplicité d'utilisation et sa rapidité.",
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    slug: "mobile-app-ux-ui",
    title: "Design UX/UI pour App Mobile",
    shortDescription: "Conception de l'interface et de l'expérience pour une app de bien-être.",
    metaDescription: "Conception de l'expérience utilisateur (UX) et de l'interface (UI) pour une application mobile de bien-être, en utilisant Figma et des tests utilisateurs.",
    role: "UX/UI Design",
    technologies: ["Figma", "Adobe XD", "UserTesting", "UX Design"],
    imageUrl: "/images/profil.png",
    imageHint: "mobile app",
    challenge: "Créer une interface apaisante et engageante qui motive les utilisateurs à suivre leurs objectifs de bien-être quotidiens.",
    solution: "Après une phase de recherche utilisateur, j'ai conçu un parcours utilisateur simplifié et une interface minimaliste avec une palette de couleurs douces. Des prototypes interactifs ont été créés sur Figma et testés pour itérer sur le design.",
    results: "Les tests utilisateurs ont montré un taux de réussite des tâches de 95% et un score de satisfaction élevé.",
    liveUrl: "#",
  },
  {
    slug: "real-time-chat-app",
    title: "Application de Chat en Temps Réel",
    shortDescription: "Une application de messagerie instantanée avec Firebase.",
    metaDescription: "Construction d'une application de chat en temps réel performante avec React et Firebase, offrant une messagerie instantanée fluide et interactive.",
    role: "Développement React",
    technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/projects/chat-app.jpg",
    imageHint: "chat application",
    challenge: "Construire une application de chat performante où les messages apparaissent instantanément sans avoir à rafraîchir la page.",
    solution: "J'ai utilisé React pour l'interface utilisateur et Firebase (Firestore et Authentication) pour la gestion des données en temps réel et l'authentification des utilisateurs. La connexion à Firestore garantit une synchronisation instantanée des messages.",
    results: "L'application gère avec succès des conversations en temps réel avec une latence minimale, offrant une expérience utilisateur fluide et interactive.",
    githubUrl: "https://github.com",
    liveUrl: "#",
  }
];

export const posts: Post[] = [
  {
    slug: "pourquoi-nextjs-est-un-excellent-choix",
    title: "Pourquoi Next.js est un excellent choix pour les projets modernes",
    excerpt: "Une exploration des fonctionnalités clés de Next.js qui en font le framework de choix pour le développement web contemporain.",
    date: "2024-05-15",
    tags: ["Next.js", "React", "Web Dev"],
    imageUrl: "/images/blog/nextjs-choice.jpg",
    imageHint: "code programming",
    content: "Next.js offre un rendu côté serveur, une génération de sites statiques, et bien plus encore, ce qui le rend incroyablement puissant et performant. Dans cet article, nous allons plonger dans les raisons pour lesquelles vous devriez considérer Next.js pour votre prochain projet."
  },
  {
    slug: "l-importance-de-l-ux-design",
    title: "L'importance de l'UX Design dans le développement de produits",
    excerpt: "L'UX n'est pas seulement une question d'esthétique; c'est la clé de la création de produits que les utilisateurs aiment.",
    date: "2024-04-22",
    tags: ["UX", "Design", "Product"],
    imageUrl: "/images/blog/ux-design.jpg",
    imageHint: "user experience sketch",
    content: "Une bonne expérience utilisateur peut faire la différence entre un produit qui réussit et un qui échoue. Nous discuterons des principes fondamentaux de l'UX et de la manière de les appliquer efficacement dans vos projets."
  },
   {
    slug: "maitriser-tailwind-css",
    title: "Maîtriser Tailwind CSS pour un Design Rapide et Cohérent",
    excerpt: "Découvrez comment Tailwind CSS peut accélérer votre workflow de développement et vous aider à construire des interfaces cohérentes.",
    date: "2024-06-01",
    tags: ["CSS", "Tailwind CSS", "Front-End"],
    imageUrl: "/images/blog/tailwind-css.jpg",
    imageHint: "css code",
    content: "Dans cet article, nous explorons les avantages de l'approche 'utility-first' de Tailwind CSS. De la configuration à la personnalisation, apprenez à tirer le meilleur parti de ce framework CSS populaire pour créer des designs magnifiques et maintenables."
  }
];

export const skills = {
  languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SASS"],
  frameworks: ["React", "Next.js", "Astro", "Vite", "Node.js"],
  design: ["Figma", "Suite Adobe (Photoshop, Illustrator)", "UX/UI Design", "Responsive Design"],
  other: ["Git & GitHub", "REST APIs", "GraphQL", "Firebase", "Gestion de projet (Agile)"],
};

export const socialLinks = {
  name: "Nour'dev",
  linkedin: "https://www.linkedin.com/in/annour-mahamat-abdoulaye-a799ba310",
  github: "https://github.com/nourtd1",
  behance: "https://www.behance.net/",
  email: "nourr.td@gmail.com",
  phone: "+250798977292",
};

export const testimonials: Testimonial[] = [
  {
    quote: "Travailler avec Nour a été une expérience transformatrice. Sa vision pour le design et son attention aux détails techniques ont permis de livrer un produit qui a dépassé toutes nos attentes.",
    author: "Marie Dubois",
    title: "CEO de TechInnovate",
    avatarUrl: "/images/avatars/marie-dubois.jpg",
    avatarHint: "woman portrait"
  },
  {
    quote: "Le professionnalisme et l'expertise de Nour en développement front-end sont inégalés. Il a transformé nos maquettes complexes en une interface réactive et performante.",
    author: "Julien Lefebvre",
    title: "Chef de Produit chez Creativio",
    avatarUrl: "/images/avatars/julien-lefebvre.jpg",
    avatarHint: "man portrait"
  },
  {
    quote: "Non seulement Nour est un développeur talentueux, mais c'est aussi un excellent communicant. Le projet s'est déroulé sans accroc du début à la fin.",
    author: "Sophie Martin",
    title: "Fondatrice de Spark Agency",
    avatarUrl: "/images/avatars/sophie-martin.png",
    avatarHint: "woman portrait professional"
  }
];
