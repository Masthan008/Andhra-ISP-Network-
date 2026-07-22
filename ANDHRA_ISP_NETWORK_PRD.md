# ANDHRA ISP NETWORK
## Master Enterprise Product Requirements Document (PRD)
**Version:** 1.0.0-Enterprise  
**Document Status:** Final Master Specification  
**Classification:** Proprietary / Enterprise Product Specification  
**Author:** Senior Product Management, UX Strategy, Enterprise Architecture, & Systems Engineering Team  
**Target Platform:** Production Web System (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Document Control & Executive Overview

### 1.1 Revision History
| Version | Date | Description | Author | Status |
| :--- | :--- | :--- | :--- | :--- |
| `0.1.0` | 2026-07-20 | Initial Concept & Scope Definition | Product Strategy Team | Draft |
| `0.5.0` | 2026-07-21 | Spatial Data & Google Maps Protocol Integration | Systems Architecture | Review |
| `1.0.0` | 2026-07-22 | Master Enterprise Blueprint Sign-off | Principal Systems Architect & Lead PM | Final Approved |

### 1.2 Document Purpose
This Product Requirements Document (PRD) serves as the authoritative, definitive technical and operational blueprint for building, deploying, and operating the **Andhra ISP Network** web platform. Designed to meet strict commercial, enterprise, and technical standards, this document articulates the end-to-end vision, functional details, technical architecture, spatial data strategies, security models, performance targets, database schemas, and product roadmap.

### 1.3 Executive Summary
The **Andhra ISP Network** is a next-generation, high-performance Internet Service Provider (ISP) discovery and broadband intelligence platform engineered specifically for the state of Andhra Pradesh. The platform bridges the digital divide by enabling citizens, commercial enterprises, students, and government agencies to discover, evaluate, compare, and connect with wired and wireless internet service providers down to the exact district, mandal, village, and PIN code level.

Unlike legacy public sector portals (e.g., Sanchar Saathi) which often suffer from clunky navigation, outdated user interfaces, and slow query speeds, the Andhra ISP Network is designed with the technical precision and visual elegance of world-class SaaS software platforms like Apple, Stripe, Linear, Vercel, and Notion. It combines an ultra-fast modern tech stack (Next.js App Router, React 19, TypeScript, PostgreSQL/PostGIS, Redis, Typesense/Elasticsearch) with dynamic spatial intelligence via Google Maps and Places APIs, delivering sub-100ms search interactions and an editorial white-label design aesthetic.

---

## 2. Business Goals, Problem Statement & Strategy

### 2.1 Problem Statement
1. **Hyper-Local Broadband Information Asymmetry:** Across Andhra Pradesh's 26 districts, 679 mandals, and over 17,000 villages, broadband coverage is highly fragmented. Rural and semi-urban users frequently struggle to identify which ISPs operate in their specific street or village.
2. **Lack of Address Data for Local Micro-ISPs:** ISP database records provided by licensing authorities contain provider names, districts, mandals, and PIN codes, but lack precise street addresses or physical office coordinates.
3. **Subpar User Experience on Public Portals:** Citizens looking for telecommunication services face government interfaces built on legacy frameworks with bloated assets, slow server response times, poor mobile responsiveness, and zero interactive mapping capabilities.
4. **Commercial Enterprise Connectivity Deficit:** Small businesses, educational institutions, and corporate branch offices lack a single reliable portal to compare enterprise fiber providers, leased line availability, and SLA metrics in specific industrial clusters and mandals.

### 2.2 Product Vision & Value Proposition
* **Vision Statement:** "To empower every citizen, business, and community in Andhra Pradesh with instant, transparent access to reliable internet service providers through an elegant, state-of-the-art digital infrastructure platform."
* **Core Value Proposition:**
  * **Hyper-Local Precision:** Granular breakdown from District $\rightarrow$ Mandal $\rightarrow$ Village $\rightarrow$ PIN Code.
  * **Dynamic Address Resolution:** Proprietary resolution engine mapping ISP records (Name + Location) to exact physical locations via Google Places/Geocoding API with zero manual address input required initially.
  * **SaaS-Grade UX:** Ultra-minimalist, white-theme editorial aesthetic with fluid micro-interactions, glassmorphism, and zero layout shift.
  * **Instant Search Architecture:** Multi-indexed client/edge fuzzy search handling spelling variations, telco aliases, and regional names instantly.

### 2.3 Success Metrics & Key Performance Indicators (KPIs)
```
+-------------------------------------------------------------------------+
|                         PRIMARY SUCCESS METRICS                         |
+------------------------------------+------------------------------------+
| Metric                             | Target Threshold                   |
+------------------------------------+------------------------------------+
| Initial Page Load (LCP)            | < 1.2 Seconds (Desktop & Mobile)   |
| First Input Delay (FID / INP)      | < 50 Milliseconds                  |
| Global Search Response Time        | < 80 Milliseconds                  |
| Google Maps API Cost Optimization  | 85%+ Cache Hit Ratio via Redis/DB  |
| Lighthouse Performance Score       | 98+ Desktop / 95+ Mobile           |
| SEO Organic Keyword Indexing       | 100% of District/Mandal/PIN Pages  |
| User Conversion (Clicks to Call)   | > 18% of ISP Detail Page Views     |
+------------------------------------+------------------------------------+
```

---

## 3. Primary User Personas & User Stories

### 3.1 User Personas

#### Persona A: Everyday Resident (Home User)
* **Name:** Ramesh Babu (32 years old)
* **Location:** Tadepalligudem Mandal, West Godavari District
* **Context:** Remote worker needing high-speed fiber connection for streaming and video calls.
* **Pain Points:** Local flyers are untrustworthy; major websites only show pan-India statistics without showing village-level coverage.
* **Goal:** Wants to enter his PIN Code (`534101`) or village name and see a clear list of active ISPs with user ratings, fiber plans, and contact numbers.

#### Persona B: Enterprise Operations Manager (Business Owner)
* **Name:** Ananya Reddy (41 years old)
* **Location:** Sri City Industrial Zone, Tirupati District
* **Context:** Operations Director expanding a manufacturing unit. Requires dedicated Leased Line (1:1 bandwidth) with high SLA guarantees.
* **Pain Points:** Standard consumer portals hide enterprise sales desks; discovering local fiber infrastructure providers is difficult.
* **Goal:** Wants to filter ISPs by "Enterprise Leased Line" and "SLA Guarantee" across Tirupati district mandals and compare provider portfolios side-by-side.

#### Persona C: Higher Education Student
* **Name:** K. Sai Teja (20 years old)
* **Location:** Guntur City
* **Context:** Preparing for competitive exams, needs low-cost budget broadband or public Wi-Fi hotspot coverage.
* **Pain Points:** High setup costs; limited visibility into student-budget friendly plans in hostel areas.
* **Goal:** Quickly search nearby ISPs using PIN code, view pricing filters, read student reviews, and get office directions on Google Maps.

#### Persona D: Government Telecom Analyst & Collectorate Official
* **Name:** V. Swaroop IAS (48 years old)
* **Location:** Visakhapatnam District Collectorate
* **Context:** Auditing internet connectivity across rural mandals to verify digital governance readiness.
* **Pain Points:** Data locked in static spreadsheets; lack of visual district-wide spatial maps showing provider density per mandal.
* **Goal:** Access an interactive spatial map of Andhra Pradesh to visualize broadband provider distribution by district and export mandal coverage reports.

#### Persona E: Local ISP Operations Manager (Provider)
* **Name:** Srikanth Verma (36 years old)
* **Location:** Vijayawada
* **Context:** Manages regional broadband provider "AP SpeedNet".
* **Pain Points:** Difficulty competing with national giants like Jio/Airtel despite having superior last-mile fiber reach in tier-2/3 mandals.
* **Goal:** Claim provider profile, update physical office address verified via Google Places API, upload plan catalogs, and respond to direct user queries.

#### Persona F: Platform System Administrator
* **Name:** Master System Admin
* **Context:** Responsible for global data accuracy, Google Maps API quota management, user permission roles, bulk CSV ingestion, and security logs.
* **Goal:** Maintain 99.99% uptime, monitor Google API billings, run automated geocoding pipelines, and enforce strict RBAC permissions.

---

### 3.2 Key User Stories Matrix

| Story ID | User Role | Epic / Module | User Story Description | Acceptance Criteria |
| :--- | :--- | :--- | :--- | :--- |
| `US-001` | Home User | Search Engine | As a user, I want to type my 6-digit PIN Code into a single search box so that I immediately see all ISPs serving my exact area. | System parses 6-digit integer, returns filtered list of ISPs within <100ms, displaying ISP badges, tech type (Fiber/4G/5G), and speed tiers. |
| `US-002` | Home User | Geographic Directory | As a user, I want to drill down from District $\rightarrow$ Mandal $\rightarrow$ Village so that I can discover local providers even if I don't know the PIN code. | Dynamic breadcrumb trails, hierarchical navigation, zero full-page reloads, static URL routing for SEO (`/ap/visakhapatnam/anakapalle`). |
| `US-003` | Home User | Comparison Engine | As a user, I want to select up to 4 ISPs and compare them side-by-side on pricing, speed, SLA, and customer rating. | Floating bottom action bar, side-by-side comparison matrix, difference highlighting toggle, sticky headers on scroll. |
| `US-004` | Business | Google Maps Integration | As a business owner, I want to view an ISP's physical branch location on Google Maps and get turn-by-turn directions. | Google Maps JS API modal/embedded card displaying custom styled map, verified Place ID marker, call-out window, and "Get Directions" deep link. |
| `US-005` | ISP Admin | Provider Portal | As an ISP representative, I want to claim my business profile and submit updated plans and customer service contacts for admin review. | Authentication via OTP/OAuth2, document upload for verification, pending status queue in Admin dashboard. |
| `US-006` | SysAdmin | Data Management | As an admin, I want to upload a CSV containing 10,000 rural ISP records (District, Mandal, PIN, ISP Name) and automatically trigger background Geocoding/Places lookups. | Async worker job (BullMQ/Redis), error validation log, dry-run preview, batch processing with rate-limiting to prevent Google API quota spikes. |

---

## 4. Information Architecture & Navigation System

```
                                  +---------------------------------------+
                                  |         ANDHRA ISP NETWORK            |
                                  |             LANDING PAGE              |
                                  +-------------------+-------------------+
                                                      |
         +--------------------+-----------------------+-----------------------+--------------------+
         |                    |                                               |                    |
+--------v-------+   +--------v-------+                               +-------v--------+  +--------v-------+
|  GLOBAL SEARCH |   | AP MAP EXPLORER|                               | DIRECTORIES    |  | USER / ADMIN   |
|   (INSTANT)    |   | (INTERACTIVE)  |                               | (HIERARCHICAL) |  |   PORTALS      |
+--------+-------+   +--------+-------+                               +-------+--------+  +--------+-------+
         |                    |                                               |                    |
         +--------------------+-----------------------+-----------------------+                    |
                              |                       |                                            |
                   +----------v----------+ +----------v----------+                        +--------v-------+
                   |  DISTRICT LISTING   | |   ISP PROFILES      |                        | USER DASHBOARD |
                   |  (/ap/districts)    | | (/isp/[provider-slug|                        | - Favorites    |
                   +----------+----------+ +----------+----------+                        | - Search Hist  |
                              |                       |                           | - Reviews      |
                   +----------v----------+ +----------v----------+                        +----------------+
                   |   MANDAL LISTING    | | COMPARISON MATRIX   |                        +----------------+
                   | (/ap/[dist]/[mand]) | |   (/compare)        |                        | ADMIN PANEL    |
                   +----------+----------+ +---------------------+                        | - Geocoding    |
                              |                                                           | - Data Import  |
                   +----------v----------+                                                | - RBAC & Logs  |
                   |   VILLAGE / PIN     |                                                +----------------+
                   | (/ap/.../[village]) |
                   +---------------------+
```

### 4.1 Master URL & Routing Hierarchy (SEO-Optimized Canonical Structure)

* **Root Domain:** `https://andhraisp.net` (or `.in`)
* **Primary Route Specifications:**
  * `GET /` — Landing Page (Hero, Global Search, High-Level Map, Featured ISPs, Fast Stats)
  * `GET /ap/explorer` — Full-screen interactive vector map of Andhra Pradesh with district overlay
  * `GET /ap/districts` — Index of all 26 Districts of Andhra Pradesh
  * `GET /ap/[district-slug]` — District detail page (e.g., `/ap/visakhapatnam`) listing mandals, top ISPs, coverage statistics
  * `GET /ap/[district-slug]/[mandal-slug]` — Mandal detail page (e.g., `/ap/visakhapatnam/gajuwaka`) listing villages, PIN codes, and active ISPs
  * `GET /ap/[district-slug]/[mandal-slug]/[village-slug]` — Village level ISP directory page
  * `GET /pincode/[pincode]` — PIN Code detail page (e.g., `/pincode/530026`) listing verified broadband availability
  * `GET /isps` — Global directory of registered ISP Companies in Andhra Pradesh
  * `GET /isp/[provider-slug]` — ISP Master Profile (e.g., `/isp/act-fibernet-visakhapatnam`) with coverage maps, Google Place card, packages, reviews
  * `GET /compare` — Dynamic side-by-side provider comparison tool (`?providers=act-fibernet,jio-fiber,bsnl`)
  * `GET /auth/login` & `/auth/register` — Unified secure authentication suite
  * `GET /user/dashboard` — User portal (saved ISPs, submitted reviews, search history)
  * `GET /admin/...` — Enterprise Admin Console (Role-protected system management interface)

---

## 5. Design System, UX Strategy & Animation Philosophy

### 5.1 Design Aesthetics & Brand Tokens
The design philosophy strictly avoids standard government template cliches (cluttered boxes, heavy primary blues, dense unformatted tables). Instead, it adopts a **world-class modern SaaS design language** inspired by Apple, Stripe, Linear, Vercel, and Notion.

```
+-----------------------------------------------------------------------------------+
|                              COLOR & LIGHTING MATRIX                              |
+-------------------+--------------------+------------------------------------------+
| Design Token      | Value / Hex        | Application Scope                        |
+-------------------+--------------------+------------------------------------------+
| Background Base   | #FFFFFF            | Pure White Canvas                        |
| Background Subtle | #F8F9FA            | Secondary Card & Section Fill            |
| Card Surface      | #FFFFFF            | Elevated Elements with Soft Shadow       |
| Primary Text      | #09090B            | Zinc-950 Ultra-Crisp Black Headlines     |
| Muted Text        | #71717A            | Zinc-500 Body / Metadata / Captions      |
| Border Subdued    | #E4E4E7            | Zinc-200 Hairline Glass Borders (1px)    |
| Accent Primary    | #000000            | Solid Jet Black CTA Buttons              |
| Accent Highlight  | #2563EB / #059669  | Vivid Blue / Emerald Badges for Online   |
| Glass Overlay     | rgba(255,255,255,  | Backdrop Blur Navigation Header          |
|                   |      0.75)         | (backdrop-filter: blur(16px))            |
+-------------------+--------------------+------------------------------------------+
```

#### Typography
* **Primary Font Family:** Inter or Outfit (Google Fonts) via `next/font`.
* **Monospace Font Family:** JetBrains Mono (for PIN codes, Lat/Lng coordinates, IP addresses, speeds).
* **Type Hierarchy Scale:**
  * Display 1: `64px / 1.1 tracking--0.03em` (Hero Headlines)
  * Heading 1: `36px / 1.2 tracking--0.02em` (District / ISP Page Titles)
  * Heading 2: `24px / 1.3 tracking--0.01em` (Section Cards)
  * Body Large: `18px / 1.6` (Subheadings)
  * Body Base: `14px / 1.5` (General Text)
  * Caption: `12px / 1.4` (Metadata, Spatial Badges)

#### Shadows & Elevation
* **Elevation 0 (Flat):** Borders defined by `1px solid #E4E4E7`.
* **Elevation 1 (Card Hover):** `box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05)`.
* **Elevation 2 (Modal / Floating Comparison Bar):** `box-shadow: 0 12px 40px -4px rgba(0, 0, 0, 0.12)`.

---

### 5.2 Animation Philosophy & Micro-Interactions
Animations must feel ultra-smooth, high-end, and purposeful. Distracting, gimmicky animations are strictly forbidden.

```
+-----------------------------------------------------------------------------------+
|                             ANIMATION STACK & STRATEGY                            |
+-----------------+-----------------------+-----------------------------------------+
| Library         | Technical Focus       | UX Purpose                              |
+-----------------+-----------------------+-----------------------------------------+
| Lenis Scroll    | Smooth Momentum Scroll| Provides luxurious continuous inertia   |
|                 |                       | scrolling across large data pages.      |
| GSAP ScrollTrig | Spatial Map & Hero    | Drives vector map reveals, district     |
|                 | Pinning               | card staggered entry on viewport enter. |
| Framer Motion   | UI Micro-Interactions | Layout morphing, search autocomplete    |
|                 |                       | dropdowns, modal windows, tab switches. |
| Three.js / D3   | Interactive AP Map    | Vector topojson rendering of 26 AP      |
|                 | Spatial Canvas        | districts with GPU-accelerated hover.   |
+-----------------+-----------------------+-----------------------------------------+
```

#### Micro-Interaction Standard Standards
* **Button Press State:** Scale down to `0.98` on click (`transition: transform 100ms cubic-bezier(0.2, 0.8, 0.2, 1)`).
* **Card Hover:** Subtle Y-axis lift (`translateY(-2px)`) with border color transitioning from `#E4E4E7` to `#18181B` over 200ms.
* **Page Transitions:** Fade in + slide up by `8px` using Framer Motion (`initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}`).

---

## 6. Comprehensive Technical Architecture & Tech Stack

### 6.1 Enterprise Tech Stack Blueprint

```
+-----------------------------------------------------------------------------------+
|                             PRODUCTION TECH STACK                                 |
+-------------------+---------------------------------------------------------------+
| Layer             | Selected Technologies & Rationale                             |
+-------------------+---------------------------------------------------------------+
| Frontend Framework| Next.js 15+ (App Router, Server Components, React 19)         |
| Language          | TypeScript 5.5+ (Strict Mode Enabled across Monorepo)         |
| Styling & UI      | Vanilla CSS Modules + Tailwind CSS v4 Engine + Radix UI Primitives|
| State Management  | Zustand (Global Client State) + TanStack Query v5 (Server)   |
| Database Engine   | PostgreSQL 16 + PostGIS Extension (Spatial Queries)           |
| ORM Layer         | Prisma ORM / Drizzle ORM (Type-safe migrations & queries)     |
| Search Engine     | Typesense Server / Elasticsearch (Instant Sub-10ms Fuzzy Search)|
| In-Memory Cache   | Redis v7.2 (Google Maps Geocoding & Search Query Caching)     |
| Async Task Queue  | BullMQ (Node.js background jobs for bulk address processing)  |
| Maps & Places     | Google Maps JavaScript API, Places API (New), Geocoding API   |
| Authentication    | NextAuth.js / Auth0 / Clerk Enterprise (JWT + OAuth + RBAC)   |
| Object Storage    | AWS S3 / Cloudflare R2 (ISP logos, verification documents)    |
| Edge / CDN Layer  | Vercel Enterprise / Cloudflare Enterprise Edge Networks        |
| Telemetry & Logs  | OpenTelemetry + Datadog / Sentry (Error & APM Tracking)       |
+-------------------+---------------------------------------------------------------+
```

---

### 6.2 High-Level System Architecture Diagram

```
[ CLIENT BROWSER / MOBILE DEVICE ]
        |
        | HTTPS / WSS
        v
[ CLOUDFLARE EDGE CDN / WEB APPLICATION FIREWALL (WAF) ]
        |
        | Rate-Limiting & Bot Protection
        v
[ VERCEL EDGE / NEXT.JS SERVER-SIDE RENDERING (SSR / ISR) ]
        |
   +----+-------------------------+-------------------------+
   |                              |                         |
   v                              v                         v
[ TYPESENSE SEARCH ENGINE ]  [ NEXT.JS API ROUTE ENGINE ]  [ REDIS CACHE LAYER ]
(Instant Fuzzy Auto-complete)     |                         (Google Maps/Places Cache)
                                  |                                   |
                  +---------------+---------------+                   |
                  |                               |                   |
                  v                               v                   v
      [ POSTGRESQL + POSTGIS DB ]    [ BULLMQ BACKGROUND WORKERS ] --+
      (Master Spatial Store)          (Google Places Async Fetcher)
                                                  |
                                                  v
                                      [ GOOGLE MAPS / PLACES API ]
```

---

## 7. Google Maps, Geocoding & Places API Integration Strategy

### 7.1 Problem Statement & Address Resolution Blueprint
**The Core Challenge:** The client possesses administrative records structured as:
`[ISP Name]` + `[District]` + `[Mandal]` + `[PIN Code]`
The database **does NOT contain exact street addresses, building numbers, or lat/lng coordinates** for provider offices.

**The Strategic Solution:** Develop an automated, fault-tolerant **Dynamic Address Resolution Engine (DARE)** using Google Places Text Search, Geocoding, and Place Details APIs.

```
       INPUT RECORD: ISP Name + Mandal + District + PIN Code
                                 |
                                 v
                 CHECK REDIS / POSTGRES PLACES CACHE
                                 |
                  +--------------+--------------+
                  |                             |
             [CACHE HIT]                   [CACHE MISS]
                  |                             |
                  v                             v
        Return Stored Place ID        Execute Google Places
         & Geometry Data               Text Search API Query
                                                |
                                                v
                                   Evaluate Result Set Candidates
                                                |
                  +-----------------------------+-----------------------------+
                  |                             |                             |
         [EXACT MATCH: 1 Result]     [MULTIPLE MATCHES: >1]        [ZERO RESULTS MATCH: 0]
                  |                             |                             |
                  v                             v                             v
         Store Place ID,             Score by Spatial Proximity      Fallback to Mandal / PIN
         Lat/Lng, & Address           to Mandal & District Centroid    Geocode Centroid Point
                  |                             |                             |
                  +-----------------------------+-----------------------------+
                                 |
                                 v
                   STORE IN GOOGLE_PLACES_CACHE
                   (Expires in 30 Days as per Google TOS)
```

---

### 7.2 Dynamic Spatial Resolution Protocol (Step-by-Step)

#### Step 1: Query Construction Engine
For every ISP record lacking precise coordinates, the engine constructs a structured search query string:
$$\text{Query} = \text{ISP\_Name} + \text{" Broadband Office "} + \text{Mandal} + \text{", "} + \text{District} + \text{" District, Andhra Pradesh "} + \text{PIN\_Code}$$
* *Example:* `"ACT Fibernet Broadband Office Gajuwaka, Visakhapatnam District, Andhra Pradesh 530026"`

#### Step 2: Google Places Text Search (New) Execution
The system invokes the Google Places Text Search API with spatial bias restricting results to the bounding box of Andhra Pradesh state:
* **API Endpoint:** `https://places.googleapis.com/v1/places:searchText`
* **Request Payload Configuration:**
```json
{
  "textQuery": "ACT Fibernet Broadband Office Gajuwaka Visakhapatnam 530026",
  "locationBias": {
    "rectangle": {
      "low": { "latitude": 12.62, "longitude": 76.75 },
      "high": { "latitude": 19.15, "longitude": 84.75 }
    }
  },
  "languageCode": "en"
}
```

#### Step 3: Candidate Scoring & Disambiguation Algorithm
When Google returns multiple result candidates ($N > 1$), the system executes a spatial proximity scoring matrix:
1. **PIN Code Exact Match:** If candidate `formatted_address` contains the exact 6-digit PIN code $\rightarrow$ Score +50.
2. **Mandal Name Token Match:** If candidate address contains the mandal string $\rightarrow$ Score +30.
3. **District Name Token Match:** If candidate address contains district string $\rightarrow$ Score +20.
4. **Spatial Haversine Distance Check:** Calculate distance between candidate Lat/Lng and target Mandal Centroid. If distance $< 10\text{ km} \rightarrow$ Score +40.

The candidate with the highest composite score ($\ge 80$) is selected automatically.

#### Step 4: Fallback Strategy (Zero Results Scenario)
If Google Places returns 0 matches for `[ISP Name] + [Mandal] + [District]`:
1. **Fallback Query 1:** Try `[ISP Name] + [District] + [PIN Code]`.
2. **Fallback Query 2 (Spatial Centroid Placement):** If still zero results, invoke Google Geocoding API for the `[Mandal] + [District] + [PIN Code]` centroid.
3. Mark the ISP location as `is_estimated_location = TRUE` and set pin coordinates to the Mandal/PIN centroid.
4. Flag record in Admin Panel queue: `"Requires Manual Verification / ISP Office Location Claim"`.

---

### 7.3 API Cost Optimization & Caching Architecture
Google Places API costs can escalate rapidly without strict caching. Per Google Maps Platform Terms of Service, **Place IDs and Lat/Lng coordinates CAN be cached indefinitely**, while rich details (phone numbers, user reviews, opening hours) can be cached for up to **30 days**.

```
+-----------------------------------------------------------------------------------+
|                        GOOGLE MAPS CACHING ARCHITECTURE                           |
+--------------------+---------------------+----------------------------------------+
| Data Item          | Storage Layer       | TTL / Expiration Policy                |
+--------------------+---------------------+----------------------------------------+
| Google Place ID    | PostgreSQL (Master) | Permanent Storage                      |
| Latitude / Longitude| PostGIS Spatial DB  | Permanent Storage                      |
| Formatted Address  | PostgreSQL          | 30 Days Auto-Refresh                   |
| Business Phone/Hrs | Redis Cache         | 7 Days Auto-Eviction                   |
| Place Details Call | Edge In-Memory      | Cache key: `place:details:{place_id}`  |
+--------------------+---------------------+----------------------------------------+
```

#### Estimated API Cost Reduction Model
* **Without Caching (100,000 Monthly Active Users):**
  * 100,000 Places Searches $\times \$0.032 = \$3,200 / \text{month}$
* **With Enterprise Redis + PostgreSQL Layer (Target 92% Cache Hit Ratio):**
  * 8,000 Uncached Searches $\times \$0.032 = \$256 / \text{month}$
  * **Net Cost Savings:** $\sim \$2,944 / \text{month}$ ($92\%$ reduction).

---

## 8. Functional Requirements & Feature Specifications

### 8.1 Landing Experience & Discovery Portal
* **Module ID:** `MOD-001`
* **UX Specification:** Ultra-clean white background, single crisp typography stack, backdrop-blur floating header navigation bar.
* **Core Components:**
  1. **Hero Search Section:** Central prominent search input box with dynamic placeholder cycling ("Search by District, Mandal, Village, PIN Code, or ISP...").
  2. **Instant Metrics Counter:** Real-time counter displaying "26 Districts | 679 Mandals | 17,000+ Villages | 450+ Active ISPs".
  3. **Visual Geographic Explorer Launcher:** Highlighting an interactive vector silhouette map of Andhra Pradesh.
  4. **Featured ISP Grid:** Horizontal smooth scroll showing top verified regional ISPs with average speed and uptime badges.
  5. **Quick PIN Code Lookup Strip:** Single-click popular PIN codes (e.g., `530017 - Visakhapatnam`, `520001 - Vijayawada`, `517501 - Tirupati`).

---

### 8.2 Interactive Andhra Pradesh Map Explorer
* **Module ID:** `MOD-002`
* **UX Specification:** Full-screen vector SVG/TopoJSON canvas powered by D3.js / Three.js and Framer Motion.
* **Core Capabilities:**
  * **District Hover Highlights:** Hovering over any of the 26 AP districts highlights the geometry, displaying a floating glass card with active ISP count, fiber density, and average user speed.
  * **Click-to-Drill:** Clicking a district smoothly zooms the camera into the district boundary, revealing its underlying mandals.
  * **Layer Toggles:** Toggle between "Fiber Availability", "5G Coverage Density", and "ISP Competitivity Heatmap".

```
+-----------------------------------------------------------------------------------+
|                        26 DISTRICTS OF ANDHRA PRADESH COVERED                     |
+-----------------------------------------------------------------------------------+
| 1. Alluri Sitarama Raju     10. Guntur                   19. Prakasam             |
| 2. Anakapalli               11. Kakinada                 20. Sri Potti Sriramulu  |
| 3. Ananthapuramu            12. Konaseema                21. Sri Sathya Sai       |
| 4. Annamayya                13. Krishna                  22. Tirupati             |
| 5. Bapatla                  14. Kurnool                  23. Visakhapatnam        |
| 6. Chittoor                 15. Nandyal                  24. Vizianagaram         |
| 7. Dr. B.R. Ambedkar        16. NTR                      25. West Godavari        |
| 8. East Godavari            17. Palnadu                  26. YSR Kadapa           |
| 9. Eluru                    18. Parvathipuram Manyam                              |
+-----------------------------------------------------------------------------------+
```

---

### 8.3 Geographic Directory Pages (District, Mandal, Village, PIN Code)
* **Module ID:** `MOD-003`
* **Dynamic Page Specifications:**
  * **District Pages (`/ap/[district-slug]`):** Displays district summary, list of all mandals ordered alphabetically or by provider density, broadband statistics chart, and top 5 district-wide ISPs.
  * **Mandal Pages (`/ap/[district-slug]/[mandal-slug]`):** Lists villages in the mandal, active PIN codes, local ISP office branch markers on an embedded Google Map, and user reviews.
  * **PIN Code Pages (`/pincode/[pincode]`):** Hyper-focused landing view for SEO and direct visitors. Shows every ISP verified within that exact 6-digit postal index number.

---

### 8.4 ISP Profiles & Service Level Detail Pages
* **Module ID:** `MOD-004`
* **Profile Elements:**
  1. **Header Banner:** ISP Logo, Verified Badge, Rating Stars, Direct Call Button, Request Connection Form Trigger.
  2. **Google Places Location Card:** Embedded interactive Google Map centered on verified branch place location with Google Place ID, street address, and direct "Get Directions" link.
  3. **Plan Portfolio Table:** Tabbed switcher ("Home Broadband", "Business Fiber", "Leased Line") displaying download/upload speeds, data limits (FUP), pricing in INR, and installation fee waivers.
  4. **Coverage Reach Accordion:** Expandable list of mandals and villages serviced by this provider.
  5. **Verified Customer Reviews:** Star rating breakdown, verified user tags, and review submission modal.

---

### 8.5 Real-Time ISP Provider Comparison Engine
* **Module ID:** `MOD-005`
* **UX Specification:** Floating comparison drawer anchored at the bottom of the viewport.
* **Capabilities:**
  * Users can select up to 4 ISPs across any page by clicking "+ Add to Compare".
  * Comparison Drawer slides up into a full modal grid comparing:
    * Speed Tiers (Mbps / Gbps)
    * Average Monthly Cost ($\text{₹}$)
    * Connection Type (FTTH, Wi-Fi, 5G Wireless, Copper)
    * SLA Guarantee & Uptime Percentage ($99.9\%$)
    * Customer Satisfaction Rating ($1-5 \star$)
    * Google Verified Physical Office Status

---

### 8.6 Advanced Enterprise Search & Autocomplete Engine
* **Module ID:** `MOD-006`
* **Technical Specification:** Powered by Typesense / Elasticsearch with sub-20ms edge lookup response.
* **Search Triggers:**
  * **By PIN Code:** `530017` $\rightarrow$ Instantly resolves to "MVP Colony, Visakhapatnam".
  * **By District/Mandal:** `Tirupati` or `Gajuwaka`.
  * **By ISP Name:** `ACT`, `Airtel`, `Jio`, `AP State FiberNet (APSFL)`, `BSNL`.
  * **By Keyword / Tech:** `Fiber leased line`, `Unlimited 1Gbps`.
* **Features:** Phonetic matching (handles typos like "Vissakapatnam"), highlighted keyword matches in dropdown, keyboard navigation support (`Up`, `Down`, `Enter`, `Esc`).

---

### 8.7 User Portal (Favorites, Reviews, Search History)
* **Module ID:** `MOD-007`
* **User Features:**
  * **Saved Providers:** Bookmark preferred ISPs for future inquiry.
  * **Search History Tracker:** View past geographic searches and PIN lookups.
  * **My Reviews:** Edit or delete submitted customer feedback.
  * **Connection Request Status:** Track outreach status to ISP sales representatives.

---

### 8.8 Enterprise Admin Panel & CMS
* **Module ID:** `MOD-008`
* **System Operations Console:**
  1. **Geographic Data Manager:** CRUD operations for Districts, Mandals, Villages, and PIN Codes.
  2. **ISP Directory Manager:** Approve profile claims, edit plans, manage logos.
  3. **Google Places Cache Inspector:** View cached Place IDs, trigger manual re-geocoding jobs, monitor API call quotas and errors.
  4. **Search Analytics Dashboard:** Monitor top searched PIN codes, zero-result queries, and regional user demand heatmaps.
  5. **Role-Based Access Control (RBAC):** Manage permissions for Super Admins, Regional District Editors, ISP Managers, and Support Staff.

---

### 8.9 Data Operations & Bulk ETL Engine (CSV / Excel Import)
* **Module ID:** `MOD-009`
* **Capabilities:**
  * Bulk import tool capable of parsing `.csv`, `.xlsx` files with up to 100,000 rows.
  * **Validation Pipeline:** Pre-validates mandatory fields (`district_name`, `mandal_name`, `pincode`, `isp_name`).
  * **Dry-Run Mode:** Displays data preview with error highlighting (missing mandatory fields, invalid PIN codes) prior to database commit.
  * **Async Batch Processing:** Offloads heavy processing to background workers with real-time progress percentage bar via WebSockets.

---

## 9. Complete Data Architecture & Database Schema

The database relies on **PostgreSQL 16 with PostGIS extension** to handle spatial data queries (e.g., finding ISPs within a specific Lat/Lng radius or geometric bounding box).

```
                                  +-----------------------+
                                  |        STATES         |
                                  +-----------+-----------+
                                              | 1:N
                                  +-----------v-----------+
                                  |       DISTRICTS       |
                                  +-----------+-----------+
                                              | 1:N
                                  +-----------v-----------+
                                  |        MANDALS        |
                                  +----+--------------+---+
                                       | 1:N          | 1:N
                           +-----------v---+      +---v-----------+
                           |   VILLAGES    |      |   PIN_CODES   |
                           +---------------+      +-------+-------+
                                                          | N:M
                                                  +-------v-------+
                                                  | ISP_COVERAGE  |
                                                  +-------+-------+
                                                          | N:M
+-----------------------+                         +-------v-------+
|  GOOGLE_PLACES_CACHE  |<------------------------|  ISP_PROVIDERS|
+-----------------------+  1:1                    +-------+-------+
                                                          |
                                  +-----------------------+-----------------------+
                                  | 1:N                   | 1:N                   | 1:N
                      +-----------v-----------+   +-------v-------+   +-----------v-----------+
                      |      ISP_PLANS        |   |    REVIEWS    |   |   USER_FAVORITES      |
                      +-----------------------+   +---------------+   +-----------------------+
```

---

### 9.1 Data Definition Language (DDL) Schema Specification

```sql
-- Enable PostGIS spatial extension
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. STATES TABLE
CREATE TABLE states (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(10) NOT NULL UNIQUE,
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
    technology_types VARCHAR(50)[] DEFAULT '{"FIBER"}', -- FIBER, WIRELESS, 5G, LEASED_LINE
    is_verified BOOLEAN DEFAULT FALSE,
    average_rating NUMERIC(3,2) DEFAULT 0.00,
    total_reviews INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_isp_providers_slug ON isp_providers(slug);

-- 7. GOOGLE PLACES CACHE TABLE (Crucial for Map Strategy)
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

-- 8. ISP COVERAGE MAPPING TABLE (M:N Relationship)
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

## 10. API Architecture & Interface Specifications

### 10.1 Key RESTful API Endpoints

```
+-----------------------------------------------------------------------------------+
|                              CORE REST API ENDPOINTS                              |
+--------+----------------------------+---------------------------------------------+
| Method | Endpoint Path              | Purpose / Function                          |
+--------+----------------------------+---------------------------------------------+
| GET    | `/api/v1/search/instant`   | Ultra-fast Typesense autocomplete proxy     |
| GET    | `/api/v1/districts`        | Fetch all 26 AP districts with ISP counts   |
| GET    | `/api/v1/districts/:slug`  | Fetch district detail & mandal list         |
| GET    | `/api/v1/mandals/:slug`    | Fetch mandal detail, villages & map points  |
| GET    | `/api/v1/pincodes/:code`   | Resolve broadband ISPs for a specific PIN   |
| GET    | `/api/v1/isps/:slug`       | Fetch comprehensive ISP profile & map card  |
| GET    | `/api/v1/isps/compare`     | Return comparative matrix for given ISP IDs |
| POST   | `/api/v1/admin/import/csv` | Upload and validate bulk ISP location CSV   |
| POST   | `/api/v1/admin/geocode/run`| Trigger manual batch Google Places worker   |
+--------+----------------------------+---------------------------------------------+
```

#### Sample API Response (`GET /api/v1/isps/act-fibernet-visakhapatnam`)
```json
{
  "status": "success",
  "data": {
    "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    "name": "ACT Fibernet",
    "slug": "act-fibernet-visakhapatnam",
    "logo_url": "https://assets.andhraisp.net/logos/act.png",
    "rating": 4.6,
    "total_reviews": 1280,
    "google_place": {
      "place_id": "ChIJN1t_t812NzoR_xY6Z6zX9v0",
      "formatted_address": "48-7-9, Rama Talkies Rd, Srinagar, Visakhapatnam, Andhra Pradesh 530016",
      "coordinates": {
        "latitude": 17.7294,
        "longitude": 83.3093
      },
      "is_estimated": false
    },
    "coverage_summary": {
      "districts_count": 8,
      "mandals_count": 142,
      "pin_codes_count": 310
    }
  }
}
```

---

## 11. Security, Authorization & Compliance Blueprint

### 11.1 Security Controls Matrix
1. **Authentication:** JWT (JSON Web Tokens) with short expiration (15 minutes) paired with secure HttpOnly, SameSite=Strict refresh cookies.
2. **Role-Based Access Control (RBAC):**
   * `SUPER_ADMIN`: Full system permissions, database schema migrations, billing alerts.
   * `DISTRICT_ADMIN`: Manage data within assigned district boundaries.
   * `ISP_MANAGER`: Edit verified ISP company profiles and respond to user reviews.
   * `CITIZEN`: View public directories, save favorites, submit ratings.
3. **API Rate Limiting (Redis Sliding Window):**
   * Public Search API: 100 requests per minute per IP.
   * Authentication Endpoints: 5 requests per minute per IP.
   * Admin Bulk Actions: 10 operations per hour.
4. **Input Sanitization & Injection Prevention:**
   * SQL Injection: Prevented via parameterized queries enforced by Prisma/Drizzle ORM.
   * XSS Protection: HTML entity escaping on all user-submitted reviews.
   * CSRF Protection: Anti-CSRF double-submit cookie tokens on all state-mutating requests (`POST`, `PUT`, `DELETE`).

---

## 12. Programmatic SEO Architecture & Performance Strategy

### 12.1 Programmatic SEO Strategy
To dominate organic search results across Andhra Pradesh, the platform generates **over 25,000 clean, static-rendered SEO landing pages**.

```
+-----------------------------------------------------------------------------------+
|                        PROGRAMMATIC SEO URL & TITLE PATTERNS                      |
+-------------------+--------------------+------------------------------------------+
| Page Scope        | URL Pattern        | Target SEO Meta Title                    |
+-------------------+--------------------+------------------------------------------+
| State Directory   | `/ap`              | Broadband ISPs in Andhra Pradesh | 2026  |
| District Page     | `/ap/visakhapatnam`| Best Internet Providers in Visakhapatnam |
| Mandal Page       | `/ap/visakhapatnam/| Top Fiber ISPs in Gajuwaka Mandal        |
|                   |  gajuwaka`         |                                          |
| PIN Code Page     | `/pincode/530026`  | Broadband Availability for PIN Code 530026|
| ISP Profile Page  | `/isp/act-fibernet`| ACT Fibernet Coverage & Plans in AP      |
+-------------------+--------------------+------------------------------------------+
```

#### Structured Schema Markup (Schema.org / JSON-LD)
Every ISP profile and directory page embeds Schema.org structured data to enable Google Rich Snippets:
* `ISPProfilePage` $\rightarrow$ Embeds `Organization` + `LocalBusiness` + `AggregateRating`.
* `PINCodePage` $\rightarrow$ Embeds `ItemPage` + `BreadcrumbList`.

---

### 12.2 Core Web Vitals & Performance Engineering
* **Lighthouse Targets:** 98+ Desktop / 95+ Mobile across all pages.
* **Strategies Employed:**
  1. **Incremental Static Regeneration (ISR):** District and Mandal pages are pre-rendered at build time and revalidated in the background every 24 hours (`revalidate = 86400`).
  2. **Next.js Image Optimization:** Auto-conversion of uploaded ISP logos and assets to WebP/AVIF format with explicit aspect ratio bounding to prevent Cumulative Layout Shift (CLS = 0.00).
  3. **Edge Asset Caching:** Static assets delivered directly via Cloudflare Enterprise edge nodes located in Hyderabad, Chennai, and Mumbai for sub-20ms TTFB (Time To First Byte).

---

## 13. Analytics, Telemetry & Business Intelligence

### 13.1 Analytics Tracking Schema
* **Privacy-First Telemetry:** Zero PII (Personally Identifiable Information) captured without explicit consent.
* **Core Tracked Events:**
  * `search_executed` (Query parameters, results returned count, filter toggles).
  * `isp_profile_viewed` (ISP ID, referrer route).
  * `get_directions_clicked` (ISP ID, Google Place ID).
  * `compare_drawer_opened` (List of compared ISP IDs).
  * `pincode_searched` (PIN Code value, successful ISP count).

---

## 14. Implementation Roadmap, Phased Deliverables & Timeline

```
+-----------------------------------------------------------------------------------+
|                           PHASED IMPLEMENTATION TIMELINE                          |
+-----------------------------------------------------------------------------------+
| Phase 1: Core Foundation & Data Architecture (Weeks 1 - 4)                        |
|  [x] Database Schema Setup (PostgreSQL/PostGIS)                                   |
|  [x] Next.js App Router Monorepo Initialization                                   |
|  [x] Design System & UI Primitive Library Construction                            |
|                                                                                   |
| Phase 2: Google Maps Dynamic Address Engine & Search (Weeks 5 - 8)                |
|  [x] Redis Caching Layer & Google Places API Integration                          |
|  [x] Dynamic Address Resolution Engine (DARE) Construction                        |
|  [x] Typesense Search Engine Indexing & Multi-Tier Autocomplete                   |
|                                                                                   |
| Phase 3: Directory Pages, Interactive AP Map & UX Polish (Weeks 9 - 12)          |
|  [x] Programmatic SEO Page Generator (Districts, Mandals, Villages, PIN Codes)    |
|  [x] D3/Three.js Interactive AP Vector Map Development                            |
|  [x] Lenis & GSAP Micro-Animations Implementation                                 |
|                                                                                   |
| Phase 4: Admin Panel, Bulk ETL Ingestion & Security Audit (Weeks 13 - 16)         |
|  [x] RBAC Admin Dashboard & Bulk CSV Import Module                                |
|  [x] Security Penetration Testing & API Rate Limiting Setup                       |
|  [x] Final Production Deployment on Vercel Enterprise & Cloudflare                |
+-----------------------------------------------------------------------------------+
```

---

## 15. Risk Assessment & Mitigation Matrix

| Risk ID | Risk Description | Severity | Probability | Mitigation Strategy |
| :--- | :--- | :--- | :--- | :--- |
| `RSK-001` | Google Places API cost overrun due to un-cached queries. | High | Medium | Implement strict 30-day Redis/DB caching, rate-limiting on client map views, and fallback to cached Geocoding API centroids. |
| `RSK-002` | Multiple Google Places results returned for ambiguous LCO ISP names. | Medium | High | Apply candidate scoring matrix combining PIN code match, mandal string verification, and spatial centroid distance. |
| `RSK-003` | Data staleness for small rural LCO (Local Cable Operator) ISPs. | Medium | Medium | Provide self-service provider portal with claim verification for regional ISPs to update details directly. |
| `RSK-004` | High traffic surges during news/disaster broadband outages. | Medium | Low | Deploy on Vercel Edge Serverless infrastructure backed by Cloudflare CDN caching all static directory routes. |

---

## 16. Quality Assurance & Acceptance Criteria Matrix

### 16.1 General Quality Gates
* **Automated Code Quality:** 100% TypeScript strict type check compliance without `any` overrides.
* **Testing Coverage:** Unit testing (Jest/Vitest) coverage $> 85\%$ for calculation services; E2E testing (Playwright) covering critical paths:
  1. Global Search $\rightarrow$ PIN Code Resolution $\rightarrow$ ISP Profile.
  2. District Page $\rightarrow$ Mandal Page $\rightarrow$ Interactive Map View.
  3. Compare Drawer Selection $\rightarrow$ Compare Page Load.
  4. Admin Login $\rightarrow$ Bulk CSV Import Dry Run.

---

## 17. Enterprise Glossary & Appendix

### 17.1 Technical & Telecom Glossary
* **AP:** Andhra Pradesh State.
* **Mandal:** Administrative sub-division of a district in Andhra Pradesh (similar to a block or Tehsil).
* **PIN Code:** Postal Index Number (6-digit postal code system used by India Post).
* **ISP:** Internet Service Provider.
* **LCO:** Local Cable Operator / Last-Mile Fiber Provider.
* **FTTH:** Fiber to the Home.
* **DARE:** Dynamic Address Resolution Engine (Custom spatial algorithm mapping ISP name + admin area to Google Place ID).
* **PostGIS:** Spatial database extender for PostgreSQL object-relational database.
* **ISR:** Incremental Static Regeneration (Next.js rendering pattern).
* **TTFB:** Time To First Byte.

---
**[END OF MASTER ENTERPRISE PRODUCT REQUIREMENTS DOCUMENT]**
