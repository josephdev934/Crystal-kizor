# CLAUDE.md: Crystal Kizor Landing Page

Single-page landing page for Crystal Kizor (Nigerian architect, Enugu State). Built for a web developer assessment. Joseph (the developer) must be able to explain every line, so keep the code simple and readable.

Files to read first:
- `docs/design-reference.png`: the visual mock. A LOOK reference only. Its copy and photos are invented (see section 2).
- The **Appendix: starter CSS** at the bottom of this file holds all UI tokens, base styles and motion CSS. Copy it into `src/styles/tokens.css`, `globals.css` and `motion.css` (the headings in the appendix show where to split). It is the source of truth. Do not invent new values.

## 1. Goal
A first-time visitor should understand in seconds: who Crystal is, what she does, what she is building, and where to go next. Her brands must feel like ONE personal brand.

Connecting idea: **"Building better for people and place."** Studio COKA builds it, The Effective Architect teaches it, the newsletter explains it, AKO Alliance and Alive and Free extend it to families and young people.

Her real differentiator is building for HOT CLIMATES (passive cooling, local materials). It must show in the hero, the principles section and the project copy.

Design direction: refined architectural editorial. Warm stone, ivory, sand, clay and charcoal-brown. Expressive serif headlines with clean sans body text. Oversized type, generous white space, thin dividers, photography-led. Each section gets its own composition, but they all share one design language. No generic templates, no rows of identical cards.

## 2. Hard rules
- Use ONLY the copy in section 11 and Crystal's supplied assets. Never invent numbers, quotes, awards, clients, logos, book titles, services, products or people.
- The mock contains invented content. Do NOT copy any of it: "100+ spaces", "5+ years", "100% committed", "The Architecture of Everyday Life", "The Planning Guide", the Listen/Research/Design/Build/Impact steps, "Consulting", "Partnerships", "Lagos", "© 2025", the "Spaces that bring people together" headline, and the digital-product mockups under ELEvated.
- Never use AI-generated or stock images of people or projects. Real photos supplied by Crystal only. If a photo is missing, show a clearly labelled placeholder.
- Unknown items stay as visible `[TODO: ...]` until supplied. Remove every TODO before launch.
- Her services are exactly: Architecture, Interior Design, Project Management (plus Speaking).
- Location: "Enugu State, Nigeria". Footer year: 2026.
- ELEvated is furniture and product design. It is NOT a digital product.
- AKO Alliance and Alive and Free are initiatives, not businesses. Equal weight, each with its own identity.
- Copy refers to Crystal in the third person ("Work with her", "Book Crystal to speak").

## 3. Stack
- Next.js (App Router), TypeScript, Tailwind CSS. Map the CSS variables into the Tailwind theme (v4 `@theme` or v3 config, whichever the project uses). Components use tokens, never raw hex.
- Fonts via `next/font`: Cormorant Garamond (display) and DM Sans (body). Do not use `@import`. Do not use Black Ops One; it does not fit this brand.
- Images via `next/image`.
- Plain CSS plus one small client component for motion. No animation libraries unless section 12 is satisfied.
- Deploy: Vercel or Netlify. One route only: `src/app/page.tsx`.

## 4. File structure
```
src/
  app/
    layout.tsx        fonts, metadata, favicon, OG image
    page.tsx          assembles sections inside <main className="stack">
  styles/
    tokens.css  globals.css  motion.css
  components/
    navigation/  SiteHeader.tsx, FullscreenMenu.tsx
    ui/          Button.tsx, Eyebrow.tsx, SectionHeading.tsx, ImageFrame.tsx,
                 TextLink.tsx, Reveal.tsx
    sections/    HeroSection.tsx, IdeaSection.tsx, PrinciplesSection.tsx,
                 ProofSection.tsx, StudioCokaSection.tsx, LearnSection.tsx,
                 CommunitySection.tsx, VoiceSection.tsx, ElevatedSection.tsx,
                 DirectorySection.tsx, AboutSection.tsx, ContactFooter.tsx
    galleries/   ProjectSlider.tsx, MasonryGrid.tsx, PhotoStrip.tsx,
                 MediaFeature.tsx, ProductGrid.tsx
  content/content.ts  ALL copy, links and image paths (typed)
public/assets/        photos and logos (WebP/AVIF, clear names)
docs/design-reference.png
```
Components read from `content.ts`. Never hardcode copy in components.

## 5. Design tokens
All tokens live in the Appendix at the bottom of this file (full CSS). Summary:

| Group | Key values |
|---|---|
| Colour | canvas #F3EEE5, surface #E8E0D4, surface-muted #D5C8B7, sand #B5A18A, taupe #C2AD96, clay #A75F3B (hover #8F4D30), ink #28251F, stone-dark #302B25, text-muted #71685E, border #C9BDAE, white-warm #FAF7F1 |
| Type | Display: Cormorant Garamond. Body: DM Sans. Weights 400 to 700. Heading line-height 1.02, hero .92, body 1.6. Headings tracking -0.045em. Labels uppercase, tracking .12em. |
| Scale | `--type-hero` clamp(3rem, 8vw, 7rem), h1 to h3 fluid, body 1rem, small .875rem, label .75rem |
| Layout | content max 1360px, reading max 680px, gutter clamp(24px, 5vw, 80px), section space clamp(64px, 10vw, 160px), header 88px (72px mobile) |
| Radius | buttons 8px, images and cards 12px, feature panels 20px, pill only for small controls |
| Depth | thin 1px borders and hairlines first. Shadows only soft and rare. Depth comes from photography, contrast and overlap. |
| Motion | fast 160ms, normal 240ms, slow 500ms, cinematic 800ms, ease cubic-bezier(.22,1,.36,1) |

Colour rules:
- Ivory is the main reading surface. Alternate ivory, stone and taupe between sections. Use charcoal-brown for the full-screen menu and selected dark sections (Proof, Voice).
- Clay only for key actions and small accents. No neon, no SaaS blue, no needless gradients.
- **Contrast fixes** (checked by hand, please re-verify with a tool):
  - `--color-text-muted` (#71685E) passes only on canvas and surface. On taupe or sand sections use `--color-ink`.
  - White text on the clay button is right at the AA limit. Keep button text at 16px and semibold, and verify.
  - Focus ring: clay on light, sand on dark (already in the CSS).
  - Text on photos needs `--color-overlay` or a gradient, then verify.
- Utility labels are 12px minimum (the ChatGPT doc said 11px; that is fixed here).

Typography rules:
- Hero headlines are oversized, expressive, editorial, multi-line. The hero headline is uppercase in the mock; other headlines are sentence case. Taglines (Studio COKA) are italic serif.
- Section labels: small uppercase tracked text with a section number, e.g. "04 / STUDIO COKA", beside a thin vertical hairline.
- Counter style for sliders and galleries: "01 ——— 04".
- Text links: small uppercase, tracked, with a short line and arrow ("VIEW ALL PROJECTS ——>").
- Hero extras from the mock: "MENU" label with two short lines (top right), "SCROLL" cue (bottom left).
- No tiny text for navigation or project descriptions. Body 16px minimum.

Buttons:
- Primary: clay fill, warm-white text, 8px radius, 14px 24px padding, weight 600.
- Secondary: transparent, 1px ink border. Hover fills ink.
- On dark: sand fill, ink text.
- 44px minimum target (the CSS uses 48px). Transitions 180 to 250ms. Every button must do what it says, or be a visible placeholder.

## 6. Navigation
- Sticky header, 88px (72px on mobile). "CRYSTAL KIZOR." wordmark (text) on the left, MENU on the right. Transparent over the hero, readable on light and photo backgrounds. Header CTA: "Work with her" (studiocoka.com/hire).
- Full-screen menu: background `--color-stone-dark`, warm-white oversized serif links, numbered, fine horizontal separators, visible close button, location line "Enugu State, Nigeria" and a clay "Work with her" button at the bottom.
- Menu items: 01 Home, 02 Studio COKA, 03 Learn, 04 Impact, 05 Speak & Write, 06 About, 07 Contact. Add "ELEvated" after Speak & Write ONLY if that section is published.
- Menu behaviour: lock background scroll while open, focus trap, Esc closes, return focus to the MENU button on close, `aria-expanded` on the button.
- Anchors: `#studio-coka #learn #impact #voice #elevated #about #contact`. Smooth scroll with `scroll-padding-top` for the header.

## 7. Motion and scroll animation
Main effect: **slide-over**. As you scroll, the next section slides up over the current one like a panel. The CSS is in the Appendix (`.stack > .slide`).

Rules:
- Slide-over (sticky) sections: Hero, Idea, Principles, Proof. Mark them with the `slide` class inside `<main className="stack">`.
- Each slide section needs an OPAQUE background (a colour or a full-bleed image) and a higher z-index than the one before it. Set z-index inline from the section's index, e.g. `style={{ zIndex: index }}`.
- Tall sections scroll normally, no sticky: Studio COKA, Learn, Impact, Voice, ELEvated, Where next, About, Contact.
- Never put `overflow: hidden` on an ancestor of the sticky sections.
- If a slide section is taller than the viewport on a small laptop, drop sticky for it.
- Phones (under 768px) and `prefers-reduced-motion`: normal scrolling, no slide-over. Soft fade-ins stay on phones only.
- Do not use `scroll-snap`. The slide-over is enough, and snap fights with it. (Optional later: `scroll-snap-type: y proximity` on desktop for the slide sections only. Never `mandatory`.)
- Fade-up reveal on headlines and images: `ui/Reveal.tsx` (`'use client'`) with IntersectionObserver, threshold 0.2, toggles `.show`. Turn it off under reduced motion.
- Animate only `opacity` and `transform`. Motion must not interfere with touch scrolling, keyboard navigation or browser history.
- Optional polish (progressive enhancement, plain slide-over as fallback): the covered section scales to .96 and dims using `animation-timeline: view()`.

## 8. Galleries (a different composition in each)
| Section | Style |
|---|---|
| Studio COKA | One dominant project image with asymmetric supporting previews. Slider, one project at a time, with name, location and counter ("01 ——— 04"). Tapping opens a small masonry grid that expands full-screen (lightbox). |
| Impact | Soft rounded photo strip (radius 20px) with short captions, or distinctive paired compositions. Warmer and more human. |
| Voice | One large photo or embedded video with a small thumbnail row. |
| ELEvated | Product grid on warm-neutral backgrounds. |
Media tokens: ratios 3:4 portrait, 4:3 landscape, 16:9 wide, `object-fit: cover`, gallery gap 12 to 24px, radius 12px (feature 16 to 20px).
Requirements: keyboard accessible (arrows, Esc to close), meaningful alt text, lazy-load below the fold, width and height set to avoid layout shift. Use image overlays only when needed for text legibility.

## 9. Logos and brand assets
- Wordmark in the header: "CRYSTAL KIZOR." as text unless Crystal supplied a mark.
- Each brand shows only the logo Crystal supplied. If none, show the name in text. Never create a logo.
- Footer: supplied brand logos linking out.
- Also make a favicon and a social share (OG) image from supplied material.

## 10. Layout and composition
- Mobile-first. Breakpoints: mobile 0 to 639, tablet 640 to 1023, desktop 1024 to 1439, wide 1440+.
- On mobile, put content first and order it for reading. Do not squeeze the desktop layout.
- Hero: asymmetric, with text on one side and an architectural image on the other. Mobile order: headline, image, actions. No centred text over a full-bleed photo.
- Alternate text and image sides down the page. Allow editorial compositions to break the grid on purpose.
- Prevent horizontal overflow on mobile.

## 11. Sections and content (the only allowed copy)
Order on the page:

**1. Hero** (slide)
- Headline: "I show how we can build better homes, buildings and cities for hot climates."
- Supporting line: Architect, designer, entrepreneur, speaker, researcher and creator.
- Real portrait or project photo showing shade, openings and light.
- Buttons: "See her work" (to #studio-coka), "Get in touch" (to #contact).

**2. The Idea** (slide)
- "Architecture changes lives, improves living standards, and can be the difference between survival and thriving."
- Real portrait.
- Diagram: Crystal at the centre with branches to Studio COKA, The Effective Architect, The ROI of Intentional Design, AKO Alliance and Alive and Free. Thin line-art.

**3. Principles** (slide). Six passive-cooling principles from her own posts, thin line-art: Thick walls, Large openings, High-level openings, Deep overhangs, Indoor-outdoor living, Trees as part of the design. This is the section that shows her hot-climate focus.

**4. Proof** (slide, dark, over a real project photo). Large metrics with fine dividers. Pick the 4 that fit best:
- 100,000+ sqm designed and coordinated
- About 95% less diesel at an off-grid eye hospital
- About ₦8M saved a year
- 10,000+ community in The Effective Architect
- Nature Home relies on natural ventilation and fans about 70% of the time
`[TODO: Crystal confirms every number. Optional press line about bird story agency only with her approval]`

**5. Studio COKA** (largest section)
- Tagline: "Built for this climate. Designed for People."
- Text: A climate-responsive design and build studio, founded in 2024, helping home and business owners design and build intentional spaces.
- Services: Architecture | Interior Design | Project Management
- Projects:
  - Nature Home, Enugu State, Nigeria: a 7-bedroom family home designed and built to catch the wind, use natural light and keep cool with less AC.
  - Eye hospital, Nsukka, Nigeria: a solar-powered building with a naturally cooled waiting area. `[TODO: confirm attribution. Designed by Crystal in 2018, before Studio COKA existed]`
  - House of the Future, UAE (2025 prototype): a home around a courtyard with a layered mashrabiya screen for air, shade and light.
  - Kasa Kofo Community Centre, Casamance, Senegal (proposal): a space to learn, earn and meet, with a workshop, library, craft shop and market.
- Button: "Start a project" (studiocoka.com/hire)

**6. Learn.** Two different compositions, not two identical cards.
- The Effective Architect (TEA): a global platform training architects and designers to think clearly, design intentionally and execute at a high level. Community of 10,000+. Button: "Join the waitlist" `[TODO: link]`
- The ROI of Intentional Design: her weekly newsletter on what good design returns in value, comfort, health and quality of life. Button: "Subscribe on LinkedIn" `[TODO: link]`. No email form (there is no backend).

**7. Impact.** Human-centred photography, community work and not product cards.
- AKO Alliance: an NGO working to return Nigeria's out-of-school children to school, support families with business capital and back new ideas. Button: "Learn more" `[TODO: link]`
- Alive and Free: a movement for young people exploring identity, purpose and life in Christ, through honest conversations, gatherings and worship. Button: "Learn more" `[TODO: link]`

**8. Voice (Speak & Write)**
- "Speaking. Writing. Sharing."
- Speaking: TEDx talk on integrating Indigenous Architecture into modern living (2025). Large photo or video with thumbnail row. Button: "Get in touch" `[TODO: speaking contact route]`
- Writing and content: posts and series on passive cooling, building local and intentional design. `[TODO: verified social links]`

**9. ELEvated** (conditional)
- Furniture and product design. `[TODO: Crystal's description]` `[TODO: Crystal's images]`. Product grid. Never invent product names, prices or images. If nothing is ready, leave this section and its menu link out of the live page.

**10. Where to go next**
- Heading: "What are you here for?"
- Five editorial rows (not cards): I want to build a home or space / I want to learn how to design like this / I want to support children's education / I want to book Crystal to speak / I want to read her ideas. Each links to its section or brand.

**11. About**
- `[TODO: Crystal's bio. Do not write one]`. Second portrait. Based in Enugu State, Nigeria. Graduate Member, Nigerian Institute of Architects. Member, Green Building Council Nigeria.

**12. Contact and footer.** Warm taupe or light, calm and spacious. No heavy dark footer.
- Contact invitation, `[TODO: email or form]`. Supplied brand logos linking out. `[TODO: social links]`. Compact navigation. "© 2026 Crystal Kizor. All rights reserved."

## 12. 21st.dev MCP rules
- Use it for component, gallery and animation ideas and starting code only.
- Our tokens are the single source of truth. A pulled component must not bring its own colours, fonts, radii or spacing. Rewrite them to our variables.
- Before adding any component or dependency: it must work on mobile, respect `prefers-reduced-motion`, and add no heavy library. Prefer simple plain CSS/JS.
- Simplify every pulled component so Joseph can explain it. Delete unused code.
- Do not use it to replace the slide-over effect in section 7.
- Never use demo text or images. Content comes only from `content.ts`.

## 13. Accessibility and performance
- WCAG AA contrast. Body text 16px minimum. Utility labels 12px minimum. Targets 44 by 44px minimum.
- Visible focus ring, semantic headings and landmarks, one `h1`.
- Meaningful alt text for informative images; decorative images use `alt=""`.
- Forms (if any) have labels and error messages.
- Hero image `priority`, the rest lazy. WebP/AVIF, correctly sized, no layout shift.
- Test the full-screen menu with keyboard and touch.
- Lighthouse 90+ on performance, accessibility and best practices (mobile).
- Metadata: title, description, Open Graph image, favicon.

## 14. Build order
1. Tokens, fonts, `content.ts`.
2. Header, FullscreenMenu, Hero, Idea. Get the slide-over working.
3. Principles, Proof.
4. Studio COKA with the slider and lightbox (the main piece).
5. Learn, Impact, Voice, ELEvated.
6. Where next, About, Contact and footer.
7. Responsive pass on a real phone, keyboard pass, contrast check, Lighthouse.
8. README, deploy, test the live link.

## 15. Definition of done
- Live link works on mobile and desktop.
- No placeholders, no invented content. Every fact matches her LinkedIn or material she supplied, and uncertain numbers are confirmed with Crystal.
- Slide-over works on desktop; normal scroll on phones and with reduced motion.
- Repo has a clear README. 200-word note ready: the connecting idea, why this hierarchy, why this stack.

---

## Appendix: starter CSS (all UI tokens, base styles, motion)

Values were reconstructed from the mock, so refine against the approved design. Fonts load with `next/font` in `layout.tsx` and expose `--font-display` and `--font-body`. Do not use `@import`.

```css
/*
  Crystal Kizor: starter styles
  Split into src/styles/tokens.css, globals.css and motion.css.
  Values were reconstructed from the mock, so refine against the approved design.
  Fonts: load with next/font in layout.tsx (no @import). Expose them as
  --font-display and --font-body.
*/

USE TAILWIND NEVER RAW CSS SYLES
:root {
  /* Colours */
  --color-canvas: #F3EEE5;
  --color-surface: #E8E0D4;
  --color-surface-muted: #D5C8B7;
  --color-sand: #B5A18A;
  --color-taupe: #C2AD96;
  --color-clay: #A75F3B;
  --color-clay-hover: #8F4D30;
  --color-ink: #28251F;
  --color-stone-dark: #302B25;
  --color-text-muted: #71685E; /* ONLY on canvas or surface. Use ink on taupe/sand. */
  --color-border: #C9BDAE;
  --color-border-dark: #62584D;
  --color-white-warm: #FAF7F1;
  --color-overlay: rgb(40 37 31 / 38%);

  /* Typography (next/font sets these two variables) */
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;

  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  --leading-tight: 0.92;
  --leading-heading: 1.02;
  --leading-body: 1.6;

  --tracking-tight: -0.045em;
  --tracking-normal: 0;
  --tracking-label: 0.12em;

  --type-hero: clamp(3rem, 8vw, 7rem);
  --type-h1: clamp(2.75rem, 6vw, 6rem);
  --type-h2: clamp(2.375rem, 5vw, 5rem);
  --type-h3: clamp(1.875rem, 3vw, 3rem);
  --type-body-lg: 1.125rem;
  --type-body: 1rem;
  --type-small: 0.875rem;
  --type-label: 0.75rem; /* 12px minimum */

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  --space-40: 160px;

  /* Layout */
  --container-max: 1600px;
  --content-max: 1360px;
  --reading-max: 680px;
  --page-gutter: clamp(24px, 5vw, 80px);
  --section-space: clamp(64px, 10vw, 160px);
  --header-height: 88px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 20px;
  --radius-pill: 999px;

  /* Borders and shadows (use shadows sparingly) */
  --border-thin: 1px solid var(--color-border);
  --border-dark: 1px solid var(--color-border-dark);
  --shadow-soft: 0 8px 32px rgb(40 37 31 / 8%);
  --shadow-image: 0 16px 48px rgb(40 37 31 / 12%);

  /* Motion */
  --motion-fast: 160ms;
  --motion-normal: 240ms;
  --motion-slow: 500ms;
  --motion-cinematic: 800ms;
  --motion-ease: cubic-bezier(0.22, 1, 0.36, 1);
}

@media (max-width: 767px) {
  :root {
    --header-height: 72px;
  }
}

/* ===================== globals.css ===================== */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--header-height);
}

body {
  margin: 0;
  background: var(--color-canvas);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--type-body);
  line-height: var(--leading-body);
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
.display-type {
  margin: 0;
  font-family: var(--font-display);
  font-weight: var(--font-regular);
  line-height: var(--leading-heading);
  letter-spacing: var(--tracking-tight);
  text-wrap: balance;
}

img,
video {
  display: block;
  max-width: 100%;
}

img {
  height: auto;
}

a {
  color: inherit;
  text-underline-offset: 0.2em;
}

button,
input,
textarea,
select {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

:focus-visible {
  outline: 3px solid var(--color-clay);
  outline-offset: 4px;
}

/* Clay is too dark to see on dark surfaces, so use sand there */
.section--dark :focus-visible,
.menu :focus-visible {
  outline-color: var(--color-sand);
}

.container {
  width: min(calc(100% - 2 * var(--page-gutter)), var(--content-max));
  margin-inline: auto;
}

.section {
  padding-block: var(--section-space);
}

.section--ivory { background: var(--color-canvas); }
.section--stone { background: var(--color-surface); }
.section--taupe { background: var(--color-surface-muted); }

.section--dark {
  background: var(--color-stone-dark);
  color: var(--color-white-warm);
}

.label {
  font-size: var(--type-label);
  font-weight: var(--font-semibold);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
}

.button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 24px;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  font-size: 0.9375rem;
  font-weight: var(--font-semibold);
  text-decoration: none;
  transition:
    background-color var(--motion-normal) var(--motion-ease),
    color var(--motion-normal) var(--motion-ease),
    border-color var(--motion-normal) var(--motion-ease);
}

.button--primary {
  background: var(--color-clay);
  color: var(--color-white-warm);
}
.button--primary:hover { background: var(--color-clay-hover); }

.button--secondary {
  border-color: var(--color-ink);
  background: transparent;
  color: var(--color-ink);
}
.button--secondary:hover {
  background: var(--color-ink);
  color: var(--color-white-warm);
}

.button--on-dark {
  background: var(--color-sand);
  color: var(--color-ink);
}

.image-frame {
  overflow: hidden;
  border-radius: var(--radius-lg);
}
.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ===================== motion.css ===================== */

/* Slide-over: the next section slides up and covers the current one.
   Applies to Hero, Idea, Principles, Proof only.
   Each .slide needs an OPAQUE background (colour or full-bleed image)
   and a higher z-index than the one before (set inline from its index).
   Never put overflow:hidden on an ancestor of .stack. */
.stack > .slide {
  position: sticky;
  top: 0;
  min-height: 100svh;
}

/* Fade-up reveal (toggled by IntersectionObserver in Reveal.tsx) */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity var(--motion-slow) var(--motion-ease),
    transform var(--motion-slow) var(--motion-ease);
}
.reveal.show {
  opacity: 1;
  transform: none;
}

/* Phones: normal scrolling, fade-ins stay */
@media (max-width: 767px) {
  .stack > .slide {
    position: relative;
  }
}

/* Reduced motion: no slide-over, no reveal, no smooth scroll */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .stack > .slide { position: relative; }
  .reveal { opacity: 1; transform: none; transition: none; }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```