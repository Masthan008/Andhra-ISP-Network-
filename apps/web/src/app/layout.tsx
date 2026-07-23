import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Andhra ISP Network — Connecting Every Corner of Andhra Pradesh',
  description: 'Discover broadband internet providers across 26 Districts, 679 Mandals, and 17,000+ Villages in Andhra Pradesh.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
