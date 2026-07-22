'use client';

import React from 'react';

export const Section4Solution: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Select District',
      desc: 'Choose from 26 AP administrative districts.',
    },
    {
      num: '02',
      title: 'Drill into Mandal',
      desc: 'Explore 679 mandal sub-divisions.',
    },
    {
      num: '03',
      title: 'PIN Code / Village',
      desc: 'Specify your exact 6-digit postal code (e.g. 530026).',
    },
    {
      num: '04',
      title: 'Verified ISP Card',
      desc: 'Access Google Places verified branch office & plans.',
    },
  ];

  return (
    <section
      data-story-section
      id="the-solution"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
        <span className="text-xs font-mono font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900">
          SECTION 04 — THE SOLUTION
        </span>
        <h2
          data-story-reveal
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.2]"
        >
          One Platform. Every Provider. Down to Your Street.
        </h2>
        <p
          data-story-reveal
          className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400"
        >
          Andhra ISP Network organizes hyper-local broadband data into a clean, modern SaaS experience.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            data-story-reveal
            className="relative p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400 block mb-2">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4Solution;
