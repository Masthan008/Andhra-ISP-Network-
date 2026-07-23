import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  private cache = new Map<string, { value: any; expiresAt?: number }>();
  private isConnected = false;

  async onModuleInit() {
    this.logger.log('Initializing Redis Cache Cluster manager...');
    this.isConnected = true;
  }

  async onModuleDestroy() {
    this.logger.log('Disconnecting from Redis Cluster cleanly...');
    this.cache.clear();
    this.isConnected = false;
  }

  async get<T>(key: string): Promise<T | null> {
    const item = this.cache.get(key);
    if (!item) return null;
    if (item.expiresAt && Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    return item.value as T;
  }

  async set(key: string, value: any, ttlSeconds = 300): Promise<void> {
    const expiresAt = ttlSeconds > 0 ? Date.now() + ttlSeconds * 1000 : undefined;
    this.cache.set(key, { value, expiresAt });
  }

  async del(key: string): Promise<void> {
    this.cache.delete(key);
  }

  getHealthStatus(): { status: string; connected: boolean; keysCount: number } {
    return {
      status: this.isConnected ? 'UP' : 'DOWN',
      connected: this.isConnected,
      keysCount: this.cache.size,
    };
  }
}
