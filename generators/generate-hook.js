#!/usr/bin/env node

/**
 * Andhra ISP Network — Custom Hook Generator
 * Scaffolds custom React hooks with TypeScript types and Jest unit test files.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function parseArgs() {
  const args = process.argv.slice(2);
  let name = '';
  let targetPkg = 'hooks';

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
  node generators/generate-hook.js --name=useHookName [--package=hooks]

Example:
  node generators/generate-hook.js --name=useMandalSearch --package=hooks
`);
    return;
  }

  const hookName = name.startsWith('use') ? name : `use${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  const hooksDir = path.join(ROOT_DIR, 'packages', targetPkg, 'hooks');
  if (!fs.existsSync(hooksDir)) fs.mkdirSync(hooksDir, { recursive: true });

  const hookFile = path.join(hooksDir, `${hookName}.ts`);
  const testFile = path.join(hooksDir, `${hookName}.test.ts`);

  if (fs.existsSync(hookFile)) {
    console.error(`❌ Hook file already exists: ${hookFile}`);
    process.exit(1);
  }

  const hookCode = `import { useState, useCallback } from 'react';

export interface Use${hookName.slice(3)}Options {
  initialValue?: string;
}

export function ${hookName}(options: Use${hookName.slice(3)}Options = {}) {
  const [value, setValue] = useState(options.initialValue || '');

  const reset = useCallback(() => {
    setValue(options.initialValue || '');
  }, [options.initialValue]);

  return {
    value,
    setValue,
    reset,
  };
}

export default ${hookName};
`;

  const testCode = `import { renderHook, act } from '@testing-library/react-hooks';
import { ${hookName} } from './${hookName}';

describe('${hookName}', () => {
  it('should initialize with default empty string', () => {
    const { result } = renderHook(() => ${hookName}());
    expect(result.current.value).toBe('');
  });

  it('should update state value', () => {
    const { result } = renderHook(() => ${hookName}());
    act(() => {
      result.current.setValue('Visakhapatnam');
    });
    expect(result.current.value).toBe('Visakhapatnam');
  });
});
`;

  fs.writeFileSync(hookFile, hookCode);
  fs.writeFileSync(testFile, testCode);

  console.log(`
✅ Successfully generated hook "${hookName}" in packages/${targetPkg}/hooks/!
  📄 ${hookName}.ts
  📄 ${hookName}.test.ts
`);
}

main();
