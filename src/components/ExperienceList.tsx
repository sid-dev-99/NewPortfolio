"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Calendar } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  role: string;
  date: string;
  logo: string;
  logoColor: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Turbo ML',
    role: 'Software Engineering Intern (AI)',
    date: 'April 2025 - July 2025',
    logo: 'T',
    logoColor: '#8b5cf6',
    description: 'Worked on building AI-powered features and machine learning pipelines. Contributed to the core platform development and improved model inference performance.',
    skills: ['Python', 'Machine Learning', 'FastAPI', 'Docker']
  },
  {
    id: 2,
    company: 'Freelance',
    role: 'Full Stack Developer',
    date: 'Jan 2024 - Present',
    logo: 'F',
    logoColor: '#22c55e',
    description: 'Building modern web applications for clients. Specializing in React, Next.js, and Node.js with focus on performance and user experience.',
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL']
  }
];

const ExperienceList = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-10"
      >
        <div className="flex items-center gap-3 mb-2">
          <Briefcase size={24} className="text-neutral-500 dark:text-neutral-400" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            Experience
          </h2>
        </div>
        <p className="text-neutral-500 dark:text-neutral-500 text-sm sm:text-base ml-9">
          My professional journey
        </p>
      </motion.div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group"
          >
            <div
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              className="relative p-4 sm:p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 cursor-pointer"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Company Logo */}
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-lg sm:text-xl font-bold shrink-0"
                    style={{
                      backgroundColor: exp.logoColor + '20',
                      color: exp.logoColor
                    }}
                  >
                    {exp.logo}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{exp.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800/50 rounded-full">
                    <Calendar size={14} className="text-neutral-400 dark:text-neutral-500" />
                    <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">{exp.date}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-neutral-400 dark:text-neutral-500"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
              </div>

              {/* Mobile date */}
              <div className="sm:hidden mt-3 flex items-center gap-1.5">
                <Calendar size={12} className="text-neutral-400 dark:text-neutral-500" />
                <span className="text-xs text-neutral-500 dark:text-neutral-500">{exp.date}</span>
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
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
