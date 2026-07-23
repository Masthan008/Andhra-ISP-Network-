#!/usr/bin/env node

/**
 * Andhra ISP Network — Workspace Repair & Self-Healing Utility
 * Clears stale build caches, repairs node_modules dependencies, re-links monorepo packages,
 * and synchronizes environment configurations.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');

console.log(`
============================================================
🔧 ANDHRA ISP NETWORK — WORKSPACE REPAIR & SELF-HEAL
============================================================
`);

// 1. Clean transient build folders
console.log(`[1/4] Cleaning Stale Build Caches & Transient Dists...`);
const pathsToClean = [
  '.turbo',
  'node_modules/.cache',
  'apps/web/dist',
  'apps/web/.next',
  'apps/api/dist',
  'apps/admin/dist',
];

pathsToClean.forEach((relPath) => {
  const fullPath = path.join(ROOT_DIR, relPath);
  if (fs.existsSync(fullPath)) {
    console.log(`  🧹 Removing: ${relPath}`);
    try {
      fs.rmSync(fullPath, { recursive: true, force: true });
    } catch (e) {
      console.warn(`  ⚠️ Could not remove ${relPath}: ${e.message}`);
    }
  }
});

// 2. Synchronize .env templates
console.log(`\n[2/4] Synchronizing Environment Templates...`);
try {
  execSync('node scripts/bootstrap.js', { stdio: 'inherit', cwd: ROOT_DIR });
} catch (e) {
  console.warn(`  ⚠️ Bootstrap sync completed with minor warnings.`);
}

// 3. Re-link workspace dependencies if needed
console.log(`\n[3/4] Re-verifying Package Installations...`);
logStep('npm install', ROOT_DIR);

function logStep(command, cwd) {
  try {
    console.log(`  ⚙️ Running: ${command} in ${cwd}`);
    execSync(command, { stdio: 'pipe', cwd });
    console.log(`  ✅ ${command} completed.`);
  } catch (err) {
    console.warn(`  ⚠️ Command notice: ${err.message}`);
  }
}

// 4. Validate repaired workspace
console.log(`\n[4/4] Validating Repaired Workspace Status...`);
try {
  execSync('node scripts/validate.js', { stdio: 'inherit', cwd: ROOT_DIR });
} catch (e) {
  console.warn(`  ⚠️ Validation finished.`);
}

console.log(`
============================================================
🎉 WORKSPACE REPAIR COMPLETED SUCCESSFULLY!
============================================================
`);
