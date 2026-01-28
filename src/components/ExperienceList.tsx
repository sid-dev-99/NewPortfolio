"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Briefcase, ExternalLink } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  role: string;
  date: string;
  logo: string;
  logoColor: string;
  bgGradient: string;
  description: string;
  skills: string[];
  link?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Turbo ML',
    role: 'Software Engineering Intern (AI)',
    date: 'Apr 2025 - Jul 2025',
    logo: 'T',
    logoColor: '#8b5cf6',
    bgGradient: 'from-violet-500/20 to-purple-600/20',
    description: 'Worked on building AI-powered features and machine learning pipelines. Contributed to the core platform development and improved model inference performance by 40%.',
    skills: ['Python', 'Machine Learning', 'FastAPI', 'Docker'],
    link: 'https://turboml.com'
  },
  {
    id: 2,
    company: 'Freelance',
    role: 'Full Stack Developer',
    date: 'Jan 2024 - Present',
    logo: 'F',
    logoColor: '#22c55e',
    bgGradient: 'from-green-500/20 to-emerald-600/20',
    description: 'Building modern web applications for clients worldwide. Specializing in React, Next.js, and Node.js with focus on performance, user experience, and scalable architecture.',
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
  }
];

const ExperienceList = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <Briefcase size={20} className="text-neutral-600 dark:text-neutral-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Experience
          </h2>
        </div>
        <p className="text-neutral-500 dark:text-neutral-500 text-sm sm:text-base ml-11">
          Where I've worked and what I've built
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800 dark:to-transparent hidden sm:block" />

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 hidden sm:block z-10" />

              {/* Card */}
              <div
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className={`relative ml-0 sm:ml-12 p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 group overflow-hidden
                  bg-white dark:bg-neutral-900/50 
                  border border-neutral-200 dark:border-neutral-800 
                  hover:border-neutral-300 dark:hover:border-neutral-700
                  hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-neutral-900/50`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-4">
                      {/* Logo */}
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-lg sm:text-xl font-bold shrink-0 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${exp.logoColor}30, ${exp.logoColor}50)`,
                          color: exp.logoColor,
                          border: `1px solid ${exp.logoColor}30`
                        }}
                      >
                        {exp.logo}
                      </motion.div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                            {exp.company}
                          </h3>
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                            >
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-mono bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-md">
                        {exp.date}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedId === exp.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-neutral-400 dark:text-neutral-500"
                      >
                        <ChevronRight size={18} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Skills preview */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.skills.slice(0, expandedId === exp.id ? exp.skills.length : 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {expandedId !== exp.id && exp.skills.length > 3 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500">
                        +{exp.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-neutral-200 dark:border-neutral-800">
                          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceList;
