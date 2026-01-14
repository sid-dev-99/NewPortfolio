"use client";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import ExperienceList from "../components/ExperienceList";
import { ProjectMarquee } from "../components/ProjectMarquee";
import { SpotifyBanner } from "../components/SpotifyBanner";
import { GithubCard } from "../components/GithubCard";
import { FadeIn } from "../components/ui/fade-in";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased selection:bg-teal-500 selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Header />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Hero />
        </FadeIn>
        <FadeIn delay={0.15}>
          <SpotifyBanner />
        </FadeIn>
        <FadeIn delay={0.2}>
          <TechStack />
        </FadeIn>
        <FadeIn delay={0.3}>
          <ExperienceList />
        </FadeIn>
        <FadeIn delay={0.4}>
          <ProjectMarquee />
        </FadeIn>
        <FadeIn delay={0.5}>
          <div className="py-10">
            <GithubCard />
          </div>
        </FadeIn>

        <footer className="py-10 text-center text-neutral-500 text-sm">
          <p>© 2026 Siddharth Sharma. Built with Next.js, Tailwind & Aceternity UI.</p>
        </footer>
      </div>
    </main>
  );
}
