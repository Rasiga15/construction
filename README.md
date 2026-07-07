# Eezhaa Constructions — Website

A modern, responsive, frontend-only construction company website built with **React + TypeScript + Tailwind CSS + React Router**.

## Design tokens

- **Primary — Steel Blue** (`steel-900` → `steel-50`): the dominant brand colour, used for the navbar, footer, headings and dark sections.
- **Accent — Rebar Yellow** (`rebar-500`): CTA buttons, highlights, active states — a nod to the TATA TISCON signage yellow.
- **Micro-accent — Skyline Red** (`skyline`): used sparingly, reserved for the logo mark if you want it.
- **Neutral — Concrete Gray** (`concrete-50` → `concrete-500`): body backgrounds and muted text.
- **Signature motif — "rebar divider"**: a twisted-steel-rod gradient bar (`.rebar-divider` / `bg-rebar-gradient`) used as a section divider throughout, referencing the reinforcement bar in the brand's own signage.
- **Type**: Oswald (display/headings, industrial condensed) + Inter (body) + IBM Plex Mono (labels/stats).

All tokens live in `tailwind.config.js` — change `steel` and `rebar` hex values there to shift the whole palette.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

The `dist/` folder can be deployed to any static host (Netlify, Vercel, GitHub Pages, S3, etc.) — there is no backend.

## Before going live — please update

1. **`src/data/site.ts`** — replace `phoneRaw`, `whatsappNumber`, `email`, `address` and social links with your real details. `whatsappNumber` must be in international format with no `+`, spaces or leading zeros (e.g. `919876543210`).
2. **Images** — all photos currently point to placeholder Unsplash stock photos so the site is fully previewable out of the box. Swap the `image` URLs in `src/data/projects.ts`, `src/data/gallery.ts`, `src/data/blog.ts` and the hero slides in `src/components/home/HeroCarousel.tsx` for your own project photography.
3. **`src/data/projects.ts`, `services.ts`, `testimonials.ts`, `blog.ts`, `gallery.ts`** — replace sample copy with your real projects, services and client quotes.
4. **Map embed** — `src/pages/Contact.tsx` uses a query-based Google Maps embed (`mapEmbedQuery` in `site.ts`). For a pinned address, replace it with an embed URL from Google Maps' own "Share → Embed a map" tool.

## How the WhatsApp / email integration works

- The floating WhatsApp button (bottom-right, every page) opens `https://wa.me/<number>` in a new tab — instant chat, no pre-filled text.
- The **Contact** page's enquiry form has two buttons:
  - **Send Enquiry via WhatsApp** — builds a formatted message from the form fields and opens `https://wa.me/<number>?text=...`.
  - **Send via Email** — opens the visitor's default mail client via a `mailto:` link with the subject and body pre-filled.
- Both are pure frontend (`src/utils/whatsapp.ts`, `src/utils/email.ts`) — no server or API key required.

## Project structure

```
src/
  components/
    layout/     Navbar, Footer, WhatsAppButton, ScrollToTop, PageTransition
    ui/         Button, SectionHeading, AnimatedSection (scroll-reveal wrapper)
    home/       Hero carousel, Intro, Services, WhyChooseUs, FeaturedProjects, Testimonials, CTA
    projects/   ProjectCard, ProjectFilter
    contact/    EnquiryForm
  data/         Sample content — services, projects, testimonials, gallery, blog, site info
  hooks/        useReveal (scroll animations), useSeo (per-page title/meta)
  pages/        Home, About, Projects, Gallery, Blog, Contact, NotFound
  utils/        whatsapp.ts, email.ts
```

## Notes

- Animations respect `prefers-reduced-motion`.
- Every page sets its own `<title>` and meta description via the `useSeo` hook for basic SEO.
- Images use `loading="lazy"` where appropriate.
- No `localStorage`/`sessionStorage` is used anywhere — all state is in-memory React state.
