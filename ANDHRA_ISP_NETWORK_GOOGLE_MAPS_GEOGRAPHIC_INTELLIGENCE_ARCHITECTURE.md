# ANDHRA ISP NETWORK
## Master Google Maps Platform, Geographic Intelligence & Spatial Architecture
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 8 — GIS & Spatial Architecture (Prompt 2)  
**Classification:** GIS Engineering, Google Maps Platform & Spatial Systems Architecture  
**Author:** Principal GIS Architect, Google Maps Platform Lead, & Spatial Database Engineer  
**Target Platform:** Production Systems (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & Geographic Intelligence Platform Vision

The **Andhra ISP Network Master Google Maps Platform, Geographic Intelligence & Spatial Architecture** defines the mapping SDK integrations, PostGIS polygon rendering pipelines, dynamic marker clustering algorithms, Google Places DARE enrichment caches, viewport synchronization engines, and spatial indexing strategies.

Engineered to support **interactive map discovery across 26 AP districts, 679 mandals, and 17,000+ villages with sub-25ms rendering latency**, the Geographic Intelligence Platform powers the 26-District Interactive Map, Digital Network Mesh, Mandal Explorer, and Provider Location Detail views.

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                  GEOGRAPHIC INTELLIGENCE PLATFORM ARCHITECTURE MESH               |
├───────────────────┬───────────────────────────────────────────────────────────────┤
| Subsystem Layer   | Architecture & Engineering Standard                           |
├───────────────────┼───────────────────────────────────────────────────────────────┤
| Mapping Engine    | Google Maps JavaScript API (v3.58+) + Custom Dark/Light Tokens|
| Spatial Database  | PostgreSQL 16 + PostGIS 3.4 (`GEOMETRY(POLYGON, 4326)`)       |
| Marker Subsystem  | `@googlemaps/markerclusterer` + Virtualized Viewport Rendering|
| GIS Polygon Overlay| PostGIS GeoJSON FTTH Fiber Reach Polygons & District Bounds   |
| External Enrichment| Google Places API DARE (Data Access & Retention 30d Cache)    |
| Viewport Manager  | `map.fitBounds()` Camera Fly-To & URL Sync (`?lat=...&lng=...`)|
| Spatial Caching   | Redis Multi-Tier Caching for Spatial Regions & Places Cache   |
└───────────────────┴───────────────────────────────────────────────────────────────┘
```

---

## 2. Google Maps Platform Suite Integration Architecture

```
+-----------------------------------------------------------------------------------+
|                        GOOGLE MAPS PLATFORM SUITE MATRIX                          |
+-------------------+----------------------------+----------------------------------+
| API Service       | Primary Functional Role    | Cache & Operational Policy       |
+-------------------+----------------------------+----------------------------------+
| Maps JS API       | Interactive Map Rendering  | Client-Side WebGL / Vector Canvas|
| Places API (DARE) | Provider Address & Hours   | 30-Day Redis/Postgres Cache (DARE)|
| Geocoding API     | Text to Coordinates Sync   | 30-Day Redis Geocode Namespace   |
| Reverse Geocoding | Lat/Lng to Mandal/District | 30-Day Reverse Geocode Cache     |
| Geometry Library  | Spatial Radius Computation | In-Memory Client Execution       |
+-------------------+----------------------------+----------------------------------+
```

---

## 3. Marker System & Dynamic Cluster Engine

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                      MARKER & CLUSTER RENDERING PIPELINE                          |
├───────────────────────────────────────────────────────────────────────────────────┤
| Viewport Bounds Changed (`map.addListener('idle')`)                               |
|       │                                                                           |
|       ▼                                                                           |
| Extract Current Lat/Lng Bounding Box (`sw_lat, sw_lng, ne_lat, ne_lng`)           |
|       │                                                                           |
|       ▼                                                                           |
| Fetch Viewport Providers (`GET /api/v1/isp-providers?bbox=...`)                   |
|       │                                                                           |
|       ▼                                                                           |
| Pass Pins to `@googlemaps/markerclusterer` (Algorithm: SuperCluster)              |
|       │                                                                           |
|       ▼                                                                           |
| Render Clustered Pins (Zoom <= 12) OR Individual Verified Provider Pins (Zoom > 12)|
└───────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Google Places DARE (Data Access & Retention) Architecture

To maintain full Google Maps Platform Terms of Service & DARE compliance:
* **Separation of Records:** Authoritative internal ISP records (Provider Name, Verified Branch Address, Contact Desk Phone) are stored permanently in `isp_providers` and `provider_addresses`.
* **External DARE Enrichment:** External Google Place details (Ratings, Operating Hours, Place Photos) are stored strictly in `google_place_ids` and `geocoding_cache` with a hard **30-Day Refresh TTL (`expires_at`)**.

---

## 5. PostGIS Spatial Indexing Strategy

```sql
-- PostGIS Spatial Indexing for Fast Polygon Point Containment
CREATE INDEX idx_districts_polygon ON districts USING GIST (boundary_polygon);
CREATE INDEX idx_mandals_polygon ON mandals USING GIST (boundary_polygon);
CREATE INDEX idx_coverage_zones_polygon ON coverage_zones USING GIST (polygon_shape);
CREATE INDEX idx_villages_centroid ON villages USING GIST (centroid_location);

-- Fast Radius Distance Search Query Pattern
-- SELECT * FROM isp_providers WHERE ST_DWithin(location, ST_MakePoint(lng, lat)::geography, 10000);
```

---

## 6. Modular GIS Architecture (`apps/web/src/features/maps/`)

```
apps/web/src/features/maps/
├── components/
│   ├── InteractiveMapContainer.tsx  # Master Google Maps SDK Wrapper Component
│   ├── APVectorCanvas.tsx           # SVG GeoJSON District Overlay Canvas
│   ├── DistrictTooltip.tsx          # Floating Mandal & District Centroid Tooltip
│   └── FloatingDistrictPanel.tsx    # Slide-over District Details & ISP List Panel
├── hooks/
│   ├── useGoogleMapsSdk.ts          # Script loader & API Key lifecycle hook
│   ├── useMarkerClustering.ts       # SuperCluster marker clustering manager
│   └── useMapViewportSync.ts        # URL `lat,lng,zoom` query parameter sync
├── services/
│   └── google-places-dare.service.ts# Places API resolution & cache refresh API
└── utilities/
    ├── geojson-converter.ts        # PostGIS geometry to GeoJSON parser
    └── spatial-bounds.ts            # Viewport bounding box calculator
```

---
**[END OF MASTER GOOGLE MAPS PLATFORM, GEOGRAPHIC INTELLIGENCE & SPATIAL ARCHITECTURE SPECIFICATION]**
