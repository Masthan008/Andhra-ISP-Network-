# Production Release Readiness Verification Checklist

Verify before releasing to production environments:

- [ ] 1. All 26 `@andhra-isp/*` SDK packages built and exported cleanly.
- [ ] 2. Next.js / Vite Web App (`apps/web`) production bundle passes build (`dist/index.html`).
- [ ] 3. NestJS API Gateway (`apps/api`) compiles and Swagger OpenAPI docs generated (`/api/docs`).
- [ ] 4. Health endpoint (`/health`) returns DB/Redis health probes.
- [ ] 5. Zero high/critical security vulnerabilities (`npm audit`).
- [ ] 6. WCAG 2.1 AA accessibility standards verified.
- [ ] 7. Workspace quality score >= 95/100 (`npm run quality`).
- [ ] 8. Environment variables validated against `.env.example`.
- [ ] 9. Vector SVG favicon (`/favicon.svg`) linked across all applications.
- [ ] 10. Automated release notes and CHANGELOG generated.
