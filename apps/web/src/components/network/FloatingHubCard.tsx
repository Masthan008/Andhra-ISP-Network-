'use client';

import React from 'react';
import { NetworkHubNode } from './networkData';

interface FloatingHubCardProps {
  hub: NetworkHubNode | null;
  onClose: () => void;
}

export const FloatingHubCard: React.FC<FloatingHubCardProps> = ({
  hub,
  onClose,
}) => {
  if (!hub) return null;

  return (
    <div className="absolute bottom-16 right-6 z-40 w-full max-w-xs p-5 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xl transition-all animate-in fade-in duration-200">
      <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
        <div>
          <span className="text-[9px] font-mono font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
            REGIONAL EXCHANGE HUB
          </span>
          <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-50">
            {hub.name}
          </h4>
          <p className="text-xs text-zinc-500">{hub.designation}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs text-zinc-500 font-bold hover:bg-zinc-200 transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 py-3 text-center">
        <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
          <span className="block text-base font-mono font-bold text-zinc-950 dark:text-zinc-50">
            {hub.capacityGbps} Gbps
          </span>
          <span className="text-[10px] text-zinc-500">Backbone Capacity</span>
        </div>
        <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
          <span className="block text-base font-mono font-bold text-zinc-950 dark:text-zinc-50">
            {hub.mandalsConnected}
          </span>
          <span className="text-[10px] text-zinc-500">Mandals Linked</span>
        </div>
      </div>

      <div className="text-[10px] text-zinc-400 pt-1 border-t border-zinc-100 dark:border-zinc-800">
        District: <span className="font-semibold text-zinc-700 dark:text-zinc-300">{hub.district}</span>
      </div>
    </div>
  );
};

export default FloatingHubCard;
