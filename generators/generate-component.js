#!/usr/bin/env node

/**
 * Andhra ISP Network — UI Component Generator
 * Scaffolds an enterprise-grade accessible React UI component with TypeScript props,
 * unit tests, and clean exports.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function parseArgs() {
  const args = process.argv.slice(2);
  let name = '';
  let targetPkg = 'ui';

  args.forEach((arg) => {
    if (arg.startsWith('--name=')) name = arg.split('=')[1];
    if (arg.startsWith('--package=')) targetPkg = arg.split('=')[1];
  });

  return { name, targetPkg };
}

function main() {
  const { name, targetPkg } = parseArgs();

  if (!name) {
    console.log(`
Usage:
  node generators/generate-component.js --name=ComponentName [--package=ui]

Example:
  node generators/generate-component.js --name=NetworkSpeedBadge --package=ui
`);
    return;
  }

  const componentDir = path.join(ROOT_DIR, 'packages', targetPkg, 'components', name);
  if (fs.existsSync(componentDir)) {
    console.error(`❌ Component directory already exists: ${componentDir}`);
    process.exit(1);
  }

  fs.mkdirSync(componentDir, { recursive: true });

  // 1. Component File
  const compCode = `'use client';

import React from 'react';

export interface ${name}Props {
  label?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const ${name}: React.FC<${name}Props> = ({
  label = '${name}',
  variant = 'primary',
  className = '',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-slate-800 text-slate-200 border-slate-700';
      case 'accent':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'primary':
      default:
        return 'bg-cyan-500 text-slate-950 font-bold';
    }
  };

  return (
    <div
      data-${name.toLowerCase()}
      className={\`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs transition-all \${getVariantStyles()} \${className}\`}
    >
      <span>{label}</span>
    </div>
  );
};

export default ${name};
`;

  // 2. Test File
  const testCode = `import React from 'react';
import { render, screen } from '@testing-library/react';
import { ${name} } from './${name}';

describe('${name}', () => {
  it('renders default label correctly', () => {
    render(<${name} />);
    expect(screen.getByText('${name}')).toBeInTheDocument();
  });

  it('renders custom label correctly', () => {
    render(<${name} label="Custom Test Label" />);
    expect(screen.getByText('Custom Test Label')).toBeInTheDocument();
  });
});
`;

  // 3. Index Export
  const indexCode = `export * from './${name}';\n`;

  fs.writeFileSync(path.join(componentDir, `${name}.tsx`), compCode);
  fs.writeFileSync(path.join(componentDir, `${name}.test.tsx`), testCode);
  fs.writeFileSync(path.join(componentDir, 'index.ts'), indexCode);

  console.log(`
✅ Successfully generated component "${name}" in packages/${targetPkg}/components/${name}!
  📄 ${name}.tsx
  📄 ${name}.test.tsx
  📄 index.ts
`);
}

main();
