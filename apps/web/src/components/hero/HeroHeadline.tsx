'use client';

import React from 'react';

interface HeroHeadlineProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({
  title = 'Discover High-Speed Broadband Across Andhra Pradesh',
  subtitle = 'Explore fiber ISPs, broadband availability, and verified office maps across 26 Districts, 679 Mandals, and 17,000+ Villages down to your PIN Code.',
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <h1
        data-hero-headline
        className="max-w-4xl text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
      >
        {title}
      </h1>
      <p
        data-hero-subtitle
        className="mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg md:text-xl leading-relaxed"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default HeroHeadline;
