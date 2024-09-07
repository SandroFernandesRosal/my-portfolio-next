'use client'
import { ProjectProps, ProjectArray } from '@/data/types/projects'
import Project from './project'
import { useDisplay, useSearch } from '@/store/useStore'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import { useState, useLayoutEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ProjectsLine({ projects }: ProjectArray) {
  const { display } = useDisplay()
  const { search } = useSearch()

  const [offset, setOffset] = useState(0)
  const [isDisabledNext, setIsDisabledNext] = useState(false)
  const [isDisabledPrev, setIsDisabledPrev] = useState(true)

  const projectsPerPage = 6

  const filteredProjects = projects.filter((project: ProjectProps) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  )

  const displayedProjects =
    display === 'destaque'
      ? filteredProjects.filter(
          (project: ProjectProps) => project.featured === true,
        )
      : filteredProjects

  const loadNextPage = () => {
    if (displayedProjects.length < offset + projectsPerPage) {
      setIsDisabledNext(true)
      return
    }
    setOffset(offset + projectsPerPage)
    setIsDisabledPrev(false)
  }

  const loadPreviousPage = () => {
    if (offset <= 0) {
      setIsDisabledPrev(true)
      return
    }
    setOffset(offset - projectsPerPage)
    setIsDisabledNext(false)
  }

  const totalNews = displayedProjects.length
  const totalPages = Math.ceil(totalNews / projectsPerPage)
  const currentPage = Math.ceil((offset + projectsPerPage) / projectsPerPage)
  const displayCurrentPage = Math.min(currentPage, totalPages)

  const projectsToDisplay = displayedProjects.slice(
    (displayCurrentPage - 1) * projectsPerPage,
    displayCurrentPage * projectsPerPage,
  )

  const el = useRef<HTMLUListElement | null>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      projectsToDisplay.forEach((project) => {
        tl.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: `.project-${project.id}`,
              scrub: true,
              markers: false,
              start: 'top 100%',
              end: 'bottom 100%',
            },
          })
          .fromTo(
            `.project-${project.id}`,
            {
              opacity: 0,
              x: 360,
            },
            {
              opacity: 1,
              x: 0,
            },
          )
      })
    }, el)

    return () => {
      gsap.killTweensOf('.project')
    }
  }, [projectsToDisplay])

  return (
    <>
      <ul className="flex flex-wrap gap-5 justify-center w-full" ref={el}>
        {projectsToDisplay.map((project: ProjectProps) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            img={project.img}
            video={project.video}
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

      {projectsToDisplay.length > 0 && (
        <>
          {' '}
          <div className="flex mt-5">
            <button
              aria-label="Voltar página"
              onClick={loadPreviousPage}
              disabled={isDisabledPrev}
              className={`m-2 mb-4 flex h-full w-[50px] cursor-pointer items-center justify-center rounded-xl  p-2 font-bold text-white shadow-light  hover:from-blue-900 hover:to-slate-900 dark:border-[1px] border-zinc-800 shadow-shadowlight dark:shadow-none${
                isDisabledPrev
                  ? 'bg-bglightsecundary/20 dark:bg-bgdarksecundary/20'
                  : 'bg-bglightsecundary dark:bg-bgdarksecundary'
              } `}
            >
              <MdArrowBack className="text-3xl font-bold text-primary" />
            </button>
            <button
              aria-label="Próxima página"
              onClick={loadNextPage}
              disabled={isDisabledNext}
              className={`m-2 mb-4 flex h-full w-[50px] cursor-pointer items-center justify-center rounded-xl  p-2 font-bold  shadow-light  hover:from-blue-900 hover:to-slate-900 dark:border-[1px] border-zinc-800 shadow-shadowlight dark:shadow-none ${
                isDisabledNext
                  ? 'bg-bglightsecundary/20 dark:bg-bgdarksecundary/20'
                  : 'bg-bglightsecundary dark:bg-bgdarksecundary'
              } `}
            >
              <MdArrowForward className="text-3xl font-bold text-primary" />
            </button>
          </div>{' '}
          <p className=" font-bold">
            Página {displayCurrentPage} de {totalPages}
          </p>{' '}
        </>
      )}
    </>
  )
}
