'use client';

import React from 'react';
import { GraduationCap, Building2, Laptop, Landmark } from 'lucide-react';

export const Section1Connectivity: React.FC = () => {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'Digital Education',
      description:
        'Connecting rural students to online learning platforms, competitive exams, and digital university courses.',
    },
    {
      icon: Building2,
      title: 'Enterprise Growth',
      description:
        'Empowering small businesses and Sri City manufacturing hubs with 1:1 dedicated fiber leased line connectivity.',
    },
    {
      icon: Laptop,
      title: 'Remote Work Reach',
      description:
        'Enabling tech professionals and freelancers to work seamlessly from tier-2 and tier-3 mandal towns.',
    },
    {
      icon: Landmark,
      title: 'Citizen Services',
      description:
        'Streamlining access to e-governance portals, healthcare tele-consultations, and digital banking services.',
    },
  ];

  return (
    <section
      data-story-section
      id="connectivity"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/20">
          SECTION 01 — THE FOUNDATION
        </span>
        <h2
          data-story-reveal
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 max-w-3xl leading-[1.2]"
        >
          Broadband Internet is the Nervous System of Modern Andhra Pradesh.
        </h2>
        <p
          data-story-reveal
          className="mt-2 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl"
        >
          From the vibrant technology hubs of Visakhapatnam to remote mandals in
          Rayalaseema, digital connectivity drives economic mobility.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={idx}
              data-story-reveal
              className="group p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <IconComponent className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section1Connectivity;
