'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { MOMENTS } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function PhotoCarousel() {
  const [active, setActive] = useState(0)
  const count = MOMENTS.length
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const paused = useRef(false)

  const go = useCallback(
    (dir: number) => setActive((prev) => (prev + dir + count) % count),
    [count],
  )

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!paused.current) setActive((prev) => (prev + 1) % count)
    }, 3500)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [count])

  const dragStart = useRef(0)

  return (
    <div
      className="select-none"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {MOMENTS.map((moment, i) => {
          const isActive = i === active
          const offset = Math.abs(i - active)
          return (
            <motion.button
              key={moment.src}
              type="button"
              onClick={() => setActive(i)}
              onPointerDown={(e) => (dragStart.current = e.clientX)}
              onPointerUp={(e) => {
                const delta = e.clientX - dragStart.current
                if (delta > 40) go(-1)
                else if (delta < -40) go(1)
              }}
              className={cn(
                'relative shrink-0 overflow-hidden rounded-xl border border-border/60 transition-all duration-500 ease-out',
                isActive
                  ? 'z-10 h-40 w-64 sm:h-52 sm:w-80'
                  : 'h-32 w-20 opacity-40 hover:opacity-70 sm:h-44 sm:w-28',
              )}
              style={{ filter: isActive ? 'none' : 'grayscale(0.6)' }}
              aria-label={`Lihat momen: ${moment.label}`}
              aria-current={isActive}
            >
              <img
                src={moment.src || '/placeholder.svg'}
                alt={moment.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              {isActive && (
                <span className="absolute bottom-3 left-3 font-mono text-xs uppercase tracking-widest text-white">
                  {moment.label}
                </span>
              )}
              {offset > 1 && !isActive ? null : null}
            </motion.button>
          )
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {MOMENTS.map((m, i) => (
          <button
            key={m.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ke slide ${i + 1}`}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300',
              i === active ? 'w-8 bg-accent-cyan' : 'w-1.5 bg-muted-foreground/40',
            )}
          />
        ))}
      </div>
    </div>
  )
}
