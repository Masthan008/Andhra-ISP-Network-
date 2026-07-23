'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Section6SearchSmarter: React.FC = () => {
  return (
    <section
      data-story-section
      id="search-smarter"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/20 w-max">
            SECTION 06 — INTELLIGENT SEARCH
          </span>
          <h2
            data-story-reveal
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.2]"
          >
            Search in Milliseconds. Verify on Google Maps.
          </h2>
          <p
            data-story-reveal
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            Powered by Typesense edge indexing and Google Places address resolution algorithms, our multi-tiered search engine resolves typos, telco aliases, and postal codes instantly.
          </p>
          <ul data-story-reveal className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 font-medium pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instant Sub-20ms Autocomplete (</span>
              <kbd className="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">⌘K</kbd>
              <span>)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verified Google Places Branch Office Cards</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Side-by-Side 4-ISP Provider Comparison Matrix</span>
            </li>
          </ul>
        </div>

        {/* Demo Search Card Preview Showcase */}
        <div
          data-story-reveal
          className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl flex flex-col gap-4"
        >
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <span className="text-xs font-mono font-semibold text-zinc-500">SEARCH RESULTS PREVIEW</span>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/20 px-2 py-0.5 rounded">
              PIN 530026
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-zinc-950 dark:text-zinc-50">ACT Fibernet</h4>
                <p className="text-xs text-zinc-500">FTTH Fiber • 300 Mbps Tiers</p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-full">
                4.6 Rating
              </span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-zinc-950 dark:text-zinc-50">JioFiber</h4>
                <p className="text-xs text-zinc-500">FTTH / 5G AirFiber • 1 Gbps Peak</p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-full">
                4.5 Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6SearchSmarter;
