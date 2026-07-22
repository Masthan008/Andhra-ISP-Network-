# ANDHRA ISP NETWORK
## Master Interactive Andhra Pradesh Map Experience Specification
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 3 — Component Implementation (Prompt 3)  
**Classification:** GIS & Interactive Experience Specification  
**Author:** Creative Director, GIS Visualization Expert, Lead UX Designer, & Next.js Engineer  
**Target Platform:** Production Web System (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Map UX Strategy & Design Vision

### 1.1 The Flagship Spatial Experience
The **Interactive Andhra Pradesh Map** is the visual and functional centerpiece of the platform. Positioned directly below the storytelling scroll sections on the homepage (and accessible standalone at `/ap/explorer`), it converts abstract broadband data into an intuitive, touch-friendly spatial exploration canvas.

Rejecting cluttered legacy GIS dashboards, the map adopts a **modern, minimalist data visualization aesthetic** inspired by Apple Maps, Google Maps, Arc Browser, Mapbox Showcase, Stripe, and Linear.

```
+-----------------------------------------------------------------------------------+
|                           SPATIAL MAP UX PRINCIPLES                               |
+-------------------+---------------------------------------------------------------+
| Experience Pillar | Technical Standard                                            |
+-------------------+---------------------------------------------------------------+
| Instant Spatial   | Hovering over any of 26 AP districts displays immediate glass  |
| Orientation       | tooltip with active ISP count, mandals, and coverage %.       |
| Floating Panel    | Clicking a district opens a floating glass information card   |
| Deep Dive         | with popular PIN codes, top ISPs, and Google Maps shortcuts.  |
| Intelligent Search| Floating map search box animating camera focus to matched pin.|
| Multi-Layer Filter| Toggle between "Fiber Availability", "5G Density", and "ISPs". |
| GPU Efficiency    | Scalable SVG/GeoJSON vector rendering with zero layout shift.  |
+-------------------+---------------------------------------------------------------+
```

---

## 2. Interactive District Boundary Data Architecture

### 2.1 Complete 26 Districts Vector Dataset
The map covers all **26 administrative districts of Andhra Pradesh** formed under the AP Reorganisation Act, with spatial metadata pre-calculated for sub-millisecond client rendering:

```
+-----------------------------------------------------------------------------------+
|                        26 AP DISTRICTS SPATIAL METADATA                           |
+-------------------+------------------+---------+---------+------------+-----------+
| District Name     | Headquarters     | Mandals | Villages| Top ISP    | Coverage %|
+-------------------+------------------+---------+---------+------------+-----------+
| Visakhapatnam     | Visakhapatnam    | 11      | 340     | ACT / Jio  | 98.4%     |
| Vijayawada (NTR)  | Vijayawada       | 20      | 410     | Airtel/ACT | 96.8%     |
| Guntur            | Guntur           | 18      | 380     | Jio/BSNL   | 94.2%     |
| Tirupati          | Tirupati         | 34      | 820     | ACT / Jio  | 92.5%     |
| Kurnool           | Kurnool          | 26      | 610     | APSFL/Jio  | 89.1%     |
| Kakinada          | Kakinada         | 21      | 490     | ACT / BSNL | 91.0%     |
| East Godavari     | Rajamahendravaram| 19      | 460     | APSFL/Jio  | 90.2%     |
| West Godavari     | Bhimavaram       | 19      | 430     | ACT / Jio  | 88.7%     |
| Alluri Sitarama   | Paderu           | 22      | 980     | BSNL/APSFL | 74.5%     |
| ... (26 Total)    |                  |         |         |            |           |
+-------------------+------------------+---------+---------+------------+-----------+
```

---

## 3. Map Component Architecture & Controls Blueprint

```
+-----------------------------------------------------------------------------------+
|  [🔍 Search District, Mandal, PIN... ]             [Filter: Fiber ▾] [Layers ▾]  |  <- Floating Search Bar
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                   ┌───────────────────────────────────────┐                       |
|                   │ VISAKHAPATNAM DISTRICT                │                       |
|                   │ Mandals: 11  •  Villages: 340         │                       |
|                   │ Top ISPs: ACT, Jio, Airtel, APSFL     │                       |
|                   │ Coverage: 98.4% [View Details ➔]      │                       |
|                   └───────────────────────────────────────┘                       |
|                               (Hover Glass Card)                                  |
|                                                                                   |
|           ┌────────────────────────┐                                              |
|           │ INTERACTIVE 26-DISTRICT│                                              |
|           │ VECTOR MAP CANVAS      │                [+] Zoom In                   |
|           │ (SVG / GeoJSON Polygon)│                [-] Zoom Out                  |
|           │                        │                [⟲] Reset View                |
|           │                        │                [📍] Locate Me                |
|           └────────────────────────┘                [⛶] Fullscreen                |
|                                                     (Map Controls)                |
|                                                                                   |
| ───────────────────────────────────────────────────────────────────────────────── |
| Coverage Legend:  ■ High Coverage (>90%)   ■ Moderate (75-90%)   ■ Rural Reach (<75%)|
+-----------------------------------------------------------------------------------+
```

---

### 3.1 Floating District Detail Panel Specification (`FloatingDistrictPanel`)
Appears anchored at bottom-right (or drawer on mobile) when a user clicks a district polygon:
* **Header:** District Name, Headquarters, Verified Badge.
* **Metrics Strip:** Active ISPs Count, Total Mandals, PIN Codes Count, Coverage % Progress Bar.
* **Top Local ISPs:** Ranked badges with average speed tiers and star ratings.
* **Popular PIN Codes:** Single-click quick pills (`530016`, `530017`, `530026`).
* **Direct Actions:**
  * Solid Black Button: `[ View District Page ➔ ]` (Navigates to `/ap/[district-slug]`).
  * Glass Outline Button: `[ Open in Google Maps ↗ ]` (Opens Google Maps centered on district coordinates).

---

## 4. Map Control & Filter Overlay Specifications

### 4.1 Interactive Map Controls (`MapControls`)
* **Zoom In (`+`):** Scales map canvas scale factor by $+1.25\times$.
* **Zoom Out (`-`):** Scales map canvas scale factor down by $-0.8\times$.
* **Reset View (`⟲`):** Resets viewport pan offsets and resets scale factor to $1.0\times$.
* **Locate User (`📍`):** Reads Geolocation API (`navigator.geolocation.getCurrentPosition`) to highlight the visitor's local district on the map canvas.
* **Fullscreen Toggle (`⛶`):** Toggles map canvas container to true full-viewport overlay.

---

### 4.2 Spatial Filter Bar (`MapFilterBar`)
* **Technology Filter:** `All Tech`, `FTTH Fiber Only`, `5G AirFiber`, `Leased Line Enterprise`.
* **Coverage Density Filter:** `High Density (>90%)`, `Moderate (75-90%)`, `Rural Reach (<75%)`.

---

## 5. Next.js Component Architecture under `apps/web/src/components/map/`

```
apps/web/src/components/map/
├── InteractiveMapContainer.tsx # Master Map Canvas Wrapper with Controls
├── APVectorCanvas.tsx          # SVG Vector Map of all 26 AP Districts
├── DistrictTooltip.tsx         # Hover Glass Tooltip Component
├── FloatingDistrictPanel.tsx   # Selection Detail Card with Google Maps Links
├── MapControls.tsx             # Zoom, Reset, Locate, Fullscreen Controls
├── MapSearchOverlay.tsx        # Floating Search Box with Auto-Focus
├── MapFilterBar.tsx            # Filter Pills (Fiber, 5G, Coverage %)
├── MapLegend.tsx               # Coverage Density Color Key
├── apDistrictsData.ts          # GeoJSON Boundaries & Metadata Engine
└── index.ts                    # Public Barrel Export
```

---

## 6. Web Accessibility & Performance Blueprint

1. **Accessibility (WCAG 2.1 AA):** Every district polygon is a focusable SVG element (`tabindex={0}`, `role="button"`, `aria-label="District Visakhapatnam, 11 Mandals, 98.4% coverage"`). Keyboard navigation via `Tab` cycles through districts; pressing `Enter` or `Space` opens the Floating Detail Panel.
2. **Performance Target:** 60 FPS smooth rendering during pan/zoom transitions; zero layout shifts (CLS = 0.00).

---
**[END OF MASTER INTERACTIVE ANDHRA PRADESH MAP EXPERIENCE SPECIFICATION]**
