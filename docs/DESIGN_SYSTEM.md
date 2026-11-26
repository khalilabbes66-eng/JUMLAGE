# ENMV–ENVF design system

Large editorial headings, a quiet masthead, and asymmetric introductions establish hierarchy. Use whitespace and thin rules to group information. The Tailwind theme in `src/styles/global.css` is the source for colors, typography, widths, spacing, and corner radius.

## Brand palette

Use the 60–30–10 proportions as an overall visual balance across a page.

| Share | Token | Value | Use |
| --- | --- | --- | --- |
| 60% | `canvas` | `#F5F5F7` | Cloud white backgrounds and open space. |
| 30% | `primary`, `ink` | `#18181B` | Carbon black headings, text, controls, and dark sections. |
| 10% | `accent` | `#2563EB` | Royal blue priority actions, active indicators, and keyboard focus. |
| | `accent-hover` | `#1D4ED8` | Hover and pressed states for filled blue actions. |
| | `muted` | `#52525B` | Supporting text, captions, and control boundaries on light surfaces. |
| | `divider` | `#D4D4D8` | Thin, decorative borders and rules. |
| | `surface` | `#FFFFFF` | Masthead, dropdowns, and content surfaces. |

Use solid backgrounds. The masthead presents the approved logos on a light background in the order ENMV, ENVF, ENVT, OMSA. Use labeled placeholders while files are unavailable. Add each approved file to `public/logos/` and supply its intrinsic dimensions in `InstitutionalBanner.astro` to preserve its proportions and colors.

## Typography, grid, and spacing

- Plus Jakarta Sans Variable supports weights 200–800. `BaseLayout` preloads the Latin WOFF2 used by English and French. The font uses `font-display: swap` and a system sans-serif fallback.
- `text-body` scales from 1 to 1.125 rem with a 1.65 line height. `text-heading` scales from 1.5 to 2.75 rem, `text-page` from 2.125 to 4.75 rem, and `text-display` from 2.5 to 7 rem using `clamp()`. Choose the HTML heading level for document order and the `size` prop for its visual role. Use `editorial-label` for short uppercase context labels.
- `Container` caps the inner content at 85 rem with 1.125 to 4 rem fluid gutters. `editorial-grid` uses one column below 768 px and 12 tracks above. Image-led introductions use a 5/7 split at desktop widths. Keep body prose within 65 characters per line.
- `Section` uses 3.5 to 7 rem of fluid vertical spacing. Use `gap-grid` between columns and `gap-block` or `p-block` for related content. Controls have a 0.25 rem radius. Cards use a flat surface and a thin neutral border.

## Contrast and interaction

Use the following foreground and background pairs. The ratios are calculated using WCAG relative luminance. Aim for at least 4.5:1 for normal text and 3:1 for large text and essential control boundaries. [WCAG 2.2 contrast requirements](https://www.w3.org/TR/WCAG22/#contrast-minimum) · [Non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast)

| Pair | Contrast |
| --- | --- |
| Carbon on cloud white | 16.27:1 |
| White on carbon | 17.72:1 |
| Muted text on cloud white | 7.10:1 |
| Muted text on white | 7.73:1 |
| Royal blue on cloud white | 4.75:1 |
| White and royal blue | 5.17:1 |
| White on hover blue | 6.70:1 |
| Royal blue against carbon | 3.43:1 |

Use white labels on filled blue actions. Use blue text on light surfaces for active navigation and add a visible rule or underline. The blue outline and white inner ring mark keyboard focus. `tap-target` reserves at least 44 × 44 CSS px for standalone controls. `interactive-color` runs 150 ms color transitions when motion is allowed.

## Navigation and layout patterns

- Desktop navigation groups the project and publication sections in native disclosures from 1024 px. Home and Contact are direct links. Below that width, the native Menu disclosure lists all eight routes in one column, then two from 768 px. Enter and Space toggle disclosures. Escape closes them and returns focus. Desktop disclosures also close when focus or a click moves outside. Blue indicators and `aria-current` identify the current route.
- The language switcher shows short locale codes on small screens with full accessible names, and full names from 640 px. Keep equivalent section routes in the shared route definitions. Pass a published `alternatePath` for an individual article. Use `null` when a translation is unavailable so the switcher links to the other language’s home page and omits alternate-page metadata.
- Use `EditorialLayout` for landing pages and articles. It provides a single `h1`, an optional introduction and action, a media slot, and a restrained body column. Set `as="article"` for standalone articles and use ordered subheadings, semantic lists, and figure captions. The homepage numbers the seven destinations beyond Home in its site index. Use numbering for ordered content or navigation sequences.
- Use authentic photography with a verifiable source and usage rights. Preserve intrinsic dimensions, use responsive sources, and lazy-load photos below the initial viewport. `HeroSection` reserves a responsive 3:2 area for a future institutional photo. Add the approved image to `public/images/` and pass a figure to the hero's `media` slot in `HomePage.astro` with localized alt text and any required caption or credit.
- For an empty section, state plainly that no content is published in the current language and offer a useful onward link. The layout uses a static message and a secondary link to the local home page.
- Use `InstitutionalPage` for bilingual institutional overviews and detail pages. It pairs the internal hero with breadcrumbs and supports in-page contents links for longer sections.
- News and document catalogues render approved records in HTML. `FilterCatalogue` enhances those lists with labeled controls, result announcements, and pagination. The approved list remains readable with JavaScript disabled.
- Check both locales at 360, 768, 1024, 1440, and 1920 px. Check the disclosure, language switching, skip link, keyboard focus, reduced motion, and horizontal scrolling when navigation or typography changes.

## Components

All six components live under `src/components/ui/` and render HTML without client scripts. Pass French or English labels and content from the route that uses them.

| Component | Use |
| --- | --- |
| `Button.astro` | Use `href` for navigation or pass native button attributes for an action. The button defaults to `type="button"`. Variants are `primary`, `secondary`, and `accent`. |
| `Container.astro` | Align content to the shared width and responsive gutters. |
| `Section.astro` | Group related content and apply fluid vertical spacing. It includes a `Container` and can render as a `header` for page introductions. Name semantic sections with `aria-labelledby` when useful. |
| `SectionHeading.astro` | Pass `heading` and an optional `description`. `headingId` sets the heading ID. Choose `size="display"`, `"page"`, or `"section"` independently of the heading level. |
| `Card.astro` | Use the default `article` for stand-alone content or `as="div"` for a visual group. |
| `Badge.astro` | Display a short category or status label. Variants are `primary` and `accent`. |

## Font source

The Plus Jakarta Sans Latin variable WOFF2 and its SIL Open Font License 1.1 are in `public/fonts/`. [Plus Jakarta Sans project](https://github.com/tokotype/PlusJakartaSans) · [Google Fonts distribution](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
