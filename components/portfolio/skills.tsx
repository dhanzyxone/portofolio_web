'use client'

import { Video, Scissors, Sparkles, Palette, Cpu } from 'lucide-react'
import { SKILL_GROUPS } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

const CATEGORY_META: Record<
  string,
  {
    icon: typeof Video
    badge: string
    description: string
  }
> = {
  Videographer: {
    icon: Video,
    badge: 'Production',
    description: 'Visual storytelling, cinematography, and camera direction.',
  },
  'Video Editing': {
    icon: Scissors,
    badge: 'Post-Production',
    description: 'Pacing, narrative cutting, color grading, and audio design.',
  },
  'Motion Graphics': {
    icon: Sparkles,
    badge: 'Animation',
    description: 'Kinetic typography, 2D animation, and visual effects.',
  },
  'Desain Grafis': {
    icon: Palette,
    badge: 'Visual Design',
    description: 'Brand identity, UI layout, and digital creative assets.',
  },
  'AI Developer': {
    icon: Cpu,
    badge: 'Technology',
    description: 'Computer vision, machine learning models, and smart automation.',
  },
}

export function Skills() {
  // Flatten all individual skill items for the secondary pill track
  const allSkills = SKILL_GROUPS.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      category: group.category,
    }))
  )

  // Duplicated arrays for seamless infinite looping
  const marqueeCards = [...SKILL_GROUPS, ...SKILL_GROUPS]
  const marqueePills = [...allSkills, ...allSkills]

  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/60 bg-card/10 overflow-hidden py-24 sm:py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 mb-10 sm:mb-14">
        <SectionHeading
          title="Skills"
          subtitle="Keahlian di bidang visual storytelling, videografi, motion, editing, desain grafis, dan pengembangan AI."
        />
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left & Right Edge Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-background via-background/80 to-transparent" />

        <div className="space-y-4 sm:space-y-6">
          {/* Track 1: Discipline Cards (Moving Left) */}
          <div className="flex w-max animate-marquee-left pause-marquee">
            {marqueeCards.map((group, idx) => {
              const meta = CATEGORY_META[group.category] || {
                icon: Video,
                badge: 'Skill',
                description: 'Creative discipline and technology.',
              }
              const Icon = meta.icon

              return (
                <div
                  key={`${group.category}-${idx}`}
                  className="mx-2 sm:mx-3 w-72 sm:w-80 flex-shrink-0 rounded-2xl border border-border/60 bg-card/60 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent-cyan/50 hover:bg-card/90 hover:shadow-lg hover:shadow-accent-cyan/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border/70 rounded-full px-2.5 py-0.5">
                      {meta.badge}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base sm:text-lg font-semibold tracking-tight text-foreground">
                    {group.category}
                  </h3>

                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {meta.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {group.items.slice(0, 3).map((item) => (
                      <span
                        key={item.name}
                        className="rounded-full bg-background/80 border border-border/60 px-2.5 py-0.5 text-[11px] font-medium text-foreground/80"
                      >
                        {item.name}
                      </span>
                    ))}
                    {group.items.length > 3 && (
                      <span className="rounded-full bg-accent-cyan/10 text-accent-cyan px-2 py-0.5 text-[10px] font-mono">
                        +{group.items.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Track 2: Granular Skill Badges (Moving Right) */}
          <div className="flex w-max animate-marquee-right pause-marquee">
            {marqueePills.map((skill, idx) => (
              <div
                key={`${skill.name}-${idx}`}
                className="mx-1.5 sm:mx-2 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground/90 shadow-sm backdrop-blur-sm transition-colors hover:border-accent-cyan/60 hover:text-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                <span>{skill.name}</span>
                {skill.learning && (
                  <span className="rounded bg-accent-cyan/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-cyan">
                    learning
                  </span>
                )}
                <span className="font-mono text-[10px] text-muted-foreground/60">
                  • {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
