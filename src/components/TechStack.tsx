"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

// High quality SVG icons from Simple Icons CDN
const technologies = [
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel' },
];

const TechStack = () => {
  return (
    <section className="w-full py-10 sm:py-14">
      {/* Header with icon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <Code2 size={20} className="text-neutral-600 dark:text-neutral-300" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Tech Stack
        </h2>
      </motion.div>

      {/* Tech icons row with floating animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center gap-6 sm:gap-8"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="group relative"
          >
            {/* Floating animation wrapper */}
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {/* Light mode: grayscale -> color on hover */}
              {/* Dark mode: always white/inverted */}
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 sm:w-9 sm:h-9 opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 dark:grayscale dark:hover:grayscale dark:brightness-0 dark:invert"
              />
            </motion.div>
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-800 dark:bg-neutral-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-lg">
              {tech.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
