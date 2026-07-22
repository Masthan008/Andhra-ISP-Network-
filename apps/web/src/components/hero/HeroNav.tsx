'use client';

import React from 'react';

interface HeroNavProps {
  brandName?: string;
  brandTag?: string;
  onSearchClick?: () => void;
  onLoginClick?: () => void;
  className?: string;
}

export const HeroNav: React.FC<HeroNavProps> = ({
  brandName = 'Andhra ISP',
  brandTag = 'NETWORK',
  onSearchClick,
  onLoginClick,
  className = '',
}) => {
  return (
    <header
      data-hero-nav
      className={`fixed top-0 inset-x-0 z-50 h-16 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 transition-all ${className}`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-950 dark:bg-zinc-50 flex items-center justify-center text-white dark:text-zinc-950 font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              {brandName}
            </span>
            <span className="text-[10px] font-mono font-semibold tracking-wider px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 uppercase">
              {brandTag}
            </span>
          </div>
        </a>

        {/* Primary Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a
            href="/ap/districts"
            className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            Districts
          </a>
          <a
            href="/isps"
            className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            ISPs
          </a>
          <a
            href="/compare"
            className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            Compare
          </a>
          <a
            href="/ap/explorer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
          >
            <span>Map Explorer</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600"></span>
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onSearchClick}
            className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 font-medium transition-colors border border-zinc-200/60 dark:border-zinc-800/60"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>Search</span>
            <kbd className="font-mono text-[10px] bg-white dark:bg-zinc-800 px-1 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
              ⌘K
            </kbd>
          </button>

          <button
            type="button"
            onClick={onLoginClick}
            className="inline-flex items-center justify-center h-9 px-4 rounded-lg bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 text-xs font-medium transition-all shadow-sm active:scale-95"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroNav;
