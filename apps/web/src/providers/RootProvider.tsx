import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { QueryProvider } from './QueryProvider';
import { ToastProvider } from './ToastProvider';

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <ToastProvider>{children}</ToastProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
