# roykimx.github.io

Personal portfolio site for Roy Kim, built with [Gatsby](https://www.gatsbyjs.com/) + React.

Live at: https://roykimx.github.io

## Development

```bash
npm install
npm run develop
```

The site runs at `http://localhost:8000`.

## Build

```bash
npm run build
npm run serve   # preview the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes the `public/` folder to GitHub Pages automatically. In
the repo's Settings → Pages, set **Source** to **GitHub Actions**.

## Structure

- `src/pages/index.js` — the homepage (About, Projects, Skills, Contact)
- `src/components/header.js` — the hero section (name, nav, social links)
- `src/components/layout.js` — page wrapper + theme handling
- `src/hooks/useTheme.js` — light/dark mode toggle
- `static/resume.pdf` — served at `/resume.pdf`
