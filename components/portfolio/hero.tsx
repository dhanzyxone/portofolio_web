'use client'

import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { PROFILE } from '@/lib/portfolio-data'
import { HeroBackground } from './hero-background'
import { PhotoCarousel } from './photo-carousel'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16">
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.p
            variants={item}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan"
          >
            <span className="h-px w-8 bg-accent-cyan/60" />
            {PROFILE.tagline}
          </motion.p>

          <h1 className="text-balance font-semibold leading-[0.92] tracking-tight">
            <motion.span
              variants={item}
              className="block text-[13vw] leading-[0.9] sm:text-7xl md:text-8xl lg:text-[7.5rem]"
            >
              DHAFFA
            </motion.span>
            <motion.span
              variants={item}
              className="block bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-[13vw] leading-[0.9] text-transparent sm:text-7xl md:text-8xl lg:text-[7.5rem]"
            >
              HARFANSYAH
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-8 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground"
          >
            {PROFILE.role} — <span className="text-foreground">{PROFILE.roleLine}</span>
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-6 max-w-2xl text-balance text-2xl font-medium leading-tight sm:text-3xl md:text-4xl"
          >
            {PROFILE.headline}
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground"
          >
            {PROFILE.subheadline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-cyan px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-muted/40"
            >
              About Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-20"
        >
          <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Moments
          </p>
          <PhotoCarousel />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <ArrowDown className="h-5 w-5 animate-bounce text-muted-foreground/60" />
      </div>
    </section>
  )
}
