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
            <div className="group relative w-full max-w-xs sm:max-w-sm">
              {/* Ambient Glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-accent-cyan/20 via-sky-500/10 to-transparent blur-2xl transition-opacity duration-700 group-hover:opacity-100"
              />

              {/* Glassmorphic Frame */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 p-2.5 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-accent-cyan/40 hover:shadow-accent-cyan/5">
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-900">
                  <img
                    src="/image/iuyn_.png"
                    alt="Dhaffa Harfansyah"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

                  {/* Live Status Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full border border-white/15 bg-background/80 px-3 py-1.5 backdrop-blur-md shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-foreground">
                      {PROFILE.availability}
                    </span>
                  </div>

                  {/* Bottom Information Bar */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-cyan">
                        {PROFILE.location}
                      </p>
                      <p className="text-sm font-semibold text-white">Dhaffa Harfansyah</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/10 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur-sm">
                      Creative Tech
                    </div>
                  </div>
                </div>

                {/* Tech Aesthetic Corner Accent */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-2 right-2.5 font-mono text-[10px] text-white/30"
                >
                  +
                </span>
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
