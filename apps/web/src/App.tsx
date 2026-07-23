import React from 'react';
import { RootProvider } from './providers';
import { HeroSection } from './components/hero';
import { StorytellingContainer } from './components/storytelling';
import { InteractiveMapContainer } from './components/map';
import { NetworkVisualizationContainer } from './components/network';
import { SmartSearchContainer } from './components/search';
import { AuthDemoShowcase } from './components/auth';
import { ClosingExperienceContainer } from './components/closing';

export function App() {
  return (
    <RootProvider>
      <main className="w-full min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        <HeroSection />
        <StorytellingContainer />
        <InteractiveMapContainer />
        <NetworkVisualizationContainer />
        <SmartSearchContainer />
        <AuthDemoShowcase />
        <ClosingExperienceContainer />
      </main>
    </RootProvider>
  );
}

export default App;
