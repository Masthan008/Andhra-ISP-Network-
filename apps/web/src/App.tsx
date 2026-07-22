import React from 'react';
import { HeroSection } from './components/hero';
import { StorytellingContainer } from './components/storytelling';
import { InteractiveMapContainer } from './components/map';
import { NetworkVisualizationContainer } from './components/network';
import { SmartSearchContainer } from './components/search';
import { ClosingExperienceContainer } from './components/closing';

export function App() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <StorytellingContainer />
      <InteractiveMapContainer />
      <NetworkVisualizationContainer />
      <SmartSearchContainer />
      <ClosingExperienceContainer />
    </main>
  );
}

export default App;
