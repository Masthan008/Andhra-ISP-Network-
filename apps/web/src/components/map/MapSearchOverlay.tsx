'use client';

import React, { useState } from 'react';

interface MapSearchOverlayProps {
  onSearch: (query: string) => void;
}

export const MapSearchOverlay: React.FC<MapSearchOverlayProps> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute top-6 left-6 z-30 w-full max-w-sm"
    >
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search District, Mandal, PIN Code..."
          className="w-full h-11 pl-10 pr-4 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 shadow-xl focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100 transition-all"
        />
      </div>
    </form>
  );
};

export default MapSearchOverlay;
