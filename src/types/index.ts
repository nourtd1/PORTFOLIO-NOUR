export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  metaDescription: string;
  role: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  challenge: string;
  solution: string;
  results: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  imageUrl?: string;
  imageHint?: string;
  content: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
  avatarHint: string;
}
