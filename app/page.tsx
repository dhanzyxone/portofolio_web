import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Projects } from '@/components/portfolio/projects'
import { Activities } from '@/components/portfolio/activities'
import { Skills } from '@/components/portfolio/skills'
import { Lab } from '@/components/portfolio/lab'
import { Contact } from '@/components/portfolio/contact'
import { CurrentlyBuilding } from '@/components/portfolio/currently-building'
import { Footer } from '@/components/portfolio/footer'
import { Chatbot } from '@/components/portfolio/chatbot'
import { AudioPlayer } from '@/components/portfolio/audio-player'

export default function Page() {
  return (
    <div className="grain-overlay relative min-h-svh bg-[#171717]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Activities />
        <Projects />
        <Skills />
        <Lab />
        <Contact />
        <CurrentlyBuilding />
      </main>
      <Footer />
      <Chatbot />
      <AudioPlayer />
    </div>
  )
}
