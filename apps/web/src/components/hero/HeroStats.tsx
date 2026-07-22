'use client';

import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

interface HeroStatsProps {
  stats?: StatItem[];
  className?: string;
}

export const HeroStats: React.FC<HeroStatsProps> = ({
  stats = [
    { value: '26', label: 'Districts Covered' },
    { value: '679', label: 'Mandals Mapped' },
    { value: '17,000+', label: 'Villages Indexed' },
    { value: '450+', label: 'Active ISPs' },
  ],
  className = '',
}) => {
  return (
    <div
      data-hero-stats
      className={`w-full max-w-4xl pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 ${className}`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 font-mono">
              {stat.value}
            </span>
            <span className="mt-1 text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroStats;
