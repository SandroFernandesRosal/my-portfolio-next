import HighLight from '@/components/highlight'
import ProjectsPage from '@/components/projects-page'
import Services from '@/components/services'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pt-[65px] overflow-x-hidden ">
      <HighLight />
      <Services />
      <Skills />
      <ProjectsPage />
    </main>
  )
}
