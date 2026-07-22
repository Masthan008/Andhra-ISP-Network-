'use client';

import React, { useState } from 'react';
import NetworkHeaderBar from './NetworkHeaderBar';
import NetworkCanvas from './NetworkCanvas';
import FloatingHubCard from './FloatingHubCard';
import NetworkMetricsStrip from './NetworkMetricsStrip';
import { NETWORK_HUBS_DATA, NetworkHubNode } from './networkData';

export const NetworkVisualizationContainer: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<NetworkHubNode | null>(
    NETWORK_HUBS_DATA[0] // Default selected: Vizag HQ
  );

  return (
    <section
      id="network-mesh"
      className="relative w-full bg-white dark:bg-zinc-950 border-t border-b border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden select-none font-sans"
    >
      {/* Header Bar */}
      <NetworkHeaderBar />

      {/* Interactive Fiber Network Canvas */}
      <NetworkCanvas
        selectedHub={selectedHub}
        onSelectHub={setSelectedHub}
      />

      {/* Contextual Floating Hub Card */}
      <FloatingHubCard
        hub={selectedHub}
        onClose={() => setSelectedHub(null)}
      />

      {/* Network Metrics Footer */}
      <NetworkMetricsStrip />
    </section>
  );
};

export default NetworkVisualizationContainer;
