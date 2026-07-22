# ANDHRA ISP NETWORK
## Master Storytelling Hero Experience Specification
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 3 — Component Implementation (Prompt 1)  
**Classification:** Technical & Creative Specification  
**Author:** Creative Director, Lead Product Designer, Three.js & GSAP Specialist, & Next.js Engineer  
**Target Platform:** Production Web System (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Hero UX Strategy & Visual Identity

### 1.1 Executive UX Intent
The Hero section is the digital centerpiece of the **Andhra ISP Network** platform. It communicates instantaneous brand clarity within 3 seconds of page load:
> *"We help you discover broadband internet providers anywhere in Andhra Pradesh across 26 Districts, 679 Mandals, and 17,000+ Villages."*

Rejecting cluttered, legacy government layouts, the hero adopts a **modern, minimalist SaaS aesthetic** inspired by Apple, Stripe, Linear, Vercel, and Notion. It combines an ultra-crisp editorial typography hierarchy with a subtle 3D Three.js particle node background representing Andhra Pradesh's interconnected digital fiber grid.

```
+-----------------------------------------------------------------------------------+
|                              HERO UX ARCHITECTURE                                 |
+-------------------+---------------------------------------------------------------+
| Experience Pillar | Technical Standard                                            |
+-------------------+---------------------------------------------------------------+
| Instant Clarity   | Bold headline + quick search input preview + live stats.      |
| Modern Minimalism | Pure white base (#FFFFFF) + Zinc-950 type + 1px glass borders.|
| Subtle 3D Depth   | Low-GPU Three.js particle node network with cursor tilt.       |
| Fluid Physics     | GSAP ScrollTrigger pinning + Lenis momentum smooth scrolling. |
| Zero Friction     | Accessible Ctrl+K preview search + quick district pills.      |
+-------------------+---------------------------------------------------------------+
```

---

## 2. Visual Layout & Responsive Architecture

### 2.1 Full-Screen Hero Grid & Component Layout

```
+-----------------------------------------------------------------------------------+
|  [LOGO] Andhra ISP  |  Districts  ISPs  Compare  Explorer  |  [Ctrl+K]  [Sign In]  |  <- Glass Header (64px)
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                   [⚡ CONNECTING EVERY CORNER OF ANDHRA PRADESH]                   |  <- Pill Badge
|                                                                                   |
|                  Discover High-Speed Broadband                                    |  <- Display Headline (64px)
|                  Across Andhra Pradesh                                            |
|                                                                                   |
|    Explore fiber ISPs, broadband availability, and verified office maps across    |  <- Subtitle (18px)
|    26 Districts, 679 Mandals, and 17,000+ Villages down to your PIN Code.         |
|                                                                                   |
|        [ 🔍 Search District, Mandal, PIN Code, or ISP...         ⌘K ]             |  <- Hero Search Preview
|        Popular:  [Visakhapatnam]  [Vijayawada]  [Tirupati]  [530026]              |
|                                                                                   |
|          [ Discover Providers ➔ ]      [ View Coverage Map 🌐 ]                  |  <- Action Buttons
|                                                                                   |
| ───────────────────────────────────────────────────────────────────────────────── |
|   26 Districts        679 Mandals         17,000+ Villages       450+ Active ISPs  |  <- Animated Counter Strip
| ───────────────────────────────────────────────────────────────────────────────── |
|                                                                                   |
|                                 [ Scroll to Explore ↓ ]                           |  <- Scroll Indicator
+-----------------------------------------------------------------------------------+
```

---

### 2.2 Responsive Viewport Rules

```
+-----------------------------------------------------------------------------------+
|                           RESPONSIVE LAYOUT BREAKPOINTS                           |
+-------------------+---------------+-----------------------------------------------+
| Viewport          | Min Width     | Adaptations & Layout Behavior                 |
+-------------------+---------------+-----------------------------------------------+
| Desktop (`xl`)    | > 1280px      | Full-screen height (100vh), 12 columns grid.  |
| Laptop (`lg`)     | 1024px-1280px | Standard 100vh, reduced headline to 48px.     |
| Tablet (`md`)     | 640px-1024px  | Auto height, 8 columns, stacked search preview|
| Mobile (`sm`)     | < 640px       | Compact vertical stack, 3D particles reduced. |
+-------------------+---------------+-----------------------------------------------+
```

---

## 3. Typography & Content Blueprint

### 3.1 Content Copy Matrix
* **Pill Badge:** `⚡ CONNECTING EVERY CORNER OF ANDHRA PRADESH`
* **Display Headline:** `"Discover High-Speed Broadband Across Andhra Pradesh"`
* **Sub-Headline Paragraph:** *"Explore fiber ISPs, broadband availability, and verified office maps across 26 Districts, 679 Mandals, and 17,000+ Villages down to your PIN Code."*
* **Search Preview Placeholder:** `"Search by District, Mandal, PIN Code or ISP (e.g. 530026, Gajuwaka)..."`
* **Primary CTA Button:** `Discover Providers ➔` (Navigates to `/ap/districts`)
* **Secondary CTA Button:** `View Coverage Map 🌐` (Navigates to `/ap/explorer`)

---

## 4. Animation Timeline & GSAP Orchestration

### 4.1 Sequence Timeline (On Page Load)

```
0ms ─────── 100ms ─────── 250ms ─────── 400ms ─────── 550ms ─────── 700ms ─────── 850ms
 │           │             │             │             │             │             │
 ├── Glass Nav Fade (100ms)
 └───────────┼── Pill Badge Reveal (150ms)
             └─────────────┼── Headline Mask Clip Reveal (250ms)
                           └─────────────┼── Subtitle Fade In (200ms)
                                         └─────────────┼── Search Preview Container Scale (250ms)
                                                       └─────────────┼── CTA Buttons Slide Up (200ms)
                                                                     └─────────────┼── Stats Counter Count-Up (600ms)
```

#### GSAP Animation Code Specification
```typescript
import gsap from 'gsap';

export const playHeroEntrance = (targets: any) => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo(targets.nav, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
    .fromTo(targets.badge, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 }, '-=0.4')
    .fromTo(targets.headline, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.2')
    .fromTo(targets.subtitle, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.5')
    .fromTo(targets.search, { y: 20, scale: 0.98, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 0.6 }, '-=0.4')
    .fromTo(targets.actions, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.4')
    .fromTo(targets.stats, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');

  return tl;
};
```

---

## 5. Three.js Interactive Particle Node Canvas Strategy

### 5.1 Technical Strategy & Low GPU Footprint
* **Concept:** Render a subtle, ambient 3D particle mesh network in the canvas background representing fiber optical nodes.
* **GPU Optimization:** Uses a single `THREE.Points` object with buffer geometries (`Float32Array` positions). Total particle count capped at **150 particles** to ensure 60 FPS performance on mobile devices.
* **Cursor Parallax Interaction:** Subtle camera rotation based on mouse coordinates ($X, Y$) using linear interpolation (`lerp`).

#### Three.js Scene Setup Architecture
```typescript
// Particle Mesh Setup Architecture
const particleCount = 120;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const material = new THREE.PointsMaterial({
  size: 0.04,
  color: 0x09090b,
  transparent: true,
  opacity: 0.35,
});

const particleSystem = new THREE.Points(geometry, material);
```

---

## 6. Next.js App Router Component Structure

### 6.1 Enterprise Monorepo Folder Structure

```
apps/web/src/components/hero/
├── HeroSection.tsx              # Master Client Component Wrapper
├── HeroNav.tsx                  # Backdrop Blur Header Navigation
├── HeroBadge.tsx                # Status Pill Badge
├── HeroHeadline.tsx             # Editorial Large Headline with GSAP
├── HeroSearchPreview.tsx        # Preview Search Box with Quick Pills
├── HeroActions.tsx              # Primary & Secondary CTA Buttons
├── HeroStats.tsx                # Animated Counter Strip (26 Dist, 679 Mandals)
├── HeroBackgroundCanvas.tsx     # Three.js Particle Mesh Canvas
└── index.ts                     # Public Barrel Export
```

---

## 7. Web Accessibility & Reduced Motion Blueprint

1. **ARIA Attributes:** `role="region"` with `aria-label="Hero Introduction"`. Search preview includes `aria-label="Search preview"`.
2. **Focus Indicators:** Visible 2px dark focus ring (`outline: 2px solid #09090B`) on all interactive buttons and quick pills.
3. **`prefers-reduced-motion` Handling:** Disables GSAP timeline movements and Three.js camera rotation when reduced motion preference is enabled.

---

## 8. Implementation Notes & Next Steps

1. **Component Modularization:** All sub-components (`HeroNav`, `HeroSearchPreview`, `HeroStats`, `HeroBackgroundCanvas`) are fully decoupled and reusable.
2. **Smooth Scroll Handoff:** Integrates with Lenis smooth scroll so scrolling down past the hero triggers seamless section handoff to the Interactive AP Explorer map section.

---
**[END OF MASTER STORYTELLING HERO EXPERIENCE SPECIFICATION]**
