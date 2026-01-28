"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowDown } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "OneURL",
        description: "A unified link management platform for modern creators. Simplify your online presence with smart analytics.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        tags: ["Next.js", "Supabase", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Mind Mentor AI",
        description: "AI-powered mental health assistant for daily wellness tracking and personalized recommendations.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        tags: ["React", "OpenAI", "Node.js"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "DevFlow",
        description: "A developer productivity tool for managing workflows, tasks, and collaboration.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        tags: ["TypeScript", "Electron", "React"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "CryptoTracker",
        description: "Real-time cryptocurrency tracking dashboard with portfolio management.",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        tags: ["Next.js", "CoinGecko API", "Charts"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative w-[320px] sm:w-[380px] bg-white dark:bg-neutral-900/50 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 shadow-sm dark:shadow-none"
    >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900 via-transparent to-transparent" />

            {/* Hover overlay with links */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLink size={20} className="text-white" />
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github size={20} className="text-white" />
                    </a>
                )}
            </div>
        </div>

        {/* Content */}
        <div className="p-5">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {project.title}
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4 line-clamp-2">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

export const ProjectMarquee = () => {
    return (
        <section id="projects" className="py-16 sm:py-20 w-full overflow-hidden relative">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center mb-10 sm:mb-14 relative z-10 px-4"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight text-center mb-2">
                    Featured Projects
                </h2>
                <p className="text-neutral-500 dark:text-neutral-500 text-sm sm:text-base text-center mb-4">
                    Some things I've built
                </p>

                {/* Animated arrow */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-neutral-400 dark:text-neutral-500"
                >
                    <ArrowDown size={24} />
                </motion.div>
            </motion.div>

            {/* Marquee Section */}
            <div className="relative w-full">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent pointer-events-none" />

                <div className="flex w-full overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 25,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex gap-6 sm:gap-8 px-4 min-w-max"
                    >
                        {/* Render projects twice for seamless loop */}
                        {[...projects, ...projects].map((project, index) => (
                            <ProjectCard key={`${project.id}-${index}`} project={project} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* View all projects link */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center mt-10 sm:mt-12"
            >
                <a
                    href="https://github.com/sid-dev-99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 rounded-full transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                >
                    <Github size={16} />
                    View all on GitHub
                </a>
            </motion.div>
        </section>
    );
};
