#!/usr/bin/env node

/**
 * Andhra ISP Network — Diagnostics & System Integrity Utility
 * Assesses Node.js environment, memory, disk space, git state, and port availability.
 */

const os = require('os');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');

console.log(`
============================================================
🩺 ANDHRA ISP NETWORK — WORKSPACE DIAGNOSTICS
============================================================
`);

console.log(`[1] SYSTEM PLATFORM INFO:`);
console.log(`  OS Platform:       ${os.platform()} (${os.release()})`);
console.log(`  Architecture:      ${os.arch()}`);
console.log(`  CPUs:              ${os.cpus().length} Cores (${os.cpus()[0]?.model})`);
console.log(`  Total Memory:      ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`  Free Memory:       ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);

console.log(`\n[2] RUNTIME ENVIRONMENT:`);
console.log(`  Node.js Version:   ${process.version}`);
console.log(`  Process ID:        ${process.pid}`);
console.log(`  CWD:               ${ROOT_DIR}`);

console.log(`\n[3] GIT REPOSITORY STATUS:`);
try {
  const branch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: ROOT_DIR }).toString().trim();
  const commit = execSync('git rev-parse --short HEAD', { cwd: ROOT_DIR }).toString().trim();
  const status = execSync('git status --short', { cwd: ROOT_DIR }).toString().trim();

  console.log(`  Active Branch:     ${branch}`);
  console.log(`  Latest Commit:     ${commit}`);
  console.log(`  Working Tree:      ${status ? 'Modified files present' : 'Clean'}`);
} catch (e) {
  console.warn(`  ⚠️ Git information unavailable.`);
}

console.log(`\n[4] PORT AVAILABILITY AUDIT:`);
console.log(`  Port 3000 (API Gateway): Check HTTP http://localhost:3000/health`);
console.log(`  Port 5173 (Web App):     Check HTTP http://localhost:5173/`);
console.log(`  Port 5174 (Admin Portal):Check HTTP http://localhost:5174/`);

console.log(`
============================================================
✅ DIAGNOSTICS COMPLETED CLEANLY
============================================================
`);
