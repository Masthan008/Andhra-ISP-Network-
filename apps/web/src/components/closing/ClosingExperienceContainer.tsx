'use client';

import React from 'react';
import SectionClosingCTA from './SectionClosingCTA';
import SectionHighlights from './SectionHighlights';
import SectionTrust from './SectionTrust';
import SectionFAQ from './SectionFAQ';
import SectionNewsletter from './SectionNewsletter';
import EnterpriseFooter from './EnterpriseFooter';

export const ClosingExperienceContainer: React.FC = () => {
  return (
    <div className="relative w-full bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 font-sans selection:bg-zinc-950 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950">
      {/* Section 1 & 2: Editorial Closing Message & Conversion CTAs */}
      <SectionClosingCTA />

      {/* Section 3: Platform Highlights */}
      <SectionHighlights />

      {/* Section 4: Trust & Reliability Metrics */}
      <SectionTrust />

      {/* Section 5: Interactive FAQ Accordion */}
      <SectionFAQ />

      {/* Section 6: Newsletter Coverage Updates */}
      <SectionNewsletter />

      {/* Section 7: Enterprise Sitemap Footer */}
      <EnterpriseFooter />
    </div>
  );
};

export default ClosingExperienceContainer;
