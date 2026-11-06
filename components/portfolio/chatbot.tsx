'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import {
  CONTACTS,
  CURRENTLY_BUILDING,
  LAB_ITEMS,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
} from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

type Msg = { role: 'bot' | 'user'; text: string }

const QUICK = ['Tentang Dhaffa', 'Skill apa aja?', 'List project', 'Kontak']

function getReply(q: string): string {
  const s = q.toLowerCase()

  if (/(halo|hai|hello|pagi|siang|sore|malam|assalamu)/.test(s))
    return `Halo! Saya asisten virtual ${PROFILE.name}. Tanya soal tentang, skill, project, lab, atau kontak.`

  if (/(siapa|tentang|about|profil|profile|nama|dhaffa)/.test(s))
    return `${PROFILE.name} — ${PROFILE.role}${PROFILE.roleLine ? ` (${PROFILE.roleLine})` : ''}. ${PROFILE.subheadline} Lokasi: ${PROFILE.location}.`

  if (/(skill|kemampuan|bisa apa|tech|stack|python|javascript|tools)/.test(s)) {
    const all = SKILL_GROUPS.map((g) => `${g.category}: ${g.items.map((i) => i.name).join(', ')}`).join(' | ')
    return `Skill Dhaffa: ${all}.`
  }

  if (/(gesture|tangan|opencv|mediapipe)/.test(s)) {
    const p = PROJECTS.find((x) => x.id === 'hand-gesture-detection')
    return p ? `${p.title}: ${p.summary} Teknologi: ${p.detail.technology}` : 'Project gesture tidak ketemu.'
  }
  if (/(llm|akademik|kampus|nlp|layanan)/.test(s)) {
    const p = PROJECTS.find((x) => x.id === 'llm-layanan-akademik')
    return p ? `${p.title}: ${p.summary} Teknologi: ${p.detail.technology}` : 'Project LLM tidak ketemu.'
  }
  if (/(umkm|riset|penelitian|bisnis)/.test(s)) {
    const p = PROJECTS.find((x) => x.id === 'riset-umkm-berkelanjutan')
    return p ? `${p.title}: ${p.summary}` : 'Project UMKM tidak ketemu.'
  }
  if (/(project|proyek|portfolio|portofolio|karya)/.test(s))
    return `Ada ${PROJECTS.length} project: ${PROJECTS.map((p) => `${p.title} (${p.categoryLabel})`).join('; ')}. Ketik nama project untuk detail, misal "LLM" atau "gesture".`

  if (/(lab|eksperimen|experiment|prototipe)/.test(s))
    return `Lab: ${LAB_ITEMS.map((l) => `${l.title} [${l.status}]`).join('; ')}.`

  if (/(sedang|lagi|building|belajar|learning|fokus)/.test(s))
    return `Currently building: ${CURRENTLY_BUILDING.map((c) => `${c.title} (${c.status})`).join(', ')}.`

  if (/(kontak|contact|hubungi|email|wa|whatsapp|instagram|ig|linkedin|github|nomor|hire|kolaborasi|kerjasama)/.test(s))
    return `Kontak: ${CONTACTS.map((c) => `${c.label}: ${c.value}`).join(' | ')}. Paling cepat via WhatsApp / Email.`

  if (/(lokasi|dimana|tinggal|padang|domisili)/.test(s)) return `Dhaffa berdomisili di ${PROFILE.location}.`

  if (/(cv|resume|download)/.test(s))
    return 'CV belum tersedia untuk diunduh di web ini. Hubungi langsung via Email / WhatsApp untuk minta CV.'

  if (/(makasih|terima kasih|thanks|thank)/.test(s)) return 'Sama-sama! Ada lagi yang mau ditanyakan soal portfolio ini?'

  return 'Maaf, saya bot sederhana. Coba tanya: "tentang", "skill", "project", "lab", atau "kontak".'
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'bot', text: `Halo! Saya asisten ${PROFILE.name.split(' ')[0]}. Mau tahu tentang, skill, project,  atau kontak?` },
  ])
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, open])

  const send = async (text: string) => {
    const clean = text.trim()
    if (!clean) return
    setMsgs((m) => [...m, { role: 'user', text: clean }])
    setInput('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: clean }),
      })
      const data = await res.json()
      if (res.ok && data && data.reply) {
        setMsgs((m) => [...m, { role: 'bot', text: data.reply }])
      } else {
        setMsgs((m) => [...m, { role: 'bot', text: getReply(clean) }])
      }
    } catch {
      setMsgs((m) => [...m, { role: 'bot', text: getReply(clean) }])
    }
  }

  return (
    <>
      {!open && (
        <div className="fixed bottom-20 right-6 z-50 animate-bounce rounded-2xl border border-accent-cyan/40 bg-card/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="font-mono text-xs text-foreground flex items-center gap-2 cursor-pointer"
          >
            <span className="h-2 w-2 rounded-full bg-accent-cyan animate-ping" />
            Tanya AI Assistant Dhaffa 🤖
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Buka chatbot"
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan text-background shadow-lg transition-transform hover:-translate-y-0.5 hover:scale-105"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-50 flex h-[420px] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl">
          <div className="border-b border-border/60 bg-card/80 px-4 py-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-cyan">Assistant</p>
            <p className="text-sm font-medium">Tanya seputar portfolio</p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm leading-relaxed">
            {msgs.map((m, i) => (
              <div key={i} className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}>
                <div
                  className={cn(
                    'max-w-[85%] rounded-xl px-3 py-2',
                    m.role === 'user' ? 'bg-accent-cyan text-background' : 'bg-muted text-foreground',
                  )}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="flex flex-wrap gap-2 border-t border-border/60 px-3 pt-3">
            {QUICK.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-accent-cyan"
              >
                {q}
              </button>
            ))}
          </div>

          <form
            className="flex items-center gap-2 p-3"
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pertanyaan..."
              className="h-10 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none focus:border-accent-cyan"
            />
            <button
              type="submit"
              aria-label="Kirim"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-cyan text-background"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
