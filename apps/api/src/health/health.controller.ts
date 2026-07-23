import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  getHealth() {
    return {
      status: 'ok',
      service: 'Andhra ISP Network API',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('liveness')
  getLiveness() {
    return { status: 'up' };
  }

  @Get('readiness')
  getReadiness() {
    return { status: 'ready', database: 'connected', redis: 'connected' };
  }

  @Get('version')
  getVersion() {
    return { version: '1.0.0-enterprise', release: 'Phase 21' };
  }

  @Get('status')
  getStatus() {
    return {
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      system: 'Andhra ISP Network Platform Engine',
    };
  }
}
