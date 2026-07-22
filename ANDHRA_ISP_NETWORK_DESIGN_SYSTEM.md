# ANDHRA ISP NETWORK
## Master Enterprise Brand Identity & Design System Specification
**Version:** 1.0.0-Enterprise  
**Document Status:** Final Approved Design Specification  
**Classification:** Proprietary / Brand Identity & Design System Standards  
**Author:** Creative Director, Lead Product Designer, Design System Architect, & UX Team  
**Target Platform:** Production Web System (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & Brand Purpose

### 1.1 Purpose & Scope
This document defines the official **Brand Identity and Design System** for the **Andhra ISP Network** platform. Formulated to work seamlessly with the Master Product Requirements Document (PRD), Information Architecture (IA), and Technical Architecture, this specification establishes the foundational visual language, brand narrative, design tokens, component standards, animation guidelines, typography scales, accessibility rules, and micro-interactions required to create a world-class web platform.

### 1.2 The Design Vision
The visual strategy rejects legacy government portal cliches (cluttered boxes, heavy primary blues, dense unstyled tables). Instead, it embraces a **modern, minimalist SaaS aesthetic** inspired by design leaders such as **Apple, Linear, Stripe, Notion, Vercel, and Arc Browser**.

```
+-----------------------------------------------------------------------------------+
|                            BRAND DESIGN PRINCIPLES                                |
+-------------------+---------------------------------------------------------------+
| Design Pillar     | Execution Standard                                            |
+-------------------+---------------------------------------------------------------+
| Pure Minimalism   | Editorial white space (#FFFFFF base) with Zinc-950 typography |
| High Precision    | Hairline 1px borders (#E4E4E7) and subtle 8pt spacing grid    |
| Glassmorphism     | Backdrop blur (16px) floating navigation and spatial cards    |
| Micro-Frictionless | Sub-20ms visual feedback and smooth Lenis inertial scroll     |
| Trust & Authority | Verified spatial badges, official Place IDs, clear metrics    |
+-------------------+---------------------------------------------------------------+
```

---

## 2. Brand Strategy, Mission & Brand Story

### 2.1 The Brand Story
"In a rapidly digitalizing India, access to reliable high-speed internet is no longer a luxury—it is an essential civil utility. Yet across Andhra Pradesh's 26 districts, 679 mandals, and 17,000+ villages, citizens and businesses face a wall of information asymmetry. Local cable operators, regional fiber providers, and national telecom giants operate in fragmented silos, leaving users guessing which ISP actually reaches their exact street or village.

The **Andhra ISP Network** was created to eliminate this divide. Built with technical precision and design elegance, it bridges citizens directly to hyper-local broadband providers down to the exact 6-digit PIN code. We do not just list ISPs; we map the digital nervous system of Andhra Pradesh—connecting students to learning, businesses to global markets, and families to opportunity."

### 2.2 Brand Personality Spectrum

```
+-----------------------------------------------------------------------------------+
|                             BRAND PERSONALITY SPECTRUM                            |
+-------------------+---------------------------------------------------------------+
| Attribute         | Visual & Verbal Expression                                    |
+-------------------+---------------------------------------------------------------+
| Trustworthy       | Grounded in verified Google Places data, clean neutral tones. |
| Modern & Innovative| Sleek monochrome dark-mode option, glassmorphism, smooth GSAP|
| Reliable & Fast   | Sub-100ms response times, zero cumulative layout shift (CLS).  |
| Human & Accessible| Clear plain-language copy, WCAG AA compliance, 44px touch targets|
| Editorial Premium | Ultra-crisp typography, generous white space, restrained accent|
+-------------------+---------------------------------------------------------------+
```

---

## 3. Master Logo Strategy & Visual Mark

### 3.1 Symbolism: The "Mesh Pulse of AP"
The visual identity centers on a geometric mark representing **interconnected fiber nodes forming the geographical silhouette of Andhra Pradesh**.

* **The Primary Mark:** A minimalist geometric icon featuring three overlapping radial vector paths connecting into a central signal node.
* **Logotype:** Set in customized **Inter Display** with medium tracking (`-0.02em`), pairing a bold solid black `"Andhra ISP"` with a subtle muted badge `"NETWORK"`.

```
PRIMARY LOGO HORIZONTAL LOCKUP (Light Background):

   (•) Andhra ISP  [ NETWORK ]
    │
    └─ Geometric Mesh Pulse Icon + High-contrast Zinc-950 Type
```

---

### 3.2 Logo Variations & Usage Matrix

```
+-----------------------------------------------------------------------------------+
|                              LOGO USAGE MATRIX                                    |
+-------------------+-----------------------+---------------------------------------+
| Variant           | Specification         | Context / Application                 |
+-------------------+-----------------------+---------------------------------------+
| Primary Horizontal| Full Icon + Logotype  | Desktop Header, Main Navigation       |
| Vertical Stacked  | Centered Icon + Text  | Mobile Splash Screen, Printed Reports |
| Icon Mark Only    | 32x32 Vector Glyph    | Favicon, App Icon, Map Markers        |
| Monochrome Light  | Solid #09090B on White| White Paper, Canonical Header         |
| Monochrome Dark   | Solid #FAFAFA on Dark | Dark Mode Navigation Header           |
+-------------------+-----------------------+---------------------------------------+
```

#### Safe Area & Minimum Size Rules
* **Clear Space Rule:** $X$ = Height of the "A" in Andhra. Minimum clear space surrounding logo on all sides must equal $1.5X$.
* **Minimum Render Size:**
  * Desktop Header Logotype: Minimum width $140\text{px}$.
  * Favicon Icon Mark: Minimum render size $16\times 16\text{px}$ (Vector SVG default).

#### Logo Misuse Guidelines (Strictly Prohibited)
1. **NO** drop shadows or glowing outer effects around the logo mark.
2. **NO** stretching, scaling non-proportionally, or skewing the vector mark.
3. **NO** placing the black logo over low-contrast dark backgrounds (always switch to Monochrome Dark).
4. **NO** altering the brand typography font family or letter-spacing.

---

## 4. Comprehensive Color System & Design Tokens

### 4.1 Master Color Palette Tokens (HEX / RGB / HSL)

```
+-----------------------------------------------------------------------------------+
|                              COLOR TOKEN PALETTE                                  |
+---------------------+---------+---------------------+-----------------------------+
| Token Name          | HEX     | RGB                 | Application Scope           |
+---------------------+---------+---------------------+-----------------------------+
| `--color-bg-base`   | #FFFFFF | rgb(255, 255, 255)  | Pure White Page Canvas      |
| `--color-bg-subtle` | #F8F9FA | rgb(248, 249, 250)  | Secondary Section Fill      |
| `--color-surface`   | #FFFFFF | rgb(255, 255, 255)  | Elevate Cards & Drawers     |
| `--color-text-main` | #09090B | rgb(9, 9, 11)       | Zinc-950 Primary Headlines  |
| `--color-text-muted`| #71717A | rgb(113, 113, 122)  | Zinc-500 Body & Captions    |
| `--color-border`    | #E4E4E7 | rgb(228, 228, 231)  | 1px Hairline Card Borders   |
| `--color-accent`    | #09090B | rgb(9, 9, 11)       | Solid Black Primary Buttons |
| `--color-blue-500`  | #2563EB | rgb(37, 99, 235)    | Verified Status / Fiber Tech|
| `--color-emerald-500| #059669 | rgb(5, 150, 105)    | Online Status / High Speed  |
| `--color-amber-500` | #D97706 | rgb(217, 119, 6)    | Warning / Estimated Location|
| `--color-rose-500`  | #E11D48 | rgb(225, 29, 72)    | Error / Outage Alert        |
+---------------------+---------+---------------------+-----------------------------+
```

---

## 5. Dual-Theme System (Light Theme vs Dark Theme)

### 5.1 Theme Elevation & Surface Hierarchy

```
+-----------------------------------------------------------------------------------+
|                        DUAL-THEME SURFACE SPECIFICATION                           |
+-------------------+---------------------------+-----------------------------------+
| Surface Level     | Light Theme Token / Color | Dark Theme Token / Color          |
+-------------------+---------------------------+-----------------------------------+
| Level 0 (Base)    | `#FFFFFF` (Pure White)    | `#09090B` (Zinc-950 Dark)         |
| Level 1 (Card)    | `#FFFFFF` + 1px `#E4E4E7` | `#18181B` + 1px `#27272A`         |
| Level 2 (Modal)   | `#FFFFFF` + Shadow LG     | `#27272A` + Shadow XL             |
| Glass Overlay     | `rgba(255,255,255,0.8)`   | `rgba(9,9,11,0.85)`               |
| Primary Text      | `#09090B` (Zinc-950)      | `#FAFAFA` (Zinc-50)               |
| Muted Text        | `#71717A` (Zinc-500)      | `#A1A1AA` (Zinc-400)              |
| Active Border     | `#09090B` (Solid Black)   | `#FAFAFA` (Solid White)           |
+-------------------+---------------------------+-----------------------------------+
```

---

## 6. Typography Hierarchy & Type System

### 6.1 Font Stack Architecture
* **Primary Sans-Serif Stack:** `Inter`, `Outfit`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `sans-serif`.
* **Monospace Stack (PIN codes, Speeds, Lat/Lng):** `JetBrains Mono`, `Fira Code`, `Courier New`, `monospace`.

```
+-----------------------------------------------------------------------------------+
|                            TYPOGRAPHY SPECIFICATION TABLE                         |
+-------------------+----------+-------------+----------------+---------------------+
| Style Token       | Size     | Line Height | Font Weight    | Letter Spacing      |
+-------------------+----------+-------------+----------------+---------------------+
| `display-1`       | 64px     | 1.1 (70px)  | 700 Bold       | -0.03em             |
| `heading-1`       | 36px     | 1.2 (43px)  | 600 SemiBold   | -0.02em             |
| `heading-2`       | 24px     | 1.3 (31px)  | 600 SemiBold   | -0.01em             |
| `heading-3`       | 20px     | 1.4 (28px)  | 600 SemiBold   | -0.01em             |
| `body-large`      | 18px     | 1.6 (29px)  | 400 Regular    | 0.00em              |
| `body-base`       | 14px     | 1.5 (21px)  | 400 Regular    | 0.00em              |
| `caption`         | 12px     | 1.4 (17px)  | 500 Medium     | +0.01em             |
| `code-mono`       | 13px     | 1.5 (20px)  | 500 Medium     | -0.01em             |
| `button`          | 14px     | 1.0 (14px)  | 500 Medium     | +0.01em             |
+-------------------+----------+-------------+----------------+---------------------+
```

---

## 7. Spacing System & Responsive Grid Layouts

### 7.1 8-Point Spacing Grid Tokens
All margins, paddings, gap dimensions, and layout offsets follow an explicit **8-Point Grid** (`base = 8px`).

```
+-----------------------------------------------------------------------------------+
|                              8-POINT SPACING TOKENS                               |
+------------------+--------+-------------------------------------------------------+
| Token Name       | Value  | Typical UI Application Scope                          |
+------------------+--------+-------------------------------------------------------+
| `--space-1`      | 4px    | Micro-gap, badge padding, subtle icon offsets         |
| `--space-2`      | 8px    | Small button padding, tag gap, input icon padding     |
| `--space-3`      | 12px   | Compact card padding, dropdown list item gap          |
| `--space-4`      | 16px   | Standard card internal padding, form group spacing    |
| `--space-6`      | 24px   | Section gap, table header padding, grid gap           |
| `--space-8`      | 32px   | Large card padding, modal content gap                 |
| `--space-12`     | 48px   | Hero section gap, desktop container padding           |
| `--space-16`     | 64px   | Major landing page block separation                   |
+------------------+--------+-------------------------------------------------------+
```

---

### 7.2 Responsive Layout Grid & Breakpoints

```
+-----------------------------------------------------------------------------------+
|                           RESPONSIVE LAYOUT GRID RULES                            |
+-------------------+---------------+---------------+---------------+---------------+
| Breakpoint        | Viewport Width| Columns       | Gutter Width  | Margin        |
+-------------------+---------------+---------------+---------------+---------------+
| Mobile (`sm`)     | < 640px       | 4 Columns     | 16px          | 16px          |
| Tablet (`md`)     | 640px - 1024px| 8 Columns     | 24px          | 24px          |
| Desktop (`lg`)    | 1024px-1280px | 12 Columns    | 24px          | 32px          |
| Ultra-Wide (`xl`) | > 1280px      | 12 Columns    | 32px (Max 1280| Auto Centered |
+-------------------+---------------+---------------+---------------+---------------+
```

---

## 8. Border Radius & Elevation / Shadow System

### 8.1 Border Radius Tokens
* `--radius-sm`: `6px` (Buttons, Inputs, Badges, Dropdowns).
* `--radius-md`: `12px` (Standard Cards, Interactive Cards, Map Popups).
* `--radius-lg`: `16px` (Modals, Comparison Drawers, Hero Search Box).
* `--radius-full`: `9999px` (Pill Buttons, Status Badges, User Avatars).

---

### 8.2 Elevation & Shadow Token Hierarchy

```
+-----------------------------------------------------------------------------------+
|                              ELEVATION & SHADOW MATRIX                            |
+-------------------+---------------------------------------+-----------------------+
| Elevation Token   | CSS Box-Shadow Definition             | UI Component Scope    |
+-------------------+---------------------------------------+-----------------------+
| `--shadow-xs`     | 0 1px 2px 0 rgba(0, 0, 0, 0.05)       | Buttons, Inputs       |
| `--shadow-sm`     | 0 2px 8px -2px rgba(0, 0, 0, 0.06)    | Standard Content Cards|
| `--shadow-md`     | 0 4px 16px -4px rgba(0, 0, 0, 0.08)   | Dropdown Menus        |
| `--shadow-lg`     | 0 12px 32px -4px rgba(0, 0, 0, 0.12)  | Floating Compare Bar  |
| `--shadow-xl`     | 0 20px 48px -8px rgba(0, 0, 0, 0.16)  | Modals, Search Overlay|
+-------------------+---------------------------------------+-----------------------+
```

---

## 9. Iconography & Illustration Style

### 9.1 Iconography Guidelines
* **Icon Library Standard:** Lucide Icons / Radix Icons.
* **Vector Stroke Scale:** Consistent `1.75px` or `2px` stroke weight.
* **Corner Radius:** Subtle `1.5px` rounded stroke join.
* **Default Render Size:** `20px` (Action Icons), `16px` (Inline Badge Icons), `24px` (Section Headers).

---

## 10. Motion Principles & Micro-Interactions

```
+-----------------------------------------------------------------------------------+
|                             MOTION & EASING MATRIX                                |
+-------------------+---------------+-----------------------+-----------------------+
| Motion Type       | Duration      | Easing Function       | Application           |
+-------------------+---------------+-----------------------+-----------------------+
| Button Click      | 100ms         | `ease-out`            | Scale down to 0.98    |
| Card Hover        | 200ms         | `cubic-bezier(0.16,  | Translate Y (-2px) &  |
|                   |               |        1, 0.3, 1)`    | Border color darken   |
| Modal Fade/Slide  | 250ms         | `cubic-bezier(0.16,  | Opacity 0->1 &        |
|                   |               |        1, 0.3, 1)`    | Scale 0.96->1.0       |
| Lenis Momentum    | Continuous    | Custom Inertia        | Smooth Page Scroll    |
+-------------------+---------------+-----------------------+-----------------------+
```

---

## 11. Component Design Philosophy

### 11.1 Master Component Rules
1. **Interactive Cards:** Every clickable card must have a 1px border (`#E4E4E7`), white fill (`#FFFFFF`), subtle hover Y-lift (`-2px`), and clear focus outline.
2. **Buttons:** Primary CTA buttons are solid jet black (`#09090B`) with white text (`#FFFFFF`), sharp 6px rounded corners, and a micro-scale click state (`0.98`).
3. **Form Inputs:** Input boxes feature 1px light border (`#E4E4E7`), 6px border radius, and a high-visibility 2px dark focus ring (`#09090B`).
4. **Status Badges:** Small pill badges with light background fills and high-contrast text (e.g., Verified Google Office: Light Blue fill `#EFF6FF` + Dark Blue text `#1D4ED8`).

---

## 12. Machine-Readable Design Tokens (JSON Schema)

```json
{
  "name": "Andhra ISP Network Design Tokens",
  "version": "1.0.0",
  "tokens": {
    "color": {
      "bg": {
        "base": { "value": "#FFFFFF" },
        "subtle": { "value": "#F8F9FA" }
      },
      "text": {
        "main": { "value": "#09090B" },
        "muted": { "value": "#71717A" }
      },
      "border": {
        "subdued": { "value": "#E4E4E7" },
        "active": { "value": "#09090B" }
      },
      "accent": {
        "primary": { "value": "#09090B" },
        "verified": { "value": "#2563EB" },
        "success": { "value": "#059669" }
      }
    },
    "spacing": {
      "1": { "value": "4px" },
      "2": { "value": "8px" },
      "3": { "value": "12px" },
      "4": { "value": "16px" },
      "6": { "value": "24px" },
      "8": { "value": "32px" }
    },
    "borderRadius": {
      "sm": { "value": "6px" },
      "md": { "value": "12px" },
      "lg": { "value": "16px" },
      "full": { "value": "9999px" }
    }
  }
}
```

---

## 13. Web Accessibility (WCAG 2.1 AA) Blueprint

1. **Color Contrast Minimums:** All text contrast ratios strictly exceed 4.5:1 against their backgrounds (Zinc-950 on White yields 19.5:1 ratio).
2. **Focus Indicators:** Visible, high-contrast 2px dark focus ring (`outline: 2px solid #09090B; outline-offset: 2px`) on all active keyboard elements.
3. **Touch Target Size:** Minimum $44\times 44\text{px}$ touch boundary across mobile buttons and interactive map controls.
4. **Reduced Motion Mode:** Automatically disables GSAP and Lenis scroll inertia when user preference `prefers-reduced-motion: reduce` is detected.

---

## 14. Enterprise Glossary & Appendix

* **Design Tokens:** Platform-agnostic visual variables storing HEX colors, spacing values, font scales, and animation curves.
* **Radix UI:** Unstyled, accessible component primitives used for robust dialogs, dropdowns, and tabs.
* **Glassmorphism:** Visual technique layering semi-transparent surfaces with backdrop blurring.

---
**[END OF MASTER ENTERPRISE BRAND IDENTITY & DESIGN SYSTEM SPECIFICATION]**
