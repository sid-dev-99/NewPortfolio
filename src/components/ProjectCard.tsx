"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link?: string;
    tags?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    link = "#",
    tags = [],
}) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col w-[280px] sm:w-[320px] h-[320px] sm:h-[360px] rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
            {/* Image Section */}
            <div className="relative w-full h-[60%] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                {/* External Link Icon */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-4 h-4 text-black dark:text-white" />
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                        {title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                        {description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {tags.slice(0, 3).map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};
