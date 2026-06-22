# Agricom Assurance — Next.js + Tailwind CSS

A production-grade rebuild of the Agricom Assurance marketing site (the glassy,
green-led "v1" design) as a **Next.js 16 App Router** application with
**TypeScript** and **Tailwind CSS**. Every screen is a real React component.

## Quick start

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

Other scripts:

```bash
npm run build       # production build
npm start           # serve the production build
npm run lint        # Next.js core-web-vitals + TypeScript ESLint
npm run typecheck   # strict TypeScript validation
```

> **Node 20.9+ is required** by Next.js 16. Fonts (Sora + Plus Jakarta Sans)
> and Unsplash imagery load over the network, so keep internet access available
> during development and production builds.

## Tech

| | |
|---|---|
| Framework | Next.js **16.2.9** (App Router, React Server Components) |
| UI | React **19.2** |
| Styling | Tailwind CSS **3.4** (`tailwind.config.ts`) |
| Fonts | `next/font/google` — Sora and Plus Jakarta Sans |
| Images | `next/image` with remote Unsplash patterns |
| Language | TypeScript **6**, strict mode, `@/*` path alias |

## Architecture

```text
app/                         # App Router — one folder per route
  layout.tsx                 # Fonts, PageBackground, Navbar, Footer
  globals.css                # Tailwind layers and shared visual classes
  icon.svg                   # Favicon
  page.tsx                   # Home (/)
  services/page.tsx          # /services
  about/page.tsx             # /about
  portfolio/page.tsx         # /portfolio
  gallery/page.tsx           # /gallery
  contact/page.tsx           # /contact

components/
  layout/                    # Site-wide layout components
  ui/                        # Reusable UI primitives
  sections/                  # Composed page sections
  icons/index.tsx            # Brand SVG icons and typed icon registry

lib/
  content.ts                 # Typed copy, imagery, and site data

tailwind.config.ts           # Brand tokens: colors, fonts, radii, shadows
next.config.ts               # Next.js configuration and image hosts
eslint.config.mjs            # ESLint flat configuration
```

### Server and Client Components

Pages and most sections are Server Components. Components that require browser
state explicitly use `"use client"`:

- `Navbar` — mobile menu and active route
- `Reveal` — viewport animation
- `ProjectGrid` and `GalleryGrid` — filters and gallery lightbox
- `ContactForm` and `NewsletterForm` — local form state

### Design tokens

The existing visual system is preserved in `tailwind.config.ts` and
`app/globals.css`. Shared composite classes include `.glass`, `.glass-dark`,
`.text-grad`, `.page-bg`, and `.field-input`.

## Editing content

All copy and imagery is centralized in `lib/content.ts`. To replace stock
photography, update the Unsplash URL or add a local file under `public/`. Add
new remote image hosts to `next.config.ts`.
