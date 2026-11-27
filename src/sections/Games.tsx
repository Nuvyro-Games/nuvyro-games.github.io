import { GameCard } from '../components/GameCard'
import { games } from '../data/games'

export function Games() {
  return (
    <section
      id="games"
      className="scroll-mt-20"
      aria-labelledby="games-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <h2
          id="games-heading"
          className="font-display text-3xl font-bold tracking-tight text-starlight sm:text-4xl"
        >
          Our games.
        </h2>

        {games.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-white/10 bg-space-800/50 px-8 py-16 text-center">
            <div
              aria-hidden="true"
              className="mx-auto mb-6 h-12 w-12 rounded-full border border-violet-brand/40"
              style={{
                boxShadow:
                  '0 0 0 10px rgba(120, 86, 255, 0.06), inset 0 0 0 6px rgba(0, 229, 204, 0.06)',
              }}
            />
            <p className="font-display text-lg font-semibold text-starlight">
              New worlds are in the making. Stay tuned.
            </p>
            <p className="mt-2 text-sm text-starlight-dim">
              Our first projects are taking shape. Check back soon for
              announcements.
            </p>
          </div>
        ) : (
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <li key={game.title} className="h-full">
                <GameCard game={game} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
