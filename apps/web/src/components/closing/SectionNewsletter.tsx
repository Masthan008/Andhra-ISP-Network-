'use client';

import React, { useState } from 'react';

export const SectionNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section
      id="newsletter"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-t border-zinc-200/60 dark:border-zinc-800/60 font-sans"
    >
      <div className="p-8 sm:p-12 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 text-center flex flex-col items-center gap-4">
        <span className="text-xs font-mono font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50">
          COVERAGE UPDATES
        </span>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Stay Informed on New Fiber Rollouts in AP
        </h3>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-lg">
          Subscribe to receive monthly reports on new mandal fiber additions, ISP plan changes, and regional broadband expansion.
        </p>

        {subscribed ? (
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 font-medium text-xs">
            ✓ Thank you! You are subscribed to AP coverage updates.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mt-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="w-full h-12 px-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100"
            />
            <button
              type="submit"
              className="w-full sm:w-auto h-12 px-6 rounded-xl bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 text-xs font-semibold whitespace-nowrap transition-all shadow-sm active:scale-95"
            >
              Subscribe ➔
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default SectionNewsletter;
