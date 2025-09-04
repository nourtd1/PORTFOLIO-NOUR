import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { Metadata } from "next";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article non trouvé",
      description: "L'article que vous cherchez n'existe pas.",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.imageUrl ? [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: `Image de l'article ${post.title}`,
        },
      ] : [],
      type: 'article',
      url: `/blog/${post.slug}`,
      publishedTime: new Date(post.date).toISOString(),
      tags: post.tags,
    },
     twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}


export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
         <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
        </Link>
        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{post.title}</h1>
            <div className="text-muted-foreground text-sm">
                <span>Publié le {format(new Date(post.date), "d MMMM yyyy", { locale: fr })}</span>
            </div>
            <div className="mt-4 flex flex-wrap justify-start gap-2">
                {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
            </div>
            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  headline: post.title,
                  datePublished: new Date(post.date).toISOString(),
                  articleSection: post.tags?.[0] || "",
                  author: {
                    "@type": "Person",
                    name: "Nour",
                  },
                  image: post.imageUrl ? [post.imageUrl] : undefined,
                }),
              }}
            />
          </header>

          {post.imageUrl && (
            <div className="relative aspect-[16/8] w-full overflow-hidden rounded-lg shadow-lg mb-8">
                <Image
                    src={post.imageUrl}
                    alt={`Image de l'article ${post.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                    priority
                    data-ai-hint={post.imageHint}
                />
            </div>
          )}
          
          <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-foreground/90">
            {post.content}
          </div>
        </article>
      </div>
    </div>
  );
}
