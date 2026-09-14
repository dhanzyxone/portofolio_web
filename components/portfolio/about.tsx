'use client'

import { motion } from 'motion/react'
import { PROFILE, TIMELINE } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function About() {
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
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-border/60">
                <img
                  src="/moments/portrait-abstract.png"
                  alt="Potret abstrak Dhaffa Harfansyah yang menyatu dengan partikel digital"
                  className="aspect-4/5 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                    {PROFILE.location}
                  </p>
                  <p className="mt-1 text-sm text-white">{PROFILE.availability}</p>
                </div>
              </div>
            </Reveal>
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
