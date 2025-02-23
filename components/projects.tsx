"use client";
import Image from "next/image";
import Link from "next/link";
const projects = [
  {
    title: "FK TEXTILE",
    description: "A modern and dynamic corporate website developed for a textile company, featuring Sanity.io, Framer Motion, and TawkTo integrations.",
    image: "/fktekstil.webp", 
    link: "https://github.com/mach2furkan/FK-TEKSTIL-website",
    link2: "https://fktekstil.com",
  },
  {
    title: "MODA DORA",
    description: "A corporate website developed for a modern and minimalist fashion company.",
    image: "/modadora.webp", 
    link: "https://github.com/kelboindaserver/modadora",
    link2: "https://modadora.com.tr",
  },
  {
    title: "NART DEVELOPER",
    description: "The website for our software company initiative, developed collaboratively with university colleagues to showcase our vision and services.",
    image: "/nartdev.webp", 
    link: "https://github.com/kelboindaserver/nart-dev",
    link2: "https://nartdeveloper.com",
  },
  {
    title: "HIZIR VİNÇ",
    description: "A professional website for our family-owned crane rental company, featuring our services, fleet information, and contact details for construction and industrial lifting solutions.",
    image: "/hizirvinc.webp", 
    link: "https://github.com/kelboindaserver/hizirweb",
    link2: "https://hizirvinc.com",
  },
];

export default function Projects() {
  return (
    <>
      <h2 className="text-4xl font-thin text-center py-[2.5rem]">projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 mt-6 max-w-6xl mx-auto pb-[2.5rem]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/80 dark:bg-black/70 rounded-2xl shadow-lg"
          >
            <div className="relative w-full h-[400px] md:h-[300px]">
              <Image
                src={project.image}
                alt={project.title}
                fill={true}
                className="object-contain bg-white/80 dark:bg-black/70 rounded-t-2xl p-2"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <h3 className="text-xl work-medium text-background dark:text-foreground">{project.title}</h3>
              </Link>
              <Link href={project.link2} target="_blank" rel="noopener noreferrer" className="text-lg text-background dark:text-foreground work-thin">View Website</Link>
              <p className="mt-2 text-background dark:text-foreground work-thin">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}