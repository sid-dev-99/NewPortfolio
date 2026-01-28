"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, MessageCircle, Sparkles } from 'lucide-react';

export const CTASection = () => {
    return (
        <section className="py-12 sm:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900/50 dark:to-neutral-900/30 p-8 sm:p-12 text-center"
            >
                {/* Decorative elements */}
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-600 dark:text-green-400 text-xs font-medium mb-6"
                    >
                        <Sparkles size={12} />
                        Available for projects
                    </motion.div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-3">
                        Hey, you scrolled this far!
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base mb-8 max-w-md mx-auto">
                        That means you're interested. Let's grab a virtual coffee and discuss how I can help bring your ideas to life.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://cal.com/siddharth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-lg"
                        >
                            <Coffee size={18} />
                            Book a Free Call
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:siddharth@example.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 rounded-full font-medium text-sm border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                            <MessageCircle size={18} />
                            Send a Message
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTASection;
