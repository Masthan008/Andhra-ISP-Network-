export interface DatabaseConfig {
  url: string;
  maxConnections: number;
}

export const databaseConfig = (): { database: DatabaseConfig } => ({
  database: {
    url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/andhra_isp?schema=public',
    maxConnections: parseInt(process.env.DB_MAX_CONNECTIONS || '20', 10),
  },
});
