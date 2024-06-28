import { api } from '@/data/api'

import SizeProject from './size-project'
import SelectDisplay from './select-display'
import Projects from './projects'
import Search from './search'

export default async function ProjectsPage() {
  const response = await api('/products', {
    next: {
      revalidate: 60*60,
    },
  })

  const projects = await response.json()

  return (
    <section className="px-5 dark:bg-bgdark bg-bglight py-5 ">
      <h1 className="border-l-8 mb-5 border-primary pl-2 rounded-md text-2xl">
        Meus projetos
      </h1>
      <div className="flex flex-col items-center mb-5 ">
        <Search />
        <div className="flex gap-2">
          <SelectDisplay />
          <SizeProject />
        </div>
      </div>

      <Projects projects={projects} />
    </section>
  )
}
