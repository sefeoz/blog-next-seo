import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
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

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);
  return {
    title: post?.title || 'Blog Post',
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
        </div>
      );
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
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
              />
            </div>
          )}
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-400 mb-8">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
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
        <p className="text-gray-600">Please try again later.</p>
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