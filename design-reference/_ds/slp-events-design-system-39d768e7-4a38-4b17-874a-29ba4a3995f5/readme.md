# SLP Events — Design System

Premium event-entertainment brand. SLP Events specializes in interactive performers, luxury special effects, and memorable enhancements for weddings, proposals, birthdays, graduations, corporate events, and private celebrations. The promise: **make every entrance grand, every celebration unforgettable, and every client feel like a VIP.**

The system expresses that promise as **"Midnight & Champagne"** — a dark-first, theatrical, editorial aesthetic where deep noir surfaces are lit by champagne-gold and the four-point _spark_ motif.

## Sources

No codebase, Figma file, brand assets, or prior design materials were provided. This system was authored from scratch from the company description above. Everything here (palette, type pairing, spark motif, wordmark, components, website kit) is an original brand proposal intended as a **starting point to iterate on** — not a recreation of an existing identity.

- **Logo:** none supplied. The wordmark is a type-based lockup (Bodoni Moda) + the spark mark. Replace with a real logo when available (`components/brand/Logo.jsx`, `assets/spark-mark.svg`).
- **Fonts:** no licensed font files supplied — see _Fonts_ below (substitution flagged).
- **Imagery:** none supplied — the website kit uses branded placeholder tiles (`Photo`).

---

## CONTENT FUNDAMENTALS — how SLP writes

- **Voice:** confident, warm, and cinematic — a maître d' who is also a showman. Aspirational but never cold or corporate.
- **Person:** speaks to _you_ ("You're the VIP"), and about _we/our_ team. Second person for the client, first-person-plural for the company.
- **Tone:** short, declarative, benefit-first. Leads with the _feeling_ (the room stopping, the entrance, the moment), then the detail.
- **Casing:** Title/sentence case for headlines; **UPPERCASE with wide tracking** for eyebrows, labels, buttons, and nav. Never all-caps for body.
- **Emoji:** not used in product copy. A single ★ (star) or the ◆ spark glyph may appear as an ornament, sparingly.
- **Signature lines & words:** "grand," "unforgettable," "VIP," "signature," "moment," "breathtaking," "dazzle," "magic," "spark."
- **Examples**
  - Hero: _"Make every entrance unforgettable."_
  - Value: _"You're the VIP. We handle the magic."_
  - CTA: _"Let's create your moment."_ / _"Start Planning"_ / _"Book an Experience"_
  - Reassurance: _"Indoor-safe · Fully insured · Venue-approved."_
  - Avoid: _"Solutions for your event needs,"_ _"Please submit an inquiry form."_

---

## VISUAL FOUNDATIONS

- **Mood:** dark-first, luxe, theatrical. Think black-tie gala under a spotlight.
- **Color:** noir neutrals (`--ink-*`, near-black warm greys) as ground; **lavender green** (`--gold-500 #74a066`) as the single star accent; **deep wine** (`--wine-500`) as a rich secondary; **ember** (`--ember-500`) reserved for special-effects glow. Ivory (`#f6f2e9`) for text. Semantic status colors are muted to sit in the dark palette. Full scales in `tokens/colors.css`.
- **Type:** **Bodoni Moda** (high-contrast Didone) for display/headings — dramatic, editorial, luxury. Italic gold is the signature accent treatment on hero words. **Manrope** for body/UI — clean, modern, legible. **JetBrains Mono** for details (event IDs, prices, dates). Scale + roles in `tokens/typography.css`.
- **Eyebrows:** uppercase gold kicker with a leading hairline, sitting above a display heading — the recurring section-opener pattern (`Eyebrow` component).
- **Backgrounds:** solid noir by default. Signature flourishes: a top-down **spotlight** radial (`--gradient-spotlight`) behind heroes/CTAs, and the gold sheen gradient (`--gradient-gold`) on primary surfaces. No busy patterns; darkness + light is the texture.
- **Spark motif:** four-point star/diamond. Used as monogram, bullet, divider ornament (`Divider ornate`), loading mark, and faint watermark on imagery.
- **Corners:** crisp and tailored — `sm 3px / md 6px / lg 12px / xl 20px`, pills for buttons/badges/tags. Not soft or bubbly.
- **Cards:** dark surface (`--surface-card`), 1px hairline border; feature/`gold` cards add a gold hairline + `--shadow-gold-card` (deep drop + faint gold ring). Interactive cards lift `translateY(-4px)` and warm their border to gold on hover.
- **Shadows:** deep, soft drop shadows for elevation on noir; a signature **gold glow** (`--shadow-glow`) for hero CTAs and primary emphasis. See `foundations/shadows.html`.
- **Borders:** low-opacity ivory hairlines (`--border-subtle` 8%, `--border-default` 14%); gold hairline (`--border-gold`) for emphasis.
- **Transparency & blur:** used on the sticky header (blurs in on scroll) and Dialog backdrop (`blur(14px)` over a 72% noir scrim). Otherwise surfaces are opaque.
- **Motion:** slow and cinematic. `--ease-entrance` for rises/fades, `--dur-base 260ms` typical, up to `--dur-cinematic 900ms` for hero reveals. Dialogs fade + rise. No bouncy/springy easing.
- **Hover states:** buttons brighten (`brightness(1.08)`) and primary gains the gold glow; ghost/secondary fill with `--accent-soft`; nav/text warm to gold. **Press:** subtle scale-down (`0.97` buttons, `0.92` icon buttons) — light shrink, no color flip.
- **Imagery vibe (intended):** warm, low-key, cinematic — golden highlights against dark rooms; motion-blurred sparks and light trails. Placeholder `Photo` tiles emulate this with noir/gold/wine radial washes.

---

## ICONOGRAPHY

- **System:** [Lucide](https://lucide.dev) — 24px grid, ~1.75px stroke, rounded caps/joins. Chosen for its thin, elegant, consistent line style that suits the luxe dark aesthetic.
- **Implementation:** the website kit ships an inline line-icon set (`ui_kits/website/Icons.jsx`, `<Icon name=… />`) whose geometry matches Lucide, so icons inherit `currentColor` and can be gold on dark without cross-origin recoloring issues. For production you can instead pull Lucide directly (`lucide-react` or the CDN). **Flag:** this is a substitute set matching Lucide, not the official package — swap to real Lucide if exact parity matters.
- **Color:** icons are typically gold (`--gold-300/400`) or ivory on dark; muted grey for secondary.
- **Brand glyph:** the four-point **spark** (`assets/spark-mark.svg`) is the one bespoke mark — used for the logo/monogram, `Divider ornate`, and image watermarks. Not part of the icon set.
- **Emoji / unicode:** not used as UI icons. A ★ or ◆ may appear as a typographic ornament only.

---

## Components (`window.SLPEventsDesignSystem_39d768`)

Reusable primitives. Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a directory `@dsCard`.

- **Brand** (`components/brand/`): **Logo**
- **Core** (`components/core/`): **Button**, **IconButton**, **Badge**, **Tag**, **Card**, **Eyebrow**, **Divider**
- **Forms** (`components/forms/`): **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**
- **Feedback** (`components/feedback/`): **Dialog**, **Tooltip**, **Accordion**
- **Navigation** (`components/navigation/`): **Tabs**

_This is a from-scratch brand with no source-defined component inventory, so a standard primitive set was authored, sized to the brand's needs (event marketing site + booking flow). No speculative extras beyond this set._

## UI kits

- **Website** (`ui_kits/website/`) — marketing site: Home, Services, Gallery, Booking. Interactive click-through composing the primitives. See its `README.md`.

## Foundations (Design System tab cards)

Specimen cards live in `foundations/` (Colors, Type, Spacing, Brand) plus one card per component directory and the kit index. They render in the **Design System** tab.

---

## Index / manifest (root)

- `styles.css` — global entry point (consumers link only this). `@import`s the token files.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `components/` — `brand/`, `core/`, `forms/`, `feedback/`, `navigation/`.
- `ui_kits/website/` — marketing-site kit.
- `foundations/` — specimen cards.
- `assets/` — `spark-mark.svg`.
- `SKILL.md` — Agent-Skills-compatible entry.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — **generated** by the compiler; do not edit.

## Fonts (substitution flagged)

No licensed brand fonts were provided. Nearest premium matches are loaded from **Google Fonts** via `tokens/fonts.css`:

- Display/headings → **Bodoni Moda**
- Body/UI → **Manrope**
- Mono/details → **JetBrains Mono**

To use licensed fonts, drop files into `assets/fonts/` and replace the `@import` in `tokens/fonts.css` with local `@font-face` rules (keep the same `--font-display / --font-sans / --` variable names).
