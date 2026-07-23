'use client';

import React from 'react';
import { Globe, Github, Layers } from 'lucide-react';

export const SocialLoginButtons: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white dark:bg-zinc-900 px-3 text-zinc-400 font-mono">
            OR CONTINUE WITH
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        <button
          type="button"
          onClick={() => alert('Google Sign-In Placeholder')}
          className="h-11 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700/80 flex items-center justify-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors"
        >
          <Globe className="w-4 h-4 text-cyan-400" />
          <span>Google</span>
        </button>

        <button
          type="button"
          onClick={() => alert('GitHub Sign-In Placeholder')}
          className="h-11 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700/80 flex items-center justify-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors"
        >
          <Github className="w-4 h-4 text-cyan-400" />
          <span>GitHub</span>
        </button>

        <button
          type="button"
          onClick={() => alert('Microsoft Sign-In Placeholder')}
          className="h-11 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-200/80 dark:border-zinc-700/80 flex items-center justify-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors"
        >
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>Microsoft</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLoginButtons;
