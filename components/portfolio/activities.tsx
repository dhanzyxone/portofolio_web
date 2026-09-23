'use client'

import { motion } from 'motion/react'
import { ACTIVITIES } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function Activities() {
  return (
    <section id="kegiatan" className="scroll-mt-20 border-t border-border/60 bg-card/20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          index="04"
          title="Kegiatan"
          subtitle="Rekapan momen kegiatan — dari workshop, event, kolaborasi, hingga pencapaian yang pernah dijalani."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ACTIVITIES.map((activity, i) => (
            <motion.div
              key={activity.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 transition-all hover:border-accent-cyan/40 hover:bg-card/70"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.src}
                  alt={activity.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-cyan">
                  {activity.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {activity.date}
                  </span>
                  <span className="text-muted-foreground/40">·</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {activity.category}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{activity.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}