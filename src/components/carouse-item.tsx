'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ProjectArray, ProjectProps } from '@/data/types/projects'
import { useSize, useDisplay, useSearch } from '@/store/useStore'

import Project from './project'

export default function CarouselItems({ projects }: ProjectArray) {
  const { display } = useDisplay()
  const { search } = useSearch()
  const { size } = useSize()

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
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: size === 'normal' ? 3 : size === 'large' ? 2 : 3,
    slidesToScroll: size === 'normal' ? 1 : size === 'large' ? 1 : 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: size === 'normal' ? 3 : size === 'large' ? 2 : 3,
          slidesToScroll: size === 'normal' ? 1 : size === 'large' ? 1 : 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: size === 'normal' ? 2 : size === 'large' ? 1 : 2,
          slidesToScroll: size === 'normal' ? 1 : size === 'large' ? 1 : 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: size === 'normal' ? 2 : size === 'large' ? 1 : 2,
          slidesToScroll: size === 'normal' ? 1 : size === 'small' ? 1 : 1,
          infinite: true,
        },
      },
    ],
  }

  return (
    <div className="w-[90vw]  lg:w-[70vw] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      {displayedProjects.length > 0 ? (
        search ? (
          <div className="flex  w-full justify-center  gap-2 flex-wrap items-center">
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
          </div>
        ) : (
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
        )
      ) : (
        <p className="flex justify-center">Nenhum site encontrado.</p>
      )}
    </div>
  )
}
