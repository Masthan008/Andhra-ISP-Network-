'use client';

import React from 'react';
import { SearchResultItem } from './searchIndexData';

interface AutocompleteOverlayProps {
  suggestions: SearchResultItem[];
  onSelectSuggestion: (item: SearchResultItem) => void;
}

export const AutocompleteOverlay: React.FC<AutocompleteOverlayProps> = ({
  suggestions,
  onSelectSuggestion,
}) => {
  if (suggestions.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto mt-2 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden divide-y divide-zinc-100 dark:divide-zinc-800">
      <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800/50 text-[10px] font-mono font-semibold text-zinc-500 uppercase">
        INSTANT MATCHES ({suggestions.length})
      </div>
      {suggestions.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelectSuggestion(item)}
          className="p-3.5 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 cursor-pointer flex items-center justify-between transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-lg">{item.logoEmoji}</span>
            <div>
              <span className="font-semibold text-sm text-zinc-950 dark:text-zinc-50 block">
                {item.providerName}
              </span>
              <span className="text-xs text-zinc-500">
                {item.mandal}, {item.district} • PIN {item.pinCode}
              </span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
            {item.rating} ★
          </span>
        </div>
      ))}
    </div>
  );
};

export default AutocompleteOverlay;
