'use client'

import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { PROFILE } from '@/lib/portfolio-data'
import { HeroBackground } from './hero-background'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16">
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Introduction & CTA */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
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
                className="block text-[13vw] leading-[0.9] sm:text-7xl lg:text-[4.5rem] xl:text-[5.5rem]"
              >
                DHAFFA
              </motion.span>
              <motion.span
                variants={item}
                className="block bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-[13vw] leading-[0.9] text-transparent sm:text-7xl lg:text-[4.5rem] xl:text-[5.5rem]"
              >
                HARFANSYAH
              </motion.span>
            </h1>

            <motion.p
              variants={item}
              className="mt-7 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm"
            >
              {PROFILE.role} — <span className="text-foreground">{PROFILE.roleLine}</span>
            </motion.p>

            <motion.h2
              variants={item}
              className="mt-6 max-w-2xl text-balance text-2xl font-medium leading-tight sm:text-3xl"
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

          {/* Right Column: Hero Profile Photo Card */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div className="group relative w-full max-w-sm sm:max-w-md flex justify-center">
              <div className="relative mx-auto mt-6 w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan/30 via-sky-400/20 to-transparent blur-xl animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-[4px] border-accent-cyan/40 bg-neutral-900 shadow-xl shadow-accent-cyan/15">
                  <img
                    src="/image/iuyn_.png"
                    alt="Dhaffa Harfansyah"
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                  />
                </div>
                <div className="absolute -inset-[6px] pointer-events-none overflow-hidden rounded-full opacity-70"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, var(--accent-cyan, #06b6d4) 60deg, transparent 120deg, var(--accent-cyan, #06b6d4) 180deg, transparent 240deg, var(--accent-cyan, #06b6d4) 300deg, transparent 360deg)',
                    animation: 'rotate-glow 3s linear infinite',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <ArrowDown className="h-5 w-5 animate-bounce text-muted-foreground/60" />
      </div>
    </section>
  )
}
