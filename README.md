# ENMV–ENVF Twinning Project

## Project structure

French is the default locale and `/` redirects to `/fr/`. The French and English
homepages, project, partners and governance, work programme, news, results and
resources, media, and contact pages use the shared layout. Work Package pages,
results subsections, and published article pages use the nested locale routes.

| Directory | Purpose |
| :-------- | :------ |
| `src/pages/` | Localized homepages and shared overview and detail route definitions. |
| `src/components/layout/` | Shared page structure, such as headers and footers. |
| `src/components/ui/` | Reusable interface components. |
| `src/components/sections/` | Components for institutional website sections. |
| `src/layouts/` | Shared page layouts. |
| `src/i18n/` | Locale definitions and shared interface translations. |
| `src/lib/` | Shared TypeScript utilities and service integrations. |
| `src/styles/` | Global styles and design tokens. |
| `src/types/` | Shared TypeScript types. |
| `src/content/institutional.ts` | Local institutional records and Work Package activities. |
| `public/logos/`, `public/images/`, `public/fonts/` | Static assets served at their original paths. |
| `docs/` | Project requirements and technical documentation. |

See the [Astro project structure guide](https://docs.astro.build/en/basics/project-structure/) for details on its file conventions.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npx astro check`         | Check Astro and TypeScript files                  |

## Content and future CMS integration

The TypeScript models live in `src/types/institutional.ts`. Replace the local
sources with server-side CMS reads when approved. Apply publication and authorization
filters before handing records or file links to a renderer. Article slugs must be
unique within each language. `translationKey` pairs published translations, and
the homepage selects the latest three approved articles for its own locale.
Person records use one ID across directories. Work Package and activity links use
stable IDs. Media can reference an existing article or document record.

Use stable public URLs for authorized downloads and a separate authenticated
delivery flow for restricted files when that capability is available. Keep private
files out of `public/` and filter them out of any future static build input. The
document library displays approved documents and supports filtering by language.
The competency and curriculum views require approved data per locale.

Approval is still needed for team profiles, contact details, news, resources, media,
competency descriptions, and curriculum data. The official WP2 funding disclaimer
wording is pending because `docs/REQUIREMENTS.md` was unavailable. Contact uses
verified institution links pending approval of any form or delivery service.
