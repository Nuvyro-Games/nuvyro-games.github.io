import { Logo } from './Logo'
import { site } from '../config/site'
import { games } from '../data/games'

const navLinks = [
  { label: 'Games', href: '#games' },
  { label: 'Studio', href: '#studio' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const socials = site.socials.filter((s) => s.url)
  // Páginas legales de cada juego (privacidad y términos; las piden Google Play y App Store)
  const legal = games.flatMap((g) => [
    ...(g.links?.privacy ? [{ label: `${g.title} privacy`, href: g.links.privacy.url }] : []),
    ...(g.links?.terms ? [{ label: `${g.title} terms`, href: g.links.terms.url }] : []),
  ])
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Logo />
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-starlight-dim transition-colors hover:text-starlight"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-starlight-dim transition-colors hover:text-starlight"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {socials.map((social) => (
                <li key={social.url}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-starlight-dim transition-colors hover:text-starlight"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 text-xs text-starlight-dim/70">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
