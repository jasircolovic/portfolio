# Jasir Colovic — Portfolio

Personal portfolio site. Built with **Vite + React 18 + Tailwind CSS**.

Editorial / terminal-hybrid aesthetic: warm paper background, Fraunces serif
paired with JetBrains Mono, a single rust-red accent, and a subtle paper-grain
texture.

---

## Quick start

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

## Scripts

| Command           | What it does                                |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start the dev server with hot-reload        |
| `npm run build`   | Build production bundle into `dist/`        |
| `npm run preview` | Preview the production build locally        |

## Project structure

```
portfolio/
├── index.html                  # Vite entry, font preloads, meta tags
├── public/
│   └── favicon.svg             # Simple "J" favicon
├── src/
│   ├── main.jsx                # React mount point
│   ├── App.jsx                 # Top-level composition
│   ├── index.css               # Tailwind directives + custom layers
│   ├── components/
│   │   ├── Nav.jsx             # Fixed nav with scroll-aware blur bg
│   │   ├── Hero.jsx            # Oversized name + intro
│   │   ├── Marquee.jsx         # Scrolling tech stack
│   │   ├── Work.jsx            # Experience timeline
│   │   ├── Skills.jsx          # Dark-band skill grid
│   │   ├── Education.jsx       # Courses & certs
│   │   ├── Contact.jsx         # CTA + contact grid
│   │   ├── Footer.jsx          # Copyright + blinking cursor
│   │   └── Reveal.jsx          # Scroll-triggered fade-in wrapper
│   ├── hooks/
│   │   └── useReveal.js        # IntersectionObserver hook
│   └── data/
│       └── content.js          # All copy: experience, skills, education
├── tailwind.config.js          # Custom color tokens + fonts + keyframes
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Editing content

All copy lives in **`src/data/content.js`**. To update experience, skills,
education, or contact info, edit that file — no component changes needed.

```js
// src/data/content.js
export const experience = [
  {
    num: '01',
    company: 'New Job',
    title: 'Role Title',
    meta: 'Location · Date — Date',
    bullets: ['...', '...'],
  },
  // ...
]
```

## Design tokens

Defined in `tailwind.config.js`. Use the custom color names directly in
Tailwind classes:

| Token          | Value     | Usage                      |
| -------------- | --------- | -------------------------- |
| `ink`          | `#141210` | Primary text, dark band bg |
| `paper`        | `#f3efe6` | Page background            |
| `paper-warm`   | `#ebe5d6` | Marquee, hover states      |
| `rule`         | `#c9bfa7` | Dividers, borders          |
| `muted`        | `#5a544a` | Secondary text             |
| `accent`       | `#d2442a` | Primary accent (rust red)  |
| `accent-soft`  | `#e56b52` | Accent on dark bg          |

Fonts are loaded from Google Fonts in `index.html`:
- **Fraunces** — display & body serif
- **JetBrains Mono** — labels, meta, numerals

## Deploy

### Vercel

```bash
npm install -g vercel
vercel
```

Framework preset: **Vite**. No config needed.

### Netlify

```bash
npm run build
# drag-and-drop the dist/ folder at app.netlify.com/drop
```

Or connect the repo and set:
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"homepage": "https://jasircolovic.github.io/portfolio",
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

And add to `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
```

Then:

```bash
npm run deploy
```

## Accessibility & performance notes

- Semantic landmarks: `<nav>`, `<section>`, `<article>`, `<footer>`
- Mobile nav button has `aria-label` and `aria-expanded`
- External links use `rel="noopener noreferrer"`
- Animations use `IntersectionObserver` (not scroll listeners)
- Fonts are preconnected and use `display=swap`
- Scroll-snap avoided to keep the page fully navigable

## License

Content (copy, personal info) © Jasir Colovic.
Code structure — use freely as a starting point.
