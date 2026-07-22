'use client';

import React, { useState } from 'react';
import APVectorCanvas from './APVectorCanvas';
import DistrictTooltip from './DistrictTooltip';
import FloatingDistrictPanel from './FloatingDistrictPanel';
import MapControls from './MapControls';
import MapSearchOverlay from './MapSearchOverlay';
import MapFilterBar from './MapFilterBar';
import MapLegend from './MapLegend';
import { DistrictData, AP_DISTRICTS_DATA } from './apDistrictsData';

export const InteractiveMapContainer: React.FC = () => {
  const [zoomScale, setZoomScale] = useState(1);
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictData | null>(
    AP_DISTRICTS_DATA[0] // Default selected: Visakhapatnam
  );
  const [hoveredDistrict, setHoveredDistrict] = useState<DistrictData | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [activeTech, setActiveTech] = useState('all');

  const handleZoomIn = () => setZoomScale((prev) => Math.min(prev + 0.25, 2.0));
  const handleZoomOut = () => setZoomScale((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => {
    setZoomScale(1);
    setSelectedDistrict(AP_DISTRICTS_DATA[0]);
  };

  const handleLocate = () => {
    // Locate default: Vizag
    setSelectedDistrict(AP_DISTRICTS_DATA[0]);
  };

  const handleHoverDistrict = (district: DistrictData | null, e?: React.MouseEvent) => {
    setHoveredDistrict(district);
    if (e && district) {
      setTooltipPos({ x: e.clientX, y: e.clientY });
    } else {
      setTooltipPos(null);
    }
  };

  const handleSearch = (query: string) => {
    const q = query.toLowerCase();
    const matched = AP_DISTRICTS_DATA.find(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.headquarters.toLowerCase().includes(q) ||
        d.popularPinCodes.some((pin) => pin.includes(q))
    );
    if (matched) {
      setSelectedDistrict(matched);
    }
  };

  return (
    <section
      id="explorer"
      className="relative w-full h-[750px] bg-zinc-50 dark:bg-zinc-950 border-t border-b border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden select-none font-sans"
    >
      {/* Search Input Overlay */}
      <MapSearchOverlay onSearch={handleSearch} />

      {/* Technology Filter Pills */}
      <MapFilterBar activeTech={activeTech} onSelectTech={setActiveTech} />

      {/* Map Controls (Zoom, Reset, Locate) */}
      <MapControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        onLocate={handleLocate}
      />

      {/* Coverage Color Legend */}
      <MapLegend />

      {/* SVG 26-District Vector Canvas */}
      <APVectorCanvas
        zoomScale={zoomScale}
        selectedDistrict={selectedDistrict}
        onHoverDistrict={handleHoverDistrict}
        onSelectDistrict={setSelectedDistrict}
      />

      {/* Hover Glass Tooltip */}
      <DistrictTooltip district={hoveredDistrict} position={tooltipPos} />

      {/* Floating Selected District Detail Panel */}
      <FloatingDistrictPanel
        district={selectedDistrict}
        onClose={() => setSelectedDistrict(null)}
      />
    </section>
  );
};

export default InteractiveMapContainer;
