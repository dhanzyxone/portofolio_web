'use client'

import { SKILL_GROUPS } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/60 bg-card/20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          index="02"
          title="Skills"
          subtitle="Perangkat yang saya gunakan untuk berpikir, membangun, dan bercerita — terus berkembang seiring waktu."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="h-full bg-background p-7 md:p-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-medium">{group.category}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{group.index}</span>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-sm text-foreground/90 transition-colors hover:border-accent-cyan/50 hover:text-foreground"
                    >
                      {skill.name}
                      {skill.learning && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent-cyan">
                          learning
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
