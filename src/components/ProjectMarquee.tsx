"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
    {
        id: 1,
        title: "OneURL",
        description: "A unified link management platform for modern creators.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        tags: ["Next.js", "Supabase", "Tailwind"],
        link: "#",
    },
    {
        id: 2,
        title: "Mind Mentor AI",
        description: "AI-powered mental health assistant for daily wellness.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        tags: ["React", "OpenAI", "Node.js"],
        link: "#",
    },
    {
        id: 3,
        title: "DevFlow",
        description: "A developer productivity tool for managing workflows.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        tags: ["TypeScript", "Electron", "React"],
        link: "#",
    },
    {
        id: 4,
        title: "CryptoTracker",
        description: "Real-time cryptocurrency tracking dashboard.",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        tags: ["Next.js", "CoinGecko API"],
        link: "#",
    },
];

export const ProjectMarquee = () => {
    return (
        <div className="py-20 w-full overflow-hidden relative bg-white dark:bg-black">
            {/* Header Section with Arrow */}
            <div className="flex flex-col items-center justify-center mb-12 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
                    proof of work
                </h2>

                {/* Curved Arrow SVG */}
                <div className="relative w-24 h-24 mt-2">
                    <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full text-neutral-800 dark:text-neutral-200 transform rotate-12"
                    >
                        <path
                            d="M30 20 C 50 20, 70 40, 50 80"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            fill="none"
                            className="path-animate"
                        />
                        <path
                            d="M40 70 L 50 80 L 65 70"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />

                <div className="flex w-full overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex gap-8 px-4 min-w-max"
                    >
                        {/* Render projects twice for seamless loop */}
                        {[...projects, ...projects].map((project, index) => (
                            <div key={`${project.id}-${index}`} className="flex-shrink-0">
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    tags={project.tags}
                                    link={project.link}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <style jsx global>{`
        .path-animate {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: dash 2s linear infinite;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
        </div>
    );
};
