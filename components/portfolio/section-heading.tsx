import type { ReactNode } from 'react'
import { Reveal } from './reveal'

type SectionHeadingProps = {
  index: string
  title: string
  subtitle?: ReactNode
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan">
          {index} / {title}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
