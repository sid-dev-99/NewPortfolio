"use client";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import ProjectGrid from "../components/ProjectGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white antialiased selection:bg-teal-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <TechStack />
        <ProjectGrid />

        <footer className="py-10 text-center text-neutral-500 text-sm">
          <p>© 2026 Siddharth Sharma. Built with Next.js, Tailwind & Aceternity UI.</p>
        </footer>
      </div>
    </main>
  );
}
