# Jack Li — Portfolio

Source for my personal portfolio site, built with SvelteKit and Tailwind CSS and deployed as a static site to GitHub Pages.

- **Live portfolio:** https://jack-li-2000.github.io/JackLiPortfolio/
- **LinkedIn:** https://www.linkedin.com/in/jack-li-2000/
- **GitHub:** https://github.com/jack-li-2000?tab=repositories

## How it is deployed

The site uses [`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapters) and is published by the GitHub Actions workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml). Builds are served from the `/JackLiPortfolio` base path, so the site lives at https://jack-li-2000.github.io/JackLiPortfolio/.

Any push to `main` builds the site and deploys it automatically. No manual upload or separate deploy branch is involved.

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

### Option 2: Re-run the last deployment

Use this when the site needs to be rebuilt without any code change (for example, a previous run failed or a GitHub Pages setting was fixed):

1. Open the repo's **Actions** tab.
2. Select **Deploy to GitHub Pages** in the left sidebar.
3. Open the most recent run and choose **Re-run all jobs** (or **Re-run failed jobs**).

### Option 3: Deploy a different branch

The workflow only triggers on pushes to `main`. To publish another branch, either merge it into `main`, or temporarily add the branch to the `on.push.branches` list in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) and push that change.

### After deploying

- The site URL is shown in the workflow's `deploy` job under the `github-pages` environment.
- If the page shows stale content, do a hard refresh (Ctrl+F5) since assets are cached by the browser.
- If the deployment fails, check that **Settings → Pages → Source** is set to **GitHub Actions**.

## Local development

Requires Node.js 20+ and pnpm.

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

## Project structure

- `src/routes/` — pages and sections (SvelteKit routes)
- `src/app.css` — global Tailwind styles
- `static/` — static assets, including `Jack_li_resume.pdf` and images
- `svelte.config.js` — adapter and base-path configuration
- `.github/workflows/deploy.yml` — build and GitHub Pages deployment
