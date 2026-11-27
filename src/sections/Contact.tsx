import { site } from '../config/site'

export function Contact() {
  const socials = site.socials.filter((s) => s.url)

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/5"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-heading"
            className="font-display text-3xl font-bold tracking-tight text-starlight sm:text-4xl"
          >
            Let&apos;s create something worth playing.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-starlight-dim">
            Players, publishers, collaborators and press — we&apos;d love to
            hear from you.
          </p>

          {site.email ? (
            <div className="mt-10">
              <a
                href={`mailto:${site.email}`}
                className="inline-block rounded-full bg-mint-brand px-7 py-3.5 text-sm font-semibold text-space-900 transition-colors hover:bg-mint-soft"
              >
                {site.email}
              </a>
            </div>
          ) : (
            <p className="mt-10 rounded-2xl border border-dashed border-white/10 bg-space-800/50 px-6 py-8 text-sm text-starlight-dim">
              Contact channels are coming soon. In the meantime, stay tuned for
              studio announcements right here.
            </p>
          )}

          {socials.length > 0 && (
            <ul className="mt-10 flex flex-wrap justify-center gap-6">
              {socials.map((social) => (
                <li key={social.url}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-starlight-dim transition-colors hover:text-starlight"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
