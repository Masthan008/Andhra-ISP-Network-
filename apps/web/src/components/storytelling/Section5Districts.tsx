'use client';

import React from 'react';

export const Section5Districts: React.FC = () => {
  const regions = [
    {
      name: 'North Coastal AP',
      districts: ['Visakhapatnam', 'Vizianagaram', 'Srikakulam', 'Anakapalli', 'Alluri Sitarama Raju'],
    },
    {
      name: 'Godavari Delta',
      districts: ['East Godavari', 'West Godavari', 'Kakinada', 'Konaseema', 'Eluru'],
    },
    {
      name: 'Krishna & Guntur',
      districts: ['NTR Vijayawada', 'Krishna', 'Guntur', 'Bapatla', 'Palnadu'],
    },
    {
      name: 'Rayalaseema Region',
      districts: ['Tirupati', 'Chittoor', 'Annamayya', 'YSR Kadapa', 'Kurnool', 'Ananthapuramu'],
    },
  ];

  return (
    <section
      data-story-section
      id="districts"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
        <span className="text-xs font-mono font-semibold tracking-wider text-zinc-500 uppercase px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">
          SECTION 05 — GEOGRAPHIC COVERAGE
        </span>
        <h2
          data-story-reveal
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.2]"
        >
          Uniting 26 Districts Under a Single Infrastructure Mesh.
        </h2>
        <p
          data-story-reveal
          className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400"
        >
          Explore broadband coverage across all major economic and agricultural zones of Andhra Pradesh.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {regions.map((region, idx) => (
          <div
            key={idx}
            data-story-reveal
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm"
          >
            <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-50 mb-3 border-b border-zinc-100 dark:border-zinc-800 pb-2">
              {region.name}
            </h3>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
              {region.districts.map((d, dIdx) => (
                <li key={dIdx} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5Districts;
