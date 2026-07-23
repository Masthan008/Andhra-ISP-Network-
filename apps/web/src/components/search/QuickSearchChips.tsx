'use client';

import React from 'react';
import { MapPin, Zap, Building2, Globe, Star } from 'lucide-react';

interface QuickSearchChipsProps {
  onSelectChip: (chipQuery: string) => void;
}

export const QuickSearchChips: React.FC<QuickSearchChipsProps> = ({
  onSelectChip,
}) => {
  const chips = [
    { label: 'Visakhapatnam', query: 'Visakhapatnam', icon: MapPin },
    { label: 'PIN 530026', query: '530026', icon: Zap },
    { label: 'Vijayawada', query: 'Vijayawada', icon: Building2 },
    { label: 'FTTH Fiber', query: 'FTTH Fiber', icon: Globe },
    { label: 'Top Rated', query: 'ACT', icon: Star },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto pt-4">
      <span className="text-xs font-medium text-zinc-500">Quick Searches:</span>
      {chips.map((chip, idx) => {
        const IconComponent = chip.icon;
        return (
          <button
            key={idx}
            type="button"
            onClick={() => onSelectChip(chip.query)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-500"
          >
            <IconComponent className="w-3.5 h-3.5 text-cyan-400" />
            <span>{chip.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default QuickSearchChips;
