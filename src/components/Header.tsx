'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, Github, Linkedin, Twitter, Download, MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { name: 'Email Me', icon: Mail, href: 'mailto:siddharth@example.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/rawsid' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/sid-dev-99' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/siddharth-sharma' },
  ];

  return (
    <header className="mb-12 sm:mb-16 pt-6 sm:pt-8">
      {/* Top bar */}
      <div className="flex justify-between items-center text-neutral-500 dark:text-neutral-400 text-sm font-mono mb-12 sm:mb-16">
        <div className="flex items-center gap-2">
          <span className="opacity-60">IN</span>
          <span className="tabular-nums">{time}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="opacity-70" />
            <span>Bangalore, India</span>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Profile section */}
      <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 rounded-full opacity-40 dark:opacity-50 blur-xl animate-pulse" />
          {/* Avatar */}
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-neutral-200 dark:border-white/15 shadow-xl dark:shadow-2xl bg-neutral-100 dark:bg-neutral-900">
            <Image
              src="/profile3.png"
              alt="Siddharth Sharma"
              width={112}
              height={112}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-4xl font-bold font-mono text-neutral-900 dark:text-white mb-1">
            Siddharth
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 font-mono text-sm sm:text-base">
            @rawsid
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 space-y-2">
        <p>
          I'm <strong className="text-neutral-900 dark:text-white font-medium">Siddharth</strong>, a 22yo developer living in Bangalore, India. I love to code and make (break) things.
        </p>
        <p>
          I love both <strong className="text-neutral-900 dark:text-white font-medium">Development & Design</strong>. So yes, I can make things look good and actually work. <span className="opacity-70">(Shocking, I know)</span>
        </p>
        <p>
          When I'm <strong className="text-neutral-900 dark:text-white font-medium">not busy</strong>, you'll usually find me watching movies, playing chess, hitting the gym, cycling, or just catching up on some much-needed sleep.
        </p>
      </div>

      {/* Status row */}
      <div className="flex flex-wrap gap-3 mb-8 sm:mb-10">
        <div className="relative inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-full text-green-600 dark:text-green-400 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </div>
        <a
          href="/resume.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-neutral-700 dark:text-neutral-200 text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          download
        >
          <Download size={16} />
          Download CV
        </a>
      </div>

      {/* Social links */}
      <div>
        <p className="text-neutral-500 dark:text-neutral-500 text-sm mb-4">
          Where to find me (digitally) if you wish to
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="inline-flex items-center gap-2 px-3 py-2 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 rounded-lg text-neutral-600 dark:text-neutral-400 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon size={16} />
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
