import HighLight from '@/components/highlight'
import ProjectsPage from '@/components/projects-page'
import Services from '@/components/services'

import Contato from '@/components/contato'
import Faq from '@/components/faq'
import Benefits from '@/components/benefits'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pt-[65px] overflow-x-hidden">
      <HighLight />
      <Services />
      <Benefits />
      <ProjectsPage />
      <Contato />
      <Faq />
    </main>
  )
}
