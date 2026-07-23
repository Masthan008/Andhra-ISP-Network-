export interface RedisConfig {
  host: string;
  port: number;
  password?: string;
  ttl: number;
}

export const redisConfig = (): { redis: RedisConfig } => ({
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    password: process.env.REDIS_PASSWORD || undefined,
    ttl: parseInt(process.env.REDIS_TTL || '300', 10),
  },
});
