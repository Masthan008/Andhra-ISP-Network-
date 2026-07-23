import { EnvironmentConfig } from '../types';

export function validateConfig(raw: Record<string, any>): EnvironmentConfig {
  return {
    NODE_ENV: raw.NODE_ENV || 'development',
    PORT: Number(raw.PORT) || 3000,
    DATABASE_URL: raw.DATABASE_URL || 'postgresql://localhost:5432/andhra_isp',
    REDIS_URL: raw.REDIS_URL || 'redis://localhost:6379',
    JWT_SECRET: raw.JWT_SECRET || 'default-super-secret-key-change-in-production',
  };
}
