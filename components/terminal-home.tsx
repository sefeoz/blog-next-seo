"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "next-sanity";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-21",
  useCdn: false,
});

const BG = "#0a0a0a";
const FG = "#d8d8d8";
const AC = "#33ff66";

const DIVIDER =
  "────────────────────────────────────────────────────────────────────────────────";

// Real work, pulled from the site's project list.
const PROJECTS = [
  { domain: "befior.com", url: "https://befior.com", note: "founder · software company" },
  { domain: "daiet.app", url: "https://daiet.app", note: "ai-powered diet planner" },
  { domain: "modadora.com.tr", url: "https://modadora.com.tr", note: "fashion brand site" },
  { domain: "hizirvinc.com", url: "https://hizirvinc.com", note: "crane rental site" },
];

const PAD = 18;

function fileName(post: Post) {
  return `${post.slug?.current ?? "post"}.md`;
}

function isoDate(value: string) {
  if (!value) return "----------";
  return new Date(value).toISOString().slice(0, 10);
}

const rowStyle: React.CSSProperties = {
  display: "block",
  whiteSpace: "pre",
  textDecoration: "none",
  lineHeight: 2.1,
  color: FG,
};

export default function TerminalHome() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt
      }`;
      try {
        const fetched = await client.fetch(query);
        setPosts(fetched);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const glyph = (i: number, len: number) => (i === len - 1 ? "└──" : "├──");
  const prefix = (id: string) => (hover === id ? "> " : "  ");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: FG,
        fontFamily: "'JetBrains Mono', ui-monospace, Menlo, monospace",
        fontSize: "clamp(11px, 3vw, 14px)",
        lineHeight: 1.7,
        display: "flex",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 640,
          padding: "clamp(64px, 14vw, 112px) clamp(16px, 5vw, 24px) 96px",
          boxSizing: "border-box",
        }}
      >
        {/* header / whoami */}
        <div style={{ fontSize: "clamp(13px, 3.4vw, 16px)", fontWeight: 700, whiteSpace: "pre" }}>
          efe@blog:~$ whoami
          <span
            style={{
              color: AC,
              fontWeight: 400,
              animation: "blink 1.06s steps(1) infinite",
              display: "inline-block",
            }}
          >
            {" "}
            █
          </span>
        </div>

        <div style={{ marginTop: 28, opacity: 0.55, whiteSpace: "pre-wrap" }}>
          {`# şadan efe öz — software engineer.
# istinye university grad. founder of befior (befior.com),
# a software company. these days i live in the backend.`}
        </div>

        <div style={{ marginTop: 16, opacity: 0.4, whiteSpace: "pre-wrap" }}>
          {`# stack: typescript · next.js · react · node · sanity`}
        </div>

        {/* projects */}
        <div
          style={{ margin: "44px 0", opacity: 0.25, whiteSpace: "pre", overflow: "hidden" }}
        >
          {DIVIDER}
        </div>

        <div style={{ whiteSpace: "pre" }}>$ ls ./projects</div>
        <div style={{ marginTop: 14 }}>
          {PROJECTS.map((p, i) => {
            const id = `proj-${i}`;
            return (
              <Link
                key={p.domain}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHover(id)}
                onMouseLeave={() => setHover(null)}
                style={rowStyle}
              >
                <span style={{ opacity: 0.45 }}>
                  {prefix(id)}
                  {glyph(i, PROJECTS.length)}{" "}
                </span>
                <span style={{ color: AC }}>{p.domain.padEnd(PAD)}</span>
                <span style={{ opacity: 0.45 }}>{p.note}</span>
              </Link>
            );
          })}
        </div>

        {/* posts */}
        <div
          style={{ margin: "44px 0", opacity: 0.25, whiteSpace: "pre", overflow: "hidden" }}
        >
          {DIVIDER}
        </div>

        <div style={{ whiteSpace: "pre" }}>$ ls -t ./posts</div>
        <div style={{ marginTop: 14 }}>
          {posts.length === 0 ? (
            <div style={{ opacity: 0.45, whiteSpace: "pre", lineHeight: 2.1 }}>
              # no posts yet — check back soon
            </div>
          ) : (
            posts.map((post, i) => {
              const id = `post-${i}`;
              return (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  onMouseEnter={() => setHover(id)}
                  onMouseLeave={() => setHover(null)}
                  style={rowStyle}
                >
                  <span style={{ opacity: 0.45 }}>
                    {prefix(id)}
                    {glyph(i, posts.length)} {isoDate(post.publishedAt)}
                  </span>
                  {"  "}
                  <span style={{ color: AC }}>{fileName(post)}</span>
                </Link>
              );
            })
          )}
        </div>

        {/* contact */}
        <div
          style={{ margin: "44px 0", opacity: 0.25, whiteSpace: "pre", overflow: "hidden" }}
        >
          {DIVIDER}
        </div>

        <div style={{ whiteSpace: "pre", opacity: 0.9 }}>
          <Link
            href="https://befior.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: AC, textDecoration: "none" }}
          >
            [befior]
          </Link>
          {"  "}
          <span style={{ opacity: 0.35 }}>│</span>
          {"  "}
          <Link
            href="https://github.com/sefeoz"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: AC, textDecoration: "none" }}
          >
            [github]
          </Link>
          {"  "}
          <span style={{ opacity: 0.35 }}>│</span>
          {"  "}
          <Link
            href="https://www.linkedin.com/in/şadan-efe-öz-2242441ba"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: AC, textDecoration: "none" }}
          >
            [linkedin]
          </Link>
          {"  "}
          <span style={{ opacity: 0.35 }}>│</span>
          {"  "}
          <Link href="mailto:kelboi361@gmail.com" style={{ color: AC, textDecoration: "none" }}>
            [mail]
          </Link>
        </div>
      </div>
    </div>
  );
}
