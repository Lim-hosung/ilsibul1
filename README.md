# A1 Special Steel Corporate Website

This is a Next.js (App Router) project built for A1 Special Steel, featuring a modern, industrial-grade corporate design pattern using TailwindCSS. 

## Features
- **Next.js 13 App Router** & TypeScript
- fully responsive design with **TailwindCSS**
- Accessible Mega Menu navigation and Mobile drawer
- Reusable UI Components (Hero, FeatureGrid, CardList, StatStrip, CTASection)
- SEO Ready (Metadata, OpenGraph, dynamically generated `sitemap.xml`, and `robots.txt`)

## Getting Started

First, install the dependencies if you haven't already:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Information Architecture (IA) Routes

- **Home**: `/`
- **Products**: 
  - `/products/special-steel`
  - `/products/open-die-forging`
  - `/products/nuclear`
  - `/products/die-forging`
- **Applications**: 
  - `/applications/energy`
  - `/applications/machinery`
  - `/applications/automotive`
  - `/applications/bearing`
  - `/applications/shipbuilding`
  - `/applications/nuclear`
- **Technology**: 
  - `/technology/rnd`
  - `/technology/process`
  - `/technology/certification`
- **Contact & Info**: 
  - `/contact`
  - `/network`
  - `/catalog`
  - `/report`
- **About**: 
  - `/about/intro`
  - `/about/news`
  - `/about/history`
  - `/about/sustainability`

## Content Modification Points

- **Dummy Data**: Most navigation structures, dummy news, and company statistics are located in `src/data/dummy.ts`.
- **Layout Elements**: Header and MegaMenu are in `src/components/layout/Header.tsx` and `MegaMenu.tsx`. Footer is in `src/components/layout/Footer.tsx`.
- **Styling**: Base colors and the hero pattern are configured via `src/app/globals.css` and `tailwind.config.ts`.
- **Page content**: Every page component (e.g., `src/app/products/special-steel/page.tsx`) uses a standard structure combining `Hero`, `FeatureGrid`, `CardList`, and `CTASection`.

For a real-world deployment, replace the JSON structures in `src/data/dummy.ts` with API calls or a CMS integration.
