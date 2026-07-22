'use client';

import React from 'react';

interface QuickSearchChipsProps {
  onSelectChip: (chipQuery: string) => void;
}

export const QuickSearchChips: React.FC<QuickSearchChipsProps> = ({
  onSelectChip,
}) => {
  const chips = [
    { label: '📍 Visakhapatnam', query: 'Visakhapatnam' },
    { label: '⚡ PIN 530026', query: '530026' },
    { label: '🏙️ Vijayawada', query: 'Vijayawada' },
    { label: '🌐 FTTH Fiber', query: 'FTTH Fiber' },
    { label: '⭐ Top Rated', query: 'ACT' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto pt-4">
      <span className="text-xs font-medium text-zinc-500">Quick Searches:</span>
      {chips.map((chip, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => onSelectChip(chip.query)}
          className="px-3 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors focus:outline-none focus:ring-1 focus:ring-zinc-950"
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
};

export default QuickSearchChips;
