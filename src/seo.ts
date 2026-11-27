import { site, siteUrl } from './config/site'

/**
 * Injects domain-dependent SEO tags and generates the sitemap entry
 * once the production domain is configured in src/config/site.ts.
 * Until then these are intentionally omitted to avoid placeholder URLs.
 */
export function configureDomainSeo(): void {
  const base = siteUrl('/')
  if (!base || !site.domain) return

  const canonical = document.createElement('link')
  canonical.rel = 'canonical'
  canonical.href = base
  document.head.appendChild(canonical)

  for (const [property, content] of [
    ['og:url', base],
    ['og:image', `${siteUrl('/image.png')}`],
    ['twitter:image', `${siteUrl('/image.png')}`],
  ]) {
    const meta = document.createElement('meta')
    meta.setAttribute('property', property)
    meta.setAttribute('content', content)
    document.head.appendChild(meta)
  }

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    description: site.description,
    url: base,
    ...(site.email ? { email: site.email } : {}),
    ...(site.socials.some((s) => s.url)
      ? {
          sameAs: site.socials
            .filter((s) => s.url)
            .map((s) => s.url),
        }
      : {}),
  }
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(ld)
  document.head.appendChild(script)
}
