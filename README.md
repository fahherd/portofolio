# Fajar Herdiansyah — Portfolio

A cinematic editorial portfolio for **Fajar Herdiansyah**, Full Stack Web Developer.
Built with [Astro](https://astro.build) as a static site: hand-written CSS, design tokens,
minimal client-side JavaScript, and no UI framework.

- **Indonesian** is the default language; **English** is fully supported.
- One editorial home page with anchored sections.
- Localized case-study pages: `/id/karya/[slug]/` and `/en/work/[slug]/`.

---

## Stack

| Area | Choice |
| --- | --- |
| Framework | Astro 7 (static output) |
| Styling | Custom CSS + tokens (`src/styles/`) |
| Fonts | Self-hosted via Fontsource: Instrument Serif, DM Sans, IBM Plex Mono |
| Content | Astro content collection (JSON) |
| Icons | Inline SVG (`src/components/ui/Icon.astro`) |
| SEO | Canonical, hreflang, Open Graph, Twitter cards, JSON-LD, sitemap |

No Tailwind, no GSAP/Lenis, no React/Vue, no runtime i18n library.

---

## Getting started

Requires **Node.js >= 22.23.4**.

```bash
npm install
npm run dev        # http://localhost:4321
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the built site |
| `npm run check` | Astro/TypeScript diagnostics |
| `npm run assets` | Regenerate favicon, touch icon, noise texture, OG image |

---

## Project structure

```text
src/
├─ components/
│  ├─ layout/        Header, MenuOverlay, Footer
│  ├─ pages/         HomeView (home composition)
│  ├─ project/       Cover, cards, grid, meta, gallery, case study
│  ├─ sections/      Hero, Intro, SelectedWork, Expertise, …
│  └─ ui/            Button, ArrowLink, Tag, SectionHeading, Icon, …
├─ content/
│  └─ projects/      Project + repository records (JSON)
├─ data/             Site copy, CV data, navigation, types
├─ i18n/             Locale config + interface dictionary
├─ layouts/          BaseLayout (head, SEO, header, footer)
├─ pages/            Routes (ID/EN, case studies, 404, robots)
├─ scripts/          Small progressive-enhancement modules
├─ styles/           tokens, reset, global, typography, layout, animations
└─ utils/            URL + date helpers
```

Design rules live in `DESIGNSYSTEM.md`; product requirements in `PRD.md`.

---

## Content authoring

All projects are data-driven. Add a JSON file to `src/content/projects/`.

```jsonc
{
  "kind": "case-study",          // "case-study" | "repository"
  "status": "verified",          // "verified" | "draft" (drafts are not listed)
  "order": 1,
  "year": 2026,
  "period": { "start": "2026-04", "end": "2026-07" },
  "category": "web-application",
  "technologies": ["PHP", "CodeIgniter", "Bootstrap", "MySQL"],
  "links": { "live": "https://…", "github": "https://…" },
  "externalUrl": "https://…",   // optional: project lives on another domain
  "cover": {                    // optional real preview image
    "src": "/images/projects/example.webp",
    "alt": { "id": "…", "en": "…" },
    "width": 1600,
    "height": 1000
  },
  "gallery": [],
  "caseStudyStatus": "partial",  // "complete" | "partial" | "pending"
  "copy": {
    "id": { "title": "…", "summary": "…" },
    "en": { "title": "…", "summary": "…" }
  }
}
```

- **`kind: "case-study"`** renders a project card and a dedicated case-study page.
- **`kind: "repository"`** renders as a row in the public repositories list and
  does not get a case-study page.
- **`externalUrl`** marks a project whose real home is another domain. The card
  links directly to it in a new tab, and the localized case-study URL
  (`/id/karya/[slug]/`, `/en/work/[slug]/`) renders a minimal `noindex` redirect
  instead of a case-study page.
- **`cover`** is a real preview image (screenshot). When present, the card shows
  it inside a browser-style frame instead of the typographic cover. Files go in
  `public/images/projects/`; `src` must start with `/images/`.
- Optional case-study sections only render when present: `overview`, `context`,
  `problem`, `objectives`, `role`, `responsibilities`, `architecture`,
  `features`, `challenges`, `outcome`, `galleryNote`.
- The table of contents, section numbering, and page metadata are generated
  automatically from the fields you provide.
- `caseStudyStatus` controls the status badge and the "documentation in
  progress" notice. Keep it honest: do not mark a case study `complete` until
  the content is actually finished.

### Rules for content

This project deliberately avoids invented material. When editing:

- Do not add projects, screenshots, metrics, awards, or achievements that do not
  exist.
- Only claim availability or certification status that is currently true.
- Leave `links` empty rather than guessing a URL.
- Leave `gallery` empty until real screenshots exist — the UI renders an
  intentional typographic placeholder instead.

---

## Localization

- UI strings: `src/i18n/ui.ts`. The English dictionary is type-checked against
  the Indonesian one, so a missing key fails `npm run check`.
- Site copy: `src/data/site.ts` (hero, about, contact) and `src/data/cv.ts`
  (expertise, experience, education, awards, certifications, organizations).
- Routes are prefixed for both languages (`prefixDefaultLocale: true`).
- The home language switcher preserves the current hash; case-study pages map
  ID/EN slugs through `alternateProjectPath()` in `src/utils/url.ts`.
- `/` is a small language gateway that remembers the last choice
  (`localStorage: fh-locale`) and falls back to Indonesian.

All internal links must be built with `homePath()`, `projectPath()`, or
`withBase()` so the deployment base path keeps working.

---

## Replacing placeholder visuals

| Asset | How to replace |
| --- | --- |
| Portrait | Set `site.portrait.src` in `src/data/site.ts` (e.g. `/images/portrait.jpg`) and place the file in `public/images/`. Until then, an intentional monogram plate is shown. |
| Project preview | Add a `cover` object to the project JSON (see above) and place the screenshot in `public/images/projects/`. A 1600×1000 WebP works well. |
| Project screenshots | Add entries to a project's `gallery` array: `{ "src": "/images/projects/…", "alt": { "id": "…", "en": "…" }, "width": 1600, "height": 1000 }`. The first image spans full width. |
| Default social image | Replace `public/images/og-default.jpg` (1200×630) or regenerate it. |
| Favicon / touch icon | Replace `public/favicon.svg` and `public/apple-touch-icon.png`, or edit `scripts/generate-assets.mjs` and run `npm run assets`. |

> `npm run assets` renders text with system fonts (`FreeSerif`, `FreeMono`,
> `FreeSans`) because librsvg cannot load the self-hosted webfonts. For
> pixel-perfect brand assets, export them from a design tool instead.

---

## Deployment

The site is fully static. Two environment variables control URLs:

| Variable | Default | Example |
| --- | --- | --- |
| `SITE_URL` | `https://fahherd.github.io` | `https://fajarherdiansyah.dev` |
| `BASE_PATH` | `/` | `/portofolio` (GitHub Pages project site) |

```bash
SITE_URL=https://example.com BASE_PATH=/ npm run build
```

`SITE_URL` feeds canonical URLs, hreflang, Open Graph, JSON-LD, sitemap, and
`robots.txt`. For a GitHub Pages **project** site, `BASE_PATH` must match the
repository name; for a user site or custom domain, keep it `/`.

### GitHub Pages

A workflow is provided at `.github/workflows/deploy.yml`. It builds on push to
`main` and publishes `dist/`. If the repository is not `fahherd.github.io`,
set `BASE_PATH` in the workflow (or repository variables) to `/<repo-name>`.

---

## Accessibility & performance notes

- Skip link, visible focus states, and semantic landmarks.
- Dialog-based mobile menu with Escape handling and focus restoration.
- All motion is disabled under `prefers-reduced-motion: reduce`.
- Reveal animations are progressive enhancement: content is visible without JS.
- Images use explicit dimensions when provided; covers are typographic, so no
  layout shift.
- Verified: no horizontal overflow from 320px to 1440px, no console errors.

---

## License

Personal portfolio. Content and identity belong to Fajar Herdiansyah.
Code may be referenced for learning; please do not republish the personal
content as your own.
