'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS, type Project, type ProjectCategory } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { ProjectDetail } from './project-detail'
import { cn } from '@/lib/utils'

const FILTERS: ('ALL' | ProjectCategory)[] = ['ALL', 'AI', 'CODE', 'CREATIVE']

export function Projects() {
  const [filter, setFilter] = useState<'ALL' | ProjectCategory>('ALL')
  const [selected, setSelected] = useState<Project | null>(null)

  const visible =
    filter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(filter))

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          title="Projects"
          subtitle="Eksperimen nyata di persimpangan AI, kode, dan kreativitas. Klik untuk membaca studi kasusnya."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors',
                filter === f
                  ? 'border-accent-cyan bg-accent-cyan/10 text-accent-cyan'
                  : 'border-border text-muted-foreground hover:text-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.button
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelected(project)}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-4 text-left transition-all hover:border-accent-cyan/40 hover:bg-card/70 sm:gap-5 sm:p-5"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-accent-cyan/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* Logo / Thumbnail di sebelah kiri */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-neutral-900 sm:h-24 sm:w-24">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-mono text-xs text-muted-foreground">
                      No img
                    </div>
                  )}
                </div>

                {/* Nama project dan Read more di sebelah kanan */}
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent-cyan sm:text-xs">
                    {project.categoryLabel}
                  </span>
                  <h3 className="mt-0.5 text-base font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent-cyan sm:text-lg">
                    {project.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-accent-cyan">
                    Read more →
                  </span>
                </div>

                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-cyan" />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
