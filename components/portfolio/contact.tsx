'use client'

import { ArrowUpRight } from 'lucide-react'
import { CONTACTS, PROFILE } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan">
                05 / Contact
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                Let&apos;s build
                <br />
                something
                <br />
                <span className="text-accent-cyan">together.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Terbuka untuk kolaborasi, project, atau sekadar berbagi ide seputar AI dan
                creative technology. Kirim pesan kapan saja.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={CONTACTS[0].href}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-cyan px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                {PROFILE.name.split(' ')[0]} — say hello
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <ul className="divide-y divide-border/60 border-y border-border/60">
              {CONTACTS.map((contact, i) => (
                <Reveal key={contact.label} delay={i * 0.05} as="li">
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {contact.label}
                    </span>
                    <span className="flex items-center gap-2 text-right text-base text-foreground transition-colors group-hover:text-accent-cyan sm:text-lg">
                      {contact.value}
                      <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition-all group-hover:opacity-100" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
