'use client';

import React from 'react';
import ScrollProgressBar from './ScrollProgressBar';
import Section1Connectivity from './Section1Connectivity';
import Section2DigitalAP from './Section2DigitalAP';
import Section3Problem from './Section3Problem';
import Section4Solution from './Section4Solution';
import Section5Districts from './Section5Districts';
import Section6SearchSmarter from './Section6SearchSmarter';
import Section7MapPrep from './Section7MapPrep';

export const StorytellingContainer: React.FC = () => {
  return (
    <div className="relative w-full bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 font-sans selection:bg-zinc-950 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950">
      {/* Reading Progress Indicator Bar */}
      <ScrollProgressBar />

      {/* Section 1: Why Connectivity Matters */}
      <Section1Connectivity />

      {/* Section 2: Digital Andhra Pradesh */}
      <Section2DigitalAP />

      {/* Section 3: The Challenge (Problem) */}
      <Section3Problem />

      {/* Section 4: The Solution */}
      <Section4Solution />

      {/* Section 5: Discover Every District */}
      <Section5Districts />

      {/* Section 6: Search Smarter */}
      <Section6SearchSmarter />

      {/* Section 7: Interactive Map Preparation */}
      <Section7MapPrep />
    </div>
  );
};

export default StorytellingContainer;
