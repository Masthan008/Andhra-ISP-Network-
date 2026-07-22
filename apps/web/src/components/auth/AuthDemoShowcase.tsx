'use client';

import React, { useState } from 'react';
import AuthContainer from './AuthContainer';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import OTPInputGroup from './OTPInputGroup';
import AuthBannerNotice from './AuthBannerNotice';

export const AuthDemoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'login' | 'register' | 'forgot' | 'otp' | 'session_expired' | 'locked'
  >('login');

  return (
    <section
      id="auth-showcase"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center gap-8 font-sans border-t border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="text-center max-w-2xl">
        <span className="text-xs font-mono font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60">
          PHASE 4 — FRONTEND AUTHENTICATION
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-3">
          Enterprise Authentication Frontend Suite
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 mt-2">
          Preview interactive user authentication states inspired by Linear, Notion, Vercel, and Clerk.
        </p>

        {/* State Preview Chips */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-6">
          {(
            [
              { id: 'login', label: '1. Login' },
              { id: 'register', label: '2. Register' },
              { id: 'otp', label: '3. Verify OTP' },
              { id: 'forgot', label: '4. Forgot Password' },
              { id: 'session_expired', label: '5. Session Expired' },
              { id: 'locked', label: '6. Account Locked' },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                activeTab === t.id
                  ? 'bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950 shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Render Active View in Auth Container */}
      <AuthContainer
        title={
          activeTab === 'login'
            ? 'Sign in to Andhra ISP'
            : activeTab === 'register'
            ? 'Create Your Account'
            : activeTab === 'otp'
            ? 'Verify Mobile OTP'
            : activeTab === 'forgot'
            ? 'Password Recovery'
            : activeTab === 'session_expired'
            ? 'Session Expired'
            : 'Account Locked'
        }
        subtitle={
          activeTab === 'login'
            ? 'Access broadband searches, mandal maps, and ISP profiles.'
            : activeTab === 'register'
            ? 'Join citizens and ISP managers across Andhra Pradesh.'
            : activeTab === 'otp'
            ? 'Enter the 6-digit verification code sent to your phone.'
            : activeTab === 'forgot'
            ? 'We will send a reset link to your registered email.'
            : activeTab === 'session_expired'
            ? 'Your session timed out due to inactivity. Please sign in again.'
            : 'Multiple invalid login attempts detected. Contact support to unlock.'
        }
      >
        {activeTab === 'login' && (
          <LoginForm
            onSuccess={() => alert('LoggedIn!')}
            onForgotPasswordClick={() => setActiveTab('forgot')}
          />
        )}

        {activeTab === 'register' && (
          <RegisterForm onSuccess={() => setActiveTab('otp')} />
        )}

        {activeTab === 'otp' && (
          <div className="space-y-6 pt-2">
            <OTPInputGroup onComplete={(otp) => alert(`Verified OTP: ${otp}`)} />
            <button
              type="button"
              onClick={() => setActiveTab('login')}
              className="w-full text-center text-xs text-zinc-500 hover:underline"
            >
              ← Back to Sign In
            </button>
          </div>
        )}

        {activeTab === 'forgot' && (
          <ForgotPasswordForm onBackToLogin={() => setActiveTab('login')} />
        )}

        {activeTab === 'session_expired' && (
          <div className="space-y-4 pt-2">
            <AuthBannerNotice
              type="warning"
              message="Your session expired 5 minutes ago. Please re-authenticate."
            />
            <LoginForm onSuccess={() => setActiveTab('login')} />
          </div>
        )}

        {activeTab === 'locked' && (
          <div className="space-y-4 pt-2 text-center">
            <AuthBannerNotice
              type="error"
              message="Account locked due to 5 consecutive invalid login attempts."
            />
            <p className="text-xs text-zinc-500">
              An unlock email has been sent to your registered address.
            </p>
            <button
              type="button"
              onClick={() => setActiveTab('login')}
              className="h-10 px-6 rounded-xl bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950 text-xs font-semibold"
            >
              Return to Login
            </button>
          </div>
        )}
      </AuthContainer>
    </section>
  );
};

export default AuthDemoShowcase;
