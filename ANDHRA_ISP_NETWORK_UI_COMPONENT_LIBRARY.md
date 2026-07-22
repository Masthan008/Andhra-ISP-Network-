# ANDHRA ISP NETWORK
## Master Enterprise UI Component Library Specification
**Version:** 1.0.0-Enterprise  
**Document Status:** Final Approved UI Component Specification  
**Classification:** Proprietary / Frontend Component Standards & Design System Reference  
**Author:** Senior Product Designer, Lead UI Engineer, Design System Architect, & Frontend Team  
**Target Platform:** Production Web System (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & Component Ecosystem

### 1.1 Document Scope & Intent
This document serves as the official **UI Component Library Specification** for the **Andhra ISP Network** web platform. Designed to complement the Master Product Requirements Document (PRD), Information Architecture (IA), Technical Architecture, and Brand Identity & Design System, this specification details the visual hierarchy, layout rules, state transitions, animations, accessibility rules, and responsive behavior for every reusable component required across the application.

### 1.2 Component Design Philosophy
The component library is built on ten core engineering and design pillars inspired by enterprise design leaders (**Apple, Linear, Stripe, Vercel, Notion, and Arc Browser**):

```
+-----------------------------------------------------------------------------------+
|                           COMPONENT DESIGN PILLARS                                |
+-------------------+---------------------------------------------------------------+
| Design Pillar     | Architectural Standard                                        |
+-------------------+---------------------------------------------------------------+
| Consistency       | Identical token usage across spacing, typography, and borders.|
| Accessibility     | 100% WCAG 2.1 AA compliance, ARIA attributes, keyboard focus. |
| Reusability       | Modular composable primitives built with zero side-effects.   |
| Responsiveness    | Touch-first layouts adapting fluidly from 320px to 4K displays.|
| Minimalism        | Editorial white space (#FFFFFF), Zinc-950 type, 1px borders.  |
| Performance       | Sub-20ms interaction feedback, zero Cumulative Layout Shift.  |
| Predictability    | Uniform interaction states (Hover, Press, Focus, Disabled).   |
| Clarity           | Plain-language labels, high-contrast states, unambiguous copy.|
| Flexibility       | Supports slot-based composition and variant props.            |
| Resilience        | Dedicated visual handling for loading, empty, and error states|
+-------------------+---------------------------------------------------------------+
```

---

## 2. Component Specification Standard Format

Every component documented in this specification follows a strict structural schema:

1. **Purpose & Usage Context:** Clear definition of what the component does and when to use vs when NOT to use it.
2. **Visual Hierarchy & Layout Rules:** Spacing, padding, sizing, border radius, and typography tokens.
3. **Color Usage & States:** Token bindings for Default, Hover, Pressed, Focused, Loading, Disabled, and Error states.
4. **Interactions & Animations:** Motion timing, GSAP / Framer Motion transitions, and click behaviors.
5. **Accessibility & ARIA Matrix:** Keyboard navigation shortcuts, screen reader labels, and focus indicator standards.
6. **Responsive Behavior:** Behavior across Mobile ($< 640\text{px}$), Tablet ($640\text{px}-1024\text{px}$), and Desktop ($> 1024\text{px}$).

---

## 3. Action & Button Component System

### 3.1 Button Hierarchy & Variant Matrix

```
+-----------------------------------------------------------------------------------+
|                               BUTTON VARIANT MATRIX                               |
+-------------------+--------------------+--------------------+---------------------+
| Variant Prop      | Background Color   | Border Color       | Text / Icon Color   |
+-------------------+--------------------+--------------------+---------------------+
| `primary`         | `#09090B` (Zinc950)| None               | `#FFFFFF` (White)   |
| `secondary`       | `#F8F9FA` (Subtle) | 1px `#E4E4E7`      | `#09090B` (Zinc950) |
| `outline`         | Transparent        | 1px `#09090B`      | `#09090B` (Zinc950) |
| `ghost`           | Transparent        | None               | `#71717A` (Zinc500) |
| `destructive`     | `#E11D48` (Rose500)| None               | `#FFFFFF` (White)   |
| `success`         | `#059669` (Emer500)| None               | `#FFFFFF` (White)   |
| `map-action`      | `rgba(255,255,255)`| 1px `#E4E4E7`      | `#09090B` (Zinc950) |
+-------------------+--------------------+--------------------+---------------------+
```

#### Size Specs & Padding Tokens
* `sm`: Height `32px`, Padding `0 12px`, Font `13px/500`, Radius `6px`.
* `md` (Default): Height `40px`, Padding `0 16px`, Font `14px/500`, Radius `6px`.
* `lg`: Height `48px`, Padding `0 24px`, Font `16px/500`, Radius `8px`.
* `icon-only`: Square aspect ratio (`32x32`, `40x40`, `48x48`).

#### Interactive State Behaviors
* **Hover State:** Background lightens/darkens by 5%, shadow shifts to `--shadow-xs`, cursor changes to `pointer`.
* **Pressed (Click) State:** Scale transforms down to `0.98` via `transition: transform 100ms ease-out`.
* **Focused State:** 2px solid dark focus ring (`outline: 2px solid #09090B; outline-offset: 2px`).
* **Loading State:** Replaces label text with a centered 16px spinner, sets `aria-busy="true"`, disables pointer events.
* **Disabled State:** Opacity reduced to `0.5`, background `#E4E4E7`, text `#71717A`, `cursor: not-allowed`.

---

## 4. Input & Form Entry Components

### 4.1 Text Field & Specialized Inputs (`TextInput`, `PINCodeInput`, `OTPInput`)

```
+-----------------------------------------------------------------------------------+
|                               INPUT COMPONENT MATRIX                              |
+-------------------+-------------------+--------------------+----------------------+
| Component Name    | Default Height    | Validation Pattern | Special Functionality|
+-------------------+-------------------+--------------------+----------------------+
| `TextInput`       | 40px              | Regex Text / Email | Clear button, icon   |
| `PINCodeInput`    | 48px              | 6-Digit Integer    | Auto-format & submit |
| `OTPInput`        | 48px              | 6 Segmented Boxes  | Auto-advance focus   |
| `Autocomplete`    | 40px              | Dynamic Match List | Instant overlay list |
| `FileUpload`      | Drag & Drop Zone  | `.csv`, `.xlsx`    | Dry-run preview table|
+-------------------+-------------------+--------------------+----------------------+
```

#### 6-Digit PIN Code Input Component Architecture
* **Purpose:** Allows users to quickly enter their 6-digit postal code (e.g., `530026`).
* **UX Specification:** Single high-contrast input box with large monospace text (`18px / JetBrains Mono`).
* **Auto-Submit Event:** Triggers instant API resolution on entering the 6th digit without needing to press Enter.

#### File & CSV Bulk ETL Upload Drag-and-Drop Zone
* **Layout:** Dashed border container (`2px dashed #E4E4E7`), white background, central cloud upload icon, subtitle *"Drag and drop CSV or Excel files here, or click to browse"*.
* **Validation Feedback:** Instantly parses uploaded file client-side, displaying row count, header validation tags, and dry-run preview table before submitting to admin endpoint.

---

## 5. Search Experience & Autocomplete Components

### 5.1 Global Search Overlay (`Ctrl+K` Search Modal)

```
+-----------------------------------------------------------------------------------+
| 🔍 Search District, Mandal, Village, PIN Code, or ISP...          [ESC]           |
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

* **Keyboard Navigation Protocol:**
  * `Ctrl+K` / `⌘K`: Opens modal overlay from anywhere.
  * `Up` / `Down` Arrow Keys: Cycles active highlighted item in dropdown.
  * `Enter`: Navigates to selected location or ISP profile page.
  * `Esc`: Closes search overlay and restores background page focus.

---

## 6. Navigation & Wayfinding Components

### 6.1 Top Header Navigation Bar (`HeaderNav`)
* **Position:** Fixed top, full width, height `64px`.
* **Glassmorphism Spec:** `background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(16px); border-bottom: 1px solid #E4E4E7`.
* **Elements:** Brand Logo (Left), Desktop Nav Links (Districts, ISPs, Compare, Map Explorer), Global Search Trigger (`Ctrl+K`), Sign In CTA Button (Right).

---

### 6.2 Sticky Contextual Breadcrumbs (`StickyBreadcrumbs`)
* **Position:** Sticky top (below primary header at `top: 64px`), height `40px`.
* **Hierarchy Display:** `Home / Andhra Pradesh / Visakhapatnam / Gajuwaka / PIN 530026`.
* **UX Behavior:** Collapses intermediate levels on mobile into an ellipsis button (`Home / ... / PIN 530026`).

---

## 7. Card System & Structural Containers

### 7.1 Card Taxonomy & Layout Specifications

```
+-----------------------------------------------------------------------------------+
|                               CARD COMPONENT SYSTEM                               |
+-------------------+-------------------+--------------------+----------------------+
| Card Type         | Border & Surface  | Padding & Radius   | Core Contents        |
+-------------------+-------------------+--------------------+----------------------+
| `DistrictCard`    | 1px `#E4E4E7`     | 24px / Radius 12px | Name, HQ, Mandal Count|
| `MandalCard`      | 1px `#E4E4E7`     | 16px / Radius 12px | Name, Active ISPs Badges|
| `ISPProfileCard`  | 1px `#E4E4E7`     | 24px / Radius 16px | Logo, Rating, Plans, Map|
| `MapLocationCard` | Glass Overlay     | 16px / Radius 12px | Verified Address, Place ID|
| `CompareItemCard` | 1px `#E4E4E7`     | 16px / Radius 12px | ISP Logo, Speed, Cost|
+-------------------+-------------------+--------------------+----------------------+
```

#### ISP Profile Master Card Component (`ISPProfileCard`)
* **Header Section:** ISP Logo (64x64px rounded), Verified Badge, Star Rating Stars (`4.6 ★ (1,280)`), Direct Call CTA (`[Contact ISP]`).
* **Google Map Branch Card:** Embedded Google Map snippet displaying physical verified branch office address, Google Place ID badge, and turn-by-turn directions link.
* **Pricing & Speed Table:** Download/Upload speed badge (e.g., `300 Mbps FTTH`), FUP limit, monthly pricing in INR (`₹799/mo`).

---

## 8. Spatial & Google Maps UI Components

### 8.1 Google Map Viewport Container (`MapViewportContainer`)
* **Purpose:** Encapsulates the Google Maps JS API within an accessible, responsive container.
* **Embedded Controls:** Custom zoom controls, Satellite/Terrain view toggle, Fullscreen toggle.
* **Marker Pin Styling:** Custom dark zinc circular marker (`32x32px`) containing the ISP brand icon.

---

### 8.2 Google Places Verified Office Popup Card (`PlacesPopupCard`)
* **Trigger:** Appears when clicking an ISP marker pin on the map.
* **Content:**
  * Provider Logo & Name.
  * Verified Google Place Address.
  * Rating Stars & Review Count.
  * Call-to-Action: Solid black button `[Get Directions ↗]`.

---

## 9. Data Display, Tables & Indicators

### 9.1 Enterprise Data Table Component (`DataTable`)

```
+-----------------------------------------------------------------------------------+
| ISP NAME       | DISTRICT     | MANDAL     | PIN CODE | TECH TYPE | ACTIONS       |
+----------------+--------------+------------+----------+-----------+---------------+
| ACT Fibernet   | Visakhapatnam| Gajuwaka   | 530026   | FTTH Fiber| [View] [Edit] |
| JioFiber       | Visakhapatnam| Gajuwaka   | 530026   | FTTH / 5G | [View] [Edit] |
| APSFL Fiber    | Visakhapatnam| Gajuwaka   | 530026   | Gov Fiber | [View] [Edit] |
+----------------+--------------+------------+----------+-----------+---------------+
| Showing 1-3 of 450 results                         [Previous 1 2 3 ... Next]      |
+-----------------------------------------------------------------------------------+
```

* **Features:** Horizontal responsive scrolling on mobile, column sorting, pagination controls, search filter input, bulk row select checkboxes.

---

## 10. Feedback, Skeleton Loaders & Status Views

### 10.1 Skeleton Card Loader (`SkeletonCard`)
* **Purpose:** Provides instantaneous visual layout wireframe during async data fetching to prevent Cumulative Layout Shift (CLS = 0.00).
* **Animation:** Smooth shimmer pulse effect (`background: linear-gradient(90deg, #F8F9FA 25%, #E4E4E7 50%, #F8F9FA 75%); animation: shimmer 1.5s infinite`).

---

### 10.2 Toast Notification System (`ToastContainer`)
* **Position:** Fixed top-right or bottom-right of viewport.
* **Notification Variants:**
  * `success`: Green accent bar + check icon (*"Profile updated successfully"*).
  * `error`: Red accent bar + alert icon (*"Failed to fetch ISP coverage data"*).
  * `info`: Blue accent bar + info icon (*"Google Places address cached"*).

---

## 11. Enterprise Admin & CMS Components

### 11.1 Bulk Import Wizard Component (`BulkImportWizard`)
* **Step 1 (Upload):** Drag-and-drop CSV file dropzone.
* **Step 2 (Validation):** Real-time error table highlighting malformed rows.
* **Step 3 (Ingestion):** Async progress bar connected via WebSockets to BullMQ background queue.
* **Step 4 (Geocoding):** Batch status showing Google Places Text Search resolution progress.

---

## 12. Component Token Mapping Matrix

```json
{
  "component": "ButtonPrimary",
  "tokens": {
    "background": "--color-accent",
    "color": "--color-bg-base",
    "borderRadius": "--radius-sm",
    "padding": "--space-4",
    "fontFamily": "--font-sans",
    "fontSize": "--text-button",
    "shadow": "--shadow-xs",
    "focusRing": "--color-text-main"
  }
}
```

---

## 13. Web Accessibility (WCAG 2.1 AA) Compliance Matrix

1. **ARIA Roles & Landmarks:** Every component implements valid ARIA roles (`role="dialog"`, `role="combobox"`, `role="table"`, `aria-expanded`, `aria-selected`).
2. **Keyboard Focus Management:** Modals capture focus trap on entry and return focus to triggering element on exit.
3. **Contrast Verification:** All text components maintain $> 4.5:1$ contrast ratio against background surfaces.

---

## 14. Enterprise Glossary & Appendix

* **RSC:** React Server Components.
* **CLS:** Cumulative Layout Shift.
* **DARE:** Dynamic Address Resolution Engine.
* **Slot Composition:** Pattern allowing child components to be injected cleanly into parent layout slots.

---
**[END OF MASTER ENTERPRISE UI COMPONENT LIBRARY SPECIFICATION]**
