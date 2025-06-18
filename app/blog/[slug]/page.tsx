import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  description: string;
  body: unknown; // PortableText için unknown kullanıyoruz
  mainImage?: {
    asset: {
      url: string;
    };
  };
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-21",
  useCdn: false,
});

async function getPost(slug: Promise<string> | string) {
  const resolvedSlug = await slug;
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    description,
    body,
    mainImage {
      asset->{
        url
      }
    }
  }`;

  const post = await client.fetch(query, { slug: resolvedSlug });
  return post;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const publishedDate = new Date(post.publishedAt).toISOString();
  const modifiedDate = new Date().toISOString();

  return {
    title: post.title,
    description: post.description,
    keywords: [
      "blog",
      "yazılım",
      "teknoloji", 
      "web development",
      post.title.toLowerCase(),
      ...post.description.split(' ').slice(0, 5) // İlk 5 kelimeyi keyword olarak ekle
    ],
    authors: [{ name: "Sadan Efe Oz" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      authors: ["Sadan Efe Oz"],
      images: post.mainImage?.asset?.url ? [
        {
          url: post.mainImage.asset.url,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : [],
    },
    alternates: {
      canonical: `/blog/${post.slug.current}`,
    },
  };
}

// Structured Data (JSON-LD) için helper function
function generateStructuredData(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": "Sadan Efe Oz",
      "url": "https://sefeoz.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "S.EFE OZ Blog",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sefeoz.vercel.app/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": new Date().toISOString(),
    "image": post.mainImage?.asset?.url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://sefeoz.vercel.app/blog/${post.slug.current}`
    }
  };
}

export const revalidate = 3600; // 1 saat

export default async function BlogPost({ params }: PageProps) {
  try {
    const resolvedParams = await params;
    const post = await getPost(resolvedParams.slug);

    if (!post) {
      return (
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p className="text-gray-600 dark:text-gray-400">
            The requested blog post could not be found.
          </p>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to homepage
          </Link>
        </div>
      );
    }

    const structuredData = generateStructuredData(post);

    return (
      <Suspense fallback={
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      }>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        <Link href="/" className="flex items-center gap-2 mx-2">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-lg work-thin">back to page</span>
          </Link>
        <article className="max-w-4xl mx-auto px-6 py-12">
          {post.mainImage?.asset?.url && (
            <div className="mb-8">
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={1000}
                height={1000}
                className="w-full h-[400px] object-cover rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <time 
              dateTime={post.publishedAt}
              className="text-gray-400 mb-4 block"
            >
              {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.description && (
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                {post.description}
              </p>
            )}
          </header>
          <div className="prose prose-invert max-w-none">
            <PortableText value={post.body} />
          </div>
        </article>
      </Suspense>
    );
  } catch (error) {
    console.error('Error fetching post:', error);
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Error loading post</h1>
        <p className="text-gray-600 dark:text-gray-400">
          An error occurred while loading this post. Please try again later.
        </p>
      </div>
    );
  }
}

export async function generateStaticParams() {
  const query = `*[_type == "post"]{
    slug
  }`;
  const posts = await client.fetch(query);
  
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
} 