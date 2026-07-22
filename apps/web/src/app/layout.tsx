import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
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
      <body className="antialiased font-sans bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
