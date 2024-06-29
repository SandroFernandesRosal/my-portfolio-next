import { api } from '@/data/api'

import SizeProject from './size-project'
import SelectDisplay from './select-display'
import Projects from './projects'
import Search from './search'

export default async function ProjectsPage() {
  const response = await api('/products', {
    next: {
      revalidate: 60 * 60,
    },
  })

  const projects = await response.json()

  return (
    <section className="px-5 lg:px-10 flex flex-col items-center dark:bg-bgdark bg-bglight py-5 ">
      <h1 className="text-3xl">Meus projetos</h1>
      <span className="border-b-4 pb-2 w-24  border-primary  text-3xl mb-5"></span>
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
