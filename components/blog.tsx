"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  description: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

interface SanityImageSource {
  asset: {
    _ref: string;
    _type: string;
  };
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-21",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        description,
        mainImage {
          asset->{
            _ref,
            url
          }
        }
      }`;

      try {
        const fetchedPosts = await client.fetch(query);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug.current}`}
              key={post._id}
              className="block group"
            >
              <div className="relative h-[300px] bg-foreground dark:bg-[#131313] rounded-lg overflow-hidden">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  width={300}
                  height={300}
                  className="object-cover group-hover:scale-105 transition-transform duration-300 brightness-50"
                />
                <div className="absolute inset-0">
                  <div className=" bg-black/60 dark:bg-white/60 p-6 rounded-lg w-full ">

                  <h3 className="text-xl work-bold mb-2 text-foreground dark:text-background">{post.title}</h3>
                  <p className="text-white dark:text-black work-thin text-md mb-4">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-300 line-clamp-3">{post.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-2xl work-bold mb-4">No Posts Yet</h3>
          <p className="text-gray-600 dark:text-gray-400 work-thin">
            Blog posts are coming soon. Stay tuned!
          </p>
        </div>
      )}
    </div>
  );
} 