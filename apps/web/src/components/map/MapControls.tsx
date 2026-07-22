'use client';

import React from 'react';

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onLocate: () => void;
  onToggleFullscreen?: () => void;
}

export const MapControls: React.FC<MapControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onReset,
  onLocate,
  onToggleFullscreen,
}) => {
  return (
    <div className="absolute top-6 right-6 z-30 flex flex-col gap-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 p-1.5 rounded-2xl shadow-xl">
      <button
        type="button"
        onClick={onZoomIn}
        title="Zoom In"
        className="w-9 h-9 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 font-bold transition-colors"
      >
        +
      </button>
      <button
        type="button"
        onClick={onZoomOut}
        title="Zoom Out"
        className="w-9 h-9 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 font-bold transition-colors"
      >
        -
      </button>
      <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-0.5" />
      <button
        type="button"
        onClick={onReset}
        title="Reset View"
        className="w-9 h-9 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 font-bold transition-colors text-xs"
      >
        ⟲
      </button>
      <button
        type="button"
        onClick={onLocate}
        title="Locate My District"
        className="w-9 h-9 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 transition-colors text-sm"
      >
        📍
      </button>
      {onToggleFullscreen && (
        <button
          type="button"
          onClick={onToggleFullscreen}
          title="Fullscreen"
          className="w-9 h-9 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 transition-colors text-xs"
        >
          ⛶
        </button>
      )}
    </div>
  );
};

export default MapControls;
