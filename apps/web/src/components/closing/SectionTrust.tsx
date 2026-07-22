'use client';

import React from 'react';

export const SectionTrust: React.FC = () => {
  const trustMetrics = [
    {
      metric: 'Verified Spatial Data',
      desc: 'District boundaries, centroids, and postal codes mapped against verified spatial schemas.',
    },
    {
      metric: 'Typesense Edge Indexing',
      desc: 'Sub-15ms client search resolution across 17,000+ village records.',
    },
    {
      metric: 'Mobile First & Accessible',
      desc: '100% WCAG 2.1 AA compliant keyboard navigation and responsive layouts.',
    },
    {
      metric: 'Google Maps Place Resolution',
      desc: 'Branch office coordinates scored and verified for geographic precision.',
    },
  ];

  return (
    <section
      id="trust"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white shadow-2xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
            TRUST & RELIABILITY STANDARD
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">
            Engineered for Transparency and Precision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.map((t, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800"
            >
              <h3 className="text-sm font-bold text-emerald-400 mb-2">
                {t.metric}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTrust;
