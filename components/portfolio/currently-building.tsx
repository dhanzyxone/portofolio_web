'use client'

import { CURRENTLY_BUILDING, type BuildStatus } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const statusColor: Record<BuildStatus, string> = {
  Learning: 'text-amber-300',
  Building: 'text-accent-cyan',
  Experimenting: 'text-violet-300',
}

export function CurrentlyBuilding() {
  return (
    <section className="border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            ● Currently Building
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {CURRENTLY_BUILDING.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.08}>
              <div className="group h-full bg-background p-6 transition-colors hover:bg-card/60">
                <div className="flex items-center gap-2">
                  <span className={cn('text-xs', statusColor[entry.status])}>●</span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {entry.status}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-medium leading-tight">{entry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {entry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
