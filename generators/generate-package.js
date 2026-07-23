#!/usr/bin/env node

/**
 * Andhra ISP Network — Shared Package Generator
 * Scaffolds a new shared SDK package following the standard 10-item blueprint.
 * (src/, components/, hooks/, utils/, types/, constants/, tests/, index.ts, package.json, README.md, CHANGELOG.md)
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function parseArgs() {
  const args = process.argv.slice(2);
  let name = '';
  let description = '';

  args.forEach((arg) => {
    if (arg.startsWith('--name=')) name = arg.split('=')[1];
    if (arg.startsWith('--description=')) description = arg.split('=')[1];
  });

  return { name, description };
}

function main() {
  const { name, description } = parseArgs();

  if (!name) {
    console.log(`
Usage:
  node generators/generate-package.js --name=pkgName [--description="Description"]

Example:
  node generators/generate-package.js --name=analytics --description="Enterprise Telemetry SDK"
`);
    return;
  }

  const pkgName = name.toLowerCase().replace(/[^a-z0-9-]/g, '');
  const pkgDir = path.join(ROOT_DIR, 'packages', pkgName);

  if (fs.existsSync(pkgDir)) {
    console.error(`❌ Package directory already exists: ${pkgDir}`);
    process.exit(1);
  }

  console.log(`✨ Generating Shared SDK Package @andhra-isp/${pkgName}...`);

  // Subdirectories
  const subdirs = ['src', 'components', 'hooks', 'utils', 'types', 'constants', 'tests'];
  subdirs.forEach((dir) => fs.mkdirSync(path.join(pkgDir, dir), { recursive: true }));

  // Files
  fs.writeFileSync(
    path.join(pkgDir, 'package.json'),
    JSON.stringify(
      {
        name: `@andhra-isp/${pkgName}`,
        version: '1.0.0-enterprise',
        private: true,
        main: './index.ts',
        types: './index.ts',
        scripts: {
          test: 'jest --passWithNoTests',
          lint: 'eslint .',
        },
      },
      null,
      2
    )
  );

  fs.writeFileSync(
    path.join(pkgDir, 'README.md'),
    `# @andhra-isp/${pkgName}\n\n${description || `${pkgName} SDK package for Andhra ISP Network.`}\n`
  );

  fs.writeFileSync(
    path.join(pkgDir, 'CHANGELOG.md'),
    `# Changelog\n\n## [1.0.0-enterprise] - ${new Date().toISOString().split('T')[0]}\n- Initial package release\n`
  );

  fs.writeFileSync(
    path.join(pkgDir, 'index.ts'),
    `export * from './src';\nexport * from './types';\nexport * from './constants';\nexport * from './utils';\n`
  );

  fs.writeFileSync(path.join(pkgDir, 'src', 'index.ts'), `export const ${pkgName.replace(/-/g, '_').toUpperCase()}_VERSION = '1.0.0';\n`);
  fs.writeFileSync(path.join(pkgDir, 'components', 'index.ts'), `export {};\n`);
  fs.writeFileSync(path.join(pkgDir, 'hooks', 'index.ts'), `export {};\n`);
  fs.writeFileSync(path.join(pkgDir, 'utils', 'index.ts'), `export const format${pkgName.charAt(0).toUpperCase()}${pkgName.slice(1)}Data = (data: unknown) => data;\n`);
  fs.writeFileSync(path.join(pkgDir, 'types', 'index.ts'), `export interface ${pkgName.charAt(0).toUpperCase()}${pkgName.slice(1)}Config {\n  enabled: boolean;\n}\n`);
  fs.writeFileSync(path.join(pkgDir, 'constants', 'index.ts'), `export const ${pkgName.replace(/-/g, '_').toUpperCase()}_KEY = 'AP_${pkgName.toUpperCase()}';\n`);
  fs.writeFileSync(path.join(pkgDir, 'tests', 'index.test.ts'), `describe('@andhra-isp/${pkgName}', () => {\n  it('initializes cleanly', () => {\n    expect(true).toBe(true);\n  });\n});\n`);

  console.log(`
✅ Successfully generated @andhra-isp/${pkgName} with 10-item SDK blueprint!
`);
}

main();
