# ANDHRA ISP NETWORK
## Master Enterprise Information Architecture (IA) Document
**Version:** 1.0.0-Enterprise  
**Document Status:** Final Master Specification  
**Classification:** Proprietary / Enterprise User Experience Architecture  
**Author:** Senior UX Architect, Information Architect, Product Design, & Frontend Systems Team  
**Target Platform:** Production Web System (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & Architectural Vision

### 1.1 Document Overview & Intent
This Information Architecture (IA) document serves as the master structural blueprint for the **Andhra ISP Network** web platform. Grounded strictly in the requirements, business strategy, technical architecture, and spatial resolution mechanisms established in the Master Product Requirements Document (PRD), this specification articulates the complete digital taxonomy, content hierarchy, sitemap, navigation systems, user journeys, URL schemes, search architecture, and screen relationships required to deliver a world-class user experience.

### 1.2 UX Vision & Design Philosophy
The Andhra ISP Network rejects legacy government portal patterns characterized by dense, chaotic links, unstyled tables, poor typographic contrast, and slow page loads. Instead, it adopts a **modern, minimalist SaaS design language** inspired by industry leaders such as Apple, Stripe, Linear, Vercel, and Notion.

```
+-----------------------------------------------------------------------------------+
|                            UX ARCHITECTURE FOUNDATIONS                            |
+-------------------+---------------------------------------------------------------+
| Attribute         | Architectural Standard                                        |
+-------------------+---------------------------------------------------------------+
| Aesthetic Style   | Editorial White Theme (#FFFFFF) with Zinc-950 typography      |
| Navigation Model  | Backdrop Blur Floating Glass Header + Sticky Breadcrumb Trail |
| Information Depth | Maximum 3 Clicks from Landing Page to any Village/ISP Detail   |
| Search Response   | Instant Autocomplete (<20ms) with keyboard shortcut (`Ctrl+K`)|
| Map Interaction   | Non-blocking dynamic spatial cards & inline Google Maps modal  |
| Responsiveness    | Touch-first mobile layouts morphing seamlessly to multi-column|
+-------------------+---------------------------------------------------------------+
```

---

## 2. Master Site Map & Sitemap Taxonomy

### 2.1 Complete Architectural Site Tree

```
ROOT LOGICAL DOMAIN (https://andhraisp.net)
│
├── 1.0 PUBLIC DISCOVERY & MARKETING
│   ├── 1.1 Landing Page (/)
│   ├── 1.2 About Andhra ISP Network (/about)
│   ├── 1.3 Platform Features & Coverage Tech (/features)
│   ├── 1.4 API Platform Documentation (/docs/api)
│   ├── 1.5 Privacy Policy (/privacy)
│   ├── 1.6 Terms of Service (/terms)
│   ├── 1.7 System Status & Network Health (/status)
│   └── 1.8 Contact & Support (/contact)
│
├── 2.0 GEOGRAPHIC DIRECTORY EXPLORER
│   ├── 2.1 AP Interactive Map Explorer (/ap/explorer)
│   ├── 2.2 District Index (/ap/districts)
│   ├── 2.3 District Detail Page (/ap/[district-slug])
│   │   └── 2.3.1 Mandal Index (/ap/[district-slug]/mandals)
│   ├── 2.4 Mandal Detail Page (/ap/[district-slug]/[mandal-slug])
│   │   └── 2.4.1 Village Index (/ap/[district-slug]/[mandal-slug]/villages)
│   ├── 2.5 Village Detail Page (/ap/[district-slug]/[mandal-slug]/[village-slug])
│   └── 2.6 PIN Code Index & Detail (/pincode/[pincode])
│
├── 3.0 ISP DIRECTORY & COMPARISON
│   ├── 3.1 Global ISP Index (/isps)
│   ├── 3.2 ISP Master Profile (/isp/[provider-slug])
│   │   ├── 3.2.1 Coverage Map Modal (/isp/[provider-slug]#coverage)
│   │   ├── 3.2.2 Verified Office Google Map (/isp/[provider-slug]#location)
│   │   └── 3.2.3 Plan Pricing Matrix (/isp/[provider-slug]#plans)
│   └── 3.3 Dynamic ISP Comparison Engine (/compare)
│
├── 4.0 SEARCH ENGINE INTERFACE
│   ├── 4.1 Global Search Overlay (`Ctrl+K` Modal)
│   └── 4.2 Comprehensive Search Results (/search)
│
├── 5.0 AUTHENTICATION & USER PORTAL
│   ├── 5.1 Sign In (/auth/login)
│   ├── 5.2 Sign Up (/auth/register)
│   ├── 5.3 Password Recovery (/auth/forgot-password)
│   ├── 5.4 Account Dashboard (/user/dashboard)
│   │   ├── 5.4.1 Saved Favorites (/user/favorites)
│   │   ├── 5.4.2 Recent Search History (/user/history)
│   │   ├── 5.4.3 My Ratings & Reviews (/user/reviews)
│   │   └── 5.4.4 Profile Settings (/user/settings)
│   └── 5.5 ISP Manager Claim Portal (/isp-portal/claim)
│
└── 6.0 ENTERPRISE ADMIN CONSOLE (/admin)
    ├── 6.1 Admin Overview & Metrics (/admin/dashboard)
    ├── 6.2 Data Management (/admin/data)
    │   ├── 6.2.1 Districts & Mandals CRUD (/admin/data/geography)
    │   ├── 6.2.2 Villages & PIN Codes CRUD (/admin/data/villages)
    │   └── 6.2.3 ISP Provider Directory CRUD (/admin/data/providers)
    ├── 6.3 Dynamic ETL & Bulk Import Engine (/admin/import)
    ├── 6.4 Google Places & Geocoding Cache Inspector (/admin/google-cache)
    ├── 6.5 System Users & RBAC Permissions (/admin/users)
    ├── 6.6 Search Analytics & Demand Heatmaps (/admin/analytics)
    └── 6.7 Security & System Audit Logs (/admin/logs)
```

---

## 3. Navigation Architecture & Navigation Tree

### 3.1 Primary Header Navigation (Global Desktop & Tablet)
Positioned fixed at top of viewport with `backdrop-filter: blur(16px); background: rgba(255,255,255,0.8); border-bottom: 1px solid #E4E4E7`.

```
+-----------------------------------------------------------------------------------+
|  [LOGO] Andhra ISP  |  Districts  ISPs  Compare  Map Explorer  | [Search ⌘K]  [Login] |
+-----------------------------------------------------------------------------------+
```

1. **Logo / Brand Mark:** Left-aligned text mark `"Andhra ISP"` with sub-badge `"AP Network"`. Clicking navigates to `/`.
2. **Primary Navigation Links:**
   * **Districts:** Dropdown mega-menu displaying quick links to 26 AP districts grouped by region (North Coastal, Godavari, Krishna-Guntur, Rayalaseema).
   * **ISPs:** Direct link to `/isps` global directory.
   * **Compare:** Direct link to `/compare` (shows floating item count pill if providers selected).
   * **Map Explorer:** Direct link to `/ap/explorer` with animated live pulse icon.
3. **Utility Action Group (Right Aligned):**
   * **Global Search Trigger Button:** Styled input preview `[🔍 Search PIN, Mandal, ISP...  Ctrl+K]` opening instant search modal.
   * **Authentication Button:** Primary solid black button `[Sign In]` or User Avatar Dropdown when authenticated.

---

### 3.2 Secondary & Sticky Contextual Navigation
* **Sticky Breadcrumb Header:** Appears on all directory pages below primary header on scroll down. Shows exact hierarchical spatial path:  
  `Home / Andhra Pradesh / Visakhapatnam District / Gajuwaka Mandal / PIN 530026`
* **Floating Comparison Bar (Viewport Bottom):**  
  Anchored bottom-center when 1 to 4 ISPs are added to compare queue. Displays thumbnail logos, provider names, and solid black `[Compare Now (X)]` CTA button.

---

### 3.3 Mobile Responsive Navigation Pattern
On viewport widths $< 768\text{px}$:
* Primary header condenses to Brand Logo + Search Icon + Hamburger Icon.
* **Mobile Drawer Menu (Slide-in from Right):**
  * Full-width search bar at top.
  * Hierarchical accordion list for Districts & Regions.
  * Quick PIN Code Lookup strip.
  * Direct action buttons for Account / Favorites.

---

### 3.4 Footer Navigation Taxonomy

```
+-----------------------------------------------------------------------------------+
| ANDHRA ISP NETWORK                                                                |
| Connecting Every Corner of Andhra Pradesh                                         |
+-------------------+-------------------+-------------------+-----------------------+
| DIRECTORIES       | POPULAR CITIES    | PLATFORM          | LEGAL & SYSTEM        |
+-------------------+-------------------+-------------------+-----------------------+
| All 26 Districts  | Visakhapatnam     | Interactive Map   | Privacy Policy        |
| All Mandals Index | Vijayawada        | ISP Directory     | Terms of Service      |
| PIN Code Search   | Guntur            | Compare Engine    | API Documentation     |
| Top ISPs Index    | Tirupati          | Submit Review     | System Status (99.9%) |
| Villages Directory| Kurnool           | Provider Claim    | Admin Portal          |
+-------------------+-------------------+-------------------+-----------------------+
| © 2026 Andhra ISP Network. Spatial data powered by Google Maps Platform.          |
+-----------------------------------------------------------------------------------+
```

---

## 4. End-to-End User Journeys & Workflow Diagrams

### 4.1 User Journey 1: Guest Visitor Discovering Local Fiber via PIN Code

```
[ GUEST VISITOR ]
       |
       | 1. Arrives at Landing Page (https://andhraisp.net)
       v
[ HERO SEARCH INPUT BOX ]
       |
       | 2. Types "530026" (PIN Code for Gajuwaka, Vizag)
       v
[ INSTANT SEARCH AUTOCOMPLETE DROPDOWN (<20ms) ]
       |
       | 3. Clicks suggested item: "PIN Code 530026 (Gajuwaka, Visakhapatnam)"
       v
[ PIN CODE DETAIL PAGE (/pincode/530026) ]
       |
       +---> Views list of active ISPs (ACT Fibernet, JioFiber, Airtel, BSNL, APSFL)
       |
       | 4. Clicks "ACT Fibernet" Card
       v
[ ISP PROFILE PAGE (/isp/act-fibernet-visakhapatnam) ]
       |
       +---> Views Google Maps Verified Office Marker & Address
       +---> Clicks "Get Directions" -> Opens Google Maps App / Navigation
```

---

### 4.2 User Journey 2: District $\rightarrow$ Mandal $\rightarrow$ Village Hierarchical Drilldown

```
[ USER ON LANDING PAGE ]
       |
       | 1. Clicks "Districts" in Header Navigation
       v
[ DISTRICTS INDEX PAGE (/ap/districts) ]
       |
       | 2. Selects "Tirupati District" Card
       v
[ DISTRICT DETAIL PAGE (/ap/tirupati) ]
       |
       | 3. Views Mandal Grid -> Clicks "Sri City / Satyavedu Mandal"
       v
[ MANDAL DETAIL PAGE (/ap/tirupati/satyavedu) ]
       |
       | 4. Views Villages List -> Clicks "Tada Village"
       v
[ VILLAGE DETAIL PAGE (/ap/tirupati/satyavedu/tada) ]
       |
       +---> Displays verified rural broadband providers serving Tada Village
```

---

### 4.3 User Journey 3: Side-by-Side ISP Provider Comparison Workflow

```
[ USER BROWSING LISTINGS ]
       |
       | 1. Clicks "+ Add to Compare" on ACT Fibernet Card
       |    -> Floating Bottom Bar appears with [ACT Fibernet (1/4)]
       |
       | 2. Clicks "+ Add to Compare" on JioFiber Card
       |    -> Floating Bottom Bar updates to [ACT, Jio (2/4)]
       |
       | 3. Clicks "Compare Now" Button
       v
[ DYNAMIC COMPARISON MATRIX PAGE (/compare?providers=act-fibernet,jio-fiber) ]
       |
       +---> Evaluates side-by-side specs: Speed, Cost, Tech Type, Uptime SLA, Rating
       +---> Toggles "Highlight Differences Only" switch
```

---

### 4.4 User Journey 4: System Administrator Bulk CSV ETL Data Ingestion

```
[ SYSTEM ADMINISTRATOR ]
       |
       | 1. Logs into Admin Portal (/admin) -> Navigates to Bulk Import (/admin/import)
       v
[ BULK IMPORT DASHBOARD ]
       |
       | 2. Uploads 10,000-row CSV file (District, Mandal, PIN Code, ISP Name)
       v
[ VALIDATION & DRY-RUN ENGINE ]
       |
       +---> Validates mandatory headers & PIN formatting
       +---> Highlights 12 rows with typos or unknown mandal names
       |
       | 3. Clicks "Confirm & Import 9,988 Valid Rows"
       v
[ ASYNC BULLMQ BACKGROUND WORKER ]
       |
       +---> Ingests ISP coverage records into PostgreSQL
       +---> Triggers automated batch Google Places Text Search geocoding job
       +---> Displays real-time WebSocket progress bar in Admin UI
```

---

## 5. Search Experience Architecture & Ranking Taxonomy

### 5.1 Search Input Modality (`Ctrl+K` Global Overlay)
The global search engine is accessible from anywhere in the application via header search button or pressing `Ctrl+K` / `⌘K`.

```
+-----------------------------------------------------------------------------------+
| 🔍 Search District, Mandal, Village, PIN Code, or ISP Name...          [ESC]      |
+-----------------------------------------------------------------------------------+
| RECENT SEARCHES                                                                   |
|   🕒 530026 - Visakhapatnam                                                       |
|   🕒 ACT Fibernet Gajuwaka                                                        |
+-----------------------------------------------------------------------------------+
| TRENDING LOCATIONS IN ANDHRA PRADESH                                              |
|   🔥 Tirupati Mandal (14 ISPs)                                                   |
|   🔥 Vijayawada Central (22 ISPs)                                                 |
+-----------------------------------------------------------------------------------+
| GEOGRAPHIC RESULTS                                                                |
|   📍 Gajuwaka (Mandal) • Visakhapatnam District                                   |
|   📮 530017 (PIN Code) • MVP Colony, Visakhapatnam                                |
+-----------------------------------------------------------------------------------+
| ISP PROVIDERS                                                                     |
|   ⚡ AP State FiberNet (APSFL) • State-wide Government Fiber                      |
+-----------------------------------------------------------------------------------+
```

---

### 5.2 Multi-Attribute Search Ranking & Scoring Model
When a user submits a query string $Q$ to Typesense, results are scored and ordered using the following weighted ranking equation:

$$\text{Search Score} = w_1 \cdot S_{\text{exact\_match}} + w_2 \cdot S_{\text{pincode}} + w_3 \cdot S_{\text{mandal}} + w_4 \cdot S_{\text{verified\_isp}} + w_5 \cdot S_{\text{rating}}$$

* **Exact 6-Digit PIN Code Match:** Weight $w_1 = 100$ (Highest Priority).
* **Mandal Name Exact Match:** Weight $w_2 = 80$.
* **District Name Match:** Weight $w_3 = 60$.
* **ISP Name / Alias Match:** Weight $w_4 = 50$.
* **Verified Google Place Status:** Boost multiplier $+1.2\times$.

---

### 5.3 Filtering & Faceting Taxonomy

```
+-----------------------------------------------------------------------------------+
| FACET FILTER           | FILTER OPTION VALUES                                     |
+------------------------+----------------------------------------------------------+
| Technology Type        | [ ] FTTH Fiber  [ ] 5G AirFiber  [ ] Wi-Fi Hotspot       |
| Service Category       | [ ] Home Broadband  [ ] Enterprise Leased Line (1:1)     |
| Speed Tier             | [ ] Up to 100 Mbps  [ ] 300 Mbps+  [ ] 1 Gbps Gigabit     |
| Verified Status        | [ ] Google Places Verified Office Only                   |
| Customer Rating        | [ ] 4.0 Stars & Above  [ ] 3.0 Stars & Above             |
+------------------------+----------------------------------------------------------+
```

---

## 6. Page-by-Page Content Hierarchy Specifications

### 6.1 Landing Page (`/`)
1. **Header Navigation:** Backdrop blur floating bar.
2. **Hero Section:**
   * Headline: *"Connecting Every Corner of Andhra Pradesh"*
   * Subtitle: *"Discover high-speed fiber broadband across 26 Districts, 679 Mandals, and 17,000+ Villages."*
   * Central Hero Search Box with instant autocomplete.
3. **Live Metrics Banner:** Grid showing Districts (26), Mandals (679), Villages (17,000+), and Active ISPs (450+).
4. **Interactive AP Vector Map Canvas:** D3.js/Three.js interactive silhouette map of Andhra Pradesh.
5. **Top Regional ISPs Strip:** Horizontal scroll of top verified regional fiber providers.
6. **Popular PIN Codes Quick Access:** Grid of top searched PIN codes in AP.
7. **Platform Features & Value Proposition:** Cards explaining search precision, verified Google office maps, and provider comparisons.
8. **Footer Navigation.**

---

### 6.2 District Detail Page (`/ap/[district-slug]`)
1. **Breadcrumb Header:** `Home / Districts / Visakhapatnam`
2. **District Hero Banner:** District Title, Headquarters, Total Mandals, Total PIN Codes, Active ISP Count.
3. **Spatial Mandal Map Card:** Interactive map boundary of the district displaying mandal centroids.
4. **Mandals Grid:** Searchable alphabetical list of mandals in this district with active provider badges.
5. **Top District-Wide ISPs:** Ranked list of providers with largest coverage reach across district mandals.
6. **Popular PIN Codes in District:** Grid of all district postal codes.
7. **Related / Bordering Districts:** Quick navigation to neighboring AP districts.

---

### 6.3 Mandal Detail Page (`/ap/[district-slug]/[mandal-slug]`)
1. **Breadcrumb Header:** `Home / Visakhapatnam / Gajuwaka Mandal`
2. **Mandal Summary Card:** Mandal Name, District Name, Total Villages, Active PIN Codes.
3. **Google Maps Verified Provider Branch Map:** Interactive map showing physical ISP branch offices in Gajuwaka.
4. **Active ISPs List:** Detailed cards for each provider serving this mandal with speed tiers and direct inquiry CTA.
5. **Villages Directory Accordion:** List of villages in this mandal.
6. **Nearby Mandals:** Links to adjacent mandals within the district.

---

### 6.4 PIN Code Detail Page (`/pincode/[pincode]`)
1. **Breadcrumb Header:** `Home / PIN Code / 530026`
2. **PIN Code Header:** "Broadband Availability in 530026 (Gajuwaka, Visakhapatnam)".
3. **Verified ISP Cards Grid:** Showing provider name, technology badge (Fiber/Wireless), speed tiers, pricing range, and Google Places office link.
4. **Google Map Card:** Centered on postal index 530026 boundary.
5. **Customer Reviews for PIN Code 530026:** User ratings and service uptime comments.
6. **Adjacent PIN Codes:** Links to neighboring postal areas.

---

### 6.5 ISP Master Profile (`/isp/[provider-slug]`)
1. **Breadcrumb Header:** `Home / ISPs / ACT Fibernet`
2. **ISP Header Banner:** Provider Logo, Verified Badge, Average Star Rating, Helpline Number, Direct Website Link, `[Request Connection]` Button.
3. **Google Places Location Card:** Embedded Google Map displaying verified branch office address, Google Place ID, and direct turn-by-turn directions button.
4. **Plan Pricing Matrix:** Tabbed table ("Home Broadband", "Commercial Leased Line") with download/upload speed, FUP limit, monthly rental in INR.
5. **Coverage Footprint Accordion:** Searchable list of districts and mandals serviced by this provider in Andhra Pradesh.
6. **Verified Customer Reviews Section:** Star rating breakdown, user review list, and review submission modal.

---

### 6.6 Real-Time ISP Comparison Matrix (`/compare`)
1. **Header & Controls Bar:** Page Title, Provider Selector Search Dropdown (up to 4 items), `[Highlight Differences]` Toggle Switch, `[Clear All]` Button.
2. **Comparison Matrix Grid:**
   * Row 1: Provider Logos & Names
   * Row 2: Customer Rating & Review Count
   * Row 3: Technology Stack (FTTH / Wireless / 5G)
   * Row 4: Speed Range (Min Mbps to Max Gbps)
   * Row 5: Starting Monthly Cost ($\text{₹}$)
   * Row 6: SLA & Uptime Guarantee ($99.9\%$)
   * Row 7: Google Places Physical Office Status (Verified vs Centroid Estimated)
   * Row 8: Action Buttons (`[View Profile]`, `[Contact ISP]`)

---

## 7. Deep-Dive Spatial & Google Maps User Flow Architecture

### 7.1 Dynamic Address Resolution Engine (DARE) Spatial Flow

```
[ PROVIDER RECORD LOADED ]
          |
          v
  Does record have verified Google Place ID?
          |
     +----+----+
     |         |
   [YES]      [NO]
     |         |
     v         v
 Render   Trigger DARE Pipeline:
 Google   1. Check Redis Cache (`place:query:{hash}`)
 Map Card    |
             +---> [HIT]  -> Return cached Lat/Lng & Address
             +---> [MISS] -> Call Google Places Text Search API
                                 |
                                 v
                     Scored Candidate Disambiguation
                                 |
                  +--------------+--------------+
                  |                             |
         [Score >= 80]                    [Score < 80]
                  |                             |
                  v                             v
       Store Place ID & Address          Fallback to Geocoding API
       in google_places_cache table      Mandal / PIN Centroid
       (is_estimated = FALSE)            (is_estimated = TRUE)
```

---

### 7.2 Google Map Card Component UX Layout
* **Embedded Controls:** Zoom In/Out, Map/Satellite View Toggle, Fullscreen Toggle.
* **Custom Styled Marker Pin:** Dark zinc circular marker with ISP logo icon.
* **Marker Click Popup Card:**
  * Provider Name & Verified Badge.
  * Formatted Street Address.
  * Rating Stars.
  * Direct Link: `"Get Directions on Google Maps ↗"`.

---

## 8. Enterprise Admin Information Architecture

```
ADMIN CONSOLE ARCHITECTURE (/admin)
│
├── 8.1 Executive Dashboard (/admin/dashboard)
│   ├── Total Districts / Mandals / Villages Counter
│   ├── Total Active ISPs & Coverage Mappings
│   ├── Google Places Cache Hit Ratio Gauge (Target 92%+)
│   └── Monthly API Quota & Billing Estimator
│
├── 8.2 Geographic & Coverage CMS (/admin/data)
│   ├── Manage Districts (/admin/data/districts)
│   ├── Manage Mandals (/admin/data/mandals)
│   ├── Manage Villages (/admin/data/villages)
│   └── Manage PIN Codes (/admin/data/pincodes)
│
├── 8.3 Provider Directory Management (/admin/providers)
│   ├── ISP Profiles CRUD (/admin/providers/list)
│   ├── Pending Profile Claims Queue (/admin/providers/claims)
│   └── Service Plan Catalogs (/admin/providers/plans)
│
├── 8.4 Bulk ETL & Import Console (/admin/import)
│   ├── File Upload (.csv, .xlsx) Drag-and-Drop Zone
│   ├── Validation Log & Error Table
│   └── Background Processing Queue Monitor (BullMQ)
│
├── 8.5 Google Places Cache Manager (/admin/google-cache)
│   ├── Search Cached Place IDs Table
│   ├── Trigger Batch Geocode Job Trigger
│   └── Unmatched / Estimated Location Resolution Queue
│
└── 8.6 System Administration & Security (/admin/system)
    ├── Users & RBAC Permissions (/admin/system/users)
    ├── Search Analytics & Search History Logs (/admin/system/search-logs)
    └── Security Audit Log Viewer (/admin/system/audit-logs)
```

---

## 9. URL Structure & Canonical Taxonomy Engine

```
+-----------------------------------------------------------------------------------+
|                            URL CANONICAL STRATEGY                                 |
+-------------------+--------------------------------+------------------------------+
| Page Purpose      | Canonical URL Scheme           | HTTP Methods                 |
+-------------------+--------------------------------+------------------------------+
| Home Landing      | `https://andhraisp.net/`       | GET                          |
| AP Map Explorer   | `https://andhraisp.net/ap/explorer`| GET                      |
| District Index    | `https://andhraisp.net/ap/districts`| GET                     |
| District Detail   | `https://andhraisp.net/ap/visakhapatnam`| GET                |
| Mandal Detail     | `https://andhraisp.net/ap/visakhapatnam/gajuwaka`| GET        |
| Village Detail    | `https://andhraisp.net/ap/visakhapatnam/gajuwaka/tada`| GET   |
| PIN Code Landing  | `https://andhraisp.net/pincode/530026`| GET                  |
| Global ISP Index  | `https://andhraisp.net/isps`   | GET                          |
| ISP Profile Page  | `https://andhraisp.net/isp/act-fibernet`| GET                |
| Comparison Engine | `https://andhraisp.net/compare?providers=act,jio`| GET        |
| Admin Dashboard   | `https://andhraisp.net/admin/dashboard`| GET                  |
+-------------------+--------------------------------+------------------------------+
```

---

## 10. Internal Linking Matrix & SEO Link Juice Distribution

```
[ LANDING PAGE (/) ]
      |
      +---> [ ALL DISTRICTS INDEX (/ap/districts) ]
      |           |
      |           v
      |     [ DISTRICT DETAIL (/ap/[district-slug]) ]
      |           |
      |           v
      |     [ MANDAL DETAIL (/ap/[district-slug]/[mandal-slug]) ]
      |           |
      |           v
      +---------> [ PIN CODE PAGE (/pincode/[pincode]) ] <--------+
                  |                                              |
                  v                                              |
            [ ISP PROFILE PAGE (/isp/[provider-slug]) ] ---------+
                  |
                  v
            [ GOOGLE MAPS LOCATION CARD ]
```

---

## 11. Role-Based Access Control (RBAC) & Permission Matrix

| Feature / Module Path | Guest | Registered Citizen | ISP Manager | District Admin | Super Admin |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Browse Directories & Maps | Read | Read | Read | Read | Read |
| Global Search (`Ctrl+K`) | Read | Read | Read | Read | Read |
| Compare ISPs | Read | Read | Read | Read | Read |
| Save Favorites & History | — | Full Access | Full Access | Full Access | Full Access |
| Submit Provider Review | — | Create/Edit | Create/Edit | Manage | Manage |
| Claim / Edit ISP Profile | — | — | Edit Own | Edit District | Full Access |
| Bulk CSV Import | — | — | — | — | Full Access |
| Google Cache Management | — | — | — | — | Full Access |
| RBAC User Management | — | — | — | — | Full Access |

---

## 12. Multi-State Scalability & National Expansion Architecture

The information architecture is intentionally designed to support seamless expansion across India without modifying URL structures or breaking canonical SEO paths:

```
STATE-INDEPENDENT ROUTING ENGINE:

Current Scope (Andhra Pradesh):
  https://andhraisp.net/ap/visakhapatnam/gajuwaka

Phase 2 Expansion (Telangana State):
  https://andhraisp.net/ts/hyderabad/serilingampally

Phase 3 Expansion (Karnataka State):
  https://andhraisp.net/ka/bengaluru/whitefield

Phase 4 Expansion (Pan-India National Architecture):
  https://indiaisp.net/[state-code]/[district-slug]/[mandal-or-taluk-slug]
```

---

## 13. Web Accessibility (WCAG 2.1 AA) & Inclusive Design

1. **Keyboard Navigation:** 100% of interactive elements (buttons, inputs, dropdowns, map markers) are fully navigable via `Tab`, `Shift+Tab`, `Enter`, and `Space`.
2. **Screen Reader Support:** ARIA landmark roles (`role="main"`, `role="navigation"`, `role="search"`, `aria-live="polite"` for instant search results).
3. **Color Contrast Ratios:** All text elements enforce minimum 4.5:1 contrast ratio against white background (`#09090B` on `#FFFFFF` yields 19.5:1 ratio).
4. **Focus Rings:** Visible, high-contrast 2px zinc focus outline (`outline: 2px solid #09090B; outline-offset: 2px`) on all active UI elements.

---

## 14. Quality Assurance & Acceptance Criteria Matrix

* **Navigation Criteria:** Clicking any breadcrumb segment returns user to the correct spatial level without resetting active search query states.
* **Search Performance:** Instant autocomplete dropdown presents suggestions within $<20\text{ms}$ of keypress.
* **Map Verification:** Every ISP profile page contains an embedded Google Map centered on either a verified Google Place ID marker or an estimated Mandal centroid marker with clear visual distinction.
* **Mobile Responsiveness:** Zero horizontal scrollbar or layout shift on viewports down to 320px width.

---

## 15. Enterprise Glossary & Appendix

* **IA:** Information Architecture.
* **DARE:** Dynamic Address Resolution Engine.
* **Mandal:** Sub-district administrative unit in Andhra Pradesh.
* **PIN Code:** 6-digit Postal Index Number.
* **Place ID:** Unique persistent identifier provided by Google Maps Platform for physical geographic places.
* **Typesense:** Ultra-fast open-source search engine optimized for sub-millisecond instant autocomplete.

---
**[END OF MASTER ENTERPRISE INFORMATION ARCHITECTURE DOCUMENT]**
