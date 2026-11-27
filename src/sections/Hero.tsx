export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Abstract portal visual, derived from the brand palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-[30%] -translate-y-1/2 rounded-full bg-violet-brand/25 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[45vmin] w-[45vmin] -translate-x-[15%] -translate-y-1/2 rounded-full bg-mint-brand/15 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(244,245,250,0.14) 1px, transparent 0)',
            backgroundSize: '34px 34px',
          }}
        />
        <div className="absolute left-[55%] top-1/2 h-[62vmin] w-[62vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
        <div className="absolute left-[55%] top-1/2 h-[42vmin] w-[42vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-brand/25" />
        <div className="absolute left-[55%] top-1/2 h-[24vmin] w-[24vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-mint-brand/30" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-mint-brand">
          Independent game studio
        </p>
        <h1
          id="hero-heading"
          className="font-display max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-starlight sm:text-6xl lg:text-7xl"
        >
          New worlds.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-soft to-mint-brand">
            Endless play.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-starlight-dim sm:text-lg">
          We create games that spark curiosity, challenge players and bring new
          worlds to life.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#games"
            className="rounded-full bg-mint-brand px-7 py-3.5 text-sm font-semibold text-space-900 transition-colors hover:bg-mint-soft"
          >
            Explore our games
          </a>
          <a
            href="#studio"
            className="rounded-full px-7 py-3.5 text-sm font-semibold text-starlight ring-1 ring-white/25 transition-colors hover:ring-white/50"
          >
            Meet the studio
          </a>
        </div>
      </div>
    </section>
  )
}
