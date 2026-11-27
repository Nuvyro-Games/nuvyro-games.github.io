/**
 * Game catalog data. Add one entry per game — cards are rendered
 * automatically in release order (released, coming soon, in development).
 * Only fill in store/trailer links that are real and verified; unset
 * links are not shown. Leave `games` empty to display the coming-soon
 * empty state.
 */

export type GameStatus = 'in development' | 'coming soon' | 'released'

export interface Game {
  title: string
  description: string
  /** Path under /public (e.g. "/games/my-game/cover.webp") — no external hotlinks. */
  cover: string
  /** Alt text describing the cover art for screen readers. */
  coverAlt: string
  genre: string
  platforms: string[]
  status: GameStatus
  /** Optional verified links. Omit or leave out keys to hide the buttons. */
  links?: {
    store?: { label: string; url: string }
    trailer?: { label: string; url: string }
    /** Privacy policy page under /public (required by the app stores). */
    privacy?: { label: string; url: string }
    /** Terms of service page under /public (optional for the stores). */
    terms?: { label: string; url: string }
  }
}

export const games: Game[] = [
  {
    title: 'Overdrive',
    description:
      'Arcade racing across 10 synthwave cities: dodge traffic, chain refuels to trigger Overdrive and take down the bosses of La Corona.',
    cover: '/games/overdrive/cover.webp',
    coverAlt: 'Overdrive logo over a neon city skyline at night',
    genre: 'Arcade racing',
    platforms: ['Android'],
    status: 'in development',
    links: {
      privacy: { label: 'Privacy policy', url: '/games/overdrive/privacy.html' },
      terms: { label: 'Terms', url: '/games/overdrive/terms.html' },
    },
  },
]
