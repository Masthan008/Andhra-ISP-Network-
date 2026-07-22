# ANDHRA ISP NETWORK
## Master Frontend Architecture & Application Foundation
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 7 — Frontend Architecture & Application Foundation (Prompt 1)  
**Classification:** Enterprise Frontend Engineering & Next.js 15 Architecture Specification  
**Author:** Principal Frontend Architect, Next.js Lead, & UX Engineer  
**Target Platform:** Production Systems (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & Application Vision

The **Andhra ISP Network Master Frontend Architecture & Application Foundation** defines the architectural principles, Next.js 15 App Router hierarchy, rendering strategy matrix, state management boundaries, component layering, Google Maps GIS integration, performance optimizations, and accessibility standards for the platform.

Engineered to support **millions of concurrent citizens across 26 districts of Andhra Pradesh**, the frontend application guarantees **Lighthouse 95+ scores, 60 FPS animations (GSAP + Lenis + Framer Motion), sub-100ms LCP, and WCAG 2.1 AA accessibility compliance**.

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                          ENTERPRISE FRONTEND ARCHITECTURE MESH                    |
├───────────────────┬───────────────────────────────────────────────────────────────┤
| Layer             | Specification & Technology Standard                           |
├───────────────────┼───────────────────────────────────────────────────────────────┤
| Core Framework    | Next.js 15 (App Router, React 19 Server Components)           |
| Styling System    | Tailwind CSS v3 + CSS Variables + Glassmorphism Tokens        |
| Component Primitives| shadcn/ui + Radix UI Primitives                             |
| Motion & Scroll   | GSAP 3.12 + Framer Motion 11 + Lenis Smooth Scroll            |
| State Management  | Zustand (Global UI / Map / Search) + TanStack Query v5 (Server)|
| Form & Validation | React Hook Form + Zod Schema Validation                       |
| GIS Mapping       | Google Maps JS API + SVG Vector Canvas overlays               |
| Icons & Typography| Lucide React + Google Fonts (Inter & JetBrains Mono)          |
└───────────────────┴───────────────────────────────────────────────────────────────┘
```

---

## 2. Next.js 15 App Router & Route Hierarchy Architecture

```
apps/web/app/
├── (public)/                   # Route Group: Public Marketing & Search
│   ├── page.tsx                # Homepage (Hero, Storytelling, Map, Network Mesh)
│   ├── search/                 # Spotlight & Deep Filter Search Page
│   ├── isps/
│   │   ├── page.tsx            # All ISP Providers Directory
│   │   ├── [slug]/page.tsx     # Single Provider Details Page
│   │   └── compare/page.tsx    # 4-Way Provider Comparison Tool
│   ├── ap/
│   │   ├── page.tsx            # Andhra Pradesh Overview Page
│   │   ├── [districtSlug]/     # District Overview & Mandal List
│   │   │   └── [mandalSlug]/   # Mandal Details & Village List
│   │   │       └── [village]/  # Village Coverage & Fiber Availability
│   │   └── pin-code/[code]/    # 6-Digit Postal Search Page
│   └── layout.tsx              # Public Header Nav & Sitemap Footer Layout
├── (auth)/                     # Route Group: Authentication Shell
│   ├── auth/
│   │   ├── login/page.tsx      # Email/Phone Tabbed Login Page
│   │   ├── register/page.tsx   # Account Creation Page
│   │   ├── verify-otp/page.tsx # 6-Digit OTP Entry Page
│   │   └── forgot-password/    # Password Recovery Page
│   └── layout.tsx              # Auth Glassmorphic Centered Layout
├── (dashboard)/                # Route Group: Citizen User Dashboard
│   ├── dashboard/
│   │   ├── page.tsx            # Saved Searches & Favorites Overview
│   │   └── settings/page.tsx   # Profile & Notification Settings
│   └── layout.tsx              # User Dashboard Navigation Sidebar Shell
└── (admin)/                    # Route Group: Enterprise Admin Portal
    ├── admin/
    │   ├── page.tsx            # Executive Operations Overview
    │   ├── isps/page.tsx       # ISP Verification Queue & Approval
    │   ├── users/page.tsx      # User IAM & Role Elevation Management
    │   └── audit-logs/page.tsx # Security Events & Change Logs
    └── layout.tsx              # Admin Sidebar & Command Bar Shell
```

---

## 3. Rendering Strategy Matrix

```
+---------------------------------------------------------------------------------------------------+
|                                 NEXT.JS 15 RENDERING STRATEGY MATRIX                              |
+--------------------------+-----------------------+-------------------+----------------------------+
| Page / Component Route   | Rendering Strategy    | Revalidation (ISR)| Rationale                  |
+--------------------------+-----------------------+-------------------+----------------------------+
| Homepage (`/`)           | Hybrid (SSG + Client) | 3600s (1 Hour)    | Instant CDN load + Lenis   |
| District (`/ap/[slug]`)  | ISR (Incremental)     | 86400s (24 Hours) | Low mutation rate          |
| ISP Profile (`/isps/*`)  | ISR (Incremental)     | 21600s (6 Hours)  | High SEO traffic           |
| Spotlight (`/search`)    | Dynamic Client (CSR)  | N/A               | Real-time ⌘K query filtering|
| Compare Tool (`/compare`)| Client Component      | N/A               | Local state stateful diffs |
| Auth Pages (`/auth/*`)   | Static Pre-render     | N/A               | Sub-millisecond auth load  |
| Admin Portal (`/admin/*`)| Dynamic SSR + CSR     | N/A               | Real-time RBAC verification|
+--------------------------+-----------------------+-------------------+----------------------------+
```

---

## 4. State Management Architecture: Zustand vs. TanStack Query

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                            FRONTEND STATE BOUNDARY MATRIX                         |
├─────────────────────────────────────────┬─────────────────────────────────────────┤
| Zustand Global UI Store                 | TanStack Query v5 Server State          |
├─────────────────────────────────────────┼─────────────────────────────────────────┤
| • Active ⌘K Spotlight Overlay state     | • Fetching ISP Provider List            |
| • Map Zoom Level, Centroid, Selected ID | • Fetching District Mandal Hierarchy    |
| • Active Theme (Light/Dark/System)      | • Fetching Autocomplete Query Results   |
| • Active Filters (Technology, Category) | • User Favorites & Saved Search Queries |
| • Open Modal / Sheet State              | • Admin Verification Approval Requests  |
| • User Device & Session Token Refs      | • User Dashboard Statistics             |
└─────────────────────────────────────────┴─────────────────────────────────────────┘
```

---

## 5. 6-Tier Component Layering Architecture

1. **Tier 1 — Primitives (`src/components/ui/`):** Atomic shadcn/ui buttons, inputs, dialogs, dropdowns, tooltips.
2. **Tier 2 — Shared Components (`src/components/shared/`):** Reusable Header Nav, Sitemap Footer, Badge Indicators, Alert Notices.
3. **Tier 3 — Feature Components (`src/features/`):** Domain-specific logic (`SpotlightSearchBar`, `APVectorCanvas`, `LoginForm`, `OTPInputGroup`).
4. **Tier 4 — Sections (`src/components/sections/`):** Page hero sections, storytelling scroll cards, network visualization canvas.
5. **Tier 5 — Pages (`src/app/`):** Next.js App Router route entry points assembling sections and features.
6. **Tier 6 — Layouts (`src/app/layout.tsx`):** Root shell providers (`QueryClientProvider`, `ThemeProvider`, `ToasterProvider`).

---

## 6. Core Web Vitals & Performance Blueprint

* **Performance Targets:**
  * **LCP (Largest Contentful Paint):** $< 1.2\text{ seconds}$
  * **FID / INP (Interaction to Next Paint):** $< 50\text{ milliseconds}$
  * **CLS (Cumulative Layout Shift):** `0.00`
  * **Lighthouse Score:** `98+` Across Performance, Accessibility, Best Practices, and SEO.
* **Optimization Strategies:**
  * **Font Optimization:** `next/font/google` for Inter and JetBrains Mono with zero layout shift (`display: swap`).
  * **Image Optimization:** `next/image` with WebP/AVIF format auto-conversion and responsive srcset sizes.
  * **Code Splitting:** Dynamic imports (`next/dynamic`) for Three.js / Canvas components with skeleton fallbacks.

---

## 7. Enterprise Folder Structure (`apps/web/`)

```
apps/web/
├── app/                         # Next.js 15 App Router pages & layouts
├── src/
│   ├── assets/                  # GeoJSON AP district files & brand SVGs
│   ├── components/
│   │   ├── auth/                # AuthContainer, LoginForm, RegisterForm, OTPInputGroup
│   │   ├── closing/             # SectionFAQ, EnterpriseFooter
│   │   ├── hero/                # HeroSection, HeroNav, HeroHeadline
│   │   ├── map/                 # InteractiveMapContainer, APVectorCanvas
│   │   ├── network/             # NetworkVisualizationContainer, NetworkCanvas
│   │   ├── search/              # SmartSearchContainer, SpotlightSearchBar
│   │   ├── storytelling/        # StorytellingContainer, 7 Scroll Sections
│   │   └── ui/                  # Primitive shadcn/ui components
│   ├── config/                  # Site metadata, navigation links, API endpoints
│   ├── hooks/                   # Custom React hooks (useSpotlight, useMapState)
│   ├── lib/                     # Utils, Zod schemas, API client instance
│   ├── providers/               # TanStack Query & Theme React Providers
│   ├── services/                # API Service client endpoints
│   ├── stores/                  # Zustand stores (useSearchStore, useMapStore)
│   ├── styles/                  # Tailwind index.css & CSS variables
│   └── types/                   # TypeScript interfaces & API types
└── public/                      # Static icons, favicon, manifest.json
```

---
**[END OF MASTER FRONTEND ARCHITECTURE & APPLICATION FOUNDATION SPECIFICATION]**
