# Kawungan Coffee — Landing Page

A modern, dark-themed, single-page site for Kawungan Coffee, built with
Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts (Playfair Display + Inter), metadata
  page.tsx           Assembles all sections
  globals.css        Base styles, smooth scroll, reduced-motion support
components/
  Navbar.tsx          Sticky glassmorphism nav, mobile menu
  Hero.tsx            Staggered fade/slide-up hero
  KawungPattern.tsx   Signature SVG motif (field + divider), see below
  AboutSection.tsx    Brand story
  MenuSection.tsx      Tabbed, animated menu (the core deliverable)
  MenuItemCard.tsx     Individual menu card with hover lift
  QuickViewModal.tsx  "Tap to expand" detail modal
  ReservationSection.tsx  WhatsApp-based reservation CTA
  Footer.tsx          Social links, address, hours
data/
  menu.ts             Menu content — edit prices/items here only
```

## A couple of version notes

- **Tailwind v4**: this project uses Tailwind CSS v4, which configures
  design tokens in CSS rather than a `tailwind.config.js` file. Every
  color, shadow, and font in the design system lives in the `@theme` block
  at the top of `app/globals.css` — edit values there, not in a JS config.
- **Framer Motion → Motion**: Framer Motion was renamed to "Motion" and
  its package moved to `motion` (import path `motion/react`). The API is
  unchanged, so this is a drop-in match for the "Framer Motion" in the
  brief — just imported from its current package name.

## Design notes

- **Palette**: warm near-black ("Roasted Charcoal" `#15120F`) rather than
  pure black, with "Palm Sugar Gold" `#C6A15B` as the primary accent and a
  muted "Daun Emerald" `#1F4D3D` as a secondary accent on the reservation
  CTA — a deliberate two-tone system rather than gold everywhere.
- **Signature element**: the "kawung" is a real Javanese batik motif — four
  petal shapes meeting at a point, traditionally read from a cross-section
  of the aren (sugar palm) fruit. Since the shop's name and its signature
  drink (`Es Kopi Susu Gula Aren`) both trace back to that same tree, the
  motif is used as the page's one recurring visual thread: an ambient field
  behind the hero, a repeating divider strip between sections, and a
  background texture in the story panel and quick-view modal — rather than
  a generic decorative pattern. It's implemented as a single reusable SVG
  `<pattern>` component (`components/KawungPattern.tsx`) so there are no
  raster assets to ship.
- **Editing the menu**: update `data/menu.ts` only — categories, items, and
  prices all flow from that one file into the tabs, cards, and modal.
- **Reservation flow**: the "Reservasi" button opens a pre-filled WhatsApp
  chat rather than a custom form, since that's the channel most local
  cafés actually take bookings through. Swap the phone number in
  `ReservationSection.tsx` and `Footer.tsx` for the real one.
- **Accessibility**: visible focus rings, `prefers-reduced-motion` support,
  and tab roles on the menu category switcher are already wired up in
  `globals.css` and `MenuSection.tsx`.
