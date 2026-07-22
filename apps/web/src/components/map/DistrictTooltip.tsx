'use client';

import React from 'react';
import { DistrictData } from './apDistrictsData';

interface DistrictTooltipProps {
  district: DistrictData | null;
  position: { x: number; y: number } | null;
}

export const DistrictTooltip: React.FC<DistrictTooltipProps> = ({
  district,
  position,
}) => {
  if (!district || !position) return null;

  return (
    <div
      style={{
        left: `${position.x + 12}px`,
        top: `${position.y + 12}px`,
      }}
      className="fixed z-50 pointer-events-none p-3 rounded-xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl text-xs flex flex-col gap-1 min-w-[200px]"
    >
      <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-1.5">
        <span className="font-bold text-zinc-950 dark:text-zinc-50">
          {district.name}
        </span>
        <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
          {district.coveragePercent}%
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-zinc-500 dark:text-zinc-400 pt-1">
        <div>
          <span className="block text-[10px]">Mandals</span>
          <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100">
            {district.mandalsCount}
          </span>
        </div>
        <div>
          <span className="block text-[10px]">Villages</span>
          <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100">
            {district.villagesCount}
          </span>
        </div>
      </div>

      <div className="text-[10px] text-zinc-400 pt-1 border-t border-zinc-100 dark:border-zinc-800">
        Top ISP: <span className="font-semibold text-zinc-700 dark:text-zinc-300">{district.topIsps[0]}</span>
      </div>
    </div>
  );
};

export default DistrictTooltip;
