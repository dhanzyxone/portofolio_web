'use client'

import { ArrowUpRight } from 'lucide-react'
import { CONTACTS, PROFILE } from '@/lib/portfolio-data'
import { Reveal } from './reveal'

function ContactIcon({ icon }: { icon: string }) {
  const key = icon.toLowerCase()

  if (key.includes('github')) {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
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
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
      </svg>
    )
  }

  if (key.includes('instagram')) {
    return (
      <svg
        className="h-6 w-6"
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
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    )
  }

  if (key.includes('substack')) {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    )
  }

  // Default / Email
  return (
    <svg
      className="h-6 w-6"
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

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan">
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                Let&apos;s build
                <br />
                something
                <br />
                <span className="text-accent-cyan">together.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md text-pretty text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
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

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {CONTACTS.map((contact, i) => (
                <Reveal key={contact.label} delay={i * 0.05}>
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/60 bg-card/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/50 hover:bg-card/80 hover:shadow-lg hover:shadow-accent-cyan/10"
                    title={contact.value}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/80 bg-background text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:border-accent-cyan/40 group-hover:text-accent-cyan">
                      <ContactIcon icon={contact.icon || contact.label} />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-foreground">
                      {contact.label}
                    </span>
                    <ArrowUpRight className="absolute right-3 top-3 h-4 w-4 text-muted-foreground/30 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent-cyan" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
