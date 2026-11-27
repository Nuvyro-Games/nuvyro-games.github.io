interface LogoProps {
  className?: string
  markOnly?: boolean
}

export function Logo({ className = 'h-9', markOnly = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/image.png"
        alt={markOnly ? 'Nuvyro Games' : ''}
        aria-hidden={markOnly ? undefined : 'true'}
        className="h-full w-auto object-contain"
      />
      {!markOnly && (
        <span className="font-display text-lg font-bold tracking-[0.18em] uppercase text-starlight">
          Nuvyro&nbsp;Games
        </span>
      )}
    </span>
  )
}
