'use client';

import React from 'react';
import { Zap } from 'lucide-react';

interface AuthContainerProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const AuthContainer: React.FC<AuthContainerProps> = ({
  title = 'Welcome Back',
  subtitle = 'Sign in to manage ISP coverage, save broadband searches, and view verified provider maps.',
  children,
}) => {
  return (
    <div className="w-full max-w-md p-8 rounded-3xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xl font-sans">
      {/* Brand Header */}
      <div className="flex flex-col items-center text-center gap-2 mb-6">
        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 font-bold text-base shadow-sm">
          <Zap className="w-5 h-5 fill-cyan-400" />
        </div>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="text-lg font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Andhra ISP
          </span>
          <span className="text-[10px] font-mono font-semibold tracking-wider px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-cyan-400 uppercase">
            NETWORK
          </span>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-2">
          {title}
        </h2>
        <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
          {subtitle}
        </p>
      </div>

      {/* Form Content */}
      {children}
    </div>
  );
};

export default AuthContainer;
