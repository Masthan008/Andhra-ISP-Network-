'use client';

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SpotlightSearchBar from './SpotlightSearchBar';
import QuickSearchChips from './QuickSearchChips';
import AutocompleteOverlay from './AutocompleteOverlay';
import SearchResultCard from './SearchResultCard';
import SearchFilterPanel from './SearchFilterPanel';
import { SEARCH_INDEX_DATA, SearchResultItem } from './searchIndexData';

export const SmartSearchContainer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTech, setActiveTech] = useState('all');
  const [filteredResults, setFilteredResults] = useState<SearchResultItem[]>(SEARCH_INDEX_DATA);

  // Global ⌘K / Ctrl+K keyboard shortcut handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector<HTMLInputElement>('input[placeholder*="Search by District"]');
        searchInput?.focus();
        searchInput?.select();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter search index based on query and technology
  useEffect(() => {
    let results = SEARCH_INDEX_DATA;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      results = results.filter(
        (item) =>
          item.providerName.toLowerCase().includes(q) ||
          item.district.toLowerCase().includes(q) ||
          item.mandal.toLowerCase().includes(q) ||
          item.pinCode.includes(q) ||
          item.technology.toLowerCase().includes(q)
      );
    }

    if (activeTech !== 'all') {
      results = results.filter((item) => item.technology === activeTech);
    }

    setFilteredResults(results);
  }, [searchQuery, activeTech]);

  const handleSelectSuggestion = (item: SearchResultItem) => {
    setSearchQuery(item.providerName);
  };

  return (
    <section
      id="smart-search"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-zinc-200/60 dark:border-zinc-800/60 font-sans"
    >
      <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto mb-10">
        <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-cyan-500/20">
          SECTION 09 — SMART DISCOVERY ENGINE
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.1]">
          Instantly Discover Broadband Providers Anywhere in Andhra Pradesh.
        </h2>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Type your District, Mandal, PIN Code, or preferred provider to filter verified broadband options in sub-milliseconds.
        </p>
      </div>

      {/* Spotlight Command Input Box */}
      <SpotlightSearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onClear={() => setSearchQuery('')}
      />

      {/* Quick Search Chips */}
      <QuickSearchChips onSelectChip={(chip) => setSearchQuery(chip)} />

      {/* Autocomplete Suggestions Overlay */}
      {searchQuery && (
        <AutocompleteOverlay
          suggestions={filteredResults.slice(0, 3)}
          onSelectSuggestion={handleSelectSuggestion}
        />
      )}

      {/* Technology Filters */}
      <SearchFilterPanel activeTech={activeTech} onSelectTech={setActiveTech} />

      {/* Search Results Display Grid */}
      <div className="mt-8 space-y-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-between text-xs text-zinc-500 font-mono px-2">
          <span>VERIFIED BROADBAND PROVIDERS ({filteredResults.length})</span>
          <span>PRESS ⌘K TO SEARCH ANYTIME</span>
        </div>

        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <SearchResultCard key={item.id} item={item} />
          ))
        ) : (
          <div className="p-12 text-center rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <Search className="w-10 h-10 text-cyan-400 mx-auto mb-2" />
            <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-50">
              No matching ISPs found for "{searchQuery}"
            </h4>
            <p className="text-xs text-zinc-500 mt-1">
              Try searching by PIN code (e.g. 530026), Mandal (e.g. Gajuwaka), or District (e.g. Visakhapatnam).
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SmartSearchContainer;
