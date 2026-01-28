"use client";

import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PenguinLoader from './PenguinLoader';

interface PageLoaderProps {
    children: ReactNode;
}

export const PageLoader = ({ children }: PageLoaderProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate page load (or wait for actual content)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Show loader for 1.5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <PenguinLoader />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default PageLoader;
