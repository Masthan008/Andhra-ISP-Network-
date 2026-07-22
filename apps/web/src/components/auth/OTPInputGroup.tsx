'use client';

import React, { useRef, useState, useEffect } from 'react';

interface OTPInputGroupProps {
  onComplete: (otp: string) => void;
}

export const OTPInputGroup: React.FC<OTPInputGroupProps> = ({ onComplete }) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== '')) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtp(digits);
      onComplete(pastedData);
      inputRefs.current[5]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2 justify-center">
        {otp.map((digit, idx) => (
          <input
            key={idx}
            ref={(el) => {
              inputRefs.current[idx] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(idx, e.target.value)}
            onKeyDown={(e) => handleKeyDown(idx, e)}
            onPaste={handlePaste}
            className="w-12 h-14 text-center text-xl font-bold font-mono rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-100 transition-all shadow-sm"
          />
        ))}
      </div>

      <div className="flex items-center justify-between w-full text-xs text-zinc-500 pt-2">
        <span>
          Resend code in:{' '}
          <strong className="font-mono text-zinc-900 dark:text-zinc-100">
            {timer}s
          </strong>
        </span>
        <button
          type="button"
          disabled={timer > 0}
          onClick={() => setTimer(60)}
          className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 disabled:opacity-40 hover:underline"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default OTPInputGroup;
