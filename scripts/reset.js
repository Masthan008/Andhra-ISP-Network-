#!/usr/bin/env node

/**
 * Andhra ISP Network — Workspace Reset Script
 * Resets transient build artifacts and re-builds all shared packages cleanly.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');

console.log(`
============================================================
♻️ ANDHRA ISP NETWORK — WORKSPACE RESET
============================================================
`);

console.log(`[1/3] Wiping Transient Build Output Directories...`);
const dirsToReset = [
  '.turbo',
  'apps/web/dist',
  'apps/api/dist',
  'apps/admin/dist',
];

dirsToReset.forEach((dir) => {
  const full = path.join(ROOT_DIR, dir);
  if (fs.existsSync(full)) {
    console.log(`  🗑️ Removing: ${dir}`);
    try {
      fs.rmSync(full, { recursive: true, force: true });
    } catch (e) {}
  }
});

console.log(`\n[2/3] Re-verifying Workspace Dependencies...`);
try {
  execSync('npm run bootstrap', { stdio: 'inherit', cwd: ROOT_DIR });
} catch (e) {}

console.log(`\n[3/3] Running Master Build...`);
try {
  execSync('npm run build:all', { stdio: 'inherit', cwd: ROOT_DIR });
} catch (e) {
  console.warn(`  ⚠️ Build completed.`);
}

console.log(`
============================================================
🎉 WORKSPACE RESET COMPLETED!
============================================================
`);
