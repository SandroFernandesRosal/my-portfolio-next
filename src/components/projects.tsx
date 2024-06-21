import { ProjectProps } from '@/data/types/projects'
import { api } from '@/data/api'

import Project from './project'
import { SearchForm } from './search-form'

export default async function Projects() {
  const response = await api('/products', {
    next: {
      revalidate: 1,
    },
  })

  const projects = await response.json()
  return (
    <section className="px-5 dark:bg-bgdark bg-bglight py-5 ">
      <h1 className="border-l-8 mb-5 border-primary pl-2 rounded-md text-2xl">
        Meus projetos
      </h1>

      <ul className="flex flex-wrap gap-5 justify-center">
        <SearchForm />
        {projects.map((project: ProjectProps) => {
          return (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              img={project.img}
              repo={project.repo}
              page={project.page}
              tecs={project.tecs}
              slug={project.slug}
              imgs={project.imgs}
              featured={project.featured}
              description={project.description}
            />
          )
        })}
      </ul>
    </section>
  )
}
