'use client';

import React from 'react';

interface SearchFilterPanelProps {
  activeTech: string;
  onSelectTech: (tech: string) => void;
}

export const SearchFilterPanel: React.FC<SearchFilterPanelProps> = ({
  activeTech,
  onSelectTech,
}) => {
  const filters = [
    { id: 'all', label: 'All Technologies' },
    { id: 'FTTH Fiber', label: 'FTTH Fiber Optic' },
    { id: '5G AirFiber', label: '5G AirFiber' },
    { id: 'Leased Line', label: 'Enterprise Leased Line' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto py-4">
      {filters.map((f) => (
        <button
          key={f.id}
          type="button"
          onClick={() => onSelectTech(f.id)}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            activeTech === f.id
              ? 'bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950 shadow-md'
              : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default SearchFilterPanel;
