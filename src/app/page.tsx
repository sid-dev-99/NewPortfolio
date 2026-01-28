"use client";
import React from "react";
import Header from "../components/Header";
import TechStack from "../components/TechStack";
import ExperienceList from "../components/ExperienceList";
import { ProjectMarquee } from "../components/ProjectMarquee";
import { SpotifyBanner } from "../components/SpotifyBanner";
import { GithubCard } from "../components/GithubCard";
import { FadeIn } from "../components/ui/fade-in";
import GridLines from "../components/GridLines";
import QuoteSection from "../components/QuoteSection";
import CTASection from "../components/CTASection";
import PageLoader from "../components/PageLoader";

export default function Home() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white antialiased selection:bg-violet-500/30 selection:text-white relative transition-colors duration-300">
        {/* Decorative grid lines overlay */}
        <GridLines />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Header />
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

          {/* Quote and Visitor Section */}
          <FadeIn delay={0.6}>
            <QuoteSection />
          </FadeIn>

          {/* CTA Section */}
          <FadeIn delay={0.65}>
            <CTASection />
          </FadeIn>

          {/* Footer */}
          <footer className="py-12 border-t border-neutral-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-neutral-500 text-sm">
                © 2026 Siddharth Sharma
              </p>
              <div className="flex items-center gap-1 text-neutral-500 text-sm">
                <span>Built with</span>
                <span className="text-red-400">♥</span>
                <span>using Next.js & Tailwind</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </PageLoader>
  );
}
