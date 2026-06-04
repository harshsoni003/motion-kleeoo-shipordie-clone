## Goal
Recreate the Ship or Die landing page (ship-or-die.com) as the home route, matching layout, sections, copy, and dark pirate aesthetic. Use the provided step images from the uploaded URL list only where required (hero + 3 "step" illustrations).

## Design
- Dark background (near-black), warm cream/parchment text, bold red/orange accent for CTAs and key headings.
- Display font: Pirata One / Anton-style condensed for big headers; mono (Geist Mono / JetBrains Mono) for labels; clean sans for body.
- Treasure-map / pirate vibe with skull, ⚔, 🏴‍☠️ glyphs and ticket-style cards.

## Sections (single page, `src/routes/index.tsx`)
1. **Sticky nav** — "Ship or Die by Marc Lou & Jack Friks" + Dashboard / Pricing / Join now button.
2. **Hero** — Big headline "SHIP your app in 30 days or DIE", subtext, hero ship image (downloaded from provided URLs).
3. **Problem block** — "0 users. 0 revenue…" + "two weeks away" callout.
4. **Pitch line** — "Ship an app every 30 days until one changes your life."
5. **3 Steps** — alternating image/text rows for Step 1 (Become a pirate), Step 2 (Make small bets), Step 3 (Don't quit). Uses step-1, step-2, step-3 images.
6. **Miss the deadline** — red warning card with bullet list of consequences.
7. **Founders** — Marc Lou and Jack Friks bios with avatars.
8. **Social proof** — grid of tweet-style cards (static, no embed) using provided handles/quotes.
9. **Pricing** — single card $269 (was $299), bullets, big CTA.
10. **FAQ** — accordion (shadcn Accordion) with all provided Q&As.
11. **Stats footer** — "238 shipping / 4 overboard" + crew preview grid.
12. **Footer** — Terms · Privacy · © 2026.

## Images (download once into `src/assets/` via curl then upload as Lovable Assets)
- `ship-hero.webp` (hero)
- `step-1.png`, `step-2.jpg`, `step-3.jpg`
- Skip avatars/tweet media — use initials or omit per "use images only required".

## Tech
- Tailwind tokens added to `src/styles.css`: `--background` near-black, `--foreground` cream, `--primary` red-orange, `--accent` gold; new font tokens loaded via Google Fonts `@import` (Pirata One, Anton, JetBrains Mono, Inter).
- shadcn `Accordion` for FAQ, `Button` for CTAs.
- SEO meta in route `head()` matching the page title/description.

## Out of scope
- No backend, no real checkout, no Discord/auth wiring — CTAs are anchor links to `#pricing`. Crew/tweet content is static.

Confirm and I'll build it.