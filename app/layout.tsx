import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dhaffa Harfansyah — Creative Technologist',
  description:
    'Portofolio Dhaffa Harfansyah, mengeksplorasi AI, creative technology, produk digital, coding, dan visual communication.',
  generator: 'v0.app',
  openGraph: {
    title: 'Dhaffa Harfansyah — Creative Technologist',
    description:
      'Portofolio Dhaffa Harfansyah, mengeksplorasi AI, creative technology, produk digital, coding, dan visual communication.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08090c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
