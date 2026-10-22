# Samuel Oliver — Portfolio

Personal portfolio for technical product leadership, AI automation, enterprise workflows, and Curably.

## Preview locally

This is a static site with no build step or package installation. From the repository root, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

## Main files

- `index.html` — homepage, projects, workflow playground, background, and contact sections.
- `styles.css` — responsive dark design with lime, blue, and violet accents.
- `app.js` — canvas sculpture, project filters, case studies, workflow playback, motion controls, and contact actions.
- `assets/favicon.svg` — site icon.

The sculpture supports dragging, rotation buttons, and keyboard-accessible perspective tabs. Decorative animation can be paused; reduced-motion preferences are respected. Canvas animation pauses outside the viewport.

The redesigned homepage and its source files live directly at the repository root. All old secondary pages, images, fonts, scripts, stylesheets, and the unused PHP mail handler have been removed. Google Fonts is loaded externally with local system-font fallbacks.

The ChatGPT-hosted site is managed separately. This repository does not contain its hosting identity or deployment credentials. To deploy elsewhere, serve the repository root and update the canonical/Open Graph URLs in `index.html` to the new website address.
