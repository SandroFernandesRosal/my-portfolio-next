'use client'
import { ProjectProps, ProjectArray } from '@/data/types/projects'
import Project from './project'
import { useDisplay, useSearch } from '@/store/useStore'

export default function Projects({ projects }: ProjectArray) {
  const { display } = useDisplay()
  const { search } = useSearch()

  const filteredProjects = projects.filter((project: ProjectProps) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  )

  const displayedProjects =
    display === 'destaque'
      ? filteredProjects.filter(
          (project: ProjectProps) => project.featured === true,
        )
      : filteredProjects

  return (
    <ul className="flex flex-wrap gap-5 justify-center w-full">
      {displayedProjects.map((project: ProjectProps) => (
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
      ))}
    </ul>
  )
}
