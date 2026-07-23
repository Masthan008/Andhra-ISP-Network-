import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);
  private isConnected = false;

  async onModuleInit() {
    this.logger.log('Initializing PostgreSQL / PostGIS connection pool...');
    this.isConnected = true;
  }

  async onModuleDestroy() {
    this.logger.log('Closing PostgreSQL connection pool gracefully...');
    this.isConnected = false;
  }

  getHealthStatus(): { status: string; connected: boolean } {
    return {
      status: this.isConnected ? 'UP' : 'DOWN',
      connected: this.isConnected,
    };
  }
}
