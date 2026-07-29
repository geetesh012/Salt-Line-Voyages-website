# Salt Line Voyages

A complete website project for **Salt Line Voyages**, a fictional Pacific Northwest coastal kayak, snorkel, and sailing outfitter. Built with React, Vite, and React Router — with real, multi-page client-side routing (not anchor links pretending to be pages).

## What's included

- **4 routed pages**: `/` (Home), `/about`, `/tours`, `/contact` — each a real URL, each deep-linkable and bookmarkable
- **404 page** for any unmatched route
- Shared **Header**, **NavOverlay** (the split kayak/sail thumbnail menu), and **Footer** components used across every page
- Scroll-to-top on navigation, plus hash-link support (e.g. `/tours#gallery`) for jumping to a section within a page
- A working **contact form** (client-side state + validation) ready to be wired to a real backend or email service
- Scroll-reveal animations via a small reusable `useReveal` hook, respecting `prefers-reduced-motion`
- Fully responsive layout, keyboard-focus styles, and no dependence on any third-party UI kit

## Project structure

```
salt-line-voyages/
├── index.html                # Vite HTML entry point (fonts + <div id="root">)
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx               # React root + BrowserRouter
│   ├── App.jsx                 # Route table + shared layout (header/nav/footer)
│   ├── styles/
│   │   └── global.css          # All site styling (design tokens live at the top)
│   ├── data/
│   │   └── images.js           # Centralized image URLs — swap in your own photography here
│   ├── hooks/
│   │   └── useReveal.js        # IntersectionObserver-based scroll reveal hook
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── NavOverlay.jsx
│   │   ├── Footer.jsx
│   │   ├── Reveal.jsx           # Wraps any section for the fade/slide-in effect
│   │   └── ScrollToTop.jsx      # Resets scroll position on route change
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Tours.jsx            # Voyages + pricing + gallery mosaic
│       ├── Contact.jsx          # Inquiry form + contact details
│       └── NotFound.jsx
```

## Running it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
cd salt-line-voyages
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This outputs a static, deployable site to `dist/`. You can preview the production build locally with:

```bash
npm run preview
```

## Deploying

Since this builds to a plain static `dist/` folder, it deploys anywhere that serves static files — Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc. Because routing is client-side, make sure your host is configured to rewrite unknown paths back to `index.html` (a "SPA fallback" — Netlify and Vercel do this automatically; other hosts may need a small config file).

## Next steps you might want

- **Real photography**: every image currently comes from Unsplash via `src/data/images.js`. Swap those URLs for your own shots, or drop files into a `public/images/` folder and reference them locally.
- **Contact form backend**: `Contact.jsx` currently logs the submission to the console and shows a confirmation message. Wire `handleSubmit` up to a real endpoint (Formspree, Resend, a serverless function, your booking system, etc).
- **Analytics / SEO**: add your preferred analytics snippet and per-page `<title>`/meta tags (e.g. via `react-helmet-async`) if this goes live.
