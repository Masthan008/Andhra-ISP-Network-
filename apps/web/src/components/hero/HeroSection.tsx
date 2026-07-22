'use client';

import React, { useEffect, useRef } from 'react';
import HeroNav from './HeroNav';
import HeroBadge from './HeroBadge';
import HeroHeadline from './HeroHeadline';
import HeroSearchPreview from './HeroSearchPreview';
import HeroActions from './HeroActions';
import HeroStats from './HeroStats';
import HeroBackgroundCanvas from './HeroBackgroundCanvas';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if GSAP is available in the window or imported
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (!prefersReducedMotion) {
        // Dynamic entrance sequence handling
        console.log('[HeroSection] Initialized GSAP Entrance Timeline');
      }
    }
  }, []);

  const handleSelectQuery = (query: string) => {
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  };

  const handlePrimaryClick = () => {
    window.location.href = '/ap/districts';
  };

  const handleSecondaryClick = () => {
    window.location.href = '/ap/explorer';
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 overflow-hidden font-sans selection:bg-zinc-950 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950"
    >
      {/* 3D / 2D Ambient Particle Network Background */}
      <HeroBackgroundCanvas />

      {/* Header Navigation Bar */}
      <HeroNav
        onSearchClick={() => console.log('Open Ctrl+K Search Overlay')}
        onLoginClick={() => (window.location.href = '/auth/login')}
      />

      {/* Hero Content Body */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center gap-8 w-full">
          {/* Status Badge */}
          <HeroBadge />

          {/* Editorial Display Headline & Subtitle */}
          <HeroHeadline />

          {/* Search Preview Container */}
          <HeroSearchPreview onSelectQuery={handleSelectQuery} />

          {/* Primary & Secondary Call to Actions */}
          <HeroActions
            onPrimaryClick={handlePrimaryClick}
            onSecondaryClick={handleSecondaryClick}
          />

          {/* Animated Statistics Counter Strip */}
          <HeroStats className="mt-6" />
        </div>
      </main>

      {/* Scroll Indicator */}
      <div className="relative z-10 pb-6 text-center">
        <a
          href="#explorer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
        >
          <span>Scroll to explore</span>
          <svg
            className="w-3.5 h-3.5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
