"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import Projects from "@/components/projects";
import { motion } from "framer-motion";
import Blog from "@/components/blog";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className="relative">
      {/* Hero Section */}
      <section
        id="about"
        className="flex items-start pt-8 max-w-6xl md:mx-auto px-12 pb-12 md:pb-0"
        aria-labelledby="about-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h1 id="about-heading" className="md:text-3xl text-2xl work-medium">
              Hello, I&apos;m Sadan Efe Oz.
            </h1>
            <p className="md:text-xl mt-4 work-thin">
              I&apos;m a third-year Software Engineering student at İstinye University, and I&apos;ve been diving deep into the world of web development.
              Right now, I&apos;m mostly focused on building fast, modern, and scalable websites with Next.js, and I&apos;m constantly exploring new technologies to sharpen my skills.
              While studying, I also handle the accounting responsibilities for our family&apos;s crane rental business, which gives me valuable real-world business experience.
              <br />
              <br />
              I&apos;ve always been fascinated by how tech is shaping our world, so I love keeping up with the latest trends, innovations, and industry updates.
              But instead of just reading about them, I decided to start sharing my own thoughts and insights right here on this blog. 
              If you&apos;re into tech, web development, or just enjoy geeking out about the latest digital trends, you&apos;ll probably find something interesting here. 
              Feel free to check out my posts <Link href="#blog" onClick={() => scrollToSection('blog')} className="text-white work-medium hover:text-gray-300 transition-all duration-300">here</Link>.
              <br />
              Let&apos;s connect, learn, and build cool things together!
            </p>
          </div>

          {/* Images */}
          <figure className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-4">
            <Image
              src="/intro1.webp"
              alt="Sadan Efe Oz - Software Engineering Student"
              width={1000}
              height={1000}
              className="rounded-lg brightness-75 hover:brightness-100 transition-all duration-300"
              priority
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <Image
              src="/intro2.webp"
              alt="Sadan Efe Oz - Web Developer"
              width={1000}
              height={1000}
              className="rounded-lg brightness-75 hover:brightness-100 transition-all duration-300 hidden md:block"
              priority
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <Image
              src="/intro3.webp"
              alt="Sadan Efe Oz - Technology Enthusiast"
              width={1000}
              height={1000}
              className="rounded-lg brightness-75 hover:brightness-100 transition-all duration-300"
              priority
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </figure>

          {/* Social Media Links */}
          <nav className="mt-5 flex justify-center items-center gap-4" aria-label="Social media links">
            <Link 
              href="https://github.com/sefeoz" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="w-10 h-10 hover:brightness-50 transition-all duration-300" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/şadan-efe-öz-2242441ba" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-10 h-10 hover:brightness-50 transition-all duration-300" />
            </Link>
            <Link 
              href="https://www.instagram.com/sefeoz/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-10 h-10 hover:brightness-50 transition-all duration-300" />
            </Link>
            <Link 
              href="https://x.com/sefeoz/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-10 h-10 hover:brightness-50 transition-all duration-300" />
            </Link>
          </nav>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="bg-foreground dark:bg-background mt-5"
        aria-labelledby="projects-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.div>
      </section>

      {/* BLOG SECTION */}
      <section
        id="blog"
        className="flex flex-col items-center justify-center"
        aria-labelledby="blog-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="blog-heading" className="text-4xl font-thin text-center py-[2.5rem]">blog</h2>
          <Blog />
        </motion.div>
      </section>
    </main>
  );
}