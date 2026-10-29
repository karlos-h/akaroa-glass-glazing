# Changelog

All notable changes to this project are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Work required before this site can go live. Nothing here is started.

### To do

- Replace the placeholder phone number `027 000 0000` with Johnny's real
  number, in the visible text, the eight `tel:+64270000000` hrefs, and the
  status message in `js/main.js`.
- Confirm and replace the placeholder email `johnny@akaroaglass.co.nz`.
- Replace the three placeholder testimonials with real, permissioned customer
  quotes, and delete the `.quote-flag` spans that mark them as placeholders.
- Add the four real photographs listed in `images/README.txt` and swap each
  `<div class="ph">` placeholder block for an `<img>` using the drafted alt
  text already stored in its `data-alt` attribute.
- Connect the quote form to a form handler (Formspree, Netlify Forms, or
  similar). It currently validates input and then tells the visitor plainly
  that it is not connected.
- Build the four linked pages that do not yet exist: `about.html`,
  `services.html`, `gallery.html`, `contact.html`.
- Add a favicon set and an `og:image` for link previews.
- Confirm with the client whether trading hours, company registration details
  or insurer panel memberships should appear on the site.

## [0.1.0] - 2026-10-30

First build of the homepage. Content and imagery are deliberately
placeholders — see Unreleased above for what must be replaced before launch.

### Added

- Single-page homepage (`index.html`) with eight sections: header and nav,
  hero, services, about teaser, word of mouth, service area, contact, footer.
- Mobile-first stylesheet (`css/styles.css`) with breakpoints at 40em, 60em
  and 80em, plus print and `prefers-reduced-motion` handling.
- Vanilla JavaScript (`js/main.js`) as progressive enhancement only: mobile
  nav toggle, sticky-header shadow, quote-form validation, footer year.
- Brand identity: Harbour Deep / Peninsula Green / Glass Aqua / Driftwood Sand
  / Basalt Charcoal / Cloud White palette, Fraunces and Public Sans from
  Google Fonts, and a roofline-over-window-pane logo mark
  (`assets/logo.svg`, also inlined in the header and footer).
- Six service cards with hand-drawn inline SVG line icons: window and door
  repairs, kitchen splashbacks, mirrors, shower glass, commercial work,
  insurance work.
- Service area section listing Banks Peninsula and greater Christchurch
  coverage explicitly rather than vaguely.
- Styled, clearly-labelled placeholder blocks standing in for the four
  photographs, so unreplaced images cannot be mistaken for finished work.
- `images/README.txt` naming each required photo with crop and size notes.
- Open Graph and Twitter card tags, so links pasted into local Facebook
  groups unfurl properly. `og:image` still pending a real photo.
- `<noscript>` fallback in the quote form pointing at the phone number.
- `.claude/launch.json` so the dev server starts on port 5173.

### Accessibility

- WCAG AA or better for every text and background pairing used. Measured
  ratios are documented in the header comment of `css/styles.css`.
- Glass Aqua is restricted to dark backgrounds and non-text use, because it
  only reaches 1.7:1 against Cloud White.
- Skip link, landmark elements, labelled sections, single `h1` with correct
  heading order, bound form labels, visible focus rings, and Escape-to-close
  on the mobile nav.
- `lang="mi"` on the te reo Māori terms, each glossed in plain English on
  first use.
- Works with JavaScript disabled: an inline script sets a `.js` class and the
  mobile nav only collapses under it, so without JS the nav stays expanded
  and the hamburger — which would do nothing — is hidden.

### Verified

- No horizontal overflow at 320, 375, 768 or 1280 pixels wide.
- No duplicate IDs, no dead in-page anchors, no unlabelled controls, no
  console errors.
- Form validation: an empty submit flags all three required fields and moves
  focus to the first; a filled submit reports that no backend is connected.
- Navigation renders and remains usable with JavaScript disabled.
- Reviewed before the first commit. Findings fixed in this version rather
  than carried: `<meta charset>` moved into the first 1024 bytes of the
  document, mobile nav made usable without JavaScript, `matchMedia` listener
  feature-detected so older Safari no longer throws and disable the rest of
  the script, focus ring inside the quote form corrected from 1.7:1 to
  9.9:1, "Call Johnny" nav button no longer stripped of its padding by a
  specificity clash, `tel:` hrefs corrected from 10 digits to 11, and
  `object-fit` added so swapping in real photos crops instead of stretching.

[Unreleased]: https://github.com/karlos-h/akaroa-glass-glazing/compare/v0.1.0...develop
[0.1.0]: https://github.com/karlos-h/akaroa-glass-glazing/releases/tag/v0.1.0
