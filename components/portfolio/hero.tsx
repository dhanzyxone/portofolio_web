'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { CONTACTS, PROFILE } from '@/lib/portfolio-data'
import { HeroBackground } from './hero-background'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

const ORBIT_POSITIONS = [
  { x: 50, y: 7 },    // 0: Top (Email)
  { x: 87, y: 28 },   // 1: Top-Right (Instagram)
  { x: 87, y: 72 },   // 2: Bottom-Right (LinkedIn)
  { x: 50, y: 93 },   // 3: Bottom (GitHub)
  { x: 13, y: 72 },   // 4: Bottom-Left (WhatsApp)
  { x: 13, y: 28 },   // 5: Top-Left (Substack)
]

function HeroSocialIcon({ icon, className = 'h-4 w-4 sm:h-5 sm:w-5' }: { icon?: string; className?: string }) {
  const key = (icon || '').toLowerCase()

  if (key.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    )
  }

  if (key.includes('linkedin')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
      </svg>
    )
  }

  if (key.includes('instagram')) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }

  if (key.includes('whatsapp')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    )
  }

  if (key.includes('substack')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    )
  }

  // Default Email
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export function Hero() {
  const profileRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !profileRef.current || !sectionRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    tl.to(profileRef.current, {
      y: 100,
      scale: 0.75,
      opacity: 0,
      ease: 'none',
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16">
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
              className="mb-4 sm:mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan"
            >
              <span className="h-px w-8 bg-accent-cyan/60" />
              {PROFILE.roleLine || PROFILE.role}
            </motion.p>

            <h1 className="text-balance font-semibold leading-[0.95] tracking-tight">
              <motion.span
                variants={item}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.75rem] leading-[0.95]"
              >
                DHAFFA
              </motion.span>
              <motion.span
                variants={item}
                className="block bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.75rem] leading-[0.95] text-transparent"
              >
                HARFANSYAH
              </motion.span>
            </h1>

            <motion.p
              variants={item}
              className="mt-4 sm:mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm"
            >
              {PROFILE.role}
              {PROFILE.roleLine && (
                <>
                  {' '}— <span className="text-foreground">{PROFILE.roleLine}</span>
                </>
              )}
            </motion.p>

            {PROFILE.headline && (
              <motion.h2
                variants={item}
                className="mt-4 sm:mt-6 max-w-2xl text-balance text-lg sm:text-xl md:text-2xl font-medium leading-snug"
              >
                {PROFILE.headline}
              </motion.h2>
            )}

            <motion.p
              variants={item}
              className="mt-3 sm:mt-4 max-w-xl text-pretty text-xs sm:text-sm md:text-[15px] leading-relaxed text-muted-foreground"
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

          {/* Right Column: Hero Profile Photo with Surrounding Rotating Social Icons */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div ref={profileRef} className="relative flex items-center justify-center w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem]">
              {/* Central Photo */}
              <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan/30 via-sky-400/20 to-transparent blur-xl animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] sm:border-[4px] border-accent-cyan/40 bg-neutral-900 shadow-xl shadow-accent-cyan/15">
                  <img
                    src="/image/iuyn_.png"
                    alt="Dhaffa Harfansyah"
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                  />
                </div>
                <div
                  className="absolute -inset-[5px] pointer-events-none overflow-hidden rounded-full opacity-70"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, var(--accent-cyan, #06b6d4) 60deg, transparent 120deg, var(--accent-cyan, #06b6d4) 180deg, transparent 240deg, var(--accent-cyan, #06b6d4) 300deg, transparent 360deg)',
                    animation: 'rotate-glow 3s linear infinite',
                  }}
                />
              </div>

              {/* Rotating Orbit Container with Surrounding Contact Icons */}
              <div className="absolute inset-0 z-20 pointer-events-none animate-orbit pause-orbit">
                {/* Outer Orbit Dashed Ring */}
                <div className="absolute inset-[7%] rounded-full border border-dashed border-accent-cyan/30" />

                {/* Surrounding Contact Icons */}
                {CONTACTS.slice(0, 6).map((contact, i) => {
                  const pos = ORBIT_POSITIONS[i] || ORBIT_POSITIONS[0]
                  return (
                    <div
                      key={contact.label}
                      style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      className="absolute pointer-events-auto"
                    >
                      {/* Counter-orbit element keeps each icon upright as it travels in circle */}
                      <div className="animate-counter-orbit pause-orbit">
                        <motion.a
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + i * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="group/icon relative flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full border border-border/80 bg-background/90 text-muted-foreground shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-125 hover:border-accent-cyan hover:bg-accent-cyan/15 hover:text-accent-cyan hover:shadow-cyan-500/25 active:scale-95"
                          aria-label={contact.label}
                          title={contact.label}
                        >
                          <div className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover/icon:scale-110">
                            <HeroSocialIcon icon={contact.icon || contact.label} />
                          </div>

                          {/* Tooltip on hover */}
                          <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-neutral-900/95 px-2 py-0.5 font-mono text-[10px] text-accent-cyan opacity-0 shadow-md transition-opacity duration-200 group-hover/icon:opacity-100 z-30">
                            {contact.label}
                          </span>
                        </motion.a>
                      </div>
                    </div>
                  )
                })}
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
