'use client';

import React from 'react';
import { NETWORK_HUBS_DATA, FIBER_ROUTES_DATA, NetworkHubNode } from './networkData';

interface NetworkCanvasProps {
  selectedHub: NetworkHubNode | null;
  onSelectHub: (hub: NetworkHubNode) => void;
}

export const NetworkCanvas: React.FC<NetworkCanvasProps> = ({
  selectedHub,
  onSelectHub,
}) => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden select-none">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full max-w-5xl"
      >
        {/* Background Spatial Grid Pattern */}
        <defs>
          <pattern id="networkGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-200 dark:text-zinc-800/80" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#networkGrid)" />

        {/* Layer 3: Fiber Routes */}
        <g>
          {FIBER_ROUTES_DATA.map((route, idx) => {
            const source = NETWORK_HUBS_DATA.find((h) => h.id === route.fromId);
            const target = NETWORK_HUBS_DATA.find((h) => h.id === route.toId);
            if (!source || !target) return null;

            const x1 = (source.x / 100) * 1000;
            const y1 = (source.y / 100) * 500;
            const x2 = (target.x / 100) * 1000;
            const y2 = (target.y / 100) * 500;

            const isRouteActive =
              selectedHub?.id === source.id || selectedHub?.id === target.id;

            return (
              <g key={idx}>
                {/* Static Fiber Line */}
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isRouteActive ? '#10B981' : '#3B82F6'}
                  strokeWidth={isRouteActive ? 3 : 1.5}
                  strokeOpacity={isRouteActive ? 0.9 : 0.4}
                  strokeDasharray={isRouteActive ? '8 4' : 'none'}
                />

                {/* Animated Signal Pulse along line */}
                <circle r="4" fill="#10B981">
                  <animateMotion
                    path={`M ${x1} ${y1} L ${x2} ${y2}`}
                    dur={`${3 + idx}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </g>

        {/* Layer 2 & 5: Regional Hub Nodes */}
        <g className="cursor-pointer">
          {NETWORK_HUBS_DATA.map((hub) => {
            const cx = (hub.x / 100) * 1000;
            const cy = (hub.y / 100) * 500;
            const isSelected = selectedHub?.id === hub.id;

            return (
              <g
                key={hub.id}
                onClick={() => onSelectHub(hub)}
                className="group focus:outline-none"
                tabIndex={0}
                role="button"
                aria-label={`Network Hub ${hub.name}, ${hub.capacityGbps} Gbps`}
              >
                {/* Pulse Ring */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? '24' : '16'}
                  fill="#10B981"
                  fillOpacity="0.15"
                  className="animate-ping"
                />

                {/* Outer Node Outer Border */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? '14' : '10'}
                  fill={isSelected ? '#09090B' : '#FFFFFF'}
                  stroke={isSelected ? '#10B981' : '#3B82F6'}
                  strokeWidth="3"
                  className="transition-all duration-200 hover:scale-125"
                />

                {/* Inner Core Dot */}
                <circle
                  cx={cx}
                  cy={cy}
                  r="4"
                  fill={isSelected ? '#10B981' : '#09090B'}
                />

                {/* Hub Label */}
                <text
                  x={cx}
                  y={cy + 26}
                  textAnchor="middle"
                  className="text-xs font-bold fill-zinc-950 dark:fill-zinc-100 pointer-events-none drop-shadow-sm font-sans"
                >
                  {hub.name}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default NetworkCanvas;
