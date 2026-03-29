# Pages Deployment

This app is a static Vite site. Production output is generated in `dist/`.

## GitHub Pages

This repo already includes a GitHub Actions workflow at [`.github/workflows/deploy-github-pages.yml`](/home/sd/Code2/snd_site/.github/workflows/deploy-github-pages.yml).

### One-time setup

1. Push the repo to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings -> Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.

### How deployment works

- The workflow runs on pushes to `main`.
- It installs dependencies with `npm ci`.
- It builds the site with `VITE_BASE_PATH=/<repo-name>/`.
- It uploads `dist/` and deploys it to GitHub Pages.

### Standard project site URL

For this repository, the site URL will normally be:

```text
https://sdenotter.github.io/snd_site/
```

### If you use a custom domain

If you later switch to a custom domain, or convert this to a user site like `sdenotter.github.io`, update the workflow so:

```yaml
VITE_BASE_PATH: /
```

instead of:

```yaml
VITE_BASE_PATH: /${{ github.event.repository.name }}/
```

## Cloudflare Pages

Cloudflare Pages can deploy this repo directly without any extra code changes.

### Create the project

1. Log into Cloudflare.
2. Go to `Workers & Pages -> Create application -> Pages`.
3. Connect your GitHub account if needed.
4. Select the `sdenotter/snd_site` repository.

### Build settings

Use these values:

```text
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: /
Environment variable: VITE_BASE_PATH=/
```

### Node version

If Cloudflare asks for a Node version, use:

```text
20
```

### Custom domain

Cloudflare Pages supports attaching a custom domain from the project dashboard after the first successful deploy.

## Local production check

Before deploying, you can verify the site locally:

```bash
npm install
npm run build
npm run preview
```

## Notes

- GitHub Pages usually needs `VITE_BASE_PATH` set to the repo name for project sites.
- Cloudflare Pages should usually use `VITE_BASE_PATH=/`.
- If assets or routes look broken after deployment, the first thing to check is the configured base path.
