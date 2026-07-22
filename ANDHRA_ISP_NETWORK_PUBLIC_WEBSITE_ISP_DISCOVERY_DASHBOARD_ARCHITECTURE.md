# ANDHRA ISP NETWORK
## Master Public Website, ISP Discovery & User Dashboard Frontend Architecture
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 7 — Customer-Facing Frontend Architecture (Prompt 2)  
**Classification:** Customer Experience, UX Strategy & Frontend Systems Engineering  
**Author:** Principal Frontend Architect, UX Architect, & Motion Specialist  
**Target Platform:** Production Systems (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & Customer UX Vision

The **Andhra ISP Network Master Public Website, ISP Discovery & User Dashboard Frontend Architecture** defines the user experience, component hierarchies, state synchronization, vector map overlays, micro-interactions, accessibility standards, and SEO schemas for all customer-facing platform experiences.

Engineered to support **millions of citizens, 450+ broadband providers, 679 mandals, 17,000+ villages, and future nationwide expansion**, the application delivers an editorial visual language inspired by **Apple, Linear, Notion, Stripe, Vercel, and Clerk**, paired with **60 FPS animations and WCAG 2.1 AA accessibility**.

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                     CUSTOMER EXPERIENCE ARCHITECTURE MATRIX                       |
├───────────────────┬───────────────────────────────────────────────────────────────┤
| Subsystem Domain  | Architecture & UX Design Standard                             |
├───────────────────┼───────────────────────────────────────────────────────────────┤
| Public Website    | Editorial Layouts, Glassmorphism Cards, Dark/Light Mode Tokens|
| Search Engine     | Spotlight ⌘K Overlay + URL Query Sync (`nuqs`) + Auto-Focus   |
| Interactive Map   | Google Maps JS SDK + Marker Clustering + Canvas Fiber Polygons|
| Geographic Pages  | `/ap/[district]`, `/mandals/*`, `/villages/*`, `/pin-codes/*`  |
| Provider Profile  | Deep ISP Details, Coverage Mesh Links & 4-Way Comparison Tool |
| Citizen Dashboard | User Favorites, Saved Searches, Notification Center & History  |
| Motion System     | GSAP 3.12 ScrollTrigger + Framer Motion 11 Spring Physics     |
└───────────────────┴───────────────────────────────────────────────────────────────┘
```

---

## 2. Public Website Architecture (`app/(public)/`)

### 2.1 Page Architecture & Responsibilities
1. **Homepage (`/`):** Cinematic Hero Section, 7-Stage Storytelling Scroll, 26-District Interactive Map, Digital Network Mesh, Spotlight ⌘K Search, FAQ Accordion, Enterprise Footer.
2. **About Page (`/about`):** Platform mission tagline ("Connecting Every Corner of Andhra Pradesh"), broadband equity vision, and infrastructure metrics.
3. **Help Center & FAQs (`/help`):** Searchable knowledge base for citizens seeking ISP recommendations or coverage verification.
4. **Privacy Policy & Terms (`/privacy`, `/terms`):** Legal disclosures, data protection guidelines, and DARE Google Maps caching disclosures.

---

## 3. Search Experience & Filter Architecture

### 3.1 Spotlight ⌘K Search & URL Query Synchronization
* **Keyboard Shortcut System:** Global event listener for `⌘K` (Mac) or `Ctrl+K` (Windows) mounts the glassmorphic spotlight modal anywhere in the viewport.
* **URL State Synchronization (`nuqs`):** Filter criteria (e.g. `?district=visakhapatnam&tech=FTTH_FIBER&q=ACT`) are bidirectionally synced with the URL query parameters using `nuqs`, enabling shareable search states.
* **Map Synchronization:** Search result updates trigger instant viewport bounds recalculation (`map.fitBounds()`) on the Google Maps vector canvas.

---

## 4. Google Maps & Vector Canvas Architecture

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                          GOOGLE MAPS FRONTEND ARCHITECTURE                        |
├───────────────────┬───────────────────────────────────────────────────────────────┤
| Map Layer         | Technical Rendering Implementation                            |
├───────────────────┼───────────────────────────────────────────────────────────────┤
| Vector Canvas     | 26 District SVG GeoJSON polygons overlaid on base map         |
| Marker Clustering | Google Maps MarkerClusterer library for 500+ ISP branch pins   |
| Coverage Shapes   | PostGIS GeoJSON polygons rendered as semi-transparent fills   |
| Viewport Manager  | Automatic `fitBounds()` animation on district/mandal select   |
| Tooltip Floating  | Absolute HTML overlay tracking cursor centroid coordinates    |
└───────────────────┴───────────────────────────────────────────────────────────────┘
```

---

## 5. Geographic & Provider Pages Architecture

### 5.1 Route Blueprint
* **`/ap/[districtSlug]`:** District Overview, Mandal Grid (679 Mandals), Coverage Density Bar, and Verified ISPs list.
* **`/ap/[districtSlug]/[mandalSlug]`:** Mandal Sub-Division details, Village grid, centroid location map preview, and FTTH availability.
* **`/ap/[districtSlug]/[mandalSlug]/[village]`:** Revenue village coverage breakdown, PIN code links, and local cable operators (LCOs).
* **`/pin-code/[code]`:** 6-Digit postal code details, coverage statistics, and available providers.
* **`/isps/[slug]`:** Provider profile, active speed plans, contact desks, and Google Maps location shortcuts (`https://www.google.com/maps/search/?api=1&query=...`).
* **`/isps/compare`:** Side-by-side 4-provider comparison matrix.

---

## 6. Citizen User Dashboard Architecture (`app/(dashboard)/`)

```
apps/web/app/(dashboard)/dashboard/
├── page.tsx                    # Citizen Dashboard Home (Saved Searches & Favorites Overview)
├── favorites/page.tsx          # Saved Favorite ISPs & Bookmarked Mandals Grid
├── saved-searches/page.tsx     # Saved Search Queries with Execute & Delete actions
├── history/page.tsx            # Recent Search History & Viewed Provider log
├── notifications/page.tsx      # System Announcements & Coverage Alerts Center
└── settings/page.tsx           # Profile Details, Password Update & Preferences
```

---

## 7. Feature-Driven Folder Structure (`apps/web/src/features/`)

```
apps/web/src/features/
├── search/                     # SpotlightSearchBar, AutocompleteOverlay, QuickChips
├── maps/                       # InteractiveMapContainer, APVectorCanvas, DistrictTooltip
├── providers/                  # ProviderCard, ProviderComparisonTable, PlanCard
├── dashboard/                  # DashboardSidebar, UserStatsStrip, PreferencesForm
├── favorites/                  # FavoriteButton, FavoriteProviderGrid
├── notifications/              # NotificationCenterSheet, AnnouncementBanner
└── shared/
    ├── components/             # HeaderNav, EnterpriseFooter, Badge, AuthBannerNotice
    ├── hooks/                  # useSpotlight, useMapState, useDebounce
    ├── lib/                    # Zod validation schemas, API HTTP client instance
    └── utils/                  # Formatters, GeoJSON spatial utility helpers
```

---
**[END OF MASTER PUBLIC WEBSITE, ISP DISCOVERY & USER DASHBOARD FRONTEND ARCHITECTURE SPECIFICATION]**
