'use client';

import React from 'react';
import { DistrictData, AP_DISTRICTS_DATA } from './apDistrictsData';

interface APVectorCanvasProps {
  zoomScale: number;
  selectedDistrict: DistrictData | null;
  onHoverDistrict: (district: DistrictData | null, event?: React.MouseEvent) => void;
  onSelectDistrict: (district: DistrictData) => void;
}

export const APVectorCanvas: React.FC<APVectorCanvasProps> = ({
  zoomScale,
  selectedDistrict,
  onHoverDistrict,
  onSelectDistrict,
}) => {
  const getColorByCoverage = (percent: number) => {
    if (percent >= 92) return '#10B981'; // Emerald
    if (percent >= 85) return '#3B82F6'; // Blue
    return '#F59E0B'; // Amber
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8 overflow-hidden select-none">
      <svg
        viewBox="0 0 700 550"
        className="w-full h-full max-h-[600px] transition-transform duration-300 ease-out"
        style={{ transform: `scale(${zoomScale})` }}
      >
        {/* Ambient Spatial Grid Pattern */}
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-200 dark:text-zinc-800" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* 26 AP District Polygons */}
        <g className="cursor-pointer">
          {AP_DISTRICTS_DATA.map((district) => {
            const isSelected = selectedDistrict?.id === district.id;
            const fill = getColorByCoverage(district.coveragePercent);

            return (
              <g
                key={district.id}
                onClick={() => onSelectDistrict(district)}
                onMouseEnter={(e) => onHoverDistrict(district, e)}
                onMouseLeave={() => onHoverDistrict(null)}
                tabIndex={0}
                role="button"
                aria-label={`District ${district.name}, ${district.mandalsCount} Mandals, ${district.coveragePercent}% coverage`}
                className="group focus:outline-none"
              >
                <path
                  d={district.pathD}
                  fill={fill}
                  fillOpacity={isSelected ? 0.85 : 0.4}
                  stroke={isSelected ? '#09090B' : '#FFFFFF'}
                  strokeWidth={isSelected ? 3 : 1.5}
                  className="transition-all duration-200 hover:fill-opacity-80 hover:stroke-zinc-950 dark:hover:stroke-white"
                />

                {/* District Label Tag */}
                <text
                  x={district.center[0]}
                  y={district.center[1]}
                  textAnchor="middle"
                  className="text-[11px] font-bold fill-zinc-950 dark:fill-zinc-100 pointer-events-none drop-shadow-sm font-sans"
                >
                  {district.name}
                </text>

                {/* Signal Pulse Dot on Center */}
                <circle
                  cx={district.center[0]}
                  cy={district.center[1] + 12}
                  r="3"
                  className="fill-emerald-500 animate-pulse"
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default APVectorCanvas;
