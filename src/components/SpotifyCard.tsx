"use client";
import React from "react";
import { Play, SkipBack, SkipForward } from "lucide-react";
import Image from "next/image";

export const SpotifyCard = () => {
    return (
        <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 justify-between">
            <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-md overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop"
                        alt="Album Art"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold text-neutral-700 dark:text-neutral-200">
                        Wavy
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Karan Aujla, Jay Trak
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "45%" }}></div>
                </div>
                <div className="flex justify-between items-center text-neutral-500 dark:text-neutral-400">
                    <SkipBack size={20} className="cursor-pointer hover:text-white transition" />
                    <Play size={24} className="cursor-pointer hover:text-white transition text-white fill-white" />
                    <SkipForward size={20} className="cursor-pointer hover:text-white transition" />
                </div>
            </div>
        </div>
    );
};
