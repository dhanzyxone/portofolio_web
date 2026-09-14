import { PROFILE } from '@/lib/portfolio-data'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_12px_2px_var(--accent-cyan)]" />
          <span>{PROFILE.logo}</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {year} {PROFILE.name} — Designed &amp; built with curiosity.
        </p>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent-cyan"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
