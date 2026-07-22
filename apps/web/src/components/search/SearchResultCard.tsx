'use client';

import React from 'react';
import { SearchResultItem } from './searchIndexData';

interface SearchResultCardProps {
  item: SearchResultItem;
}

export const SearchResultCard: React.FC<SearchResultCardProps> = ({ item }) => {
  const handleOpenGoogleMaps = () => {
    const query = `${item.providerName}, ${item.mandal}, ${item.district}, Andhra Pradesh ${item.pinCode}`;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
      '_blank'
    );
  };

  const handleViewDetails = () => {
    window.location.href = `/isps/${item.slug}`;
  };

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-md hover:shadow-xl transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-2xl">
          {item.logoEmoji}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">
              {item.providerName}
            </h3>
            {item.isVerified && (
              <span className="text-[10px] font-mono font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                VERIFIED PLACE ID
              </span>
            )}
          </div>

          <p className="text-xs text-zinc-500 mt-1">
            Reach: <span className="text-zinc-700 dark:text-zinc-300 font-medium">{item.mandal}, {item.district}</span> • PIN: <span className="font-mono text-zinc-900 dark:text-zinc-100">{item.pinCode}</span>
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-medium">
              {item.technology}
            </span>
            <span>Up to {item.maxSpeedMbps} Mbps</span>
            <span>•</span>
            <span className="font-bold text-zinc-950 dark:text-zinc-50">{item.startingPrice}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-zinc-100 dark:border-zinc-800">
        <button
          type="button"
          onClick={handleViewDetails}
          className="flex-1 md:flex-none h-10 px-5 rounded-xl bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 text-xs font-semibold transition-all shadow-sm active:scale-95"
        >
          View Details ➔
        </button>
        <button
          type="button"
          onClick={handleOpenGoogleMaps}
          className="h-10 px-4 rounded-xl bg-white hover:bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-xs font-semibold transition-all"
        >
          Google Maps ↗
        </button>
      </div>
    </div>
  );
};

export default SearchResultCard;
