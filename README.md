# Samuel Oliver — Portfolio

Personal portfolio for technical product leadership, AI automation, enterprise delivery, engineering leadership, and venture building across Nigeria and the UK.

## Preview locally

This is a static site with no build step or package installation. From the repository root, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

## Main files

- `index.html` — selected work, eight-role career timeline, workflow playground, six venture and independent-work profiles, About, education, and contact.
- `styles.css` — responsive dark design with lime, cream, blue, and violet accents.
- `app.js` — canvas sculpture, project and career filters, five detail stories, workflow playback, education tabs, mobile navigation, motion controls, and contact actions.
- `assets/favicon.svg` — site icon.

## Content and interaction

Selected work covers Waya Links, APM Terminals / Maersk, and Mailcredo. The career timeline can be filtered by product, engineering leadership, or operations and delivery. Expand a role to read its context.

Curably and Andora have detailed venture profiles; Zipp Technologies, Limen, GoBrand Technologies, and skills training appear as expandable notes. Fundraising figures are targets and accelerator references describe applications. Limen is a concept.

Education tabs separate academic and professional training, certifications, and current learning. The Miva master's programme and PMP are labelled in progress. The About text and current-role labels follow the latest supplied profile.

The sculpture supports dragging, rotation buttons, and keyboard-accessible perspective tabs. Decorative animation can be paused; reduced-motion preferences are respected. Canvas animation pauses outside the viewport. Education tabs support arrow keys, Home, and End. Contact topics prepare an email draft in the visitor's mail client; the site does not send messages or collect form submissions.

The homepage and source files live directly at the repository root. Obsolete pages and assets have been removed. Google Fonts is loaded externally with system-font fallbacks. The source résumé is not included.

The ChatGPT-hosted site is managed separately. This repository does not contain its hosting identity or deployment credentials. To deploy elsewhere, serve the repository root and update the canonical/Open Graph URLs in `index.html` to the new website address.
