'use client'

import { useState, useEffect, useRef, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Terminal as TerminalIcon, X } from 'lucide-react'
import { PROFILE, PROJECTS, SKILL_GROUPS, EXPERIENCE, LAB_ITEMS, CONTACTS } from '@/lib/portfolio-data'

type HistoryLine = {
  command?: string
  output: string | string[]
}

export function TerminalMode() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<HistoryLine[]>([
    {
      output: [
        `Welcome to ${PROFILE.name}'s Interactive Terminal [Version 2.0.4]`,
        `Type 'help' to see available commands or explore the digital universe.`,
      ],
    },
  ])
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (e: FormEvent) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    if (!cmd) return

    let output: string | string[] = ''

    switch (cmd) {
      case 'help':
        output = [
          'Available commands:',
          '  about       - Explore my profile & philosophy',
          '  projects    - View selected projects & artifacts',
          '  skills      - Explore technical skills & tools',
          '  experience  - Discover my personal & professional journey',
          '  lab         - Enter the experimental laboratory',
          '  contact     - Get in touch with me',
          '  clear       - Clear terminal output',
          '  exit        - Close terminal',
        ]
        break
      case 'about':
        output = [
          `${PROFILE.name} — ${PROFILE.role}`,
          PROFILE.subheadline,
          `Location: ${PROFILE.location}`,
        ]
        break
      case 'projects':
        output = [
          'Selected Projects:',
          ...PROJECTS.map((p) => `• ${p.title} (${p.categoryLabel}) - ${p.summary}`),
        ]
        break
      case 'skills':
        output = [
          'Technical Skills:',
          ...SKILL_GROUPS.map((g) => `[${g.category}]: ${g.items.map((i) => i.name).join(', ')}`),
        ]
        break
      case 'experience':
      case 'journey':
        output = [
          'Personal & Professional Journey:',
          ...EXPERIENCE.map((e) => `• [${e.period}] ${e.name} (${e.role}): ${e.description}`),
        ]
        break
      case 'lab':
        output = [
          'Experimental Laboratory:',
          ...LAB_ITEMS.map((l) => `• [${l.status}] ${l.title}: ${l.description}`),
        ]
        break
      case 'contact':
        output = [
          'Contact Information:',
          ...CONTACTS.map((c) => `• ${c.label}: ${c.value} (${c.href})`),
        ]
        break
      case 'clear':
        setHistory([])
        setInput('')
        return
      case 'exit':
      case 'quit':
        setIsOpen(false)
        setInput('')
        return
      default:
        output = `Command not recognized: '${cmd}'. Type 'help' for available commands.`
    }

    setHistory((prev) => [...prev, { command: input, output }])
    setInput('')
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full border border-border/80 bg-background/90 px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-foreground shadow-xl backdrop-blur-md transition-all hover:border-accent-cyan hover:bg-accent-cyan/15 hover:text-accent-cyan"
        aria-label="Open Terminal Mode"
      >
        <TerminalIcon className="h-4 w-4 text-accent-cyan" />
        <span className="hidden sm:inline">Terminal</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border/80 bg-neutral-950 shadow-2xl shadow-accent-cyan/10"
            >
              <div className="flex items-center justify-between border-b border-border/60 bg-neutral-900/80 px-4 py-3 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-muted-foreground">dhaffa@universe:~</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1 text-muted-foreground transition-colors hover:bg-neutral-800 hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="h-80 sm:h-96 overflow-y-auto p-5 font-mono text-xs sm:text-sm text-foreground/90 space-y-3">
                {history.map((h, i) => (
                  <div key={i} className="space-y-1">
                    {h.command && (
                      <div className="flex items-center gap-2 text-accent-cyan">
                        <span>$</span>
                        <span>{h.command}</span>
                      </div>
                    )}
                    {Array.isArray(h.output) ? (
                      h.output.map((line, idx) => (
                        <div key={idx} className="text-muted-foreground leading-relaxed">
                          {line}
                        </div>
                      ))
                    ) : (
                      <div className="text-muted-foreground leading-relaxed">{h.output}</div>
                    )}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              <form
                onSubmit={handleCommand}
                className="flex items-center gap-2 border-t border-border/60 bg-neutral-900/50 px-4 py-3 font-mono text-xs sm:text-sm"
              >
                <span className="text-accent-cyan">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="type 'help' or command..."
                  className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground/50"
                  autoFocus
                />
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
