'use client';

import React from 'react';

export const Section3Problem: React.FC = () => {
  const problems = [
    {
      title: 'Fragmented Cable Operators',
      description:
        'Local Cable Operators (LCOs) operate in isolated mandal silos without single public directory.',
    },
    {
      title: 'Pan-India Data Overhead',
      description:
        'National ISP portals only display state-level figures without showing village-level reach.',
    },
    {
      title: 'Missing Physical Offices',
      description:
        'Citizens struggle to locate verified branch office addresses or genuine customer care desks.',
    },
  ];

  return (
    <section
      data-story-section
      id="the-problem"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="p-8 sm:p-12 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-wider text-rose-600 dark:text-rose-400 uppercase px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900">
            SECTION 03 — THE CHALLENGE
          </span>
          <h2
            data-story-reveal
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.2]"
          >
            Why Finding a Reliable ISP Has Been Unnecessarily Hard.
          </h2>
          <p
            data-story-reveal
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400"
          >
            Until now, discovering broadband availability meant calling untrusted phone numbers from paper flyers or searching dozens of outdated government portals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              data-story-reveal
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-sm mb-4">
                ✕
              </div>
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {prob.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {prob.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3Problem;
