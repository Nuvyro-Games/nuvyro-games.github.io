# Nuvyro Games — Landing Page

Static single-page site for Nuvyro Games, an independent game studio founded
in Colombia. Built with React, TypeScript, Vite and Tailwind CSS. No server,
no database, no API keys — the production build is fully static.

## Commands

```bash
yarn install      # install dependencies
yarn dev          # local dev server
yarn build        # production build -> dist/
yarn preview      # preview the production build locally
```

Yarn is the package manager for this project — do not mix with npm or pnpm.

## Deploying to GitHub Pages (current)

The site is live at **https://nuvyro-games.github.io** (repo `Nuvyro-Games/nuvyro-games.github.io`).
Every push to `main` runs `.github/workflows/deploy.yml`: `yarn install --frozen-lockfile`,
`yarn build`, and publishes `dist/` to GitHub Pages (Settings → Pages → Source: **GitHub Actions**).

Store-required pages (static files in `public/`, copied as-is to `dist/`):

- Overdrive privacy policy (ES/EN): https://nuvyro-games.github.io/games/overdrive/privacy.html
  (the old URL `/privacy/overdrive/` redirects there).
- `app-ads.txt` (AdMob, publisher `pub-1574538615730500`): `public/app-ads.txt` → https://nuvyro-games.github.io/app-ads.txt

After adding pages, run `yarn gen:sitemap` (Node 24+) to refresh `public/sitemap.xml`.

## Deploying to Cloudflare Pages (via GitHub)

1. Push this repository to GitHub (branch `main`).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, select the repo.
3. Build settings:
   - Framework preset: **Vite**
   - Build command: `yarn build`
   - Output directory: `dist`
   - Production branch: `main`
4. Save — every push to `main` deploys to production; other branches get preview deployments.
5. Custom domain: add it under the Pages project → **Custom domains**. An apex
   domain (`yourdomain.com`) requires the zone's nameservers to point at
   Cloudflare; `www.yourdomain.com` can be added as an additional custom
   domain. Pick one canonical host and redirect the other to it in the
   domain's redirect rules.

No environment variables or secrets are required.

## Editing content

All day-to-day content lives in two files:

- `src/config/site.ts` — studio name, description, contact email, social links
  and the production domain.
- `src/data/games.ts` — the game catalog.

### Adding a game

Add an entry to the `games` array in `src/data/games.ts`:

```ts
{
  title: 'Game name',
  description: 'One or two sentences.',
  cover: '/games/my-game/cover.webp', // file placed in public/games/my-game/
  coverAlt: 'Description of the cover art',
  genre: 'Puzzle',
  platforms: ['iOS', 'Android'],
  status: 'in development', // or 'coming soon' | 'released'
  links: {
    trailer: { label: 'Watch trailer', url: 'https://...' }, // optional
    store: { label: 'Wishlist on the App Store', url: 'https://...' }, // optional
  },
}
```

Link buttons only render when configured. Use optimized local WebP/AVIF
covers stored under `public/` — no external image hotlinks. With zero games,
the section shows the "New worlds are in the making. Stay tuned." empty state.

### Replacing the logo

The approved logo is stored in `public/image.png` and is used in the site
header, footer and browser icon. To update it later, replace that file with
the new approved artwork while keeping its proportions. Do not redraw or
distort the supplied art.

### Setting the production domain

Set `site.domain` in `src/config/site.ts` (e.g. `"nuvyro.games"`). This
activates canonical URLs, Open Graph URLs, the sitemap and structured data.
Until then those tags are intentionally omitted — avoid publishing
placeholder canonical URLs.

### Contact email and socials

Set `site.email` in `src/config/site.ts` to render the mailto button; leave
it `null` and a neutral coming-soon message shows instead. Add social links
only for verified, studio-owned profiles.

### Privacy and support pages

Before a game launches, add per-game pages under `public/` (e.g.
`public/games/my-game/privacy.html`) so app-store privacy policy URLs point
at the production domain. Footer links for them can then be added in
`src/components/Footer.tsx`.

## SEO notes

- Title, description, Open Graph and Twitter card tags are in `index.html`.
- `public/robots.txt` is included; a sitemap is generated only once the real
  domain is set (see `src/config/site.ts`).
- Once the real domain is configured, the approved logo at
  `public/image.png` is used as the social share image.
- Lighthouse scores are not verified here (no live deployment or headless
  browser in this environment); the site ships small static JS, no trackers
  and no autoplay media to support 90+ targets.
