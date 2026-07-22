'use client';

import React from 'react';

interface SpotlightSearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onClear: () => void;
}

export const SpotlightSearchBar: React.FC<SpotlightSearchBarProps> = ({
  value,
  onChange,
  onClear,
}) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto group">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-zinc-950 dark:group-focus-within:text-zinc-100 transition-colors">
        <svg
          className="w-6 h-6"
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by District, Mandal, PIN Code or ISP (e.g. 530026, Visakhapatnam, ACT)..."
        className="w-full h-16 pl-14 pr-24 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl text-base md:text-lg text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 shadow-2xl focus:outline-none focus:border-zinc-950 dark:focus:border-zinc-100 transition-all"
      />

      <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
        {value ? (
          <button
            type="button"
            onClick={onClear}
            className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 transition-colors text-xs font-bold"
          >
            ✕
          </button>
        ) : (
          <kbd className="hidden sm:inline-flex items-center gap-1 h-8 px-2.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <span>⌘</span>K
          </kbd>
        )}
      </div>
    </div>
  );
};

export default SpotlightSearchBar;
