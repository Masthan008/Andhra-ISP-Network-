export interface EnvironmentConfig {
  NODE_ENV: 'development' | 'testing' | 'staging' | 'production';
  PORT: number;
  DATABASE_URL: string;
  REDIS_URL: string;
  JWT_SECRET: string;
}
