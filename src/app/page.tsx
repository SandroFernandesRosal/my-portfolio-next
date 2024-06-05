import HighLight from '@/components/highlight'
import Projects from '@/components/projects'
import Services from '@/components/services'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pt-24 ">
      <HighLight />
      <Services />
      <Skills />
      <Projects />
    </main>
  )
}
