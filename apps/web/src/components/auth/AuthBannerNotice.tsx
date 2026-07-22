'use client';

import React from 'react';

export type NoticeType = 'success' | 'error' | 'warning' | 'info';

interface AuthBannerNoticeProps {
  type: NoticeType;
  message: string;
  onClose?: () => void;
}

export const AuthBannerNotice: React.FC<AuthBannerNoticeProps> = ({
  type,
  message,
  onClose,
}) => {
  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300';
      case 'error':
        return 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-300';
      case 'warning':
        return 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300';
      case 'info':
      default:
        return 'bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900 text-blue-800 dark:text-blue-300';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠️';
      case 'info':
      default:
        return 'ℹ️';
    }
  };

  return (
    <div
      className={`p-3.5 rounded-xl border text-xs font-medium flex items-center justify-between gap-3 ${getStyles()}`}
    >
      <div className="flex items-center gap-2">
        <span className="font-bold">{getIcon()}</span>
        <span>{message}</span>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="font-bold opacity-60 hover:opacity-100"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default AuthBannerNotice;
