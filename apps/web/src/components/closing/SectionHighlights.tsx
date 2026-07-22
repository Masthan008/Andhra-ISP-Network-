'use client';

import React from 'react';

export const SectionHighlights: React.FC = () => {
  const highlights = [
    {
      icon: '📍',
      title: 'Instant PIN Code Lookup',
      desc: 'Enter any 6-digit postal code (e.g. 530026) to see fiber ISPs operating on your street.',
    },
    {
      icon: '🗺️',
      title: 'District & Mandal Directory',
      desc: 'Explore connectivity statistics across 26 Districts and 679 Mandals.',
    },
    {
      icon: '🗺️',
      title: 'Google Maps Integration',
      desc: 'Direct shortcuts to verified physical branch offices, customer desks, and service centers.',
    },
    {
      icon: '⚖️',
      title: 'Side-by-Side Comparison',
      desc: 'Compare plans, peak speeds, and technology tiers between ACT, Jio, Airtel, and BSNL.',
    },
  ];

  return (
    <section
      id="highlights"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xl mb-3">
              {h.icon}
            </div>
            <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-50">
              {h.title}
            </h3>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {h.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionHighlights;
