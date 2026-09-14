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
          index="03"
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

        <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-7 text-left transition-colors hover:border-accent-cyan/40 hover:bg-card/70 md:p-8"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-cyan/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
                    {project.categoryLabel}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-cyan" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-foreground/70 transition-colors group-hover:text-accent-cyan">
                  Read case study →
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
