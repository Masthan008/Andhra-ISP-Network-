'use client';

import React from 'react';

interface HeroActionsProps {
  primaryText?: string;
  secondaryText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  primaryText = 'Discover Providers',
  secondaryText = 'View Coverage Map',
  onPrimaryClick,
  onSecondaryClick,
  className = '',
}) => {
  return (
    <div
      data-hero-actions
      className={`flex flex-col sm:flex-row items-center gap-3 ${className}`}
    >
      {/* Primary CTA Button */}
      <button
        type="button"
        onClick={onPrimaryClick}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 font-medium text-sm transition-all shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100 focus:ring-offset-2"
      >
        <span>{primaryText}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>

      {/* Secondary CTA Button */}
      <button
        type="button"
        onClick={onSecondaryClick}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium text-sm transition-all shadow-sm active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100"
      >
        <svg
          className="w-4 h-4 text-zinc-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.055M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
        <span>{secondaryText}</span>
      </button>
    </div>
  );
};

export default HeroActions;
