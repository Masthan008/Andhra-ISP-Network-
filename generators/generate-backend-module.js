#!/usr/bin/env node

/**
 * Andhra ISP Network — NestJS Backend Module Generator
 * Scaffolds NestJS module, controller, service, repository, entity, dto, and unit spec files.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function parseArgs() {
  const args = process.argv.slice(2);
  let name = '';

  args.forEach((arg) => {
    if (arg.startsWith('--name=')) name = arg.split('=')[1];
  });

  return { name };
}

function main() {
  const { name } = parseArgs();

  if (!name) {
    console.log(`
Usage:
  node generators/generate-backend-module.js --name=moduleName

Example:
  node generators/generate-backend-module.js --name=coverage
`);
    return;
  }

  const moduleName = name.toLowerCase();
  const pascalName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  const targetDir = path.join(ROOT_DIR, 'apps', 'api', 'src', 'modules', moduleName);

  if (fs.existsSync(targetDir)) {
    console.error(`❌ Module directory already exists: ${targetDir}`);
    process.exit(1);
  }

  fs.mkdirSync(targetDir, { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'dto'), { recursive: true });

  // 1. Controller
  const controllerCode = `import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ${pascalName}Service } from './${moduleName}.service';

@ApiTags('${pascalName}')
@Controller('${moduleName}')
export class ${pascalName}Controller {
  constructor(private readonly ${moduleName}Service: ${pascalName}Service) {}

  @Get()
  @ApiOperation({ summary: 'Get all ${moduleName} records' })
  @ApiResponse({ status: 200, description: 'Return all ${moduleName} records' })
  async findAll() {
    return this.${moduleName}Service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get ${moduleName} record by ID' })
  async findOne(@Param('id') id: string) {
    return this.${moduleName}Service.findOne(id);
  }
}
`;

  // 2. Service
  const serviceCode = `import { Injectable } from '@nestjs/common';

@Injectable()
export class ${pascalName}Service {
  async findAll() {
    return { success: true, data: [] };
  }

  async findOne(id: string) {
    return { success: true, id };
  }
}
`;

  // 3. Module
  const moduleCode = `import { Module } from '@nestjs/common';
import { ${pascalName}Controller } from './${moduleName}.controller';
import { ${pascalName}Service } from './${moduleName}.service';

@Module({
  controllers: [${pascalName}Controller],
  providers: [${pascalName}Service],
  exports: [${pascalName}Service],
})
export class ${pascalName}Module {}
`;

  // 4. Spec
  const specCode = `import { Test, TestingModule } from '@nestjs/testing';
import { ${pascalName}Service } from './${moduleName}.service';

describe('${pascalName}Service', () => {
  let service: ${pascalName}Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [${pascalName}Service],
    }).compile();

    service = module.get<${pascalName}Service>(${pascalName}Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
`;

  fs.writeFileSync(path.join(targetDir, `${moduleName}.controller.ts`), controllerCode);
  fs.writeFileSync(path.join(targetDir, `${moduleName}.service.ts`), serviceCode);
  fs.writeFileSync(path.join(targetDir, `${moduleName}.module.ts`), moduleCode);
  fs.writeFileSync(path.join(targetDir, `${moduleName}.service.spec.ts`), specCode);

  console.log(`
✅ Successfully generated NestJS module "${moduleName}" in apps/api/src/modules/${moduleName}!
  📄 ${moduleName}.controller.ts
  📄 ${moduleName}.service.ts
  📄 ${moduleName}.module.ts
  📄 ${moduleName}.service.spec.ts
`);
}

main();
