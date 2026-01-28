"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export const QuoteSection = () => {
    const [visitorCount, setVisitorCount] = useState<number | null>(null);

    useEffect(() => {
        // Simulate visitor count - in production, this would be an API call
        const baseCount = 30000;
        const randomAdd = Math.floor(Math.random() * 100);
        setVisitorCount(baseCount + randomAdd);
    }, []);

    const formatVisitorCount = (count: number) => {
        return count.toLocaleString();
    };

    const getOrdinalSuffix = (n: number) => {
        const s = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    };

    return (
        <section className="py-12 sm:py-16">
            {/* Quote Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30"
            >
                {/* Large quote mark */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <span className="text-6xl sm:text-8xl font-serif text-neutral-300 dark:text-neutral-700/50 leading-none select-none">
                        "
                    </span>
                </div>

                {/* Quote text */}
                <div className="relative pt-8 sm:pt-10">
                    <p className="text-neutral-600 dark:text-neutral-400 italic text-sm sm:text-base leading-relaxed mb-4">
                        "If the pain doesn't kill me, it will only make me stronger."
                    </p>
                    <p className="text-right text-neutral-800 dark:text-neutral-300 font-medium text-sm sm:text-base">
                        — <span className="italic">Sung Jin-Woo, Solo Leveling</span>
                    </p>
                </div>
            </motion.div>

            {/* Visitor Counter */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex justify-center mt-8"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <Eye size={16} className="text-neutral-400 dark:text-neutral-500" />
                    <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                        You are the{' '}
                        <span className="font-bold text-neutral-900 dark:text-white">
                            {visitorCount ? formatVisitorCount(visitorCount) : '...'}
                            <sup className="text-xs">{visitorCount ? getOrdinalSuffix(visitorCount) : ''}</sup>
                        </span>{' '}
                        visitor
                    </span>
                </div>
            </motion.div>
        </section>
    );
};

export default QuoteSection;
