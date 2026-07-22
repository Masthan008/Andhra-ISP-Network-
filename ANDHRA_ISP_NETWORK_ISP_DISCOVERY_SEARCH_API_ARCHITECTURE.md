# ANDHRA ISP NETWORK
## Master ISP Discovery, Geographic & Search API Architecture
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 6 — User-Facing API Architecture (Prompt 2)  
**Classification:** API Engineering & GIS Discovery Architecture  
**Author:** Principal Backend Architect, Search Systems Engineer, & GIS Specialist  
**Target Platform:** Production Systems (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & Customer-Facing API Platform Vision

The **Andhra ISP Network Master ISP Discovery, Geographic & Search API Architecture** defines the exact endpoint contracts, DTO payloads, GIS spatial query parameters, ranking algorithms, and caching policies for all customer-facing platform APIs.

Engineered to support **100M+ annual broadband queries, sub-15ms search latency, and seamless nationwide state expansions**, these APIs power the interactive Hero Search Box, 26-District Interactive Map, Digital Network Mesh, Spotlight ⌘K Search Overlay, and Provider Comparison tools.

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                       CUSTOMER-FACING API PLATFORM ARCHITECTURE                   |
├───────────────────┬───────────────────────────────────────────────────────────────┤
| Subsystem Module  | Endpoint Standard & Latency Target                            |
├───────────────────┼───────────────────────────────────────────────────────────────┤
| Geographic APIs   | `/api/v1/districts/*`, `/mandals/*`, `/villages/*` (<10ms)    |
| ISP Discovery APIs| `/api/v1/isp-providers/*`, `/compare`, `/nearby` (<15ms)      |
| Spotlight Search  | `/api/v1/search/spotlight`, `/autocomplete` (<12ms)           |
| Google Maps DARE  | `/api/v1/maps/places/*`, `/geocode`, `/reverse-geocode` (<25ms)|
| GIS Coverage APIs | `/api/v1/coverage/lookup`, `/polygons`, `/stats` (<15ms)       |
| User Favorites    | `/api/v1/users/favorites`, `/saved-searches` (<10ms)          |
| Public Developer  | `/api/v1/public/*` (Rate-Limited Open Data Endpoints)         |
└───────────────────┴───────────────────────────────────────────────────────────────┘
```

---

## 2. Geographic APIs Suite (`/api/v1/districts`, `/mandals`, `/villages`, `/pin-codes`)

### 2.1 Endpoint Inventory
1. `GET /api/v1/districts` — List all 26 AP districts with mandal counts and bounding centroids.
2. `GET /api/v1/districts/{slug}` — Detailed district metadata, GeoJSON boundary polygon, and verified ISP list.
3. `GET /api/v1/districts/{slug}/mandals` — List all 679 mandal sub-divisions belonging to a district.
4. `GET /api/v1/mandals/{slug}/villages` — List all 17,000+ villages/wards in a mandal.
5. `GET /api/v1/pin-codes/{code}` — 6-digit postal code details, linked mandals, and available ISPs.

#### Sample Request & Response Contract: `GET /api/v1/districts/visakhapatnam`
```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "c1f7a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5b",
    "name": "Visakhapatnam",
    "slug": "visakhapatnam",
    "headquarters": "Visakhapatnam",
    "censusCode": "544",
    "mandalsCount": 15,
    "centerPoint": { "lat": 17.6868, "lng": 83.2185 },
    "boundaryPolygonGeoJSON": {
      "type": "Polygon",
      "coordinates": [[[83.1, 17.6], [83.3, 17.6], [83.3, 17.8], [83.1, 17.8], [83.1, 17.6]]]
    },
    "statistics": {
      "totalProviders": 14,
      "ftthCoveragePercent": 94.2,
      "5gAirFiberCoveragePercent": 88.6
    }
  },
  "meta": { "timestamp": "2026-07-22T21:27:00Z", "cacheStatus": "HIT_REDIS" }
}
```

---

## 3. ISP Discovery & Comparison APIs (`/api/v1/isp-providers`)

### 3.1 Endpoint Inventory
1. `GET /api/v1/isp-providers` — Filterable & paginated listing of broadband providers.
   * **Query Parameters:** `district`, `mandal`, `village`, `pinCode`, `technology` (`FTTH_FIBER`, `AIR_FIBER`, `COPPER`), `isVerified` (`true/false`), `sort` (`relevance`, `popularity`, `coverage`), `limit`, `cursor`.
2. `GET /api/v1/isp-providers/{slug}` — Full provider profile, contact desks, speeds, and coverage map links.
3. `GET /api/v1/isp-providers/compare` — Compare up to 4 ISPs side-by-side on pricing, speed plans, and mandal availability.
4. `GET /api/v1/isp-providers/nearby` — Radius-based search ($<10\text{ km}$) using user latitude & longitude coordinates.

---

## 4. Enterprise Search & Autocomplete APIs (`/api/v1/search`)

### 4.1 Endpoint Inventory
1. `GET /api/v1/search/spotlight` — Global ⌘K Spotlight search endpoint.
2. `GET /api/v1/search/autocomplete` — Sub-12ms multi-category search suggestions.
   * **Result Categories:** `DISTRICT`, `MANDAL`, `VILLAGE`, `PIN_CODE`, `ISP_PROVIDER`.
3. `GET /api/v1/search/trending` — Top 5 trending search queries per district.
4. `POST /api/v1/search/saved` — Save a spatial search configuration for instant execution.

---

## 5. Google Maps & DARE Place APIs (`/api/v1/maps`)

```
+-----------------------------------------------------------------------------------+
|                        GOOGLE MAPS INTEGRATION CONTRACTS                          |
+-------------------------------+--------+------------------------------------------+
| Endpoint Path                 | Method | Purpose & Cache TTL                      |
+-------------------------------+--------+------------------------------------------+
| `/api/v1/maps/places/{id}`    | GET    | Fetch Google Place Details (30d Cache)   |
| `/api/v1/maps/geocode`        | GET    | Geocode address text to Lat/Lng          |
| `/api/v1/maps/reverse-geocode`| GET    | Convert Lat/Lng to Mandal/District Name  |
+-------------------------------+--------+------------------------------------------+
```

---

## 6. Keyset Cursor Pagination & Redis Multi-Tier Caching

```
+-----------------------------------------------------------------------------------+
|                         CACHE EXPIRATION & INVALIDATION POLICY                    |
+-------------------+-----------------------------+---------------------------------+
| Namespace         | Redis Key Pattern           | TTL Policy                      |
+-------------------+-----------------------------+---------------------------------+
| District Metadata | `geo:district:{slug}`       | 24 Hours                        |
| Autocomplete      | `search:auto:{query_hash}`  | 1 Hour (Sliding TTL)            |
| Provider Profile  | `isp:profile:{slug}`        | 6 Hours (Purged on admin edit)  |
| Google Place Cache| `gmaps:place:{place_id}`    | 30 Days (DARE Compliance)       |
+-------------------+-----------------------------+---------------------------------+
```

---
**[END OF MASTER ISP DISCOVERY, GEOGRAPHIC & SEARCH API ARCHITECTURE SPECIFICATION]**
