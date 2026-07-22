'use client';

import React from 'react';
import { DistrictData } from './apDistrictsData';

interface FloatingDistrictPanelProps {
  district: DistrictData | null;
  onClose: () => void;
}

export const FloatingDistrictPanel: React.FC<FloatingDistrictPanelProps> = ({
  district,
  onClose,
}) => {
  if (!district) return null;

  const handleOpenGoogleMaps = () => {
    const query = `${district.name} District, Andhra Pradesh, India`;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
      '_blank'
    );
  };

  const handleOpenDistrictPage = () => {
    window.location.href = `/ap/${district.slug}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 w-full max-w-md p-6 rounded-3xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xl transition-all animate-in slide-in-from-bottom-4 duration-300">
      {/* Panel Header */}
      <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
        <div>
          <span className="text-[10px] font-mono font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
            DISTRICT EXPLORER
          </span>
          <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">
            {district.name}
          </h3>
          <p className="text-xs text-zinc-500">HQ: {district.headquarters}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 flex items-center justify-center text-zinc-500 font-bold transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Coverage Progress Bar */}
      <div className="py-4 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex justify-between text-xs font-semibold mb-1.5">
          <span className="text-zinc-600 dark:text-zinc-400">Broadband Coverage Reach</span>
          <span className="font-mono text-emerald-600">{district.coveragePercent}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${district.coveragePercent}%` }}
          />
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-3 py-4 text-center">
        <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
          <span className="block text-lg font-mono font-bold text-zinc-950 dark:text-zinc-50">
            {district.mandalsCount}
          </span>
          <span className="text-[10px] text-zinc-500">Mandals</span>
        </div>
        <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
          <span className="block text-lg font-mono font-bold text-zinc-950 dark:text-zinc-50">
            {district.villagesCount}
          </span>
          <span className="text-[10px] text-zinc-500">Villages</span>
        </div>
        <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
          <span className="block text-lg font-mono font-bold text-zinc-950 dark:text-zinc-50">
            {district.pinCodesCount}
          </span>
          <span className="text-[10px] text-zinc-500">PIN Codes</span>
        </div>
      </div>

      {/* Active ISPs */}
      <div className="py-2">
        <span className="text-[10px] font-mono text-zinc-400 block mb-2">TOP VERIFIED ISPs IN DISTRICT</span>
        <div className="flex flex-wrap gap-1.5">
          {district.topIsps.map((isp, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              {isp}
            </span>
          ))}
        </div>
      </div>

      {/* Direct Action CTAs */}
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={handleOpenDistrictPage}
          className="flex-1 h-11 rounded-xl bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 text-xs font-semibold transition-all shadow-md active:scale-95"
        >
          View District Page ➔
        </button>
        <button
          type="button"
          onClick={handleOpenGoogleMaps}
          className="h-11 px-4 rounded-xl bg-white hover:bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs font-semibold transition-all"
        >
          Google Maps ↗
        </button>
      </div>
    </div>
  );
};

export default FloatingDistrictPanel;
