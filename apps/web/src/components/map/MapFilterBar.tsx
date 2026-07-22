'use client';

import React from 'react';

interface MapFilterBarProps {
  activeTech: string;
  onSelectTech: (tech: string) => void;
}

export const MapFilterBar: React.FC<MapFilterBarProps> = ({
  activeTech,
  onSelectTech,
}) => {
  const filters = [
    { id: 'all', label: 'All Tech' },
    { id: 'fiber', label: 'FTTH Fiber' },
    { id: '5g', label: '5G AirFiber' },
    { id: 'enterprise', label: 'Leased Line' },
  ];

  return (
    <div className="absolute top-20 left-6 z-30 hidden sm:flex items-center gap-1.5 p-1 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg text-xs">
      {filters.map((f) => (
        <button
          key={f.id}
          type="button"
          onClick={() => onSelectTech(f.id)}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            activeTech === f.id
              ? 'bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950 shadow-sm'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default MapFilterBar;
