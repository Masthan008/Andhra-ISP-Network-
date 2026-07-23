export interface DatabaseConfig {
    url: string;
    maxConnections: number;
}
export declare const databaseConfig: () => {
    database: DatabaseConfig;
};
