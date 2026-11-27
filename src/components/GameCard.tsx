import type { Game } from '../data/games'

const statusStyles: Record<Game['status'], string> = {
  'in development': 'bg-violet-brand/15 text-violet-soft ring-violet-brand/40',
  'coming soon': 'bg-mint-brand/10 text-mint-soft ring-mint-brand/40',
  released: 'bg-starlight/10 text-starlight ring-starlight/30',
}

export function GameCard({ game }: { game: Game }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-space-800 ring-1 ring-white/8 transition-transform duration-300 hover:-translate-y-1 hover:ring-white/15">
      <div className="relative aspect-[16/9] overflow-hidden bg-space-700">
        <img
          src={game.cover}
          alt={game.coverAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold capitalize ring-1 backdrop-blur-sm ${statusStyles[game.status]}`}
        >
          {game.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-starlight-dim uppercase">
          <span>{game.genre}</span>
          <span aria-hidden="true" className="text-starlight-dim/50">
            •
          </span>
          <span>{game.platforms.join(' / ')}</span>
        </div>

        <h3 className="font-display text-xl font-bold text-starlight">
          {game.title}
        </h3>
        <p className="text-sm leading-relaxed text-starlight-dim">
          {game.description}
        </p>

        {game.links && (
          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {game.links.trailer && (
              <a
                href={game.links.trailer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-4 py-2 text-sm font-semibold text-space-900 bg-mint-brand transition-colors hover:bg-mint-soft"
              >
                {game.links.trailer.label}
              </a>
            )}
            {game.links.store && (
              <a
                href={game.links.store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-4 py-2 text-sm font-semibold text-starlight ring-1 ring-white/25 transition-colors hover:ring-white/50"
              >
                {game.links.store.label}
              </a>
            )}
            {game.links.privacy && (
              <a
                href={game.links.privacy.url}
                className="self-center px-1 text-sm text-starlight-dim underline-offset-4 transition-colors hover:text-starlight hover:underline"
              >
                {game.links.privacy.label}
              </a>
            )}
            {game.links.terms && (
              <a
                href={game.links.terms.url}
                className="self-center px-1 text-sm text-starlight-dim underline-offset-4 transition-colors hover:text-starlight hover:underline"
              >
                {game.links.terms.label}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
