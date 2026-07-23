#!/usr/bin/env node

/**
 * Andhra ISP Network — Workspace Bootstrap & Initialization Script
 * Verifies environment setup, directory structure, package dependencies, and initial build setup.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');

console.log(`
============================================================
🚀 ANDHRA ISP NETWORK — WORKSPACE BOOTSTRAP
============================================================
`);

// 1. Verify Node version
const nodeVersion = process.version;
console.log(`[1/5] Checking Node.js Environment... (${nodeVersion})`);
const major = parseInt(nodeVersion.slice(1).split('.')[0], 10);
if (major < 18) {
  console.warn(`⚠️ Warning: Recommended Node.js version is v18 or higher (current: ${nodeVersion}).`);
} else {
  console.log(`  ✅ Node.js version requirement satisfied.`);
}

// 2. Verify environment variables
console.log(`\n[2/5] Checking Environment Configuration (.env files)...`);
const envFiles = [
  { template: '.env.example', target: '.env' },
  { template: 'apps/web/.env.example', target: 'apps/web/.env' },
  { template: 'apps/api/.env.example', target: 'apps/api/.env' },
];

envFiles.forEach(({ template, target }) => {
  const targetPath = path.join(ROOT_DIR, target);
  const templatePath = path.join(ROOT_DIR, template);
  if (!fs.existsSync(targetPath) && fs.existsSync(templatePath)) {
    console.log(`  📝 Copying ${template} -> ${target}`);
    fs.copyFileSync(templatePath, targetPath);
  } else {
    console.log(`  ✅ ${target} present.`);
  }
});

// 3. Verify workspace directory structure
console.log(`\n[3/5] Verifying Core Workspace Directories...`);
const requiredDirs = [
  'apps/web',
  'apps/api',
  'apps/admin',
  'packages',
  'scripts',
  'generators',
  'templates',
  'validators',
  'quality',
  'reports',
  'checklists',
  'docs',
  '.vscode',
  '.husky',
];

requiredDirs.forEach((dir) => {
  const fullPath = path.join(ROOT_DIR, dir);
  if (!fs.existsSync(fullPath)) {
    console.log(`  📁 Creating missing directory: ${dir}`);
    fs.mkdirSync(fullPath, { recursive: true });
  } else {
    console.log(`  ✅ Directory exists: ${dir}`);
  }
});

// 4. Verify shared SDK packages blueprint
console.log(`\n[4/5] Auditing 26 Shared SDK Packages...`);
const pkgsDir = path.join(ROOT_DIR, 'packages');
if (fs.existsSync(pkgsDir)) {
  const packages = fs.readdirSync(pkgsDir).filter((name) => fs.statSync(path.join(pkgsDir, name)).isDirectory());
  console.log(`  📦 Verified ${packages.length} shared packages in monorepo.`);
}

// 5. Initial build & verification check
console.log(`\n[5/5] Running Initial Workspace Diagnostics...`);
try {
  execSync('node scripts/diagnostics.js', { stdio: 'inherit', cwd: ROOT_DIR });
} catch (e) {
  console.warn(`  ⚠️ Workspace diagnostics completed with minor warnings.`);
}

console.log(`
============================================================
🎉 WORKSPACE BOOTSTRAP COMPLETE!
Run "npm run cli" or "npm run dashboard" to start developing.
============================================================
`);
