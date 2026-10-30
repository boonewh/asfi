# October 2026 maintenance

Next.js/config 16.4.3, React/DOM 19.3.1, Headless UI 2.2.10, Lucide 1.65.0,
Tailwind/PostCSS plugin 4.3.3, PostCSS 8.5.32 and ESLint 10.14.0 are pinned with
Node 24.22.1/npm 11.17.0. Formspree 3.0.0 and Heroicons 2.2.0 remain current.
The removed `next lint` command is replaced by real flat-config ESLint.

Five libraries had no source references and are removed: Radix accordion/dialog,
Framer Motion, React Responsive Carousel and Swiper. Existing accordions and the
hero slider use local React state/CSS, so their behavior is retained. FlatCompat
is no longer needed. Compatible transitive patch updates are captured in the lockfile.

## Specific corrections

- Contact messages use the **ASFI Construction Contact Form Submission** subject
  instead of the copied All Seasons Foam label. Formspree destination **xovlrjrp**,
  all field names and recipient configuration are unchanged.
- General provider/network errors are visible in the form; drafts remain intact
  and the user can retry. Field errors, disabled pending state and success remain.
- Three inactive homepage Learn More buttons now link to the corresponding
  culvert, bridge and food-plant pages. The inactive Call/Request Quote buttons
  now use the existing phone number and `/contact`. No call is placed by tests.
- Structured data references the existing `/images/logo.png`, replacing the
  nonexistent `/images/asfi-logo.png`. Business facts, schemas and page metadata
  are otherwise preserved.
- Slider and mobile-menu controls have accessible names. Explicit font defaults
  retain the site's existing Tailwind 4.1 appearance across the tooling upgrade.

## Validation and boundaries

Baseline build and six-page/11-image desktop/mobile checks passed, reproducing
the missing schema logo and invisible form-wide errors. The baseline known npm
advisory count was **14 entries: 3 critical, 9 high, 2 moderate**.
After compatible patch refreshes, the full npm audit reports **zero**.

Tooling note: Next's current config accepts ESLint 10, while its import/React/a11y
plugins still advertise ESLint 9 in their peer metadata. npm prints peer warnings;
clean installation and the actual lint command succeed without `--force` or
`--legacy-peer-deps`. This is an upstream development-tool metadata follow-up,
not an npm security advisory or a suppressed application lint failure.

`npm run lint`, production build and `npm run check:upgrade` are the release
checks. CI repeats on Ubuntu 24.04 with pinned actions and no application secrets.
The check intercepts every form request, tracking request and YouTube embed,
including when pointed at the hosted site. It checks each FAQ, previous/next slide
controls, desktop/mobile navigation, native validation, provider/network failure,
draft retention, disabled pending state and success. It verifies all five repaired
calls to action without placing a telephone call or sending a real inquiry.

No database, payment, form-destination, tracking-ID, video-ID, business-content or
original unpublished-file changes are part of this upgrade. The separate
original working copy remains unchanged and must be reconciled before future
development there. Local baseline results and release/deployment identifiers are
recorded in the central upgrade workspace report.
