"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConfig = void 0;
const redisConfig = () => ({
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
        password: process.env.REDIS_PASSWORD || undefined,
        ttl: parseInt(process.env.REDIS_TTL || '300', 10),
    },
});
exports.redisConfig = redisConfig;
//# sourceMappingURL=redis.config.js.map