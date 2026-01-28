"use client";

import React from "react";

/**
 * Decorative grid lines overlay component inspired by dikshit.tech
 * Creates a minimalist grid pattern for visual depth
 */
export const GridLines = () => {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {/* Vertical center lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-full border-l border-r border-dashed border-neutral-300/30 dark:border-white/[0.03]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-full border-l border-r border-dashed border-neutral-300/30 dark:border-white/[0.03]" />

            {/* Container outline */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 max-w-4xl w-full h-full border-l border-r border-dashed border-neutral-300/40 dark:border-white/[0.05]" />
        </div>
    );
};

export default GridLines;
