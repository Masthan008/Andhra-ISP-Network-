# ANDHRA ISP NETWORK
## Master Entity Relationship Design (ERD), Prisma Modeling & Database Performance Strategy
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 5 — Database & Data Architecture (Prompt 2)  
**Classification:** Database Architecture & Performance Engineering  
**Author:** Principal Database Architect, Prisma Specialist, & Systems Performance Engineer  
**Target Platform:** Production Systems (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & ERD System Vision

The **Andhra ISP Network ERD, Prisma Modeling & Database Performance Strategy** provides the authoritative engineering blueprint for ORM modeling, entity relationships, query execution strategies, database indexing, and caching mechanisms.

Designed to deliver **sub-15ms spatial query latency under 100M+ search requests and millions of concurrent citizens**, the database architecture combines strict **3rd Normal Form (3NF)** relational integrity with high-performance PostGIS spatial indexes, GIN trigram text indexes, and Redis multi-tier caching.

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                            ERD & PERFORMANCE MESH ARCHITECTURE                    |
├───────────────────┬───────────────────────────────────────────────────────────────┤
| Layer             | Architecture & Engineering Standard                           |
├───────────────────┼───────────────────────────────────────────────────────────────┤
| ORM Abstraction   | Prisma ORM (Type-Safe Client + Raw PostGIS Query Extensions)  |
| Primary Key Standard| UUIDv4 (`@default(uuid())`) across all primary entities       |
| Spatial Coordinates| PostGIS 3.4 (`GEOMETRY(POLYGON, 4326)` & `GEOMETRY(POINT, 4326)`)|
| Indexing Strategy | GiST (Spatial Boundary), GIN Trigram (Search), B-Tree (FK/UUID)|
| Partitioning      | Time-based Range Partitioning for `search_history` & `audit`  |
| Cache Invalidation| Event-Driven Redis Pub/Sub Cache Purge on Entity Mutations    |
└───────────────────┴───────────────────────────────────────────────────────────────┘
```

---

## 2. Geographical Dependency & Entity Relationship Matrix

### 2.1 The 8-Level Geographical Dependency Chain
```
[ Country: India ] (1)
       │
       ▼ (1:N)
[ State: Andhra Pradesh ] (N)
       │
       ▼ (1:N)
[ District: 26 AP Districts ] (N)
       │
       ▼ (1:N)
[ Mandal: 679 Sub-Divisions ] (N)
       │
       ▼ (1:N)
[ Village / Ward: 17,000+ Revenue Units ] (N)
       │
       ▼ (N:M via Junction)
[ PIN Code: 6-Digit Postal Area ] (N)
       │
       ▼ (1:N)
[ Coverage Zone: PostGIS Fiber Polygons ] (N)
       │
       ▼ (N:1)
[ ISP Provider Availability: ACT, Jio, Airtel, APSFL, BSNL ] (1)
```

---

## 3. Comprehensive Entity Relationship & Cascade Matrix (40+ Entities)

```
+---------------------------------------------------------------------------------------------------+
|                                  ENTITY RELATIONSHIP & CASCADE MATRIX                             |
+--------------------------+-----------------------+-------------------+----------------------------+
| Parent Entity            | Child Entity          | Cardinality       | Delete / Update Behaviour  |
+--------------------------+-----------------------+-------------------+----------------------------+
| `Country`                | `State`               | 1 : N             | `RESTRICT` / `CASCADE`     |
| `State`                  | `District`            | 1 : N             | `RESTRICT` / `CASCADE`     |
| `District`               | `Mandal`              | 1 : N             | `RESTRICT` / `CASCADE`     |
| `Mandal`                 | `Village`             | 1 : N             | `RESTRICT` / `CASCADE`     |
| `Village`                | `VillagePinCode`      | 1 : N             | `CASCADE` / `CASCADE`      |
| `PinCode`                | `VillagePinCode`      | 1 : N             | `RESTRICT` / `CASCADE`     |
| `IspProvider`            | `ProviderAddress`     | 1 : N             | `CASCADE` / `CASCADE`      |
| `IspProvider`            | `CoverageZone`        | 1 : N             | `CASCADE` / `CASCADE`      |
| `IspProvider`            | `SpeedPlan`           | 1 : N             | `CASCADE` / `CASCADE`      |
| `IspProvider`            | `GooglePlaceId`       | 1 : 1             | `SET NULL` / `CASCADE`     |
| `User`                   | `UserProfile`         | 1 : 1             | `CASCADE` / `CASCADE`      |
| `User`                   | `UserRole`            | 1 : N             | `CASCADE` / `CASCADE`      |
| `Role`                   | `UserRole`            | 1 : N             | `RESTRICT` / `CASCADE`     |
| `Role`                   | `RolePermission`      | 1 : N             | `CASCADE` / `CASCADE`      |
| `Permission`             | `RolePermission`      | 1 : N             | `RESTRICT` / `CASCADE`     |
| `User`                   | `Session`             | 1 : N             | `CASCADE` / `CASCADE`      |
| `User`                   | `RefreshToken`        | 1 : N             | `CASCADE` / `CASCADE`      |
| `User`                   | `UserFavorite`        | 1 : N             | `CASCADE` / `CASCADE`      |
+--------------------------+-----------------------+-------------------+----------------------------+
```

---

## 4. Prisma Modeling Conventions & Guidelines

### 4.1 Architectural Modeling Standards
1. **Naming Conventions:**
   * Models use PascalCase (`model IspProvider`, `model CoverageZone`).
   * Table names map to lowercase plural snake_case using `@@map("isp_providers")`.
   * Fields use camelCase (`fullName`, `phoneNumber`), mapped to snake_case using `@map("phone_number")`.
2. **Primary Key Standard:** Every primary table uses UUIDv4 primary keys (`id String @id @default(uuid()) @db.Uuid`).
3. **Soft Delete Filter Standard:** Entities implementing soft deletes include `deletedAt DateTime? @map("deleted_at")`. Prisma Middleware automatically injects `where: { deletedAt: null }` into all queries.
4. **PostGIS Extensions in Prisma:** PostGIS spatial columns (`GEOMETRY(POLYGON, 4326)` and `GEOMETRY(POINT, 4326)`) are annotated with `Unsupported("geometry(Polygon,4326)")` and indexed using `@@index([boundaryPolygon], type: Gist)`.

---

## 5. Indexing & Query Performance Strategy

```
+---------------------------------------------------------------------------------------------------+
|                                  DATABASE INDEXING BLUEPRINT                                      |
+-----------------------+----------------------+---------------+------------------------------------+
| Target Table          | Column(s)            | Index Type    | Query Performance Rationale        |
+-----------------------+----------------------+---------------+------------------------------------+
| `districts`           | `boundary_polygon`   | GiST          | Sub-10ms GIS polygon spatial point |
|                       |                      |               | containment queries (`ST_Contains`).|
| `mandals`             | `name`               | GIN (Trigram) | Instant sub-15ms fuzzy text        |
|                       |                      |               | search & autocomplete.             |
| `pin_codes`           | `code`               | B-Tree Unique | 1ms exact 6-digit postal lookup.   |
| `coverage_zones`      | `polygon_shape`      | GiST          | Spatial fiber route intersection.  |
| `users`               | `email`              | B-Tree Unique | Sub-1ms user auth login lookup.    |
| `users`               | `phone_number`       | B-Tree Unique | Sub-1ms OTP login lookup.          |
| `refresh_tokens`      | `token_hash`         | B-Tree Unique | Sub-1ms token rotation lookup.     |
| `search_history`      | `created_at, user_id`| B-Tree Comp   | Fast user search analytics reads.  |
| `audit_logs`          | `created_at`         | BRIN / B-Tree | Range scanning for time-series logs|
+-----------------------+----------------------+---------------+------------------------------------+
```

---

## 6. Table Partitioning & Redis Invalidation Strategy

### 6.1 Table Partitioning Architecture
Time-series and heavy analytics tables (`search_history`, `audit_logs`, `security_events`, `google_api_logs`) are partitioned using PostgreSQL range partitioning:
* **`search_history` Partitioning:** Partitioned by Month (`search_history_y2026m07`, `search_history_y2026m08`). Old partitions automatically detach and archive to cold S3 storage after 12 months.
* **Multi-State Partitioning:** Core geographical tables (`mandals`, `villages`, `coverage_zones`) support list partitioning by `state_id` (`AP`, `TS`, `KA`, `TN`), guaranteeing zero performance degradation when expanding nationwide.

### 6.2 Cache Invalidation Policy
* **Event-Driven Invalidation:** When an administrator updates an ISP profile or coverage zone, a NestJS event emitter publishes a `CACHE_PURGE` message to Redis Pub/Sub, invalidating cached key namespaces (`geo:district:*`, `search:auto:*`) across all API cluster nodes within 5ms.

---

## 7. Database Observability & Governance

```
+-----------------------------------------------------------------------------------+
|                        DATABASE OBSERVABILITY THRESHOLDS                          |
+-------------------+--------------------------------+------------------------------+
| Metric            | Alert Threshold                | Action / Resolution          |
+-------------------+--------------------------------+------------------------------+
| Slow Query Latency| > 50ms (p95)                   | Log to OpenTelemetry & Pino  |
| Connection Pool   | > 85% Active Connections       | Scale PgBouncer Pool size    |
| Deadlock Count    | > 0 in 5-minute window         | Trigger PagerDuty alert      |
| Replication Lag   | > 2.0 seconds                  | Reroute reads to Primary     |
| Cache Hit Rate    | < 92%                          | Audit Redis TTL policies     |
+-------------------+--------------------------------+------------------------------+
```

---
**[END OF MASTER ERD, PRISMA MODELING & PERFORMANCE STRATEGY SPECIFICATION]**
