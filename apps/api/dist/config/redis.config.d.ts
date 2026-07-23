export interface RedisConfig {
    host: string;
    port: number;
    password?: string;
    ttl: number;
}
export declare const redisConfig: () => {
    redis: RedisConfig;
};
