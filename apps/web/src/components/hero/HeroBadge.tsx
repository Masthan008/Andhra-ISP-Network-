'use client';

import React from 'react';

interface HeroBadgeProps {
  text?: string;
  className?: string;
}

export const HeroBadge: React.FC<HeroBadgeProps> = ({
  text = '⚡ CONNECTING EVERY CORNER OF ANDHRA PRADESH',
  className = '',
}) => {
  return (
    <div
      data-hero-badge
      className={`inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-900 shadow-sm backdrop-blur-md transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-100 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
      </span>
      <span>{text}</span>
    </div>
  );
};

export default HeroBadge;
