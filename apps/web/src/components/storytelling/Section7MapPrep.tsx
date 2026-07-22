'use client';

import React from 'react';

interface Section7MapPrepProps {
  onLaunchMap?: () => void;
}

export const Section7MapPrep: React.FC<Section7MapPrepProps> = ({
  onLaunchMap = () => (window.location.href = '/ap/explorer'),
}) => {
  return (
    <section
      data-story-section
      id="map-prep"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div
        data-story-reveal
        className="relative p-10 sm:p-16 rounded-3xl bg-zinc-950 text-white overflow-hidden text-center flex flex-col items-center gap-6 shadow-2xl"
      >
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <span className="relative z-10 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800">
          SECTION 07 — SPATIAL EXPLORER
        </span>

        <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1]">
          Ready to Explore Andhra Pradesh Interactively?
        </h2>

        <p className="relative z-10 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Dive into our full-screen vector spatial canvas. Zoom into districts, inspect mandal centroids, and uncover last-mile fiber availability in real time.
        </p>

        <button
          type="button"
          onClick={onLaunchMap}
          className="relative z-10 inline-flex items-center gap-2.5 h-14 px-8 rounded-2xl bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-base transition-all shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950"
        >
          <span>Launch Interactive Map Explorer</span>
          <span className="text-lg">🌐</span>
        </button>
      </div>
    </section>
  );
};

export default Section7MapPrep;
