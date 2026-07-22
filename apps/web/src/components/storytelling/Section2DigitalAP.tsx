'use client';

import React from 'react';

export const Section2DigitalAP: React.FC = () => {
  return (
    <section
      data-story-section
      id="digital-ap"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Story Copy */}
        <div className="flex flex-col gap-6">
          <span className="text-xs font-mono font-semibold tracking-wider text-zinc-500 uppercase px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 w-max">
            SECTION 02 — DIGITAL TRANSFORMATION
          </span>
          <h2
            data-story-reveal
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.2]"
          >
            A State Built on Digital Momentum.
          </h2>
          <p
            data-story-reveal
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            Andhra Pradesh is expanding its optical fiber infrastructure rapidly. With state-wide initiatives like AP State FiberNet (APSFL) alongside major telecom providers like Airtel, Jio, ACT Fibernet, and regional cable operators, fiber optic cables are reaching even the most remote mandals.
          </p>
          <div data-story-reveal className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60">
              <span className="block text-2xl font-bold font-mono text-zinc-950 dark:text-zinc-50">
                85%+
              </span>
              <span className="text-xs text-zinc-500">Mandal Fiber Coverage</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60">
              <span className="block text-2xl font-bold font-mono text-zinc-950 dark:text-zinc-50">
                1000 Mbps
              </span>
              <span className="text-xs text-zinc-500">Peak Gigabit Speed</span>
            </div>
          </div>
        </div>

        {/* Right Graphical Canvas / Connection Graphic */}
        <div
          data-story-reveal
          className="relative p-8 rounded-3xl bg-zinc-950 text-white overflow-hidden shadow-2xl min-h-[340px] flex flex-col justify-between"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wide flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              LIVE NETWORK PULSE
            </span>
            <span className="text-xs text-zinc-400 font-mono">AP METRO MESH</span>
          </div>

          <div className="relative z-10 my-8 flex justify-center">
            {/* Animated SVG Fiber Optic Lines */}
            <svg
              className="w-full max-w-sm h-32 text-emerald-500 stroke-current"
              viewBox="0 0 400 120"
              fill="none"
            >
              <path
                d="M 20 60 Q 100 10 200 60 T 380 60"
                strokeWidth="3"
                strokeDasharray="6 6"
                className="animate-[dash_10s_linear_infinite]"
              />
              <circle cx="20" cy="60" r="6" fill="#10B981" />
              <circle cx="200" cy="60" r="8" fill="#3B82F6" />
              <circle cx="380" cy="60" r="6" fill="#10B981" />
            </svg>
          </div>

          <div className="relative z-10 text-xs text-zinc-400 flex justify-between border-t border-zinc-800 pt-4">
            <span>Visakhapatnam (HQ)</span>
            <span>Vijayawada (Hub)</span>
            <span>Tirupati (South)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2DigitalAP;
