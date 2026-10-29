# Akaroa Glass and Glazing Website

**Purpose:** Static marketing site for a local glazier business — Johnny Chambers, based in Akaroa, covering Banks Peninsula and all of greater Christchurch. Commissioned client work, not open source.

**Status:** Homepage built, not launched. Every phone number, email, testimonial and image on the page is a placeholder. See `CHANGELOG.md` → Unreleased for the full list of what must be replaced first.

**Stack:** HTML5, CSS3, vanilla JavaScript. No build step, no dependencies, no backend. Hostable on any static host.

**Layout:**
- `index.html` — single page: header/nav, hero, services, about teaser, word of mouth, service area, contact, footer. The launch checklist lives in a comment block at the top of the file.
- `css/styles.css` — mobile-first. Breakpoints at 40em, 60em, 80em. Measured WCAG contrast ratios are documented in the header comment.
- `js/main.js` — progressive enhancement only: nav toggle, header shadow, form validation, footer year.
- `assets/logo.svg` — the logo mark, also inlined in the header and footer of `index.html`.
- `images/` — currently holds only `README.txt` naming the four photos still needed. All images on the page are styled placeholder blocks.
- `.claude/launch.json` — dev server config for the Claude Code browser preview (port 5173).

**How to run:**
- Open `index.html` directly in a browser, or
- `python -m http.server 5173` from the project root, then visit `http://localhost:5173`

**Branches:**
- `main` — released state. Only ever receives merges from `develop`.
- `develop` — integration branch. Do day-to-day work here, or on short branches cut from it.

**Rules:**
- Keep HTML semantic and plain; no frameworks.
- CSS is mobile-first, no preprocessor. Maintain WCAG AA contrast.
  Glass Aqua (`#8FC7C7`) is only 1.7:1 on Cloud White — never use it for text or focus rings on light backgrounds.
- JS is progressive enhancement only. The page must work without it: the inline script in `<head>` sets a `.js` class, and the mobile nav only collapses under that class.
- Placeholder images keep their `ph` / `hero__media` classes when swapped for real `<img>` tags, so the `object-fit` cropping still applies.
- The placeholder phone number and email are hardcoded in `js/main.js` as well as `index.html`. Replace both.
- Update `CHANGELOG.md` with every notable change.
