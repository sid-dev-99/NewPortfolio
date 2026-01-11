"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/moving-border";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 z-10 flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden border-4 border-white/10">
          <Image
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Hi, I'm Megh
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          A 19yo developer living in Mumbai, India. I love to code and make (break) things.
          I specialize in building premium web applications with modern technologies.
        </p>

        <div className="mt-8 flex gap-4 z-10">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Download CV
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
