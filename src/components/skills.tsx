'use client'
import {
  RiHtml5Line,
  RiReactjsLine,
  RiNextjsLine,
  RiNodejsLine,
  RiTailwindCssFill,
  RiBearSmileLine,
} from 'react-icons/ri'
import { FaCss3Alt, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa'
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb'
import { SiInsomnia, SiPrisma, SiStyledcomponents } from 'react-icons/si'

import { skillsData } from '@/data/skilsData'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

export default function Skills() {
  const el = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.context(() => {
      const sections = ['frontend', 'backend', 'tools']
      sections.forEach((section) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: `.skill-${section}`,
              scrub: true,
              markers: false,
              start: 'top 80%',
              end: 'bottom 100%',
            },
          })
          .fromTo(
            `.skill-${section}`,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 2.5, ease: 'power2.out' }
          )
      })
    }, el)

    return () => {
      gsap.killTweensOf('.skill')
    }
  }, [])

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'HTML':
        return <RiHtml5Line className="text-6xl text-primary" />
      case 'CSS':
        return <FaCss3Alt className="text-6xl text-primary" />
      case 'JS':
        return <TbBrandJavascript className="text-6xl text-primary" />
      case 'TS':
        return <TbBrandTypescript className="text-6xl text-primary" />
      case 'React':
        return <RiReactjsLine className="text-6xl text-primary" />
      case 'Next':
        return <RiNextjsLine className="text-6xl text-primary" />
      case 'Tailwind':
        return <RiTailwindCssFill className="text-6xl text-primary" />
      case 'Node':
        return <RiNodejsLine className="text-6xl text-primary" />
      case 'Prisma':
        return <SiPrisma className="text-6xl text-primary" />
      case 'StyledComponents':
        return <SiStyledcomponents className="text-6xl text-primary" />
      case 'Zustand':
        return <RiBearSmileLine className="text-6xl text-primary" />
      case 'Git':
        return <FaGitAlt className="text-6xl text-primary" />
      case 'Github':
        return <FaGithub className="text-6xl text-primary" />
      case 'Insomnia':
        return <SiInsomnia className="text-6xl text-primary" />
        case 'Db':
        return <FaDatabase className="text-6xl text-primary" />
      default:
        return null
    }
  }

  const groupedSkills = {
    frontend: skillsData.filter((skill) => skill.type === 'frontend'),
    backend: skillsData.filter((skill) => skill.type === 'backend'),
    tools: skillsData.filter((skill) => skill.type === 'tools'),
  }

  return (
    <section className="z-10 px-5 flex flex-col items-center dark:bg-bgdarksecundary bg-bglightsecundary pb-40 bg-[url(../assets/bg-light.png)] dark:bg-[url(../assets/bg-dark.png)] w-full bg-bottom bg-repeat-x">
      <h1 className="text-3xl font-bold">Minhas Habilidades</h1>
      <span className="border-b-4 pb-2 w-24 border-primary text-3xl mb-5"></span>

      <div
        ref={el}
        className="skills grid grid-cols-1 gap-3 md:grid-cols-2 lg:w-[70vw] md:h-[60vh]"
      >
       
        <div className="skill skill-frontend group flex flex-col items-center justify-between text-center p-4 shadow-shadowlight dark:shadow-shadow-none  bg-bglightsecundary dark:bg-bgdarksecundary md:col-span-1 md:row-span-2 border-[1px] dark:border-zinc-800 border-transparent rounded-md hover:border-primary dark:hover:border-primary dark:shadow-none">
          <h2 className="text-2xl py-6 flex items-center justify-center font-bold mb-4 h-[40%] w-full bg-[url(../assets/bg-dot.svg)]">Frontend</h2>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {groupedSkills.frontend.map((skill) => (
              <div
                key={skill.id}
                className="p-2 bg-bglight dark:bg-bgdark shadow-md rounded-md flex flex-col items-center justify-center w-20 h-28  border-b-4 border-b-primary"
              >
                {renderIcon(skill.icon)}
                <span className="text-sm mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

       
        <div className="skill skill-backend group flex flex-col items-center text-center p-4 shadow-shadowlight dark:shadow-shadow-none  bg-bglightsecundary dark:bg-bgdarksecundary md:col-span-1 border-[1px] dark:border-zinc-800 border-transparent rounded-md hover:border-primary dark:hover:border-primary  dark:shadow-none justify-between">
          <h2 className="text-2xl py-6 h-[40%] flex items-center justify-center font-bold mb-4  w-full bg-[url(../assets/bg-dot.svg)]">Backend</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {groupedSkills.backend.map((skill) => (
              <div
                key={skill.id}
                className="p-2 bg-bglight dark:bg-bgdark shadow-md rounded-md flex flex-col items-center justify-center w-20 h-28  border-b-4 border-b-primary"
              >
                {renderIcon(skill.icon)}
                <span className="text-sm mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

       
        <div className="skill skill-tools group flex flex-col items-center text-center p-4 shadow-shadowlight dark:shadow-shadow-none  bg-bglightsecundary dark:bg-bgdarksecundary md:col-span-1 border-[1px] dark:border-zinc-800 border-transparent rounded-md hover:border-primary dark:hover:border-primary  dark:shadow-none justify-between">
          <h2 className="text-2xl py-6 h-[40%] flex items-center justify-center font-bold mb-4  w-full bg-[url(../assets/bg-dot.svg)]">Ferramentas</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {groupedSkills.tools.map((skill) => (
              <div
                key={skill.id}
                className="p-2 bg-bglight dark:bg-bgdark shadow-md rounded-md flex flex-col items-center justify-center w-20 h-28  border-b-4 border-b-primary"
              >
                {renderIcon(skill.icon)}
                <span className="text-sm mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}