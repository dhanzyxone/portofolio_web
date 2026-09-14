'use client'

import { LAB_ITEMS, type LabStatus } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const statusStyle: Record<LabStatus, string> = {
  EXPERIMENT: 'text-amber-300 border-amber-300/30 bg-amber-300/5',
  PROTOTYPE: 'text-accent-cyan border-accent-cyan/30 bg-accent-cyan/5',
  BUILDING: 'text-emerald-300 border-emerald-300/30 bg-emerald-300/5',
  ARCHIVED: 'text-muted-foreground border-border bg-muted/20',
}

export function Lab() {
  return (
    <section id="lab" className="scroll-mt-20 border-t border-border/60 bg-card/20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          index="04"
          title="The Lab"
          subtitle="Ruang bermain untuk ide yang sedang diuji — eksperimen, prototipe, dan hal-hal yang belum selesai."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {LAB_ITEMS.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <div className="group flex h-full flex-col rounded-2xl border border-dashed border-border/70 bg-background/40 p-6 transition-colors hover:border-accent-cyan/40 md:p-7">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest',
                      statusStyle[item.status],
                    )}
                  >
                    {item.status}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/60">
                    /lab/{item.id}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-medium leading-tight">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] text-muted-foreground/70">
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
