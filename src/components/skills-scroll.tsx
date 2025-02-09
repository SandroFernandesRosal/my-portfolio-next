'use client'
import { skillsData } from '@/data/skilsData'
import { SkilsProps } from '@/data/types/skils'
import { FaCss3Alt, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa'
import {
  RiAngularjsLine,
  RiBearSmileLine,
  RiHtml5Line,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from 'react-icons/ri'
import {
  SiPrisma,
  SiStyledcomponents,
  SiFastify,
  SiExpress,
  SiInsomnia,
} from 'react-icons/si'
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function SkillScroll() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 13,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  return (
    <Slider
      {...settings}
      className="slider-container flex self-center [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] w-[100vw] h-[200px]"
    >
      {skillsData.map((skill: SkilsProps) => (
        <div
          key={skill.id}
          className="p-2 flex flex-col items-center text-primary justify-items-center justify-center text-center w-[170px] h-[170px] rounded-md my-2"
        >
          {skill.name}
          {skill.icon === 'HTML' && <RiHtml5Line className="text-8xl" />}
          {skill.icon === 'CSS' && <FaCss3Alt className="text-8xl" />}
          {skill.icon === 'JS' && <TbBrandJavascript className="text-8xl" />}
          {skill.icon === 'TS' && <TbBrandTypescript className="text-8xl" />}
          {skill.icon === 'React' && <RiReactjsLine className="text-8xl" />}
          {skill.icon === 'Next' && <RiNextjsLine className="text-8xl" />}
          {skill.icon === 'Tailwind' && (
            <RiTailwindCssFill className="text-8xl" />
          )}
          {skill.icon === 'Zustand' && <RiBearSmileLine className="text-8xl" />}
          {skill.icon === 'Angular' && <RiAngularjsLine className="text-8xl" />}
          {skill.icon === 'Node' && <RiNodejsLine className="text-8xl" />}
          {skill.icon === 'StyledComponents' && (
            <SiStyledcomponents className="text-8xl" />
          )}
          {skill.icon === 'Prisma' && <SiPrisma className="text-8xl" />}
          {skill.icon === 'Git' && <FaGitAlt className="text-8xl" />}
          {skill.icon === 'Github' && <FaGithub className="text-8xl" />}
          {skill.icon === 'Db' && <FaDatabase className="text-8xl" />}
          {skill.icon === 'Fastify' && <SiFastify className="text-8xl" />}
          {skill.icon === 'Express' && <SiExpress className="text-8xl" />}
          {skill.icon === 'Insomnia' && <SiInsomnia className="text-8xl" />}
        </div>
      ))}
    </Slider>
  )
}
