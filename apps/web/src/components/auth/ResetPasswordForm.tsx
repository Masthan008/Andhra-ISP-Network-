'use client';

import React, { useState } from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import AuthBannerNotice from './AuthBannerNotice';

interface ResetPasswordFormProps {
  onSuccess: () => void;
}

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  onSuccess,
}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [statusNotice, setStatusNotice] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setStatusNotice({ type: 'error', msg: 'Passwords do not match.' });
      return;
    }
    setStatusNotice({ type: 'success', msg: 'Password updated successfully!' });
    setTimeout(() => onSuccess(), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center">
        <span className="text-2xl block mb-1">🔐</span>
        <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">
          Create New Password
        </h3>
        <p className="text-xs text-zinc-500 mt-1">
          Your new password must be different from previously used passwords.
        </p>
      </div>

      {statusNotice && (
        <AuthBannerNotice
          type={statusNotice.type}
          message={statusNotice.msg}
          onClose={() => setStatusNotice(null)}
        />
      )}

      <div>
        <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
          New Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          className="w-full h-11 px-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100"
        />
        <PasswordStrengthMeter password={password} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
          Confirm New Password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
          required
          className="w-full h-11 px-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100"
        />
      </div>

      <button
        type="submit"
        className="w-full h-11 rounded-xl bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 text-xs font-semibold transition-all shadow-md active:scale-95"
      >
        Update Password ➔
      </button>
    </form>
  );
};

export default ResetPasswordForm;
