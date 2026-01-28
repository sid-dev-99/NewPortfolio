"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const PenguinLoader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-950 transition-colors">
            <div className="flex flex-col items-center gap-6">
                {/* Penguin Animation */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative"
                >
                    {/* Penguin SVG */}
                    <svg width="80" height="100" viewBox="0 0 80 100" className="drop-shadow-lg">
                        {/* Body */}
                        <ellipse cx="40" cy="60" rx="28" ry="35" className="fill-neutral-900 dark:fill-neutral-100" />

                        {/* White belly */}
                        <ellipse cx="40" cy="65" rx="18" ry="25" className="fill-white dark:fill-neutral-800" />

                        {/* Left eye */}
                        <circle cx="32" cy="40" r="6" className="fill-white dark:fill-neutral-200" />
                        <circle cx="33" cy="40" r="3" className="fill-neutral-900 dark:fill-neutral-900" />
                        <circle cx="34" cy="38" r="1" className="fill-white" />

                        {/* Right eye */}
                        <circle cx="48" cy="40" r="6" className="fill-white dark:fill-neutral-200" />
                        <circle cx="49" cy="40" r="3" className="fill-neutral-900 dark:fill-neutral-900" />
                        <circle cx="50" cy="38" r="1" className="fill-white" />

                        {/* Beak */}
                        <path d="M40 48 L35 55 L45 55 Z" className="fill-orange-500" />

                        {/* Left wing */}
                        <motion.ellipse
                            cx="12"
                            cy="60"
                            rx="8"
                            ry="20"
                            className="fill-neutral-900 dark:fill-neutral-100"
                            animate={{ rotate: [-10, 10, -10] }}
                            transition={{ duration: 0.3, repeat: Infinity }}
                            style={{ originX: "100%", originY: "50%" }}
                        />

                        {/* Right wing */}
                        <motion.ellipse
                            cx="68"
                            cy="60"
                            rx="8"
                            ry="20"
                            className="fill-neutral-900 dark:fill-neutral-100"
                            animate={{ rotate: [10, -10, 10] }}
                            transition={{ duration: 0.3, repeat: Infinity }}
                            style={{ originX: "0%", originY: "50%" }}
                        />

                        {/* Left foot */}
                        <ellipse cx="30" cy="93" rx="8" ry="5" className="fill-orange-500" />

                        {/* Right foot */}
                        <ellipse cx="50" cy="93" rx="8" ry="5" className="fill-orange-500" />
                    </svg>
                </motion.div>

                {/* Loading text */}
                <div className="flex items-center gap-1">
                    <span className="text-neutral-600 dark:text-neutral-400 text-sm font-medium">Loading</span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-neutral-600 dark:text-neutral-400 text-sm"
                    >
                        ...
                    </motion.span>
                </div>

                {/* Progress bar */}
                <div className="w-48 h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="h-full w-1/2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default PenguinLoader;
