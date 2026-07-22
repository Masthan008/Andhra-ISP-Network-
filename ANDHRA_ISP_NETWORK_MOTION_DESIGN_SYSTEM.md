# ANDHRA ISP NETWORK
## Master Enterprise Motion Design System & Interaction Guidelines
**Version:** 1.0.0-Enterprise  
**Document Status:** Final Approved Motion & Interaction Specification  
**Classification:** Proprietary / Motion Design Standards & User Interaction Specification  
**Author:** Creative Director, Lead Motion Designer, Senior UX Specialist, & Frontend Team  
**Target Platform:** Production Web System (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & Motion Vision

### 1.1 Document Intent & Scope
This document defines the official **Motion Design System and Interaction Guidelines** for the **Andhra ISP Network** web platform. Designed to complement the Master Product Requirements Document (PRD), Information Architecture (IA), Technical Architecture, Brand Identity & Design System, and UI Component Library, this specification details the animation timing curves, motion tokens, scroll storytelling mechanics, micro-interactions, map gestures, page transitions, performance budgets, and accessibility compliance rules across the platform.

### 1.2 Motion Design Philosophy
Motion in the Andhra ISP Network is **purposeful, elegant, minimal, and sub-second fast**. Inspired by world-class software platforms (**Apple, Stripe, Linear, Vercel, Notion, Arc Browser, and Figma**), animation is used to orient users, establish spatial hierarchy, provide instantaneous touch/click feedback, and create subtle delight—without ever causing distraction or sluggishness.

```
+-----------------------------------------------------------------------------------+
|                            MOTION DESIGN PILLARS                                  |
+-------------------+---------------------------------------------------------------+
| Motion Pillar     | Technical Execution Standard                                  |
+-------------------+---------------------------------------------------------------+
| Purposeful        | Every animation communicates state change, location, or logic.|
| Sub-Second Speed  | Interaction feedback occurs within 100ms; page steps in 250ms.|
| Natural Physics   | Uses fluid custom cubic-bezier curves (`cubic-bezier(0.16,1,0.3,1)`)|
| Predictable       | Uniform response curves across identical component classes.   |
| Zero CLS          | All motion utilizes GPU-accelerated `transform` and `opacity`.|
| Accessible        | 100% compliant with `prefers-reduced-motion: reduce` preference|
+-------------------+---------------------------------------------------------------+
```

---

## 2. Technology Selection & Motion Stack Guidelines

```
+-----------------------------------------------------------------------------------+
|                              MOTION STACK MATRIX                                  |
+-------------------+--------------------------------+------------------------------+
| Technology        | Primary Application Scope      | Strictly Avoid When          |
+-------------------+--------------------------------+------------------------------+
| GSAP ScrollTrig   | Landing Page scroll pinning,   | Basic UI hover states or     |
|                   | hero sequence, vector AP map.  | simple modal overlays.       |
| Lenis Scroll      | Global continuous inertial     | Embedded map viewports or    |
|                   | momentum smooth scrolling.     | internal scrollable modals.  |
| Framer Motion     | UI component layout morphing,  | Complex canvas particles or  |
|                   | search overlay, page steps.    | full 3D mesh rendering.      |
| CSS Animations    | Low-overhead hover effects,    | Complex multi-step orchestrated|
|                   | button states, shimmer loaders.| scroll timelines.            |
| Three.js / D3     | 3D vector mesh silhouette map  | Standard 2D UI cards or      |
|                   | of Andhra Pradesh districts.   | static text content.         |
+-------------------+--------------------------------+------------------------------+
```

---

## 3. Motion Token System & Easing Curves

### 3.1 Timing & Duration Tokens

```
+-----------------------------------------------------------------------------------+
|                               MOTION DURATION TOKENS                              |
+-------------------+---------+-----------------------------------------------------+
| Duration Token    | Value   | UI Application Scope                                |
+-------------------+---------+-----------------------------------------------------+
| `--duration-instant`| 50ms  | Tooltip show, immediate active feedback             |
| `--duration-fast`   | 100ms | Button click scale, checkbox toggle, hover highlight|
| `--duration-normal` | 200ms | Card hover lift, dropdown menu show, tab morphing   |
| `--duration-slow`   | 350ms | Modal dialog slide-up, drawer open, accordion expand|
| `--duration-page`   | 450ms | Full page route transition fade/slide               |
+-------------------+---------+-----------------------------------------------------+
```

---

### 3.2 Easing Curve Specifications

```
+-----------------------------------------------------------------------------------+
|                               EASING CURVE MATRIX                                 |
+-------------------+-----------------------------------+---------------------------+
| Easing Name       | Cubic-Bezier Function             | UX Application Scope      |
+-------------------+-----------------------------------+---------------------------+
| `ease-out-quint`  | `cubic-bezier(0.22, 1, 0.36, 1)`  | Smooth decelerating entrance|
| `ease-in-out-soft`| `cubic-bezier(0.65, 0, 0.35, 1)`  | Page transitions & drawers|
| `ease-spring`     | `cubic-bezier(0.175,0.885,0.32,1.275)`| Micro-bounces (Toggles)|
| `ease-sharp`      | `cubic-bezier(0.4, 0, 0.2, 1)`    | Immediate exit state transitions|
+-------------------+-----------------------------------+---------------------------+
```

---

## 4. Global Page Transitions & Routing Motion

### 4.1 Route Transition Pipeline
When a user navigates between pages (e.g., from `/ap/visakhapatnam` to `/ap/visakhapatnam/gajuwaka`):

1. **Exit Phase (Duration 150ms):** Active page content fades out slightly (`opacity: 1 -> 0.85`) and translates up by `-4px` (`transform: translateY(-4px)`).
2. **Route Swap (Instant):** Next.js App Router swaps server components at edge.
3. **Entry Phase (Duration 250ms):** New page content enters smoothly fading in (`opacity: 0 -> 1`) and sliding up from `+8px` to `0px` using `ease-out-quint`.

---

## 5. Scroll Experience & Inertial Momentum (Lenis)

### 5.1 Lenis Smooth Scroll Configuration
To deliver a luxurious continuous scrolling feel:
* **Lerp Smoothness:** `lerp: 0.1` (Inertial momentum balance).
* **Wheel Multiplier:** `wheelMultiplier: 1.0`.
* **Smooth Touch:** Enabled for tablet/mobile viewports (`smoothTouch: true`).
* **Scroll-Linked Animations:** Synced with GSAP ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`.

---

## 6. Landing Page Motion Storytelling

### 6.1 Hero Section Reveal Sequence (On Page Load)
1. **0ms:** Header navigation backdrop blur fades in (`opacity 0 -> 1`).
2. **100ms:** Main headline *"Connecting Every Corner of Andhra Pradesh"* reveals line-by-line via mask clip reveal.
3. **250ms:** Hero search box container scales up from `0.96 -> 1.0` with shadow expansion.
4. **400ms:** Live statistics counter numbers ticker count up from 0 to target values (e.g., `0 -> 26 Districts`, `0 -> 679 Mandals`).
5. **550ms:** Interactive AP vector map silhouette emerges with animated pulse connection nodes.

---

## 7. Map Interactions & Spatial Motion Architecture

### 7.1 Interactive Vector Map & Google Maps Gestures

```
+-----------------------------------------------------------------------------------+
|                              MAP INTERACTION MOTION                               |
+-------------------+-----------------------+---------------------------------------+
| Interaction Event | Motion Mechanics      | Timing & Easing                       |
+-------------------+-----------------------+---------------------------------------+
| District Hover    | Polygon fill darkens, | 150ms `ease-out-quint`                |
|                   | stroke highlights 2px |                                       |
| District Click    | Camera zooms into     | 600ms `cubic-bezier(0.16, 1, 0.3, 1)` |
|                   | district boundary     |                                       |
| Marker Pin Drop   | Pin drops from +12px  | 300ms `ease-spring`                   |
|                   | with bounce           |                                       |
| Cluster Split     | Cluster splits into   | 250ms staggered expansion             |
|                   | individual ISP pins   |                                       |
+-------------------+-----------------------+---------------------------------------+
```

---

## 8. Search Experience Motion (`Ctrl+K` Global Overlay)

### 8.1 Search Overlay Motion Pipeline
* **Overlay Trigger (`Ctrl+K`):** Backdrop blur darkens (`backdrop-filter: blur(8px); background: rgba(0,0,0,0.4)`), search modal scales up from `0.96` to `1.0` over `200ms` using `ease-out-quint`.
* **Type Suggestions Stagger:** Autocomplete suggestion items enter with a 20ms staggered delay per row (`stagger: 0.02s`).
* **Active Keyboard Highlight:** Navigating via arrow keys slides the zinc selection background pill smoothly between rows (`layoutId="active-search-item"`).

---

## 9. Comprehensive Micro-Interactions Blueprint

### 9.1 Action Micro-Interactions

```
+-----------------------------------------------------------------------------------+
|                           MICRO-INTERACTION SPECIFICATIONS                        |
+-------------------+-----------------------+---------------------------------------+
| Component         | Event                 | Motion Response Mechanics             |
+-------------------+-----------------------+---------------------------------------+
| Primary Button    | Click / Press         | Scale down to `0.98` over 100ms       |
| Content Card      | Mouse Hover           | Translate Y `-2px`, shadow shifts     |
| Checkbox          | Check / Uncheck       | Vector checkmark draws via SVG path   |
| Switch Toggle     | Toggle On / Off       | White knob slides 20px with spring    |
| Tab Navigation    | Switch Tab            | Underline indicator morphs layout     |
| Accordion         | Expand / Collapse     | Height animates smoothly `0 -> auto`  |
+-------------------+-----------------------+---------------------------------------+
```

---

## 10. Data Visualization & Dynamic Chart Motion

* **Stat Counters:** Numbers increment smoothly from 0 using GSAP `TextPlugin` over 1.2 seconds.
* **Progress & Speed Bars:** Speed meter bars expand horizontally from `width: 0%` to target `width: X%` over 800ms using `ease-out-quint`.

---

## 11. Feedback System, Toasts & Loading Motion

* **Shimmer Skeleton Loaders:** Shimmer gradient translates continuously (`translateX(-100% -> 100%)`) over 1.5 seconds.
* **Toast Notification Slide-In:** Toast enters from top-right translating `translateX(100% -> 0%)` over 250ms with `ease-out-quint`.

---

## 12. Web Accessibility & Reduced Motion Blueprint

### 12.1 `prefers-reduced-motion` Enforcement Protocol
When the browser detects `prefers-reduced-motion: reduce`:

1. **Lenis Scroll:** Inertial smooth scrolling is completely disabled; standard instant browser scrolling is restored.
2. **GSAP & Framer Motion:** All movement transitions (`translateY`, `scale`, `stagger`) are forced to `0ms` duration.
3. **Fade Only:** Complex spatial transitions degrade gracefully to simple opacity fades (`opacity: 0 -> 1` over 100ms).

---

## 13. Performance Optimization & 60 FPS Engine

* **Hardware Acceleration:** All animations strictly target CSS GPU properties: `transform` (translate3d, scale3d) and `opacity`.
* **Zero CLS Guarantee:** Layout properties (`width`, `height`, `margin`, `top`, `left`) are **NEVER animated** to avoid browser layout recalculations.
* **Memory Cleanup:** All GSAP ScrollTrigger instances and Framer Motion listeners are automatically disposed on React component unmount.

---

## 14. Enterprise Glossary & Appendix

* **CLS:** Cumulative Layout Shift.
* **FPS:** Frames Per Second (Target 60 FPS).
* **GPU:** Graphics Processing Unit.
* **Lerp:** Linear Interpolation.

---
**[END OF MASTER ENTERPRISE MOTION DESIGN SYSTEM & INTERACTION GUIDELINES]**
