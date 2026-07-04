# SLP Events — Nuxt 3 + Tailwind CSS Export

Conversion of the **SLP Events website design** ("Midnight & Champagne" design system) into a Nuxt 3 + Vue 3 + Tailwind CSS 3 codebase.

## About the design files

`design-reference/` contains the original **HTML design prototype** (open `SLP Events Website.dc.html` in a browser). It is a design reference, not production code — the task of this package is to recreate it with the codebase's stack. **Fidelity: high** — colors, type, spacing, and copy in the reference are final; recreate pixel-perfectly.

## What is converted

**Everything — all 15 pages are fully implemented**, with the light/dark theme system:
- **Theming**: light theme is the default; a sun/moon toggle in the header switches to the original "Midnight & Champagne" dark palette. All color tokens resolve to CSS variables (`assets/css/main.css`), the choice persists in `localStorage` (`slp-theme`), and an inline head script applies it pre-paint (no flash). The home hero is always dark (`data-theme="dark"` scope) and the header forces ivory text while floating over it; the marquee preview letters stay lit-dark in both themes.
- Nuxt config: fonts, meta, body classes (`nuxt.config.ts`), Tailwind via `@nuxtjs/tailwindcss`
- Tailwind config with all brand tokens (`tailwind.config.js`)
- Global CSS: keyframes, scrollbar, selection (`assets/css/main.css`)
- UI primitives (auto-imported from `components/`): `BrandLogo`, `UiButton`, `UiEyebrow`, `UiAccordion`, `UiInput`, `UiTextarea`, `UiSelect`, `UiTabs`, `CtaBanner`
- App shell: fixed header (blurs in on scroll), fullscreen mobile menu, footer, floating WhatsApp FAB, mobile sticky "Book Your Event" bar (`app.vue`, `components/`)
- Scroll-reveal + count-up directives, SSR-safe (`plugins/directives.js`, used as `v-reveal` / `v-count`)
- All site content data: nav, testimonials (9), FAQs (15), event types (15), gallery (18) (`data/site.js`)
- **Home** — all 12 sections (`pages/index.vue`)
- **About** — story, mission/vision, values, timeline, philosophy, team
- **Services** — 5 service families (alternating split cards) + add-ons
- **Signature Entertainment** — 3 performers, video showcase, performer FAQ
- **Special Effects** — 6 effect cards, safety, setup process
- **Marquee Rentals** — interactive glowing-letter phrase preview (type to try it), collection, customization
- **Event Packages** — 5 packages (Wedding = "Most Popular") + build-your-own card
- **Events We Serve** — all 15 event-type cards
- **Gallery** — category filter chips, masonry grid, lightbox (Esc / arrow-key navigation)
- **Testimonials** — featured story + 9-review grid
- **Booking** — 4-step wizard (event → experiences → budget/add-ons → contact) with validation, success state, WhatsApp fast-track
- **Contact** — channel cards + quick-inquiry form with success state
- **FAQ** — 5 category tabs + accordions
- **Custom Quote** — live progress bar, service/budget chips, inspiration-image upload, success state
- **404** (`pages/[...slug].vue`)

## Setup

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # SSR build — or `npm run generate` for a fully static site
```

Routing is Nuxt file-based (`pages/`): each design page is a route file; `pages/[...slug].vue` is the 404 catch-all. Route names used for active-nav highlighting are the file names (`index`, `about`, `booking`, …).

**Note:** if your copy of this package arrived without the brackets in `pages/[...slug].vue` (some transfer tools strip them), rename it back — Nuxt needs the literal `[...slug].vue` filename for the catch-all.

## SSR notes

The app is SSR/SSG-compatible out of the box:
- `v-reveal` / `v-count` do all their work in `mounted` (client-only) and declare `getSSRProps`, so server rendering emits clean markup.
- Window/scroll listeners live in `onMounted`/`onUnmounted` hooks only.
- If you prefer a pure SPA, set `ssr: false` in `nuxt.config.ts` — nothing else changes.

## Design tokens

- **Theme variables**: every Tailwind color token maps to a CSS variable defined in `assets/css/main.css` — `:root` holds the light palette, `[data-theme="dark"]` the original dark palette. The selector is element-scoped, so any section can force a theme by carrying `data-theme="dark"` (used by the home hero). `text-on-accent` is the text color for gold-filled buttons in both themes.
- **Colors** (in Tailwind as `ink-*`, `gold-*`, `wine-*`, `ember-*`, `ivory`): dark palette — noir neutrals `#08080b → #e4e1da`; primary accent "gold" (lavender green) `#74a066`, hover `#8fb583`, text-accent `#aecaa4`; wine `#7c2639`; ember `#e07d43`; ivory text `#f6f2e9`. Light palette — warm ivory surfaces `#faf8f2 → #ffffff`; deepened greens (`#5f8c50` accent, `#47703a` text-accent) for contrast; ink text `#1b1b13`. Wine, ember, and WhatsApp green are theme-invariant.
- **Borders**: ivory hairlines at 8% (`border-subtle`) and 14% (`border-hairline`); gold emphasis `rgba(116,160,102,0.55)` (`border-gold-line`).
- **Type**: `font-display` Cormorant Garamond (headings, weight 500–600, italic gold `<em>` accent words); `font-sans` Manrope (body/UI); `font-mono` JetBrains Mono (numbers, step indices). Hero H1 `clamp(46px,8.4vw,108px)`; section H2 `clamp(34px,4.4vw,56px)`; eyebrows 12px / 0.22em tracking / uppercase.
- **Radii**: cards 12px (`rounded-xl`), buttons/chips pill (`rounded-full`).
- **Effects**: gold glow `shadow-glow`, card hover lift `-translate-y-1` (tiles) / `-5px` (feature cards) with gold border warm-up; spotlight radial `bg-spotlight`; gradient CTA fill `bg-gold-grad`.
- **Motion**: entrance easing `cubic-bezier(0.16,1,0.3,1)` (`ease-entrance`), 260–900ms; keyframes in `assets/css/main.css` (kenburns, riseUp, ticker, floatUp, cueDrop, glowPulse, menuIn, fadeIn, flicker, twinkle).

## Interactions & behavior

- Theme toggle (header, all viewports): switches `data-theme` on `<html>`, persists to `localStorage`; SSR-safe (state mirrors the DOM attribute after mount, pre-paint init in `nuxt.config.ts` head script).
- Header: transparent at top; ≥24px scroll → `rgba(var(--scrim-rgb),0.86)` + 14px blur + hairline border. Over the home hero it carries `data-theme="dark"` until scrolled.
- Mobile (`< lg` / 940px in the design): hamburger opens fullscreen menu (staggered `menuIn`, Esc closes); sticky bottom bar (WhatsApp + Book CTA) on all pages except booking/quote; desktop shows floating WhatsApp FAB instead.
- Scroll reveal: elements fade/rise 28px once 12% visible (one-shot). Stats count up on 40% visibility.
- Buttons: hover `brightness(1.08)` (+ gold glow on primary; soft gold fill on ghost), press `scale(0.97)`.
- Route change scrolls to top (Nuxt default scroll behavior).

## Backend notes (not included)

The design's booking wizard, quote form, and contact form only simulate submission client-side. Suggested server work (Nuxt server routes in `server/api/`): `POST /api/inquiries` (booking), `/api/quotes`, `/api/contact` with validation + mail notifications; WhatsApp deep-links are pure frontend (`data/site.js` → `WHATSAPP_NUMBER` — replace the placeholder `15550000000` and `hello@slpevents.com`).

## Assets

All imagery is Unsplash placeholder photography (hotlinked, `images.unsplash.com/photo-<id>`); replace with real event photos for production. The logo is a type-based wordmark + inline SVG spark (`components/BrandLogo.vue`) — swap in a real logo file when available.

## Files

- `design-reference/SLP Events Website.dc.html` — original design (all 15 pages, state logic at bottom)
- `design-reference/_ds/` — design-system tokens + component bundle the design was built on
- `nuxt.config.ts`, `tailwind.config.js`, `assets/css/main.css` — config + tokens
- `app.vue` — app shell · `components/` — auto-imported components · `pages/` — routes · `plugins/directives.js` · `data/site.js`
