# Samuel Oliver — Portfolio

Personal portfolio for technical product leadership, backend engineering, AI automation, enterprise delivery, and venture building across Nigeria and the UK. The engineering stack includes PHP, React.js, Vue.js, MySQL, TypeScript, and Docker.

## Preview locally

This is a static site with no build step or package installation. From the repository root, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

## Main files

- `index.html` — selected work, nine-role career timeline, interactive engineering studio, workflow playground, five venture and independent-work profiles, About, certifications, education, and contact.
- `styles.css` — responsive dark design with lime, cream, blue, and violet accents.
- `app.js` — canvas sculpture, project and career filters, five detail stories, workflow playback, education and code tabs, local API simulation, code animation, mobile navigation, motion controls, and contact actions.
- `assets/favicon.svg` — site icon.

## Content and interaction

Selected work covers Waya Links, APM Terminals / Maersk, and Mailcredo. The career timeline can be filtered by product, engineering leadership, or operations and delivery. Expand a role to read its context. Waya Links ended in August 2026. The APM history has two distinct roles: IT Support (January 2025–January 2026) and Application Support Specialist (February–August 2026).

Curably and Andora have detailed venture profiles; Zipp Technologies, Limen, and GoBrand Technologies appear as expandable notes. Fundraising figures are targets and accelerator references describe applications. Limen is a concept.

Certifications are always visible in a dedicated section with full credential names, providers, exam codes, and COBIT alignment. PMP is marked in progress, with Q3 2026 identified as its original target. Education tabs separate academic and professional training from current learning. The Miva master's programme and PMP are labelled in progress. The About text reflects the corrected career dates and a combined product leadership and backend engineering profile.

The code studio contains five illustrative examples: PHP, React with TypeScript, Vue, MySQL, and Docker. It supports keyboard tab navigation and replayable code animation. The request explorer filters sample portfolio records, animates the request stages, and produces JSON in the browser. It does not execute PHP or connect to a database. Motion-off mode returns the sample result immediately.

The redesigned hero combines kinetic typography, floating code, animated gradients, and a particle sculpture with Product, Automation, and Engineering perspectives. The sculpture supports dragging, rotation buttons, Scatter/Reassemble, Boost, and keyboard-accessible perspective tabs. Moving technology bands, reactive cards, animated headings and facts, skill links into code examples, a desktop section navigator, and contact orbits carry motion through the page. Decorative animation can be paused; reduced-motion preferences are respected. Canvas animation pauses outside the viewport. Education tabs support arrow keys, Home, and End. Contact topics prepare an email draft in the visitor's mail client; the site does not send messages or collect form submissions.

The homepage and source files live directly at the repository root. Obsolete pages and assets have been removed. Google Fonts is loaded externally with system-font fallbacks. The source résumé is not included.

The ChatGPT-hosted site is managed separately. This repository does not contain its hosting identity or deployment credentials. To deploy elsewhere, serve the repository root and update the canonical/Open Graph URLs in `index.html` to the new website address.

## Responsive behavior

Layout and touch controls were checked at 320, 360, 390, 430, 768, and 1024 pixels wide, plus 844 × 390 landscape. Navigation collapses into a scrollable menu on phones and tablets. Buttons and controls have at least 44-pixel tap targets in these layouts. The workflow player stacks on phones, dialogs fit the available viewport, code scrolls within its editor, and the contact address can wrap on narrow screens. Native page zoom remains available.
