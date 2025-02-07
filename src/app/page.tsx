import Hero from "../components/Hero"
import Capabilities from "../components/Capabilities"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Demo from "../components/Demo"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Capabilities />
      <Projects />
      <Demo />
      <Contact />
    </main>
  )
}

