"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const databaseConfig = () => ({
    database: {
        url: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/andhra_isp?schema=public',
        maxConnections: parseInt(process.env.DB_MAX_CONNECTIONS || '20', 10),
    },
});
exports.databaseConfig = databaseConfig;
//# sourceMappingURL=database.config.js.map