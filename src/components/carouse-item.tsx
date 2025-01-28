'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ProjectArray, ProjectProps } from '@/data/types/projects'
import { useSize, useDisplay, useSearch } from '@/store/useStore'

import { useState } from 'react'
import Project from './project'

export default function CarouselItems({ projects }: ProjectArray) {
  const { display } = useDisplay()
  const { search } = useSearch()
  const { size } = useSize()
  const [loading] = useState(false)

  const filteredProjects = projects.filter((project: ProjectProps) =>
    project.title.toLowerCase().includes(search.toLowerCase()),
  )

  const displayedProjects =
    display === 'destaque'
      ? filteredProjects.filter(
          (project: ProjectProps) => project.featured === true,
        )
      : filteredProjects

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: size === 'normal' ? 3 : size === 'large' ? 2 : 3,
    slidesToScroll: size === 'normal' ? 3 : size === 'large' ? 2 : 3,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: size === 'normal' ? 3 : size === 'large' ? 2 : 3,
          slidesToScroll: size === 'normal' ? 3 : size === 'large' ? 2 : 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: size === 'normal' ? 2 : size === 'large' ? 1 : 1,
          slidesToScroll: size === 'normal' ? 2 : size === 'large' ? 1 : 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: size === 'normal' ? 2 : 1,
          slidesToScroll: size === 'normal' ? 2 : 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <ul className=" w-[90vw] lg:w-[70vw] pt-10 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      {!loading ? (
        displayedProjects.length > 0 ? (
          <Slider {...settings}>
            {displayedProjects.map((project: ProjectProps) => (
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
          </Slider>
        ) : (
          <p>Nenhum projeto encontrado.</p>
        )
      ) : (
        <p>Carregando...</p>
      )}
    </ul>
  )
}
