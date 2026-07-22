'use client';

import React from 'react';

interface HeroSearchPreviewProps {
  placeholder?: string;
  popularItems?: Array<{ label: string; query: string }>;
  onSelectQuery?: (query: string) => void;
  className?: string;
}

export const HeroSearchPreview: React.FC<HeroSearchPreviewProps> = ({
  placeholder = 'Search by District, Mandal, PIN Code or ISP (e.g. 530026, Gajuwaka)...',
  popularItems = [
    { label: 'Visakhapatnam', query: 'visakhapatnam' },
    { label: 'Vijayawada', query: 'vijayawada' },
    { label: 'Tirupati', query: 'tirupati' },
    { label: 'PIN 530026', query: '530026' },
  ],
  onSelectQuery,
  className = '',
}) => {
  return (
    <div
      data-hero-search
      className={`w-full max-w-2xl flex flex-col items-center gap-3 ${className}`}
    >
      {/* Search Input Preview Box */}
      <div className="relative w-full group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 dark:group-focus-within:text-zinc-100 transition-colors">
          <svg
            className="w-5 h-5"
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
        </div>
        <input
          type="text"
          readOnly
          placeholder={placeholder}
          className="w-full h-14 pl-12 pr-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl text-sm md:text-base text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 shadow-lg shadow-zinc-950/5 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100 transition-all cursor-pointer"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <kbd className="hidden sm:inline-flex items-center gap-1 h-8 px-2.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <span>⌘</span>K
          </kbd>
        </div>
      </div>

      {/* Popular Quick Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <span className="font-medium">Popular:</span>
        {popularItems.map((item) => (
          <button
            key={item.query}
            type="button"
            onClick={() => onSelectQuery?.(item.query)}
            className="px-2.5 py-1 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-950"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSearchPreview;
