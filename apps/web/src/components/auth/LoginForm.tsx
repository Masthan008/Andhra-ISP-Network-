'use client';

import React, { useState } from 'react';
import SocialLoginButtons from './SocialLoginButtons';
import AuthBannerNotice from './AuthBannerNotice';

interface LoginFormProps {
  onSuccess?: () => void;
  onForgotPasswordClick?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
  onForgotPasswordClick,
}) => {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [statusNotice, setStatusNotice] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMethod === 'email') {
      if (!email || !password) {
        setStatusNotice({ type: 'error', msg: 'Please fill in both email and password fields.' });
        return;
      }
      setStatusNotice({ type: 'success', msg: 'Login successful! Redirecting to dashboard...' });
      setTimeout(() => onSuccess?.(), 1000);
    } else {
      if (!phone) {
        setStatusNotice({ type: 'error', msg: 'Please enter a valid 10-digit phone number.' });
        return;
      }
      setStatusNotice({ type: 'success', msg: 'OTP sent to +91 ' + phone });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {statusNotice && (
        <AuthBannerNotice
          type={statusNotice.type}
          message={statusNotice.msg}
          onClose={() => setStatusNotice(null)}
        />
      )}

      {/* Tab Switcher */}
      <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold">
        <button
          type="button"
          onClick={() => setAuthMethod('email')}
          className={`py-2 rounded-lg transition-all ${
            authMethod === 'email'
              ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 shadow-sm'
              : 'text-zinc-500'
          }`}
        >
          Email + Password
        </button>
        <button
          type="button"
          onClick={() => setAuthMethod('phone')}
          className={`py-2 rounded-lg transition-all ${
            authMethod === 'phone'
              ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 shadow-sm'
              : 'text-zinc-500'
          }`}
        >
          Phone + OTP
        </button>
      </div>

      {authMethod === 'email' ? (
        <>
          <div>
            <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              required
              className="w-full h-11 px-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Password
              </label>
              {onForgotPasswordClick && (
                <button
                  type="button"
                  onClick={onForgotPasswordClick}
                  className="text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Forgot password?
                </button>
              )}
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full h-11 pl-3.5 pr-10 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-zinc-400 hover:text-zinc-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-zinc-600 dark:text-zinc-400">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-zinc-300 dark:border-zinc-700 text-zinc-950 focus:ring-zinc-950"
              />
              <span>Remember this device for 30 days</span>
            </label>
          </div>
        </>
      ) : (
        <div>
          <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
            Mobile Phone Number (+91)
          </label>
          <div className="flex gap-2">
            <span className="h-11 px-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-mono font-semibold flex items-center text-zinc-600 dark:text-zinc-400">
              +91
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="98765 43210"
              required
              className="flex-1 h-11 px-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100"
            />
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full h-11 rounded-xl bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 text-xs font-semibold transition-all shadow-md active:scale-95 mt-2"
      >
        {authMethod === 'email' ? 'Sign In ➔' : 'Send One-Time OTP ➔'}
      </button>

      <SocialLoginButtons />
    </form>
  );
};

export default LoginForm;
