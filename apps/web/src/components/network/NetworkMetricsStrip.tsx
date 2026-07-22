'use client';

import React from 'react';

export const NetworkMetricsStrip: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto pb-12 pt-6 px-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs">
        <div>
          <span className="block text-xl font-bold font-mono text-zinc-950 dark:text-zinc-50">
            6 Core
          </span>
          <span className="text-zinc-500">Exchange Hubs</span>
        </div>
        <div>
          <span className="block text-xl font-bold font-mono text-zinc-950 dark:text-zinc-50">
            18 Routes
          </span>
          <span className="text-zinc-500">Inter-District Mesh</span>
        </div>
        <div>
          <span className="block text-xl font-bold font-mono text-zinc-950 dark:text-zinc-50">
            370 Gbps
          </span>
          <span className="text-zinc-500">Aggregate Capacity</span>
        </div>
        <div>
          <span className="block text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
            99.9%
          </span>
          <span className="text-zinc-500">Mesh Standard Uptime</span>
        </div>
      </div>
    </div>
  );
};

export default NetworkMetricsStrip;
