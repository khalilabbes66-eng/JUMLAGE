# AGENTS.md

## Project Overview

Institutional website for the ENMV–ENVF twinning project
(2025–2028).

The website must be bilingual (French and English),
responsive, accessible, secure and maintainable.

## Technology Stack

- Astro
- TypeScript
- Tailwind CSS
- Lucide Icons
- Directus CMS
- PostgreSQL
- Docker for local development
- Vercel for frontend hosting
- Git and GitHub

## Design System

Follow the 60-30-10 color distribution:

- 60% Cloud white: #F5F5F7
- 30% Carbon black: #18181B
- 10% Royal blue: #2563EB

Carbon black is also the body ink. Supporting colors are muted text #52525B,
dividers #D4D4D8, white surfaces #FFFFFF, and blue interaction states #1D4ED8.

Use Plus Jakarta Sans Variable, self-hosted under the SIL Open Font License.
Use large fluid headings, generous whitespace, solid surfaces, and thin borders.
Reserve royal blue for priority actions, current states, and keyboard focus.

Use restrained transitions and honor reduced-motion preferences.
Use authentic, rights-cleared photography with accurate captions and credits.
Preserve official institutional logos and their colors.
Maintain accessible color contrast.

## Development Rules

- Keep the architecture modular and maintainable.
- Use TypeScript with strict typing.
- Prefer reusable Astro components.
- Minimize client-side JavaScript.
- Avoid unnecessary dependencies.
- Never hardcode secrets or credentials.
- Do not overengineer solutions.
- Follow existing project conventions.
- Do not change the technology stack without approval.

## Functional Requirements

The website contains eight main sections:

1. Home
2. Project
3. Partners and Governance
4. Work Programme
5. News and Events
6. Results and Resources
7. Communication and Media
8. Contact

Content must be manageable by non-technical editors
through the CMS.

## Internationalization

- French and English support.
- Separate localized URLs.
- Independent translation publication status.
- Never publish unreviewed automatic translations.

## Security

- Enforce administrator and editor permissions.
- Never expose unpublished content.
- Protect unauthorized files at storage level.
- Never expose private API tokens to the frontend.
- Protect the staging environment with authentication.
- Do not publish unapproved institutional content.

## Quality Standards

- Target WCAG 2.2 AA accessibility.
- Mobile-first responsive design.
- Optimize images and loading performance.
- Use semantic HTML.
- Implement SEO metadata.
- Run available checks and builds before completing changes.

## Agent Workflow

- Inspect the existing code before making changes.
- Read relevant documentation in docs/.
- Work incrementally.
- Stay within the requested task.
- Explain important architectural decisions.
- Report errors and unresolved issues.
- Do not commit, push or deploy without approval.
- Never invent institutional information.

## Source of Truth

The official project requirements take priority over
assumptions or design suggestions.

Refer to docs/REQUIREMENTS.md for detailed requirements.
