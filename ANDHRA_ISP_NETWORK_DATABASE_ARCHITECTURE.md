# ANDHRA ISP NETWORK
## Master Database Schema & Data Architecture Specification
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 5 — Database & Data Architecture (Prompt 1)  
**Classification:** Database Systems & Data Architecture Specification  
**Author:** Principal Database Architect, Enterprise Data Engineer, & System Designer  
**Target Platform:** Production Systems (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & Architectural Vision

The **Andhra ISP Network Master Database Schema & Data Architecture** serves as the master blueprint for backend engineering, Prisma ORM modeling, PostGIS spatial queries, Typesense search indexing, and Google Maps place resolution caching.

Engineered to support **tens of millions of citizens, 450+ broadband providers, 679 mandals, 17,000+ villages, and future nationwide expansion to all 28 Indian states**, the database strictly adheres to **3rd Normal Form (3NF)** with strategic denormalization for sub-millisecond GIS spatial reads.

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                            ENTERPRISE DATA ARCHITECTURE MESH                       |
├───────────────────┬───────────────────────────────────────────────────────────────┤
| Component         | Specification & Engine Standard                               |
├───────────────────┼───────────────────────────────────────────────────────────────┤
| Primary RDBMS     | PostgreSQL 16 (PostGIS 3.4 Spatial Extension)                 |
| Spatial Coordinates| WGS84 SRID 4326 (`GEOMETRY(POLYGON, 4326)` & `POINT`)          |
| Primary Keys      | UUIDv4 (`gen_random_uuid()`) for distributed scalability      |
| Caching Layer     | Redis Cluster 7.2 (Multi-Tier TTL Cache Strategy)             |
| Search Engine     | PostgreSQL GIN Trigram / Typesense Parallel Ingestion Index   |
| Audit Telemetry   | CDC (Change Data Capture) + Audit Tables + Soft Deletion      |
└───────────────────┴───────────────────────────────────────────────────────────────┘
```

---

## 2. Geographical Hierarchy Architecture

The database models India's administrative geography down to individual villages and 6-digit postal codes:

```
[ Country: India (IN) ]
        │
        ▼
[ State: Andhra Pradesh (AP) ]
        │
        ▼
[ District: Visakhapatnam, NTR Vijayawada, Tirupati... (26 AP Districts) ]
        │
        ▼
[ Mandal: Gajuwaka, Anandapuram, Vijayawada Urban... (679 Mandals) ]
        │
        ▼
[ Village / Ward: 17,000+ Local Habitations ]
        │
        ▼
[ PIN Code: 6-Digit Postal Area (e.g. 530026) ]
        │
        ▼
[ ISP Coverage Mapping: Verified Places, Fiber Routes & Plan Availability ]
```

---

## 3. Database Domain Schemas (40+ Tables Inventory)

### 3.1 Geographic Domain Tables
1. `countries` — ISO country codes and spatial bounding boxes.
2. `states` — Indian states and UTs with PostGIS boundary polygons.
3. `districts` — 26 AP districts with headquarters, census codes, and boundary geometries.
4. `mandals` — 679 mandal sub-divisions linked to parent districts.
5. `villages` — 17,000+ revenue villages and urban wards with centroid coordinates.
6. `pin_codes` — 6-digit postal code mapping table.
7. `village_pin_codes` — Junction table connecting villages to postal codes.

### 3.2 Provider & Coverage Domain Tables
8. `isp_providers` — ISP corporate entities (ACT, Jio, Airtel, APSFL, BSNL, local LCOs).
9. `provider_contacts` — Verified customer care desks, nodal officer contacts, and emails.
10. `provider_addresses` — Physical branch office addresses in mandal headquarters.
11. `coverage_zones` — PostGIS polygon shapes defining FTTH fiber reach.
12. `provider_services` — Active internet services (FTTH Fiber, 5G AirFiber, Leased Line).
13. `provider_technologies` — Technology capabilities (GPON, XGS-PON, Fixed Wireless).
14. `speed_plans` — Consumer and commercial broadband plans with pricing and data limits.
15. `coverage_statistics` — Pre-aggregated coverage percentages per district and mandal.

### 3.3 Google Maps & Spatial Caching Domain Tables
16. `google_place_ids` — Verified Google Place IDs for ISP branch offices.
17. `geocoding_cache` — Reverse geocoding text query cache (30-day Redis / Postgres TTL).
18. `address_cache` — Parsed Google Address Component storage.
19. `coordinates_cache` — Latitude/Longitude bounding box cache.
20. `nearby_locations_cache` — Spatial radius query cache ($<10\text{ km}$).
21. `google_api_logs` — API quota tracking, cost accounting, and response status codes.

### 3.4 User & Security Domain Tables
22. `users` — Citizen and manager account identities.
23. `user_profiles` — User metadata, preferred district, and notification settings.
24. `roles` — RBAC roles (`ROLE_GUEST`, `ROLE_USER`, `ROLE_ISP_MANAGER`, `ROLE_ADMIN`, `ROLE_SUPER_ADMIN`).
25. `permissions` — Granular permission strings (`isp:create`, `coverage:upload`, `audit:read`).
26. `role_permissions` — Junction table mapping permissions to roles.
27. `user_roles` — Junction table assigning roles to users.
28. `user_favorites` — Saved favorite ISPs and bookmarked PIN codes.
29. `user_saved_searches` — Saved spatial search criteria.
30. `refresh_tokens` — Rotating refresh token hashes.
31. `sessions` — Active user sessions and device fingerprints.
32. `login_history` — Security log of IP addresses, locations, and device agents.

### 3.5 Search & Analytics Domain Tables
33. `search_history` — User query search logs with matched results count.
34. `popular_searches` — Aggregated trending search queries per district.
35. `autocomplete_cache` — Pre-rendered search autocomplete response cache.
36. `district_analytics` — Monthly search volume and provider density metrics per district.
37. `isp_analytics` — Click-Through-Rate (CTR), lead generation, and review statistics.

### 3.6 Admin & Audit Domain Tables
38. `audit_logs` — Master Change Data Capture (CDC) audit trail for entity mutations.
39. `security_events` — Security alerts (brute-force attempts, rate-limit triggers).
40. `bulk_import_jobs` — ETL CSV import job status and error reports.
41. `feature_flags` — Dynamic system feature toggles (`enable_5g_airfiber_filter`, etc.).

---

## 4. Comprehensive Table Specifications (Sample Core Table)

### 4.1 Table: `districts`
* **Purpose:** Stores administrative boundary data, headquarters, and spatial polygons for all 26 districts of Andhra Pradesh.
* **Columns:**
  * `id` (`UUID`, `PRIMARY KEY`, Default: `gen_random_uuid()`) — Unique district identifier.
  * `state_id` (`UUID`, `FOREIGN KEY` $\rightarrow$ `states.id`, `NOT NULL`) — Parent state link.
  * `name` (`VARCHAR(100)`, `NOT NULL`) — Official district name (e.g., "Visakhapatnam").
  * `slug` (`VARCHAR(100)`, `UNIQUE`, `NOT NULL`) — Canonical URL slug (e.g., "visakhapatnam").
  * `headquarters` (`VARCHAR(100)`, `NOT NULL`) — Headquarters town (e.g., "Visakhapatnam").
  * `census_code` (`VARCHAR(20)`, `UNIQUE`) — Government census code.
  * `boundary_polygon` (`GEOMETRY(POLYGON, 4326)`) — PostGIS administrative boundary shape.
  * `center_point` (`GEOMETRY(POINT, 4326)`) — Geographic centroid coordinates.
  * `mandals_count` (`INT`, Default: `0`) — Denormalized count of mandals.
  * `created_at` (`TIMESTAMPTZ`, Default: `CURRENT_TIMESTAMP`) — Record creation time.
  * `updated_at` (`TIMESTAMPTZ`, Default: `CURRENT_TIMESTAMP`) — Record update time.
* **Relationships:**
  * `1 : N` with `mandals` (One district contains many mandals).
  * `N : 1` with `states` (Many districts belong to one state).
* **Indexes:**
  * `PRIMARY KEY (id)`
  * `UNIQUE INDEX idx_districts_slug (slug)`
  * `GIST INDEX idx_districts_boundary (boundary_polygon)` — PostGIS spatial index.
  * `INDEX idx_districts_state (state_id)`

---

## 5. Indexing & Spatial PostGIS Strategy

```sql
-- PostGIS Spatial Indexing
CREATE INDEX idx_districts_spatial ON districts USING GIST (boundary_polygon);
CREATE INDEX idx_coverage_zones_spatial ON coverage_zones USING GIST (polygon_shape);
CREATE INDEX idx_villages_centroid ON villages USING GIST (centroid_location);

-- GIN Trigram Search Indexing for Lightning Autocomplete
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX idx_districts_name_trgm ON districts USING GIN (name gin_trgm_ops);
CREATE INDEX idx_mandals_name_trgm ON mandals USING GIN (name gin_trgm_ops);
CREATE INDEX idx_isps_name_trgm ON isp_providers (name gin_trgm_ops);
```

---

## 6. Redis Multi-Tier Caching Strategy

```
+-----------------------------------------------------------------------------------+
|                         REDIS MULTI-TIER CACHING POLICY                           |
+-------------------+-----------------------------+---------------------------------+
| Cache Layer       | Redis Key Pattern           | Expiration (TTL)                |
+-------------------+-----------------------------+---------------------------------+
| Autocomplete      | `search:auto:{query_hash}`  | 1 hour (Slide on hit)           |
| District Summary  | `geo:district:{slug}`       | 24 hours                        |
| Google Place Cache| `gmaps:place:{place_id}`    | 30 days (DARE Compliance)       |
| Active Session    | `session:{session_id}`      | 15 minutes (Sliding Refresh)    |
| Rate Limit Bucket | `ratelimit:{ip}:{endpoint}` | 1 minute                        |
+-------------------+-----------------------------+---------------------------------+
```

---

## 7. Scalability & Nationwide Expansion Roadmap

1. **Multi-State Partitioning Strategy:** Tables are partitioned by `state_id` using PostgreSQL declarative table partitioning. When expanding from Andhra Pradesh to Telangana, Tamil Nadu, or Karnataka, new state partitions are attached without downtime.
2. **Point-in-Time Recovery (PITR):** Daily base backups stored in encrypted S3/GCS buckets with continuous WAL (Write-Ahead Logging) archiving enabling recovery to any exact second within a 35-day window.

---
**[END OF MASTER DATABASE SCHEMA & DATA ARCHITECTURE SPECIFICATION]**
