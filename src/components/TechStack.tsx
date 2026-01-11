"use client";
import React from "react";

interface Language {
  name: string;
  icon: string;
  color: string;
}

const TechStack = () => {
  const languages: Language[] = [
    { name: 'JavaScript', icon: 'JS', color: '#f7df1e' },
    { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
    { name: 'React', icon: '⚛', color: '#61dafb' },
    { name: 'Next.js', icon: 'N', color: '#000000' },
    { name: 'Tailwind', icon: 'TW', color: '#38bdf8' },
    { name: 'Node.js', icon: 'Node', color: '#339933' },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <h2 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-8">
        Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
        {languages.map((tech) => (
          <div
            key={tech.name}
            className="px-4 py-2 rounded-full bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform cursor-default"
          >
            <span style={{ color: tech.color }}>●</span>
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
