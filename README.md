# Scott Denotter Portfolio

A static React + Vite portfolio site for Scott Denotter.

## Stack

- React 19
- Vite
- Tailwind CSS v4
- Motion

## Local Development

Requirements:
- Node.js 20+

Run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The app builds to `dist/`.

### Cloudflare Pages

Use these settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20`
- Environment variable: `VITE_BASE_PATH=/`

### GitHub Pages

This repo includes a GitHub Actions workflow that deploys on pushes to `main`.

Expected setup:

- Repository Settings -> Pages -> Source: `GitHub Actions`
- Default branch: `main`

The workflow builds with `VITE_BASE_PATH=/<repo-name>/`, which is the correct base path for standard project pages such as `username.github.io/repo-name/`.

If you later use a custom domain or a user/organization Pages site like `username.github.io`, change the workflow env to `VITE_BASE_PATH=/`.

## Project Structure

```text
src/           App source
design/        Shipped image assets
screenshots/   Project screenshots used by the site
dist/          Production build output
```
