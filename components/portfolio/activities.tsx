'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, X } from 'lucide-react'
import { EXPERIENCE, type Experience } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Activities() {
  const [selected, setSelected] = useState<Experience | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    if (selected) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [selected])

  return (
    <section id="kegiatan" className="scroll-mt-20 border-t border-border/60 bg-card/20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          title="Kegiatan"
          subtitle="Rekapan pengalaman — dari workshop, event, kolaborasi, hingga peran aktif yang pernah dijalani."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {EXPERIENCE.map((exp, i) => (
            <motion.button
              key={exp.name}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(exp)}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-4 text-left transition-all hover:border-accent-cyan/40 hover:bg-card/70 sm:gap-5 sm:p-5"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-accent-cyan/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* Logo di sebelah kiri */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-neutral-900 sm:h-24 sm:w-24">
                <img
                  src={exp.logo}
                  alt={exp.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Nama kegiatan & Read more di sebelah kanan */}
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent-cyan sm:text-xs">
                  {exp.period}
                </span>
                <h3 className="mt-0.5 text-base font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent-cyan sm:text-lg">
                  {exp.name}
                </h3>
                <p className="text-xs text-muted-foreground truncate">
                  {exp.role}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-accent-cyan">
                  Read more →
                </span>
              </div>

              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-cyan" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal Detail Kegiatan */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setSelected(null)}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.name}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-h-[92svh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-border/70 bg-card p-6 shadow-2xl sm:rounded-3xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-neutral-900">
                    <img
                      src={selected.logo}
                      alt={selected.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
                      {selected.period}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                      {selected.name}
                    </h3>
                    <p className="text-sm font-medium text-accent-cyan">{selected.role}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Tutup detail kegiatan"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 border-t border-border/60 pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Deskripsi Kegiatan
                </p>
                <p className="mt-3 text-pretty leading-relaxed text-foreground/90">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}