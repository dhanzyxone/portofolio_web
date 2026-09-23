import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { CurrentlyBuilding } from '@/components/portfolio/currently-building'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { Activities } from '@/components/portfolio/activities'
import { Lab } from '@/components/portfolio/lab'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'
import { Chatbot } from '@/components/portfolio/chatbot'

export default function Page() {
  return (
    <div className="grain-overlay relative min-h-svh bg-[#171717]">
      <Navbar />
      <main>
        <Hero />
        <CurrentlyBuilding />
        <About />
        <Skills />
        <Projects />
        <Activities />
        <Lab />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
