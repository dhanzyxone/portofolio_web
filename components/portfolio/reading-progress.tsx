'use client'

import { motion, useScroll } from 'motion/react'

export function ReadingProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[100] h-[2px] origin-left bg-accent-cyan shadow-[0_0_10px_2px_var(--accent-cyan)]"
    />
  )
}
