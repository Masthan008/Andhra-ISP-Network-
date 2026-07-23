#!/usr/bin/env node

/**
 * Andhra ISP Network — Page Generator
 * Scaffolds Next.js / Vite React page component with metadata, layout container, and accessibility landmarks.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function parseArgs() {
  const args = process.argv.slice(2);
  let name = '';
  let app = 'web';

  args.forEach((arg) => {
    if (arg.startsWith('--name=')) name = arg.split('=')[1];
    if (arg.startsWith('--app=')) app = arg.split('=')[1];
  });

  return { name, app };
}

function main() {
  const { name, app } = parseArgs();

  if (!name) {
    console.log(`
Usage:
  node generators/generate-page.js --name=pageRoute [--app=web]

Example:
  node generators/generate-page.js --name=coverage-report --app=web
`);
    return;
  }

  const pageSlug = name.toLowerCase().replace(/[^a-z0-9-]/g, '');
  const pascalName = pageSlug
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');

  const targetDir = path.join(ROOT_DIR, 'apps', app, 'src', 'pages', pageSlug);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  const pageCode = `'use client';

import React from 'react';

export const ${pascalName}Page: React.FC = () => {
  return (
    <main data-page="${pageSlug}" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full font-sans">
      <header className="mb-10 text-center flex flex-col items-center gap-3">
        <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/20">
          ANDHRA ISP NETWORK — ${pageSlug.toUpperCase()}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          ${pascalName} Overview
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Verified broadband infrastructure data for ${pageSlug}.
        </p>
      </header>

      <section className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl">
        <p className="text-sm text-zinc-500">Page container ready for enterprise UI implementation.</p>
      </section>
    </main>
  );
};

export default ${pascalName}Page;
`;

  fs.writeFileSync(path.join(targetDir, 'index.tsx'), pageCode);

  console.log(`
✅ Successfully generated page "${pageSlug}" in apps/${app}/src/pages/${pageSlug}/index.tsx!
`);
}

main();
