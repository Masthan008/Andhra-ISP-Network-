'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface PasswordStrengthMeterProps {
  password: string;
}

export const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({
  password,
}) => {
  const getScore = (pass: string) => {
    let score = 0;
    if (!pass) return score;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return score;
  };

  const score = getScore(password);

  const getLabel = () => {
    if (!password) return null;
    if (score <= 1) return <span className="text-rose-400">Weak</span>;
    if (score === 2) return <span className="text-amber-400">Fair</span>;
    if (score === 3) return <span className="text-cyan-400">Good</span>;
    return (
      <span className="text-emerald-400 inline-flex items-center gap-1">
        <span>Strong</span>
        <Check className="w-3 h-3 text-emerald-400" />
      </span>
    );
  };

  const getColor = () => {
    if (score <= 1) return 'bg-rose-500';
    if (score === 2) return 'bg-amber-500';
    if (score === 3) return 'bg-cyan-500';
    return 'bg-emerald-500';
  };

  if (!password) return null;

  return (
    <div className="mt-2 space-y-1.5">
      <div className="flex justify-between text-[10px] font-mono font-medium text-zinc-500">
        <span>Password Complexity:</span>
        <div className="font-bold">{getLabel()}</div>
      </div>
      <div className="grid grid-cols-4 gap-1.5 h-1.5">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`h-full rounded-full transition-all duration-300 ${
              step <= score ? getColor() : 'bg-zinc-100 dark:bg-zinc-800'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
