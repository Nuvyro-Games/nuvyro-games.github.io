/**
 * Run via `yarn gen:sitemap` after setting the production domain in
 * src/config/site.ts. Writes public/sitemap.xml with the site's routes:
 * the home page plus each game's privacy and terms pages (src/data/games.ts).
 * Runs on Node 24+ directly (native TypeScript type stripping).
 */
import { writeFileSync } from 'node:fs'
import { site, siteUrl } from '../src/config/site.ts'
import { games } from '../src/data/games.ts'

const base = siteUrl('/')
if (!base || !site.domain) {
  console.error(
    'Set site.domain in src/config/site.ts before generating the sitemap.',
  )
  process.exit(1)
}

const lastmod = new Date().toISOString().slice(0, 10)
const urls = [
  base,
  ...games
    .flatMap((g) => [g.links?.privacy?.url, g.links?.terms?.url])
    .filter((u): u is string => Boolean(u))
    .map((u) => siteUrl(u)!),
]
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>
`
writeFileSync('public/sitemap.xml', xml)
console.log(`Wrote public/sitemap.xml for ${base}`)
