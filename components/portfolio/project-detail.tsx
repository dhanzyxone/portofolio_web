'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Code2, X } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'

const SECTIONS: { key: keyof Project['detail']; label: string }[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'problem', label: 'Problem' },
  { key: 'concept', label: 'Concept' },
  { key: 'process', label: 'Process' },
  { key: 'technology', label: 'Technology' },
  { key: 'result', label: 'Result' },
]

export function ProjectDetail({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-border/70 bg-card p-6 shadow-2xl sm:rounded-3xl sm:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
                  {project.categoryLabel}
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Tutup detail project"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

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

            <div className="mt-8 space-y-7">
              {SECTIONS.map((section) => (
                <div key={section.key}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {section.label}
                  </p>
                  <p className="mt-2 text-pretty leading-relaxed text-foreground/90">
                    {project.detail[section.key]}
                  </p>
                </div>
              ))}
            </div>

            {(project.demoUrl || project.githubUrl) && (
              <div className="mt-9 flex flex-wrap gap-3 border-t border-border/60 pt-6">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-cyan px-5 py-2.5 text-sm font-medium text-background"
                  >
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium"
                  >
                    <Code2 className="h-4 w-4" /> Source
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
