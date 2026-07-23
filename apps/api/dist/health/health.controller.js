"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../infrastructure/prisma/prisma.service");
const redis_service_1 = require("../infrastructure/redis/redis.service");
let HealthController = class HealthController {
    constructor(prismaService, redisService) {
        this.prismaService = prismaService;
        this.redisService = redisService;
    }
    getHealth() {
        const dbHealth = this.prismaService.getHealthStatus();
        const redisHealth = this.redisService.getHealthStatus();
        return {
            status: dbHealth.connected && redisHealth.connected ? 'ok' : 'degraded',
            service: 'Andhra ISP Network REST API Gateway',
            environment: process.env.NODE_ENV || 'development',
            dependencies: {
                database: dbHealth,
                redis: redisHealth,
            },
            timestamp: new Date().toISOString(),
        };
    }
    getLiveness() {
        return { status: 'up' };
    }
    getReadiness() {
        const dbHealth = this.prismaService.getHealthStatus();
        const redisHealth = this.redisService.getHealthStatus();
        return {
            status: dbHealth.connected && redisHealth.connected ? 'ready' : 'not_ready',
            database: dbHealth.status,
            redis: redisHealth.status,
        };
    }
    getVersion() {
        return {
            version: '1.0.0-enterprise',
            release: 'Phase 21 Prompt 3 Backend Foundation',
        };
    }
    getStatus() {
        return {
            uptime: process.uptime(),
            memoryUsage: process.memoryUsage(),
            system: 'Andhra ISP Network Platform Engine',
        };
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "getHealth", null);
__decorate([
    (0, common_1.Get)('liveness'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "getLiveness", null);
__decorate([
    (0, common_1.Get)('readiness'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "getReadiness", null);
__decorate([
    (0, common_1.Get)('version'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "getVersion", null);
__decorate([
    (0, common_1.Get)('status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "getStatus", null);
exports.HealthController = HealthController = __decorate([
    (0, common_1.Controller)('health'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], HealthController);
//# sourceMappingURL=health.controller.js.map