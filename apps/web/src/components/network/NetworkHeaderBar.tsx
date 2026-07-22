'use client';

import React from 'react';

export const NetworkHeaderBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto pt-16 px-4">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span>SECTION 08 — DIGITAL NETWORK MESH</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.1]">
        Interconnected Fiber Routes Across Andhra Pradesh
      </h2>

      <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
        Visualizing how high-speed backbone capacity streams between coastal exchange hubs and inland mandal clusters.
      </p>
    </div>
  );
};

export default NetworkHeaderBar;
