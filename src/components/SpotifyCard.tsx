"use client";
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const SpotifyCard = () => {
    const { data, error } = useSWR("/api/spotify", fetcher, {
        refreshInterval: 10000,
    });

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const isLoading = !data && !error;

    useEffect(() => {
        if (data?.previewUrl) {
            audioRef.current = new Audio(data.previewUrl);
            audioRef.current.onended = () => setIsPlaying(false);
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [data?.previewUrl]);

    const togglePlay = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    if (isLoading || error || (!data?.title && !isLoading)) {
        return (
            <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 justify-between min-h-[8rem]">
                <div className="animate-pulse flex items-center space-x-4">
                    <div className="rounded-md bg-gray-200 dark:bg-gray-700 h-16 w-16"></div>
                    <div className="flex-1 space-y-2 py-1">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-black border border-transparent flex items-center justify-between space-x-4 overflow-hidden"
        >
            <div className="flex items-center gap-4 min-w-0 flex-1">
                <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                    {data?.albumArt ? (
                        <Image
                            src={data.albumArt}
                            alt="Album Art"
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="bg-gray-800 w-full h-full" />
                    )}
                </div>
                <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" width={16} height={16} />
                        <span className="text-[10px] text-neutral-400">
                            Last played
                        </span>
                    </div>
                    <h3 className="font-bold text-white text-sm truncate">
                        {data?.title}
                    </h3>
                    <p className="text-xs text-neutral-400 truncate">
                        by {data?.artist}
                    </p>
                </div>
            </div>

            <button
                onClick={togglePlay}
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors flex-shrink-0 cursor-pointer"
            >
                {isPlaying ? (
                    <Pause size={20} className="text-white fill-white" />
                ) : (
                    <Play size={20} className="text-white fill-white ml-1" />
                )}
            </button>
        </div>
    );
};
