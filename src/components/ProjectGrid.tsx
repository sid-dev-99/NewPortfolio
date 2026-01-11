"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { SpotifyCard } from "./SpotifyCard";
import { GithubCard } from "./GithubCard";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'OneURL',
    description: 'A unified link management platform.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['Next.js', 'Supabase']
  },
  {
    id: 2,
    title: 'Mind Mentor AI',
    description: 'AI-powered mental health assistant.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    tags: ['React', 'OpenAI']
  },
];

const ProjectGrid = () => {
  return (
    <div className="py-20 w-full">
      <h2 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-8 text-center">
        Featured Work
      </h2>
      <BentoGrid className="max-w-4xl mx-auto">
        {/* Row 1 */}
        <div className="md:col-span-2 row-span-1">
          <GithubCard />
        </div>
        <div className="md:col-span-1 row-span-1">
          <SpotifyCard />
        </div>

        {/* Row 2: Projects */}
        {projects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={project.description}
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            }
            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default ProjectGrid;
