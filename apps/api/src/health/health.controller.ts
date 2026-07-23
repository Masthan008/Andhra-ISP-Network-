import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../infrastructure/prisma/prisma.service';
import { RedisService } from '../infrastructure/redis/redis.service';

@Controller('health')
export class HealthController {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly redisService: RedisService,
  ) {}

  @Get()
  getHealth() {
    const dbHealth = this.prismaService.getHealthStatus();
    const redisHealth = this.redisService.getHealthStatus();

    return {
      status: dbHealth.connected && redisHealth.connected ? 'ok' : 'degraded',
      service: 'Andhra ISP Network REST API Gateway',
      environment: process.env.NODE_ENV || 'development',
      dependencies: {
        database: dbHealth,
        redis: redisHealth,
      },
      timestamp: new Date().toISOString(),
    };
  }

  @Get('liveness')
  getLiveness() {
    return { status: 'up' };
  }

  @Get('readiness')
  getReadiness() {
    const dbHealth = this.prismaService.getHealthStatus();
    const redisHealth = this.redisService.getHealthStatus();

    return {
      status: dbHealth.connected && redisHealth.connected ? 'ready' : 'not_ready',
      database: dbHealth.status,
      redis: redisHealth.status,
    };
  }

  @Get('version')
  getVersion() {
    return {
      version: '1.0.0-enterprise',
      release: 'Phase 21 Prompt 3 Backend Foundation',
    };
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
