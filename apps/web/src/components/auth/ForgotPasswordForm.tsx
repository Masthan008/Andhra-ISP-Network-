'use client';

import React, { useState } from 'react';
import AuthBannerNotice from './AuthBannerNotice';

interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
}

export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onBackToLogin,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <span className="text-2xl block mb-1">🔑</span>
        <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">
          Reset Your Password
        </h3>
        <p className="text-xs text-zinc-500 mt-1">
          Enter your registered email address and we will send you a password recovery link.
        </p>
      </div>

      {submitted ? (
        <AuthBannerNotice
          type="success"
          message={`Password reset instructions sent to ${email}. Please check your inbox.`}
        />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              className="w-full h-11 px-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100"
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 rounded-xl bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 text-xs font-semibold transition-all shadow-md active:scale-95"
          >
            Send Reset Link ➔
          </button>
        </form>
      )}

      <div className="text-center pt-2">
        <button
          type="button"
          onClick={onBackToLogin}
          className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          ← Back to Sign In
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
