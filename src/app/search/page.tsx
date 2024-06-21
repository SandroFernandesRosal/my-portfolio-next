import { redirect } from 'next/navigation'
import { api } from '@/data/api'
import { ProjectProps } from '@/data/types/projects'
import { Metadata } from 'next'
import Project from '@/components/project'

interface SearchProps {
  searchParams: {
    q: string
  }
}

export const metadata: Metadata = {
  title: 'Buscando projetos',
}

async function searchProducts(query: string): Promise<ProjectProps[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const projects = await response.json()

  return projects
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const projects = await searchProducts(query)

  return (
    <section className="min-h-screen flex  pt-24 flex-col items-center gap-10">
      <p className="text-sm text-center">
        Resultado Para: <span className="font-semibold">{query}</span>
      </p>

      <ul className="flex flex-wrap gap-5 justify-center">
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
