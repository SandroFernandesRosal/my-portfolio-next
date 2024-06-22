'use client'
import { ProjectProps, ProjectArray } from '@/data/types/projects'
import Project from './project'
import { useDisplay } from '@/store/useStore'

export default function Projectsts({ projects }: ProjectArray) {
  const { display } = useDisplay()

  return (
    <>
      {display === 'destaque' ? (
        <ul className="flex flex-wrap gap-5 justify-center">
          {projects
            .filter((project: ProjectProps) => project.featured === true)
            .map((project: ProjectProps) => {
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
      ) : (
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
      )}
    </>
  )
}
