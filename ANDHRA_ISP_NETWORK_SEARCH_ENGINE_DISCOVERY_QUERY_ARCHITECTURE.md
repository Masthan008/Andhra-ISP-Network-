# ANDHRA ISP NETWORK
## Master Search Engine, Discovery & Query Architecture
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 8 — Search Engine & Query Architecture (Prompt 1)  
**Classification:** Search Systems Architecture, Relevance Engineering & Spatial Discovery  
**Author:** Principal Search Architect, Relevance Engineer, & GIS Specialist  
**Target Platform:** Production Systems (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & Search Engine Vision

The **Andhra ISP Network Master Search Engine, Discovery & Query Architecture** defines the query lifecycle, tokenization pipelines, multi-signal relevance ranking algorithms, trigram GIN indexes, PostGIS spatial filters, Redis cache warming strategies, and search observability pipelines.

Engineered to support **100M+ annual search queries with sub-15ms response latency across 26 districts of Andhra Pradesh**, the search engine powers the Hero Search Preview, ⌘K Spotlight Overlay, Interactive Map Search, and Geographic Explorer pages.

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                          ENTERPRISE SEARCH ENGINE MESH                            |
├───────────────────┬───────────────────────────────────────────────────────────────┤
| Search Subsystem  | Architecture & Engineering Standard                           |
├───────────────────┼───────────────────────────────────────────────────────────────┤
| Query Pipeline    | 12-Stage Lifecycle (Validation -> Normalization -> Rank -> Cache)|
| Indexing Engine   | PostgreSQL 16 `pg_trgm` GIN Indexing + PostGIS 3.4 GiST Spatial|
| Autocomplete Engine| Sub-12ms Multi-Category Instant Suggestions (Redis Pre-Warmed)|
| Relevance Scoring | Multi-Signal Formula: Exact (0.35) + Geo (0.25) + Verified (0.20)|
| Search Cache      | Redis Multi-Tier Caching (Sliding 1h TTL on Autocomplete)     |
| Analytics Engine  | Telemetry Logging for Zero-Result Searches & Search Abandonment|
└───────────────────┴───────────────────────────────────────────────────────────────┘
```

---

## 2. The 12-Stage End-to-End Query Lifecycle

```
[ 1. User Input ] -> [ 2. Input Validation ] -> [ 3. Normalization ] -> [ 4. Tokenization ]
                                                                                │
                                                                                ▼
[ 8. DB/Spatial Search ] <- [ 7. Cache Lookup ] <- [ 6. Security Check ] <- [ 5. Classification ]
        │
        ▼
[ 9. Relevance Ranking ] -> [ 10. Filter & Sort ] -> [ 11. JSON Response ] -> [ 12. Analytics Logging ]
```

### 2.1 Query Execution Steps
1. **Stage 1 — User Input Capture:** Input ingested from ⌘K Spotlight, Hero Search, or Mobile API.
2. **Stage 2 — Validation:** Rejects queries exceeding 150 characters or containing malicious scripts.
3. **Stage 3 — Normalization:** Standardizes unicode text, converts to lowercase, trims whitespace, expands local AP abbreviations (e.g., "Vizag" $\rightarrow$ "Visakhapatnam", "VJA" $\rightarrow$ "Vijayawada").
4. **Stage 4 — Tokenization:** Splitting query into normalized tokens and removing common Telugu/English stop words.
5. **Stage 5 — Query Classification:** Classifies intent (`GEO_DISTRICT`, `GEO_MANDAL`, `GEO_VILLAGE`, `PIN_CODE`, `ISP_PROVIDER_NAME`, `TECHNOLOGY`).
6. **Stage 6 — Security Check:** Rate limits query frequency (max 60 queries/min per IP).
7. **Stage 7 — Cache Lookup:** Checks Redis namespace `search:auto:{hash}` or `search:query:{hash}`.
8. **Stage 8 — Database & PostGIS Search:** Fallback execution using PostgreSQL GIN Trigram indexes and PostGIS `ST_Contains` spatial point queries.
9. **Stage 9 — Relevance Ranking:** Applies multi-signal weighting formula.
10. **Stage 10 — Filtering & Sorting:** Applies active filters (`FTTH_FIBER`, `isVerified=true`).
11. **Stage 11 — Response Serialization:** Envelopes formatted results with execution latency metadata.
12. **Stage 12 — Analytics Logging:** Asynchronously pushes search event telemetry to Pino/BullMQ queue.

---

## 3. Multi-Signal Deterministic Relevance & Ranking Framework

The search ranking engine calculates a normalized relevance score ($S_{\text{total}} \in [0.0, 1.0]$) for every candidate entity:

$$S_{\text{total}} = w_1 \cdot S_{\text{exact}} + w_2 \cdot S_{\text{geo}} + w_3 \cdot S_{\text{verified}} + w_4 \cdot S_{\text{popularity}} + w_5 \cdot S_{\text{tech}}$$

```
+-----------------------------------------------------------------------------------+
|                        RELEVANCE RANKING SIGNAL WEIGHTS                           |
+-------------------+----------------------------+---------------+------------------+
| Signal Name       | Mathematical Description   | Weight ($w_i$)| Operational Role |
+-------------------+----------------------------+---------------+------------------+
| $S_{\text{exact}}$| Trigram String Similarity  | 0.35          | Exact name match |
| $S_{\text{geo}}$  | Spatial Distance Match     | 0.25          | Mandal/District  |
| $S_{\text{verif}}$| Verified Provider Flag     | 0.20          | Trust Boost      |
| $S_{\text{pop}}$  | Monthly Search View Count  | 0.10          | Trend Boost      |
| $S_{\text{tech}}$ | FTTH Fiber / 5G Capability | 0.10          | Tech Quality     |
+-------------------+----------------------------+---------------+------------------+
```

---

## 4. Intelligent Autocomplete Subsystem

```
+-----------------------------------------------------------------------------------+
|                        AUTOCOMPLETE CATEGORY RANKING HIERARCHY                    |
+-------------------+-----------------------------+---------------------------------+
| Category Order    | Entity Type                 | Display Formatting Example      |
+-------------------+-----------------------------+---------------------------------+
| Priority 1        | Districts                   | "Visakhapatnam (District)"      |
| Priority 2        | Mandals                     | "Gajuwaka (Mandal, Vizag)"      |
| Priority 3        | Villages / Wards            | "Anandapuram (Village)"         |
| Priority 4        | PIN Codes                   | "530026 (Gajuwaka SO)"          |
| Priority 5        | Verified ISP Providers      | "ACT Fibernet Visakhapatnam"    |
+-------------------+-----------------------------+---------------------------------+
```

---

## 5. PostGIS & PostgreSQL Trigram Indexing Blueprint

```sql
-- GIN Trigram Search Indexing for Lightning Autocomplete
CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE INDEX idx_districts_trgm ON districts USING GIN (name gin_trgm_ops);
CREATE INDEX idx_mandals_trgm ON mandals USING GIN (name gin_trgm_ops);
CREATE INDEX idx_villages_trgm ON villages USING GIN (name gin_trgm_ops);
CREATE INDEX idx_isps_trgm ON isp_providers USING GIN (name gin_trgm_ops);

-- PostGIS Spatial Indexing
CREATE INDEX idx_coverage_zones_gist ON coverage_zones USING GIST (polygon_shape);
```

---

## 6. Modular Search Architecture (`apps/api/src/modules/search/`)

```
apps/api/src/modules/search/
├── pipeline/
│   ├── query-normalizer.service.ts   # Abbreviation expansion & text cleaning
│   ├── query-tokenizer.service.ts    # Token splitting & stop-word removal
│   └── query-classifier.service.ts   # Intent classification (GEO vs ISP)
├── ranking/
│   ├── relevance-ranker.service.ts   # Multi-signal weighting calculation
│   └── tie-breaker.service.ts        # Deterministic sorting tie-breakers
├── autocomplete/
│   └── autocomplete-engine.service.ts# Multi-category sub-12ms suggestion generator
├── caching/
│   └── search-cache-manager.ts       # Redis namespace caching & warming
└── search.module.ts                  # NestJS Search Injection Module
```

---
**[END OF MASTER SEARCH ENGINE, DISCOVERY & QUERY ARCHITECTURE SPECIFICATION]**
