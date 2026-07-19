"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import Projects from "@/components/projects";
import { motion } from "framer-motion";
import Blog from "@/components/blog";
import DecryptedText from "@/components/decrytepText";

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
            <DecryptedText
text="Hello, I&apos;m Şadan Efe Öz."
speed={50}
maxIterations={20}
characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
className="revealed"
animateOn="view"
sequential={true}
revealDirection="start"
parentClassName="all-letters"
encryptedClassName="encrypted"
/>
            </h1>
            <p className="md:text-xl mt-4 work-thin">
              I&apos;m a 4th year Software Engineering student at İstinye University and the founder of <Link href="https://befior.com" target="_blank" rel="noopener noreferrer" className="text-white work-medium hover:text-gray-300 transition-all duration-300">Befior</Link>, my own company focused on building modern web solutions. Befior is a modern web solutions company. The company specializes in building fast, scalable, and innovative websites and digital products for businesses and individuals. Befior’s mission is to empower clients with cutting-edge technology, creative design, and tailored digital strategies that help them grow and succeed online. From custom web development to digital transformation, Befior is dedicated to delivering high-quality results and exceptional client experiences.
              <br /><br />
              My passion lies in web development, entrepreneurship, and creating impactful digital products. With Befior, I&apos;ve turned my ideas into reality, helping clients and businesses grow online. I&apos;m always eager to learn, innovate, and stay up-to-date with the latest technologies in the industry.<br /><br />
              On this blog, I share my experiences, insights, and thoughts on tech, startups, and web development. If you&apos;re interested in these topics or want to connect, feel free to check out my posts <Link href="#blog" onClick={() => scrollToSection('blog')} className="text-white work-medium hover:text-gray-300 transition-all duration-300">here</Link>.<br />
              Let&apos;s connect, learn, and build great things together!
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