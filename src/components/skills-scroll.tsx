'use client'
import { skillsData } from '@/data/skilsData'
import { SkilsProps } from '@/data/types/skils'
import { FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa'
import {
  RiAngularjsLine,
  RiBearSmileLine,
  RiHtml5Line,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from 'react-icons/ri'
import { SiPrisma, SiStyledcomponents } from 'react-icons/si'
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
      className="slider-container flex self-center  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] w-[100vw]"
    >
      {skillsData.map((skill: SkilsProps) => (
        <div
          key={skill.id}
          className="p-2  flex flex-col items-center text-zinc-400 bg-transparent dark:text-bgdark   justify-center text-center h-[170px] justify-items-center content-center    rounded-md    my-2"
        >
          {skill.name}
          {skill.icon === 'HTML' && <RiHtml5Line className="text-9xl  " />}
          {skill.icon === 'CSS' && <FaCss3Alt className="text-9xl " />}
          {skill.icon === 'JS' && <TbBrandJavascript className="text-9xl " />}
          {skill.icon === 'TS' && <TbBrandTypescript className="text-9xl " />}
          {skill.icon === 'React' && <RiReactjsLine className="text-9xl " />}
          {skill.icon === 'Next' && <RiNextjsLine className="text-9xl " />}
          {skill.icon === 'Tailwind' && (
            <RiTailwindCssFill className="text-9xl " />
          )}
          {skill.icon === 'Zustand' && (
            <RiBearSmileLine className="text-9xl " />
          )}
          {skill.icon === 'Angular' && (
            <RiAngularjsLine className="text-9xl " />
          )}
          {skill.icon === 'Node' && <RiNodejsLine className="text-9xl " />}
          {skill.icon === 'StyledComponents' && (
            <SiStyledcomponents className="text-9xl " />
          )}
          {skill.icon === 'Prisma' && <SiPrisma className="text-9xl " />}
          {skill.icon === 'Git' && <FaGitAlt className="text-9xl " />}
          {skill.icon === 'Github' && <FaGithub className="text-9xl " />}
        </div>
      ))}
    </Slider>
  )
}
