import { api } from '@/data/api'

import SizeProject from './size-project'
import SelectDisplay from './select-display'

import Search from './search'
import ProjectsLine from './projects-line'

export default async function ProjectsPage() {
  const response = await api('/products', {
    next: {
      revalidate: 1 * 1,
    },
  })

  const projects = await response.json()

  return (
    <section className="lg:px-10 flex flex-col items-center dark:bg-bgdarksecondary bg-bglightsecondary  pb-40 dark:bg-[url(../assets/bg-dark2.webp)] bg-[url(../assets/bg-light2.webp)]  w-full bg-bottom bg-repeat-x">
      <h1 id="projetos" className="text-3xl font-bold">
        Meus projetos
      </h1>
      <span className="border-b-4 pb-2 w-24  border-primary  text-3xl mb-5"></span>
      <div className="flex flex-col items-center mb-5 ">
        <Search />
        <div className="flex gap-2">
          <SelectDisplay />
          <SizeProject />
        </div>
      </div>

      <ProjectsLine projects={projects} />
      <div id="contato" />
    </section>
  )
}
