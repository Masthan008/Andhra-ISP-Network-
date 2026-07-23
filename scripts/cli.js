#!/usr/bin/env node

/**
 * Andhra ISP Network — Developer CLI
 * Master Command-Line Interface for Workspace Automation, Code Generation, Diagnostics & Quality Tools.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');

const COMMANDS = {
  bootstrap: {
    description: 'Initialize and setup workspace environment, symlinks, and dependencies',
    action: () => runScript('bootstrap.js'),
  },
  validate: {
    description: 'Run workspace validation (folder conventions, dependencies, TS strict mode, env)',
    action: () => runScript('validate.js'),
  },
  dashboard: {
    description: 'Launch interactive developer terminal status dashboard',
    action: () => runScript('dashboard.js'),
  },
  repair: {
    description: 'Self-heal workspace (clear stale caches, fix node_modules links, repair configs)',
    action: () => runScript('repair.js'),
  },
  diagnostics: {
    description: 'Perform workspace environment diagnostics and system check',
    action: () => runScript('diagnostics.js'),
  },
  health: {
    description: 'Evaluate workspace health, coverage metrics, and code scores',
    action: () => runScript('health.js'),
  },
  reset: {
    description: 'Reset transient artifacts and rebuild all shared packages',
    action: () => runScript('reset.js'),
  },
  'generate:component': {
    description: 'Generate React UI component with unit tests and props',
    action: (args) => runGenerator('generate-component.js', args),
  },
  'generate:hook': {
    description: 'Generate custom React hook with unit tests',
    action: (args) => runGenerator('generate-hook.js', args),
  },
  'generate:package': {
    description: 'Generate new shared SDK package with standard 10-item blueprint',
    action: (args) => runGenerator('generate-package.js', args),
  },
  'generate:module': {
    description: 'Generate NestJS module, controller, service, repository, and specs',
    action: (args) => runGenerator('generate-backend-module.js', args),
  },
  'generate:page': {
    description: 'Generate Next.js / Vite React page component',
    action: (args) => runGenerator('generate-page.js', args),
  },
  quality: {
    description: 'Calculate and report 0-100 Engineering Quality Score',
    action: () => runScript('quality-score.js'),
  },
};

function runScript(scriptName, args = []) {
  const scriptPath = path.join(__dirname, scriptName);
  if (!fs.existsSync(scriptPath)) {
    console.error(`❌ Script not found: ${scriptPath}`);
    process.exit(1);
  }
  console.log(`🚀 Executing: node scripts/${scriptName} ${args.join(' ')}\n`);
  try {
    execSync(`node "${scriptPath}" ${args.join(' ')}`, { stdio: 'inherit', cwd: ROOT_DIR });
  } catch (error) {
    console.error(`❌ Script execution failed.`);
    process.exit(1);
  }
}

function runGenerator(generatorName, args = []) {
  const genPath = path.join(ROOT_DIR, 'generators', generatorName);
  if (!fs.existsSync(genPath)) {
    console.error(`❌ Generator not found: ${genPath}`);
    process.exit(1);
  }
  console.log(`✨ Running Generator: node generators/${generatorName} ${args.join(' ')}\n`);
  try {
    execSync(`node "${genPath}" ${args.join(' ')}`, { stdio: 'inherit', cwd: ROOT_DIR });
  } catch (error) {
    console.error(`❌ Generator execution failed.`);
    process.exit(1);
  }
}

function printHelp() {
  console.log(`
============================================================
⚡ ANDHRA ISP NETWORK — ENTERPRISE DEVELOPER CLI
============================================================

Usage:
  npm run cli <command> [options]
  node scripts/cli.js <command> [options]

Available Commands:
`);

  Object.entries(COMMANDS).forEach(([name, meta]) => {
    console.log(`  ${name.padEnd(22)} ${meta.description}`);
  });

  console.log(`
Examples:
  npm run cli validate
  npm run cli dashboard
  npm run cli generate:component --name=NetworkBadge
  npm run cli generate:package --name=analytics
  npm run cli generate:module --name=coverage
============================================================
`);
}

function main() {
  const [,, cmd, ...args] = process.argv;

  if (!cmd || cmd === '--help' || cmd === '-h') {
    printHelp();
    return;
  }

  if (COMMANDS[cmd]) {
    COMMANDS[cmd].action(args);
  } else {
    console.error(`❌ Unknown command: "${cmd}"`);
    printHelp();
    process.exit(1);
  }
}

main();
