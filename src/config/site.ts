/**
 * Site-wide configuration. Edit this file to update brand metadata,
 * contact details and social links. Only real, verified values should
 * be filled in — unset fields are hidden gracefully by the UI.
 */
export const site = {
  name: 'Nuvyro Games',
  tagline: 'New worlds. Endless play.',
  description:
    'Nuvyro Games is an independent game studio founded in Colombia. We create games that spark curiosity, challenge players and bring new worlds to life.',
  /**
   * Production domain, without protocol or trailing slash, e.g. "nuvyro.games".
   * Used for canonical URLs, Open Graph, sitemap and structured data.
   * Leave as null until the real domain is live to avoid placeholder URLs.
   */
  domain: 'nuvyro-games.github.io' as string | null,
  /**
   * Real contact email. Rendered as a mailto link when set.
   * Leave as null to show the neutral coming-soon message.
   */
  email: 'nuvyrogames@gmail.com' as string | null,
  /**
   * Verified social links. Only add profiles that exist and are owned
   * by the studio. Entries with empty URLs are hidden.
   */
  socials: [
    // { label: 'X', url: '' },
    // { label: 'Instagram', url: '' },
    // { label: 'YouTube', url: '' },
    // { label: 'LinkedIn', url: '' },
  ] as Array<{ label: string; url: string }>,
}

/** Absolute URL to a page on the production domain, when configured. */
export function siteUrl(path = '/'): string | null {
  if (!site.domain) return null
  return `https://${site.domain}${path}`
}
