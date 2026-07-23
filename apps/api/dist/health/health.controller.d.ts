import { PrismaService } from '../infrastructure/prisma/prisma.service';
import { RedisService } from '../infrastructure/redis/redis.service';
export declare class HealthController {
    private readonly prismaService;
    private readonly redisService;
    constructor(prismaService: PrismaService, redisService: RedisService);
    getHealth(): {
        status: string;
        service: string;
        environment: string;
        dependencies: {
            database: {
                status: string;
                connected: boolean;
            };
            redis: {
                status: string;
                connected: boolean;
                keysCount: number;
            };
        };
        timestamp: string;
    };
    getLiveness(): {
        status: string;
    };
    getReadiness(): {
        status: string;
        database: string;
        redis: string;
    };
    getVersion(): {
        version: string;
        release: string;
    };
    getStatus(): {
        uptime: number;
        memoryUsage: NodeJS.MemoryUsage;
        system: string;
    };
}
