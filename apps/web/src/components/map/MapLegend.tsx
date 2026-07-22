'use client';

import React from 'react';

export const MapLegend: React.FC = () => {
  return (
    <div className="absolute bottom-6 left-6 z-30 hidden md:flex items-center gap-4 p-3 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg text-xs">
      <span className="font-mono font-semibold text-zinc-500 text-[10px] uppercase">
        COVERAGE DENSITY:
      </span>
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded bg-emerald-500"></span>
        <span className="text-zinc-700 dark:text-zinc-300">High (&gt;90%)</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded bg-blue-500"></span>
        <span className="text-zinc-700 dark:text-zinc-300">Moderate (85-90%)</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="h-3 w-3 rounded bg-amber-500"></span>
        <span className="text-zinc-700 dark:text-zinc-300">Rural (&lt;85%)</span>
      </div>
    </div>
  );
};

export default MapLegend;
