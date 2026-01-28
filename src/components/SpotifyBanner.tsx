"use client";
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const SpotifyBanner = () => {
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
        return null;
    }

    return (
        <div className="w-full max-w-2xl mx-auto mb-8">
            <div className="rounded-xl p-3 bg-white dark:bg-[#111] border border-neutral-200 dark:border-white/5 flex items-center justify-between gap-4 shadow-sm dark:shadow-lg">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className="relative h-12 w-12 rounded-md overflow-hidden flex-shrink-0 bg-neutral-100 dark:bg-neutral-800">
                        {data?.albumArt ? (
                            <Image
                                src={data.albumArt}
                                alt="Album Art"
                                fill
                                className="object-cover"
                                sizes="48px"
                            />
                        ) : (
                            <div className="bg-neutral-100 dark:bg-neutral-800 w-full h-full" />
                        )}
                    </div>

                    <div className="flex flex-col min-w-0 justify-center">
                        <div className="flex items-center gap-2 mb-0.5">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" width={14} height={14} />
                            <span className="text-[10px] text-[#1DB954] font-bold uppercase tracking-wider">
                                Last played
                            </span>
                        </div>
                        <h3 className="font-bold text-neutral-900 dark:text-white text-sm truncate leading-tight">
                            {data?.title}
                        </h3>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                            by {data?.artist}
                        </p>
                    </div>
                </div>

                <button
                    onClick={togglePlay}
                    className="h-10 w-10 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors flex-shrink-0 cursor-pointer group"
                >
                    {isPlaying ? (
                        <Pause size={16} className="text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white fill-current" />
                    ) : (
                        <Play size={16} className="text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white fill-current ml-0.5" />
                    )}
                </button>
            </div>
        </div>
    );
};
