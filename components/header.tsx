"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isRotating, setIsRotating] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
            const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight - 10;
            window.scrollTo({ 
                top: y, 
                behavior: "smooth"
            });

            // Daha yumuşak bir scroll için
            const startPosition = window.scrollY;
            const distance = y - startPosition;
            const duration = 800;
            let start: number;

            function animation(currentTime: number) {
                if (!start) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);

                const easeInOutCubic = progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                window.scrollTo(0, startPosition + (distance * easeInOutCubic));

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);
        }
    };
    const handleThemeChange = () => {
        setIsRotating(true);
        setTheme(theme === "dark" ? "light" : "dark");
        setTimeout(() => setIsRotating(false), 100);
    };

    if (!mounted) return null;

    return (
        <nav className="flex flex-col gap-1 justify-around items-center p-4 sticky top-0 z-50 backdrop-blur-xl">
            <div className="flex items-center text-white">
                <p 
                    onClick={() => scrollToSection("about")}
                    className="md:text-2xl text-xl work-regular dark:text-foreground text-background cursor-pointer"
                >
                    S.EFE OZ
                </p>
            </div>
            <div className="flex items-center gap-4">
                <p 
                    onClick={() => scrollToSection("about")} 
                    className="text-lg work-extralight cursor-pointer"
                >
                    about me
                </p>
                <p 
                    onClick={() => scrollToSection("projects")} 
                    className="text-lg work-extralight cursor-pointer"
                >
                    projects
                </p>
                <p 
                    onClick={() => scrollToSection("blog")} 
                    className="text-lg work-extralight cursor-pointer"
                >
                    blog
                </p>
                <button 
                    onClick={handleThemeChange}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === "dark" ? (
                        <Sun className={`w-[1.5rem] h-[1.5rem] transition-all duration-500 ${isRotating ? 'rotate-180 scale-75' : ''}`} />
                    ) : (
                        <Moon className={`w-[1.5rem] h-[1.5rem] transition-all duration-500 ${isRotating ? '-rotate-180 scale-75' : ''}`} />
                    )}
                </button>
            </div>
        </nav>
    );
}