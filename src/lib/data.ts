import type { Project, Post, Testimonial } from '@/types';

export const personalInfo = {
  name: "Nour",
  title: "Étudiant en Software Engineering (3e année) — web, mobile & cloud",
  yearsOfExperience: "2",
  targetAudience: "Startups tech, agences, projets à impact social",
  portfolioGoal: "Alternance ou premier poste front/mobile, projets freelance",
};

export const projects: Project[] = [
  {
    slug: "cheikh-ahmat-al-nour-app",
    title: "Cheikh-Ahmat-Al-Nour (Mobile App)",
    shortDescription: "Application mobile islamique (Android & iOS) avec audio, livres et notifications.",
    metaDescription: "App mobile construite avec React Native + Expo, backend Express.js + Supabase, audio persistant, multilingue (ar/fr/en).",
    role: "React Native, Backend Express, Intégration Supabase",
    technologies: ["React Native", "Expo", "Express.js", "Supabase", "TypeScript"],
    imageUrl: "/images/profil.png",
    imageHint: "mobile app",
    challenge: "Offrir des khutbas et cours audio avec un lecteur persistant et une expérience multilingue.",
    solution: "Architecture RN + Expo avec lecteur audio en background, contenu livres, Coran, 99 Noms, notifications; API Express + Supabase.",
    results: "Base fonctionnelle prête au déploiement sur Play Store & App Store.",
    githubUrl: "https://github.com/nourtd1",
    liveUrl: undefined,
  },
  {
    slug: "ecommerce-aspnet-webforms",
    title: "E-commerce ASP.NET Web Forms",
    shortDescription: "Site e-commerce structuré (Public, Account, Customer, Seller, Admin).",
    metaDescription: "E-commerce ASP.NET Web Forms avec ProductCard réutilisable, ProductService, gestion des rôles et CRUD sécurisé.",
    role: "ASP.NET Web Forms, SQL Server, Architecture UI",
    technologies: ["C#", "ASP.NET Web Forms", "SQL Server", "Bootstrap", "JavaScript"],
    imageUrl: "/images/projects/ecommerce-platform.jpg",
    imageHint: "ecommerce website",
    challenge: "Structurer un parcours complet avec rôles et sécurité tout en gardant l'UI responsive.",
    solution: "Composants Web Forms réutilisables, service centralisé, couches claires et gestion des rôles.",
    results: "Catalogue, détails produit, auth et rôles opérationnels; amélioration UX en cours.",
    githubUrl: "https://github.com/nourtd1",
    liveUrl: undefined,
  },
  {
    slug: "portfolio-html-css",
    title: "Portfolio HTML/CSS (Template)",
    shortDescription: "Template minimaliste prêt à vendre (Gumroad/Ko‑fi).",
    metaDescription: "Template HTML5 + CSS3 responsive, sections présentation, projets et contact; performant et propre.",
    role: "Intégration front-end",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    imageUrl: "/images/blog/ux-design.jpg",
    imageHint: "portfolio template",
    challenge: "Proposer un template moderne et accessible, facile à adapter.",
    solution: "Structure claire, CSS modulaire, bonnes pratiques d'accessibilité et SEO.",
    results: "Version initiale prête à la mise en vente.",
    githubUrl: "https://github.com/nourtd1",
    liveUrl: "https://nourtd1.github.io/nour.td/",
  },
  {
    slug: "projets-academiques-aspnet",
    title: "Projets académiques ASP.NET",
    shortDescription: "Formulaires, Master Pages, SQL Server (2e année SE).",
    metaDescription: "Exercices ASP.NET: formulaires, conditions, calculs, connexion SQL Server (ManagementDB, Person), Master Page.",
    role: "Développement .NET académique",
    technologies: ["C#", "ASP.NET", "SQL Server"],
    imageUrl: "/images/projects/dashboard-analytics.jpg",
    imageHint: "academic projects",
    challenge: "Appliquer les fondamentaux .NET avec base de données et UI Web Forms.",
    solution: "Pages Web Forms typées, logique côté serveur et accès SQL.",
    results: "Plusieurs mini-projets validant les acquis de la 2e année.",
    githubUrl: "https://github.com/nourtd1",
    liveUrl: undefined,
  },
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
  languages: ["C#", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  frameworks: ["ASP.NET Web Forms", "ASP.NET Core MVC", "React Native", "Express.js", "React"],
  design: ["Figma", "UX/UI Design", "Responsive Design"],
  other: ["SQL Server", "Supabase (PostgreSQL)", "Git & GitHub", "n8n", "REST APIs"],
};

export const socialLinks = {
  name: "Nour'dev",
  linkedin: "https://www.linkedin.com/in/annour-mahamat-abdoulaye-a799ba310",
  github: "https://github.com/nourtd1",
  youtube: "https://youtube.com/@ce_nour?si=RYbtLMxB2Fp6Aajv",
  instagram: "https://www.instagram.com/ce__nour?igsh=MWU0ZXhyM3kzN2pzbQ==",
  tiktok: "https://www.tiktok.com/@tuto.code?_t=ZN-8zO3EjLs1bS&_r=1",
  facebook: "https://www.facebook.com/share/1YbZD28u8Y/",
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
