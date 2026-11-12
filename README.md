# Jack Li — Portfolio

Source for my personal portfolio site, built with SvelteKit and plain CSS and deployed as a static site to GitHub Pages.

- **Live portfolio:** https://jack-li-2000.github.io/JackLiPortfolio/
- **LinkedIn:** https://www.linkedin.com/in/jack-li-2000/
- **GitHub:** https://github.com/jack-li-2000?tab=repositories

## How it is deployed

The site uses [`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapters) and is published by the GitHub Actions workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml). Builds are served from the `/JackLiPortfolio` base path, so the site lives at https://jack-li-2000.github.io/JackLiPortfolio/.

CI runs on Node.js 24 with pnpm 10 (matching the `pnpm-lock.yaml` lockfile) and installs dependencies with `--frozen-lockfile`. Any push to `main` builds the site and deploys it automatically; the workflow can also be started manually. No manual upload or separate deploy branch is involved.

## Redeploying

### Option 1: Push a change (normal flow)

```bash
git checkout main
git pull

# make your edits

git add .
git commit -m "Update portfolio content"
git push origin main
```

The workflow runs automatically. You can confirm it under the **Actions** tab of the repository (workflow: "Deploy to GitHub Pages"). When the `deploy` job finishes, the new version is live.

### Option 2: Rebuild without a code change

Use this when the site needs to be redeployed as-is (for example, a previous run failed or a GitHub Pages setting was fixed):

1. Open the repo's **Actions** tab.
2. Select **Deploy to GitHub Pages** in the left sidebar.
3. Click **Run workflow** → **Run workflow** for a fresh build of `main`, or open the most recent run and choose **Re-run all jobs** (or **Re-run failed jobs**).

### Option 3: Deploy a different branch

The workflow triggers on pushes to `main`, but it can also be started manually. To publish another branch, either merge it into `main`, or open **Actions → Deploy to GitHub Pages → Run workflow** and pick that branch (it deploys to the same Pages site).

### After deploying

- The site URL is shown in the workflow's `deploy` job under the `github-pages` environment.
- If the page shows stale content, do a hard refresh (Ctrl+F5) since assets are cached by the browser.
- If the deployment fails, check that **Settings → Pages → Source** is set to **GitHub Actions**.

## Local development

Requires Node.js `^20` or `>=22` and pnpm 10.34.9. Both are pinned in [package.json](package.json) (`engines` and `packageManager`), and CI uses the same versions.

```bash
pnpm install
pnpm run dev          # dev server, base path is empty locally
pnpm run dev -- --open
```

## Production build

```bash
pnpm run build        # outputs static files to build/
pnpm run preview      # serve the production build locally
```

Because the deployed site is served from a subpath, preview a build that matches production by setting the base path:

```powershell
$env:BASE_PATH = '/JackLiPortfolio'; pnpm run build; pnpm run preview
```

## Theme palette

Colours live in [src/app.css](src/app.css) as custom properties on `:root`:

| Token | Role | Value |
| --- | --- | --- |
| `--paper` | Page background | `#0a131d` |
| `--surface` / `--surface-2` | Cards and chips | `#0f1b28` / `#152435` |
| `--line` / `--line-strong` | Borders and dividers | `rgba(160, 190, 220, 0.14)` / `0.3` |
| `--ink` / `--muted` | Body text and secondary text | `#e9eef4` / `#96a5b7` |
| `--accent` / `--accent-ink` | Amber highlights, buttons, markers | `#f2a65a` / `#1c1206` |
| `--sky` | Links | `#8fc0e0` |

Body copy is set in Hanken Grotesk, loaded from Google Fonts in [src/app.html](src/app.html).

## Project structure

- `src/routes/+page.svelte` — the portfolio page (hero, projects, experience, about, contact)
- `src/app.css` — global styles for the portfolio page
- `src/app.html` — document head (metadata, fonts, tab icon)
- `static/` — static assets, including `Jack_li_resume.pdf` and images
- `svelte.config.js` — adapter and base-path configuration
- `.github/workflows/deploy.yml` — build and GitHub Pages deployment
