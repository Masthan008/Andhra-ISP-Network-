"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Andhra ISP Network — Enterprise REST API Gateway')
        .setDescription('Production-ready API documentation mapping digital connectivity, ISP discovery, and spatial GIS infrastructure across all 26 Districts and 679 Mandals in Andhra Pradesh.')
        .setVersion('1.0.0-enterprise')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Enter JWT Access Token',
        in: 'header',
    }, 'JWT-auth')
        .addTag('Health & Status', 'System health, liveness, readiness, and metrics endpoints')
        .addTag('ISP Discovery', 'Search, filter, and spatial geographic ISP discovery APIs')
        .addTag('Admin Operations', 'Verification queue, district management, and operational controls')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
        customSiteTitle: 'Andhra ISP Network — API Documentation',
    });
}
//# sourceMappingURL=swagger.builder.js.map