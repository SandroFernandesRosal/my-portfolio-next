'use client'

import { ProjectProps } from '@/data/types/projects'
import api from '@/services/api'
import Search from './search'
import { useSearch, useDataSearch, useData } from '@/store/useStore'
import { useEffect } from 'react'
import Project from './project'

export default function Projects2() {
  const { dataSearch, setDataSearch } = useDataSearch()
  const { data, setData } = useData()
  const { search } = useSearch()

  useEffect(() => {
    api
      .get(`/api/products/search?search=${search}`)
      .then((response) => {
        setDataSearch(response.data)
      })
      .catch((err) => console.log(err))
  }, [setDataSearch, search])

  useEffect(() => {
    api
      .get(`/api/products`)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => console.log(err))
  }, [setData])

  return (
    <section className="px-5 dark:bg-bgdark bg-bglight py-5 ">
      <h1 className="border-l-8 mb-5 border-primary pl-2 rounded-md text-2xl">
        Meus projetos
      </h1>
      <Search />
      <ul className="flex flex-wrap gap-5 justify-center">
        {search
          ? dataSearch &&
            dataSearch.length > 0 &&
            dataSearch.map((project: ProjectProps) => (
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
            ))
          : data &&
            data.map((project: ProjectProps) => {
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
