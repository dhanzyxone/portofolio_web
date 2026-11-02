'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PROFILE, TIMELINE } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const ABOUT_IMAGES = [
  { src: '/activities/foto1.jpeg', alt: 'Foto 1' },
  { src: '/activities/robot.jpeg', alt: 'tertarik pada dunia mesin' },
  { src: '/activities/hand detect.jpeg', alt: 'python' },
  { src: '/activities/mesin.jpeg', alt: 'Coding' },
]

export function About() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((prev) => (prev === 0 ? ABOUT_IMAGES.length - 1 : prev - 1))
  const next = () => setCurrent((prev) => (prev === ABOUT_IMAGES.length - 1 ? 0 : prev + 1))

  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          index="01"
          title="About"
          subtitle="Mahasiswa Digital Business yang percaya bahwa teknologi terbaik lahir dari perpaduan logika dan kreativitas."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-border/60">
              <div className="aspect-[4/5] relative">
                {ABOUT_IMAGES.map((img, i) => (
                  <motion.div
                    key={img.src}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: i === current ? 1 : 0, x: i === current ? 0 : i < current ? -100 : 100 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                    {PROFILE.location}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-colors hover:bg-background"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-colors hover:bg-background"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {ABOUT_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={cn(
                      'h-1.5 rounded-full transition-all',
                      i === current ? 'w-6 bg-accent-cyan' : 'w-1.5 bg-muted-foreground/30'
                    )}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
              <Reveal>
                <p>
                  Saya <span className="text-accent-cyan">Dhaffa Harfansyah</span>, seorang
                  creative technologist yang mengeksplorasi ruang pertemuan antara kecerdasan
                  buatan, kode, dan ekspresi kreatif.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-muted-foreground">
                  Berlatar belakang Digital Business, saya belajar melihat teknologi bukan hanya
                  sebagai alat, tetapi sebagai medium untuk menciptakan pengalaman yang bermakna —
                  dari computer vision, large language models, hingga desain visual dan produk
                  digital.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted-foreground">
                  Setiap project adalah eksperimen: cara saya memahami dunia dengan membangunnya.
                </p>
              </Reveal>
            </div>

            <div className="mt-12">
              <Reveal>
                <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  The Journey
                </p>
              </Reveal>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-4">
                {TIMELINE.map((step, i) => (
                  <Reveal key={step} delay={i * 0.06} as="span" className="inline-flex items-center gap-2">
                    <span className="rounded-full border border-border bg-card/60 px-4 py-2 text-sm">
                      {step}
                    </span>
                    {i < TIMELINE.length - 1 && (
                      <motion.span
                        aria-hidden="true"
                        className="h-px w-6 bg-gradient-to-r from-accent-cyan/60 to-transparent"
                      />
                    )}
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}