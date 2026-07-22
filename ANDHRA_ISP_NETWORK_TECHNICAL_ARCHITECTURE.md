# ANDHRA ISP NETWORK
## Master Enterprise Technical Architecture Document
**Version:** 1.0.0-Enterprise  
**Document Status:** Final Approved Engineering Blueprint  
**Classification:** Proprietary / Technical Systems Architecture Specification  
**Author:** Principal Software Architect, Solutions Architecture, & Lead Engineering Team  
**Target Platform:** Production Web System (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & Architectural Principles

### 1.1 Architectural Purpose & Mandate
This Technical Architecture document serves as the master engineering reference for building, deploying, operating, and maintaining the **Andhra ISP Network** web platform. Following the requirements, business strategy, and information architecture defined in the Master Product Requirements Document (PRD) and Information Architecture (IA) documents, this specification details the full-stack system topology, software engineering standards, database schema, API specifications, spatial resolution algorithms, security policies, performance budgets, and cloud deployment pipelines.

### 1.2 Core Architectural Principles
1. **Separation of Concerns & Decoupled Architecture:** Clean boundary separation between presentation layers (Next.js Server Components), business API logic, background asynchronous workers (BullMQ), spatial engine (PostGIS), search indexers (Typesense), and in-memory caches (Redis).
2. **Sub-100ms Performance SLA:** Strict latency budgets across all core user paths: initial page load (LCP $< 1.2\text{s}$), instant search autocomplete ($< 20\text{ms}$), database spatial queries ($< 15\text{ms}$).
3. **90%+ API Cost Optimization:** Zero redundant Google Maps/Places API calls via a multi-tiered Redis and PostgreSQL spatial caching protocol.
4. **National Multi-State Expansion:** Database schemas, API routes, and routing logic decoupled from state-specific boundaries to support pan-India expansion (AP $\rightarrow$ Telangana $\rightarrow$ South India $\rightarrow$ National) without breaking changes.
5. **Zero-Trust Security & OWASP Top 10 Resilience:** End-to-end encryption (TLS 1.3), strict Role-Based Access Control (RBAC), parameterized queries, sanitization, and sliding-window rate-limiting.

---

## 2. High-Level System Architecture & Component Topology

```
+-----------------------------------------------------------------------------------+
|                                CLIENT LAYER                                       |
|  Desktop Browsers  •  Mobile Web  •  PWA  •  Future Native Mobile Apps (iOS/Android) |
+------------------------------------+----------------------------------------------+
                                     | HTTPS / TLS 1.3 / WebSockets
                                     v
+-----------------------------------------------------------------------------------+
|                        EDGE & CDN ROUTING LAYER (Cloudflare)                      |
|  Anycast DNS  •  Edge Caching  •  Web Application Firewall (WAF)  •  DDoS Shield    |
+------------------------------------+----------------------------------------------+
                                     |
                                     v
+-----------------------------------------------------------------------------------+
|                  APPLICATION & SERVERLESS LAYER (Vercel / AWS EC2)                 |
|  Next.js 15+ App Router  •  React Server Components (RSC)  •  Server Actions      |
|  TypeScript Node.js API Routes  •  JWT Authentication Middleware                  |
+----------+-------------------------+-------------------------+--------------------+
           |                         |                         |
           v                         v                         v
+-----------------------+ +-----------------------+ +-----------------------+
|  TYPESENSE SEARCH DB  | |  REDIS IN-MEMORY CACHE| | BULLMQ BACKGROUND TASK|
|  (Sub-20ms Fuzzy Index)| | (Google Places Cache) | | (Batch Geocode Jobs)  |
+-----------------------+ +-----------+-----------+ +-----------+-----------+
                                      |                         |
                                      v                         v
                           +------------------------------------------------+
                           |           GOOGLE MAPS PLATFORM APIs            |
                           | Places Text Search • Places Details • Geocoding|
                           +------------------------------------------------+
                                      ^
                                      | Data Hydration & Sync
                                      v
+-----------------------------------------------------------------------------------+
|                        PERSISTENT DATA STORE (AWS RDS PostgreSQL)                 |
|  PostgreSQL 16 Engine  •  PostGIS Spatial Extension  •  Prisma / Drizzle ORM      |
+-----------------------------------------------------------------------------------+
```

---

## 3. Technology Stack Justifications & Architecture Decision Records (ADRs)

### 3.1 Technology Selection Matrix

```
+-----------------------------------------------------------------------------------+
|                             ENTERPRISE TECH STACK                                 |
+-------------------+--------------------+------------------------------------------+
| Technology Layer  | Selection          | Technical Justification                  |
+-------------------+--------------------+------------------------------------------+
| Frontend Framework| Next.js 15+        | App Router, React Server Components (RSC)|
|                   | (React 19)         | for zero-bundle rendering & fast ISR.    |
| Language          | TypeScript 5.5+    | End-to-end type safety across DB, API, UI|
| Styling & Design  | Vanilla CSS +      | Highly scalable design token system with |
|                   | Tailwind CSS v4    | Radix UI primitive accessibility.        |
| Micro-Animations  | GSAP + Lenis +     | Luxuriously smooth inertia scrolling &   |
|                   | Framer Motion      | high-performance layout morphing.        |
| Interactive Vector| Three.js / D3.js   | GPU-accelerated AP vector map canvas.    |
| State Management  | React Query v5 +   | Server state caching paired with lightweight|
|                   | Zustand            | client UI state.                         |
| Primary Database  | PostgreSQL 16 +    | PostGIS enables native spatial indexing  |
|                   | PostGIS            | (`GIST`) for spatial boundary queries.   |
| ORM Layer         | Prisma / Drizzle   | Type-safe query generation, migration    |
|                   |                    | control, and PostGIS raw support.        |
| Instant Search    | Typesense Server   | In-memory sub-20ms C++ fuzzy search.     |
| Caching Layer     | Redis v7.2         | High-throughput key-value store for Google|
|                   |                    | Places API caching & rate-limiting.      |
| Async Processing  | BullMQ + Redis     | Asynchronous queue handling bulk CSV     |
|                   |                    | ETL imports & batch geocoding jobs.      |
| Auth Framework    | NextAuth.js / JWT  | OAuth2, credentials provider, secure     |
|                   |                    | HttpOnly refresh tokens, RBAC roles.     |
| Cloud Infrastructure| Vercel + AWS RDS  | Serverless frontend edge deployment with |
|                   | + Cloudflare CDN   | high-availability managed database.      |
+-------------------+--------------------+------------------------------------------+
```

---

## 4. Monorepo Enterprise Folder Structure

```
andhra-isp-network/
├── .github/
│   ├── workflows/
│   │   ├── ci-cd-pipeline.yml
│   │   ├── security-scan.yml
│   │   └── database-migration-check.yml
│   └── PULL_REQUEST_TEMPLATE.md
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DATABASE_SCHEMA.md
│   └── API_SPECIFICATION.md
├── packages/
│   ├── database/                    # Shared Prisma / Drizzle DB Client
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   └── migrations/
│   │   └── src/
│   │       ├── client.ts
│   │       └── spatial-queries.ts
│   ├── config/                      # Shared ESLint, TSConfig, Prettier
│   └── types/                       # Shared TypeScript Interfaces & DTOs
│       ├── geo.types.ts
│       ├── isp.types.ts
│       └── api.types.ts
├── apps/
│   ├── web/                         # Primary Next.js 15 Web Application
│   │   ├── public/
│   │   │   ├── assets/
│   │   │   └── geojson/             # AP Districts & Mandals Vector Polygons
│   │   ├── src/
│   │   │   ├── app/                 # Next.js App Router Structure
│   │   │   │   ├── (public)/        # Public Directory Pages
│   │   │   │   │   ├── page.tsx     # Landing Page
│   │   │   │   │   ├── ap/
│   │   │   │   │   │   ├── explorer/page.tsx
│   │   │   │   │   │   ├── districts/page.tsx
│   │   │   │   │   │   └── [district]/
│   │   │   │   │   │       ├── page.tsx
│   │   │   │   │   │       └── [mandal]/page.tsx
│   │   │   │   │   ├── pincode/[pincode]/page.tsx
│   │   │   │   │   ├── isp/[provider]/page.tsx
│   │   │   │   │   └── compare/page.tsx
│   │   │   │   ├── (auth)/          # Authentication Pages
│   │   │   │   │   ├── login/page.tsx
│   │   │   │   │   └── register/page.tsx
│   │   │   │   ├── (user)/          # User Portal Pages
│   │   │   │   │   └── dashboard/page.tsx
│   │   │   │   ├── (admin)/         # Admin Console Pages
│   │   │   │   │   └── admin/
│   │   │   │   │       ├── dashboard/page.tsx
│   │   │   │   │       ├── import/page.tsx
│   │   │   │   │       └── google-cache/page.tsx
│   │   │   │   └── api/             # RESTful Next.js API Routes
│   │   │   │       ├── v1/
│   │   │   │       │   ├── search/route.ts
│   │   │   │       │   ├── districts/route.ts
│   │   │   │       │   ├── pincodes/route.ts
│   │   │   │       │   ├── isps/route.ts
│   │   │   │       │   └── admin/route.ts
│   │   │   ├── components/          # React UI Components
│   │   │   │   ├── ui/              # Radix UI / Atomic Primitives
│   │   │   │   ├── maps/            # Google Maps & Interactive AP Map
│   │   │   │   ├── search/          # Ctrl+K Instant Search Overlay
│   │   │   │   ├── providers/       # Context Providers (QueryClient, Auth)
│   │   │   │   └── layout/          # Header, Sticky Breadcrumb, Footer
│   │   │   ├── hooks/               # Custom React Hooks
│   │   │   ├── services/            # API Client Services
│   │   │   ├── store/               # Zustand Global Client Stores
│   │   │   ├── lib/                 # Utility Functions (DARE Engine, Fetchers)
│   │   │   └── middleware.ts        # Next.js Edge Auth & Rate-Limiting
│   ├── worker/                      # BullMQ Background Worker Node Service
│   │   ├── src/
│   │   │   ├── processors/
│   │   │   │   ├── csv-import.processor.ts
│   │   │   │   └── google-geocode.processor.ts
│   │   │   └── index.ts
├── terraform/                       # Infrastructure as Code
│   ├── main.tf
│   ├── rds.tf
│   └── redis.tf
├── package.json
└── turbo.json
```

---

## 5. Database Blueprint & Schema Architecture (PostgreSQL 16 + PostGIS)

```sql
-- ENABLE POSTGIS & UUID EXTENSIONS
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. STATES TABLE
CREATE TABLE states (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(10) NOT NULL UNIQUE, -- 'AP', 'TS', etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. DISTRICTS TABLE
CREATE TABLE districts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    state_id UUID NOT NULL REFERENCES states(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(110) NOT NULL UNIQUE,
    headquarters VARCHAR(100),
    total_mandals INT DEFAULT 0,
    boundary GEOMETRY(MultiPolygon, 4326),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_districts_slug ON districts(slug);
CREATE INDEX idx_districts_spatial ON districts USING GIST(boundary);

-- 3. MANDALS TABLE
CREATE TABLE mandals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    district_id UUID NOT NULL REFERENCES districts(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(110) NOT NULL UNIQUE,
    centroid GEOMETRY(Point, 4326),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_mandals_slug ON mandals(slug);
CREATE INDEX idx_mandals_spatial ON mandals USING GIST(centroid);

-- 4. VILLAGES TABLE
CREATE TABLE villages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    mandal_id UUID NOT NULL REFERENCES mandals(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(110) NOT NULL,
    pincode VARCHAR(10),
    location GEOMETRY(Point, 4326),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_villages_pincode ON villages(pincode);

-- 5. PIN CODES TABLE
CREATE TABLE pin_codes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(10) NOT NULL UNIQUE,
    office_name VARCHAR(150),
    mandal_id UUID REFERENCES mandals(id),
    district_id UUID REFERENCES districts(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_pin_codes_code ON pin_codes(code);

-- 6. ISP PROVIDERS TABLE
CREATE TABLE isp_providers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(160) NOT NULL UNIQUE,
    logo_url TEXT,
    website_url TEXT,
    helpline_number VARCHAR(50),
    email VARCHAR(100),
    isp_type VARCHAR(50) CHECK (isp_type IN ('NATIONAL', 'STATE', 'REGIONAL_LCO', 'ENTERPRISE')),
    technology_types VARCHAR(50)[] DEFAULT '{"FIBER"}',
    is_verified BOOLEAN DEFAULT FALSE,
    average_rating NUMERIC(3,2) DEFAULT 0.00,
    total_reviews INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_isp_providers_slug ON isp_providers(slug);

-- 7. GOOGLE PLACES CACHE TABLE (Crucial Map Strategy)
CREATE TABLE google_places_cache (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    isp_id UUID NOT NULL UNIQUE REFERENCES isp_providers(id) ON DELETE CASCADE,
    google_place_id VARCHAR(255) NOT NULL UNIQUE,
    formatted_address TEXT NOT NULL,
    latitude DOUBLE PRECISION NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    location GEOMETRY(Point, 4326) NOT NULL,
    viewport_json JSONB,
    business_status VARCHAR(50),
    rating NUMERIC(3,2),
    user_ratings_total INT,
    place_details_raw JSONB,
    is_estimated_location BOOLEAN DEFAULT FALSE,
    last_fetched_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP WITH TIME ZONE DEFAULT (CURRENT_TIMESTAMP + INTERVAL '30 days')
);
CREATE INDEX idx_google_places_place_id ON google_places_cache(google_place_id);
CREATE INDEX idx_google_places_spatial ON google_places_cache USING GIST(location);

-- 8. ISP COVERAGE MAPPING TABLE
CREATE TABLE isp_coverage (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    isp_id UUID NOT NULL UNIQUE REFERENCES isp_providers(id) ON DELETE CASCADE,
    district_id UUID REFERENCES districts(id),
    mandal_id UUID REFERENCES mandals(id),
    village_id UUID REFERENCES villages(id),
    pin_code_id UUID REFERENCES pin_codes(id),
    service_status VARCHAR(50) DEFAULT 'ACTIVE' CHECK (service_status IN ('ACTIVE', 'PLANNED', 'DEPRECATED')),
    max_download_speed_mbps INT DEFAULT 100,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_coverage_entry UNIQUE (isp_id, mandal_id, village_id, pin_code_id)
);
CREATE INDEX idx_coverage_lookup ON isp_coverage(pin_code_id, mandal_id, district_id);

-- 9. USERS & ROLES TABLE
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash TEXT,
    phone_number VARCHAR(20),
    role VARCHAR(50) DEFAULT 'CITIZEN' CHECK (role IN ('SUPER_ADMIN', 'DISTRICT_ADMIN', 'ISP_MANAGER', 'CITIZEN')),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. SYSTEM AUDIT & LOGS TABLE
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id VARCHAR(100),
    metadata JSONB,
    ip_address VARCHAR(45),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## 6. Complete API Architecture & Interface Specifications

### 6.1 Standard API Envelope & Error Format
All API responses follow a strict JSON payload format:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Resource retrieved successfully",
  "data": {},
  "meta": {
    "page": 1,
    "limit": 20,
    "totalItems": 150,
    "totalPages": 8
  }
}
```

#### Standardized Error Response Format
```json
{
  "success": false,
  "statusCode": 400,
  "error": "BAD_REQUEST",
  "message": "Invalid PIN Code format provided.",
  "details": [
    {
      "field": "pincode",
      "issue": "Must be exactly 6 digits."
    }
  ],
  "timestamp": "2026-07-22T20:30:00.000Z"
}
```

---

## 7. Google Maps, Places & Geocoding Spatial Architecture

### 7.1 Dynamic Address Resolution Engine (DARE) Algorithm

```
[ INPUT RECORD: ISP Name + Mandal + District + PIN Code ]
                           |
                           v
          Query Redis Cache Key: `dare:{isp_id}`
                           |
            +--------------+--------------+
            |                             |
       [CACHE HIT]                   [CACHE MISS]
            |                             |
            v                             v
  Return Cached Place ID       Query PostgreSQL `google_places_cache`
   & Lat/Lng Geometry                     |
                                +---------+---------+
                                |                   |
                           [CACHE HIT]         [CACHE MISS]
                                |                   |
                                v                   v
                     Return Places Record    Construct Google Places
                                            Text Search Query:
                                            `"[ISP Name] Broadband Office [Mandal], [District] District, AP [PIN]"`
                                                    |
                                                    v
                                         Call Google Places API
                                                    |
                                                    v
                                      Candidate Disambiguation
                                                    |
                      +-----------------------------+-----------------------------+
                      |                                                           |
             [Score >= 80]                                               [Score < 80]
                      |                                                           |
                      v                                                           v
          Store Verified Place ID &                                 Fallback to Mandal/PIN
          Coordinates in DB & Redis                                 Centroid Geocode Point
          (is_estimated = FALSE)                                    (is_estimated = TRUE)
```

---

## 8. Security Architecture, Cryptography & Compliance Blueprint

### 8.1 Security Controls Matrix
1. **Authentication:** NextAuth.js paired with JWT tokens (15-min TTL) and HttpOnly, SameSite=Strict refresh cookies.
2. **Role-Based Access Control (RBAC):** Middleware checks session JWT role claim against required endpoint permissions.
3. **Sliding Window Rate Limiting (Redis):**
   * Public Search API: 100 requests per minute per IP.
   * Auth Endpoints: 5 requests per minute per IP.
   * Admin Bulk Actions: 10 operations per hour.
4. **OWASP Top 10 Protections:**
   * **SQL Injection:** Parameterized queries strictly enforced via Prisma/Drizzle.
   * **XSS:** Automated DOMPurify sanitization on user reviews.
   * **CSRF:** Anti-CSRF double-submit tokens on mutating endpoints.

---

## 9. Performance Optimization & Edge Rendering Strategy

```
+-----------------------------------------------------------------------------------+
|                        PERFORMANCE TARGETS & METRICS                              |
+-------------------+--------------------+------------------------------------------+
| Metric            | Target Threshold   | Optimization Strategy                    |
+-------------------+--------------------+------------------------------------------+
| LCP (Largest Contentful Paint) | < 1.2 Seconds  | Next.js Image Optimization + WebP    |
| FID / INP         | < 50 Milliseconds  | React 19 Concurrent Rendering            |
| CLS (Cumulative Layout Shift)  | 0.00          | Fixed aspect-ratio image containers      |
| Search Latency    | < 20 Milliseconds  | In-memory Typesense edge indexing        |
| DB Query Speed    | < 15 Milliseconds  | Spatial GIST indices on PostGIS columns  |
| Lighthouse Score  | 98+ Desktop / 95+ Mobile | Edge CDN caching via Cloudflare    |
+-------------------+--------------------+------------------------------------------+
```

---

## 10. DevOps, Cloud Infrastructure & Deployment Blueprint

```
[ GITHUB REPOSITORY ]
        |
        | Git Push to `main` Branch
        v
[ GITHUB ACTIONS CI/CD PIPELINE ]
        |
        +---> Run Linter & TypeScript Compilation Check
        +---> Run Unit Tests (Vitest / Jest)
        +---> Run E2E Tests (Playwright)
        +---> Execute Prisma Database Migration Dry-Run
        |
        v (All Tests Passed)
+-------+---------------------------------+
|                                         |
v                                         v
[ PRODUCTION FRONTEND ]        [ PRODUCTION WORKER CONTAINER ]
Deploy to Vercel Enterprise     Deploy to AWS ECS / Fargate
(Edge Serverless Functions)     (BullMQ Async CSV/Geocode Worker)
        |                                 |
        +----------------+----------------+
                         |
                         v
          [ AWS MANAGED RDS POSTGRESQL + REDIS ]
```

---

## 11. Testing Strategy & Quality Assurance

* **Unit Testing (Vitest):** Coverage target $>85\%$ for spatial calculation algorithms, DARE candidate scoring, search query transformers.
* **Integration Testing (Supertest):** Validates Next.js API routes with mock PostgreSQL containers (Docker).
* **End-to-End Testing (Playwright):** Automated headless browser tests for search autocomplete, map card popup interactions, comparison drawer state persistence, and admin CSV uploads.
* **Load Testing (k6):** Simulates 10,000 concurrent virtual users querying PIN codes to verify Redis cache hit rates under load.

---

## 12. Multi-State Scalability & National Expansion Roadmap

```
NATIONAL SYSTEM ARCHITECTURE:

Database Multi-Tenancy Scheme:
  Add `state_code` indexed column to `districts`, `mandals`, `villages`, `pin_codes`, `isp_coverage`.

Dynamic Regional Caching Keys:
  Redis keys structured as: `geo:{state_code}:{district_slug}:{mandal_slug}`

Edge Geographic Routing:
  Cloudflare Workers inspect client request IP header (`CF-IPCountry`, `CF-IPCity`) to automatically bias default search results to the visitor's home state.
```

---

## 13. Risk Assessment & Failure Modes

| Failure Scenario | Risk Level | Automatic Recovery Protocol |
| :--- | :---: | :--- |
| Google Places API Outage | Medium | Serve cached Place IDs and Lat/Lng from PostgreSQL DB; fallback to Mandal spatial centroids. |
| Redis Cache Crash | High | Fall back to direct PostgreSQL query read replicas; auto-rebuild Redis cache asynchronously. |
| DB Connection Pool Exhaustion | Medium | PgBouncer connection pooling layer limits max active client connections and queues bursts. |
| High Bulk CSV Processing Load | Low | BullMQ worker concurrency capped at 5 worker threads to prevent DB CPU spikes. |

---

## 14. Enterprise Glossary & Appendix

* **ADR:** Architecture Decision Record.
* **DARE:** Dynamic Address Resolution Engine.
* **RSC:** React Server Components.
* **ISR:** Incremental Static Regeneration.
* **GIST:** Generalized Search Tree (PostgreSQL spatial indexing method).
* **BullMQ:** High-performance Node.js message queue backed by Redis.

---
**[END OF MASTER ENTERPRISE TECHNICAL ARCHITECTURE DOCUMENT]**
