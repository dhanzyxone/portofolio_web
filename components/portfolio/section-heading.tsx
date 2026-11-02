import type { ReactNode } from 'react'
import { Reveal } from './reveal'

type SectionHeadingProps = {
  index?: string
  title: string
  subtitle?: ReactNode
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 md:mb-12">
      <Reveal>
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-accent-cyan">
          {title}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-2 sm:mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-2 sm:mt-3 max-w-2xl text-pretty text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
