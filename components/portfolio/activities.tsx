'use client'

import { motion } from 'motion/react'
import { EXPERIENCE } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Activities() {
  return (
    <section id="kegiatan" className="scroll-mt-20 border-t border-border/60 bg-card/20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          index="04"
          title="Kegiatan"
          subtitle="Rekapan pengalaman — dari workshop, event, kolaborasi, hingga peran aktif yang pernah dijalani."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 transition-all hover:border-accent-cyan/40 hover:bg-card/70"
            >
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="h-16 w-16 overflow-hidden rounded-full border border-border/60 bg-background">
                    <img
                      src={exp.logo}
                      alt={exp.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-accent-cyan" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">{exp.name}</h3>
                  <p className="text-sm font-medium text-accent-cyan">{exp.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}