'use client';

import React, { useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
      const isSlash = e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA';

      if (isCmdK || isSlash) {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }

      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        if (value) {
          onClear();
        } else {
          inputRef.current?.blur();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [value, onClear]);

  return (
    <div className="relative w-full max-w-3xl mx-auto group">
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-cyan-400 transition-colors">
        <Search className="w-6 h-6" />
      </div>

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by District, Mandal, PIN Code or ISP (e.g. 530026, Visakhapatnam, ACT)..."
        className="w-full h-16 pl-14 pr-24 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl text-base md:text-lg text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 shadow-2xl focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all"
      />

      <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
        {value ? (
          <button
            type="button"
            onClick={onClear}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
            title="Clear search (Escape)"
          >
            <X className="w-4 h-4" />
          </button>
        ) : (
          <kbd
            onClick={() => inputRef.current?.focus()}
            className="hidden sm:inline-flex items-center gap-1 h-8 px-2.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-xs font-mono text-zinc-500 dark:text-zinc-400 cursor-pointer hover:border-cyan-500 transition-colors"
          >
            <span className="text-xs">⌘</span>K
          </kbd>
        )}
      </div>
    </div>
  );
};

export default SpotlightSearchBar;
