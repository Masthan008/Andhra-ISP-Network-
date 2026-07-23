'use client';

import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

export const SectionClosingCTA: React.FC = () => {
  return (
    <section
      id="closing-cta"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center flex flex-col items-center gap-6"
    >
      <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/20">
        SECTION 10 — CONNECTING ANDHRA PRADESH
      </span>

      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 max-w-4xl leading-[1.1]">
        Every District. Every Mandal. Every Connection.
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
        Find broadband internet providers without guesswork. Discover verified fiber speeds and branch offices across 26 Districts.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full sm:w-auto">
        <button
          type="button"
          onClick={() => (window.location.href = '#smart-search')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 font-medium text-sm transition-all shadow-lg active:scale-95"
        >
          <span>Search Providers</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => (window.location.href = '#explorer')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium text-sm transition-all shadow-sm active:scale-95"
        >
          <span>Explore AP Map</span>
          <Globe className="w-4 h-4 text-cyan-400" />
        </button>
      </div>
    </section>
  );
};

export default SectionClosingCTA;
