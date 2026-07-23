"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const appConfig = () => ({
    app: {
        env: process.env.NODE_ENV || 'development',
        port: parseInt(process.env.PORT || '3000', 10),
        apiPrefix: process.env.API_PREFIX || 'api/v1',
        corsOrigins: (process.env.CORS_ORIGINS || '*').split(','),
    },
});
exports.appConfig = appConfig;
//# sourceMappingURL=app.config.js.map