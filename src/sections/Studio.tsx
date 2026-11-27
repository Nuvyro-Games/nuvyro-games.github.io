export function Studio() {
  return (
    <section
      id="studio"
      className="scroll-mt-20 border-t border-white/5 bg-space-950/60"
      aria-labelledby="studio-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2
              id="studio-heading"
              className="font-display text-3xl font-bold tracking-tight text-starlight sm:text-4xl"
            >
              Born in Colombia.
              <br />
              <span className="text-mint-brand">Built for the world.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-starlight-dim sm:text-lg">
              Nuvyro Games is an independent game studio exploring new ideas
              and building memorable interactive experiences for players
              everywhere.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-starlight-dim">
              We believe great games come from imagination first — from
              gameplay that surprises and craftsmanship you can feel. Mobile is
              where we start; PC and console are ambitions on our horizon.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
            {[
              {
                title: 'Imagination',
                body: 'Every project begins as a new world worth exploring — not a trend to chase.',
              },
              {
                title: 'Gameplay',
                body: 'We design around feel and curiosity, so every mechanic earns its place.',
              },
              {
                title: 'Craftsmanship',
                body: 'Details matter: polish, performance and care from first prototype to launch.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-2xl bg-space-800 p-6 ring-1 ring-white/8"
              >
                <h3 className="font-display text-base font-bold text-starlight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-starlight-dim">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
