# ANDHRA ISP NETWORK
## Master Backend API Architecture & REST API Foundation
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 6 — API Platform Architecture (Prompt 1)  
**Classification:** API Platform Engineering & Backend Architecture Specification  
**Author:** Principal Backend Architect, API Platform Lead, & NestJS Specialist  
**Target Platform:** Production Systems (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & API Platform Architecture Vision

The **Andhra ISP Network Master Backend API Architecture & REST API Foundation** defines the architectural principles, NestJS monorepo module layout, standard request/response envelopes, error handling pipelines, security guards, and deployment specifications for the platform.

Engineered to serve **millions of concurrent citizens, 450+ broadband providers, 679 mandals, 17,000+ villages, and future nationwide expansion**, the API platform guarantees **sub-20ms p95 latency, 99.999% availability, strict OpenAPI 3.0 contract compliance, and zero-downtime blue-green deployments**.

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                          ENTERPRISE API PLATFORM MESH                             |
├───────────────────┬───────────────────────────────────────────────────────────────┤
| Layer             | Specification & Technology Standard                           |
├───────────────────┼───────────────────────────────────────────────────────────────┤
| Framework         | NestJS 10.x + TypeScript 5.7+ (Strict Mode)                   |
| Gateway Routing   | RESTful Path Versioning (`/api/v1/*`) + NGINX Ingress / Kong   |
| Serialization     | Unified Standard JSON Envelope (`success`, `data`, `meta`)    |
| Validation        | Zod Schema Validation Pipes + Class Transformer               |
| Middleware Chain  | CorrelationId -> RateLimiter -> AuthGuard -> RbacGuard        |
| Telemetry & Logs  | Pino Structured Logging + OpenTelemetry W3C Trace Context     |
| Documentation     | OpenAPI 3.0 / Swagger UI (`/api/v1/docs`)                     |
└───────────────────┴───────────────────────────────────────────────────────────────┘
```

---

## 2. API Design Principles & Resource Conventions

### 2.1 Standard Principles
1. **Resource-Oriented REST Naming:** All URI paths use plural nouns in lowercase kebab-case (e.g., `/api/v1/isp-providers`, `/api/v1/districts/visakhapatnam/mandals`).
2. **Stateless Communication:** No server-side HTTP session state; every request passes a signed JWT bearer token (`Authorization: Bearer <token>`).
3. **Idempotency Guarantees:** All `GET`, `PUT`, and `DELETE` endpoints are strictly idempotent. `POST` endpoints accept an optional `X-Idempotency-Key: <uuidv4>` header to prevent duplicate execution during network retries.
4. **Header Standardization:**
   * `Content-Type: application/json`
   * `Accept: application/json`
   * `X-Correlation-ID: <uuidv4>` (Passed through from frontend to backend to database query)
   * `Accept-Language: en, te` (Supports English & Telugu localized responses)

---

## 3. API Versioning & Lifecycle Strategy

```
+-----------------------------------------------------------------------------------+
|                            API VERSIONING & LIFECYCLE                             |
+-------------------+----------------------------+----------------------------------+
| Version Header    | URI Path Pattern           | Lifecycle Stage                  |
+-------------------+----------------------------+----------------------------------+
| `v1` (Current)    | `/api/v1/*`                | Active Production Version        |
| `v2` (Future)     | `/api/v2/*`                | Future Major Schema Evolution    |
+-------------------+----------------------------+----------------------------------+
```

* **Deprecation Policy:** When an API endpoint is scheduled for deprecation, responses include HTTP headers:
  * `Deprecation: @1753920000` (Unix timestamp date of deprecation announcement)
  * `Sunset: Tue, 01 Sep 2026 00:00:00 GMT` (Date of permanent endpoint decommissioning)
  * `Link: </api/v2/isps>; rel="successor-version"`

---

## 4. Standardized Request & Response Envelopes

### 4.1 Success Response JSON Envelope (`200 OK`, `201 Created`)
```json
{
  "success": true,
  "statusCode": 200,
  "message": "ISP Provider profile retrieved successfully.",
  "data": {
    "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    "name": "ACT Fibernet Visakhapatnam",
    "slug": "act-fibernet-visakhapatnam",
    "category": "FTTH_FIBER",
    "isVerified": true
  },
  "meta": {
    "timestamp": "2026-07-22T21:25:00.000Z",
    "correlationId": "c3a9f7e8-1b2c-4d5e-8f9a-0b1c2d3e4f5a",
    "version": "1.0.0-AP",
    "pagination": {
      "page": 1,
      "limit": 20,
      "totalItems": 1,
      "totalPages": 1,
      "hasNextPage": false,
      "hasPrevPage": false
    }
  },
  "links": {
    "self": "/api/v1/isp-providers/act-fibernet-visakhapatnam"
  }
}
```

### 4.2 Error Response JSON Envelope (`RFC 7807 Problem Details`)
```json
{
  "success": false,
  "statusCode": 422,
  "error": "UNPROCESSABLE_ENTITY",
  "message": "Validation failed for registration input fields.",
  "details": [
    {
      "field": "phoneNumber",
      "code": "INVALID_PHONE_FORMAT",
      "message": "Phone number must be a valid 10-digit Indian mobile number."
    }
  ],
  "meta": {
    "timestamp": "2026-07-22T21:25:00.000Z",
    "correlationId": "c3a9f7e8-1b2c-4d5e-8f9a-0b1c2d3e4f5a",
    "path": "/api/v1/auth/register"
  }
}
```

---

## 5. NestJS Pipeline Architecture (`apps/api/src/`)

```
Incoming Client Request
       │
       ▼
[ Middleware Chain ] ───▶ CorrelationIdMiddleware -> SecurityHeadersMiddleware -> Compression
       │
       ▼
[ NestJS Guards ] ──────▶ JwtAuthGuard -> RbacGuard -> RateLimiterGuard
       │
       ▼
[ Interceptors (Pre) ] ─▶ LoggingInterceptor -> MetricsInterceptor -> CacheInterceptor
       │
       ▼
[ Validation Pipes ] ───▶ ZodValidationPipe (Input Sanitization & DTO Schema Check)
       │
       ▼
[ Controller & Service ]▶ Business Logic + Prisma ORM Query Execution
       │
       ▼
[ Interceptors (Post) ]▶ TransformInterceptor (Formats Standard JSON Envelope)
       │
       ▼
[ Exception Filters ] ──▶ GlobalExceptionFilter (Catches errors -> RFC 7807 Format)
       │
       ▼
Outgoing HTTP Response
```

---

## 6. Monorepo Module Layout (`apps/api/src/modules/`)

```
apps/api/src/
├── common/
│   ├── decorators/              # Custom Param Decorators (@CurrentUser, @Roles)
│   ├── dto/                     # Shared Pagination & Response DTOs
│   ├── filters/                 # GlobalExceptionFilter.ts
│   ├── guards/                  # JwtAuthGuard, RbacGuard, RateLimiterGuard
│   ├── interceptors/            # TransformInterceptor, LoggingInterceptor
│   ├── middlewares/             # CorrelationIdMiddleware, SecurityHeaders
│   └── pipes/                   # ZodValidationPipe.ts
├── config/                      # Environment configuration schemas
├── modules/
│   ├── admin/                   # Admin management, ETL imports, system flags
│   ├── analytics/               # CTR tracking & district search metrics
│   ├── auth/                    # AuthController, AuthService, Passport Strategies
│   ├── coverage/                # CoverageZoneController, PostGIS queries
│   ├── district/                # 26 AP District details & spatial boundaries
│   ├── google-maps/             # DARE Place ID resolution & geocoding cache
│   ├── health/                  # Kubernetes Liveness & Readiness probes
│   ├── isp-provider/            # Provider profiles, speed plans, contacts
│   ├── mandal/                  # Mandal sub-divisions & village mappings
│   ├── search/                  # Spotlight search, autocomplete, filters
│   └── user/                    # User profile, favorites, saved searches
└── main.ts                      # NestJS Bootstrap entry file
```

---
**[END OF MASTER BACKEND API ARCHITECTURE & REST API FOUNDATION SPECIFICATION]**
