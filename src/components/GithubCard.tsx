"use client";
import React from "react";

export const GithubCard = () => {
    // Mock data for contribution graph
    const weeks = 52;
    const days = 7;
    const [data, setData] = React.useState<number[][]>([]);

    React.useEffect(() => {
        const newData = Array.from({ length: weeks }).map(() =>
            Array.from({ length: days }).map(() =>
                Math.random() > 0.7 ? Math.floor(Math.random() * 4) : 0
            )
        );
        setData(newData);
    }, []);

    return (
        <div className="row-span-1 md:col-span-2 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-neutral-700 dark:text-neutral-200">
                    GitHub Activity
                </h3>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    1,873 contributions
                </span>
            </div>

            <div className="flex gap-1 overflow-hidden h-full items-end">
                {data.length > 0 ? (
                    data.map((week, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            {week.map((level, j) => {
                                const colors = [
                                    "bg-neutral-800", // 0
                                    "bg-green-900",   // 1
                                    "bg-green-700",   // 2
                                    "bg-green-500",   // 3
                                    "bg-green-300",   // 4
                                ];

                                return (
                                    <div
                                        key={j}
                                        className={`w-2 h-2 rounded-sm ${colors[level]}`}
                                    />
                                );
                            })}
                        </div>
                    ))
                ) : (
                    // Skeleton loading state
                    Array.from({ length: weeks }).map((_, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            {Array.from({ length: days }).map((_, j) => (
                                <div
                                    key={j}
                                    className="w-2 h-2 rounded-sm bg-neutral-200 dark:bg-neutral-800 animate-pulse"
                                />
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
