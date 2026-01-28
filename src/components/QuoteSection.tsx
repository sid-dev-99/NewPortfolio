"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, RefreshCw } from 'lucide-react';

// Dynamic quotes collection - inspirational quotes from various sources
const quotes = [
    {
        text: "The master has failed more times than the beginner has even tried.",
        author: "Stephen McCranie",
        source: null
    },
    {
        text: "A journey of a thousand miles begins with a single step.",
        author: "Lao Tzu",
        source: "Tao Te Ching"
    },
    {
        text: "The softest things in the world overcome the hardest things.",
        author: "Lao Tzu",
        source: "Tao Te Ching"
    },
    {
        text: "When you let go of what you are, you become what you might be.",
        author: "Lao Tzu",
        source: "Tao Te Ching"
    },
    {
        text: "Knowing others is intelligence; knowing yourself is true wisdom.",
        author: "Lao Tzu",
        source: "Tao Te Ching"
    },
    {
        text: "To finish first, you must first finish.",
        author: "Juan Manuel Fangio",
        source: "Formula 1"
    },
    {
        text: "If you no longer go for a gap that exists, you are no longer a racing driver.",
        author: "Ayrton Senna",
        source: "Formula 1"
    },
    {
        text: "Smooth seas do not make skillful sailors.",
        author: "African Proverb",
        source: null
    },
    {
        text: "The obstacle is the way.",
        author: "Marcus Aurelius",
        source: "Meditations"
    },
    {
        text: "We suffer more in imagination than in reality.",
        author: "Seneca",
        source: null
    },
    {
        text: "It's only after we've lost everything that we're free to do anything.",
        author: "Chuck Palahniuk",
        source: "Fight Club"
    },
    {
        text: "You are not your job. You are not how much money you have in the bank.",
        author: "Chuck Palahniuk",
        source: "Fight Club"
    },
];

export const QuoteSection = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [liveVisitors, setLiveVisitors] = useState<number>(0);
    const [totalVisitors, setTotalVisitors] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Initialize with random quote
    useEffect(() => {
        setCurrentQuoteIndex(Math.floor(Math.random() * quotes.length));

        // Simulate real-time visitor count (replace with actual analytics in production)
        const baseVisitors = 30000 + Math.floor(Math.random() * 500);
        setTotalVisitors(baseVisitors);

        // Simulate live visitors online (1-15 people)
        const updateLiveVisitors = () => {
            setLiveVisitors(Math.floor(Math.random() * 12) + 3);
        };
        updateLiveVisitors();

        // Update live visitors every 5-10 seconds
        const interval = setInterval(() => {
            updateLiveVisitors();
        }, 5000 + Math.random() * 5000);

        return () => clearInterval(interval);
    }, []);

    const nextQuote = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const currentQuote = quotes[currentQuoteIndex];

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
                className="relative p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/30 group cursor-pointer"
                onClick={nextQuote}
            >
                {/* Large quote mark */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <span className="text-6xl sm:text-8xl font-serif text-neutral-300 dark:text-neutral-700/50 leading-none select-none">
                        "
                    </span>
                </div>

                {/* Refresh hint */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <RefreshCw size={16} className="text-neutral-400 dark:text-neutral-500" />
                </div>

                {/* Quote text with animation */}
                <div className="relative pt-8 sm:pt-10 min-h-[120px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuoteIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-neutral-600 dark:text-neutral-400 italic text-sm sm:text-base leading-relaxed mb-4">
                                "{currentQuote.text}"
                            </p>
                            <p className="text-right text-neutral-800 dark:text-neutral-300 font-medium text-sm sm:text-base">
                                — <span className="italic">{currentQuote.author}</span>
                                {currentQuote.source && (
                                    <span className="text-neutral-500 dark:text-neutral-500 ml-1">
                                        ({currentQuote.source})
                                    </span>
                                )}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Click hint */}
                <p className="text-center text-xs text-neutral-400 dark:text-neutral-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for another quote
                </p>
            </motion.div>

            {/* Visitor Counters */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
            >
                {/* Live visitors */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                        {liveVisitors} online now
                    </span>
                </div>

                {/* Total visitors */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <Eye size={16} className="text-neutral-400 dark:text-neutral-500" />
                    <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                        You are the{' '}
                        <span className="font-bold text-neutral-900 dark:text-white">
                            {totalVisitors.toLocaleString()}
                            <sup className="text-xs">{getOrdinalSuffix(totalVisitors)}</sup>
                        </span>{' '}
                        visitor
                    </span>
                </div>
            </motion.div>
        </section>
    );
};

export default QuoteSection;
