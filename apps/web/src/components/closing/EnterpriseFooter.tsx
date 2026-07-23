'use client';

import React from 'react';
import { Zap, ArrowUp } from 'lucide-react';

export const EnterpriseFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 border-t border-zinc-200 dark:border-zinc-800 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-zinc-200/80 dark:border-zinc-800/80">
          {/* Brand Col */}
          <div className="col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 font-bold text-xs">
                  <Zap className="w-4 h-4 fill-cyan-400" />
                </div>
                <span className="text-base font-bold tracking-tight">
                  Andhra ISP <span className="text-[10px] font-mono text-cyan-400 uppercase">NETWORK</span>
                </span>
              </div>
              <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
                Connecting Every Corner of Andhra Pradesh. The master broadband provider directory mapping fiber reach across 26 Districts, 679 Mandals, and 17,000+ Villages.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                v1.0.0-AP
              </span>
              <span className="text-xs text-zinc-400">•</span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                SYSTEM OPERATIONAL
              </span>
            </div>
          </div>

          {/* Col 1: Districts */}
          <div>
            <h4 className="text-xs font-mono font-bold text-zinc-950 dark:text-zinc-50 uppercase mb-4">
              Districts
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
              <li><a href="#districts" className="hover:text-cyan-400 transition-colors">Visakhapatnam</a></li>
              <li><a href="#districts" className="hover:text-cyan-400 transition-colors">NTR Vijayawada</a></li>
              <li><a href="#districts" className="hover:text-cyan-400 transition-colors">Guntur</a></li>
              <li><a href="#districts" className="hover:text-cyan-400 transition-colors">Tirupati</a></li>
              <li><a href="#districts" className="text-cyan-400 font-semibold hover:underline">All 26 Districts ➔</a></li>
            </ul>
          </div>

          {/* Col 2: ISPs */}
          <div>
            <h4 className="text-xs font-mono font-bold text-zinc-950 dark:text-zinc-50 uppercase mb-4">
              Providers
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
              <li><a href="#smart-search" className="hover:text-cyan-400 transition-colors">ACT Fibernet</a></li>
              <li><a href="#smart-search" className="hover:text-cyan-400 transition-colors">JioFiber</a></li>
              <li><a href="#smart-search" className="hover:text-cyan-400 transition-colors">Airtel Xstream</a></li>
              <li><a href="#smart-search" className="hover:text-cyan-400 transition-colors">APSFL Fiber</a></li>
              <li><a href="#smart-search" className="hover:text-cyan-400 transition-colors">BSNL Bharat Fiber</a></li>
            </ul>
          </div>

          {/* Col 3: Platform */}
          <div>
            <h4 className="text-xs font-mono font-bold text-zinc-950 dark:text-zinc-50 uppercase mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
              <li><a href="#explorer" className="hover:text-cyan-400 transition-colors">Map Explorer</a></li>
              <li><a href="#smart-search" className="hover:text-cyan-400 transition-colors">Smart Search</a></li>
              <li><a href="#highlights" className="hover:text-cyan-400 transition-colors">ISP Comparison</a></li>
              <li><a href="#highlights" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#highlights" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Andhra ISP Network. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default EnterpriseFooter;
