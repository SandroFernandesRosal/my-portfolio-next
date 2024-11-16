'use client'
import {
  RiHtml5Line,
  RiReactjsLine,
  RiNextjsLine,
  RiAngularjsLine,
  RiNodejsLine,
  RiTailwindCssFill,
  RiBearSmileLine,
} from 'react-icons/ri'
import { FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa'
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb'
import { SiPrisma, SiStyledcomponents } from 'react-icons/si'
import { SkilsProps } from '@/data/types/skils'
import { skillsData } from '@/data/skilsData'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

export default function Skills() {
  const el = useRef<HTMLUListElement | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.context(() => {
      skillsData.forEach((skill, index) => {
        const direction =
          index % 2 === 0 ? -window.innerWidth : window.innerWidth

        gsap
          .timeline({
            scrollTrigger: {
              trigger: `.skill-${skill.id}`,
              scrub: true,
              markers: false,
              start: 'top 100%',
              end: 'bottom 100%',
            },
          })
          .fromTo(
            `.skill-${skill.id}`,
            {
              opacity: 0,
              x: direction,
            },
            {
              opacity: 1,
              x: 0,
              duration: 2,
              ease: 'power2.out',
            },
          )
      })
    }, el)

    return () => {
      gsap.killTweensOf('.skill')
    }
  }, [])

  return (
    <section className="w-full flex items-center flex-col px-5 bg-bglightsecundary dark:bg-bgdarksecundary pb-40 dark:bg-[url(../assets/bg-dark.png)] bg-[url(../assets/bg-light.png)] bg-bottom bg-repeat-x">
      <h1 className="text-3xl font-Rubiki font-bold">Minhas habilidades</h1>
      <span className="border-b-4 pb-2 w-24 border-primary text-3xl mb-5"></span>

      <ul className="skills flex flex-wrap gap-3 justify-center" ref={el}>
        {skillsData.map((skill: SkilsProps) => {
          return (
            <li
              key={skill.id}
              className={`p-2 skill skill-${skill.id} shadow-shadowlight dark:shadow-shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4 dark:border-t-zinc-800 border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800`}
            >
              {skill.name}
              {skill.icon === 'HTML' && (
                <RiHtml5Line className="text-6xl text-primary" />
              )}
              {skill.icon === 'CSS' && (
                <FaCss3Alt className="text-6xl text-primary" />
              )}
              {skill.icon === 'JS' && (
                <TbBrandJavascript className="text-6xl text-primary" />
              )}
              {skill.icon === 'TS' && (
                <TbBrandTypescript className="text-6xl text-primary" />
              )}
              {skill.icon === 'React' && (
                <RiReactjsLine className="text-6xl text-primary" />
              )}
              {skill.icon === 'Next' && (
                <RiNextjsLine className="text-6xl text-primary" />
              )}
              {skill.icon === 'Tailwind' && (
                <RiTailwindCssFill className="text-6xl text-primary" />
              )}
              {skill.icon === 'Zustand' && (
                <RiBearSmileLine className="text-6xl text-primary" />
              )}
              {skill.icon === 'Angular' && (
                <RiAngularjsLine className="text-6xl text-primary" />
              )}
              {skill.icon === 'Node' && (
                <RiNodejsLine className="text-6xl text-primary" />
              )}
              {skill.icon === 'StyledComponents' && (
                <SiStyledcomponents className="text-6xl text-primary" />
              )}
              {skill.icon === 'Prisma' && (
                <SiPrisma className="text-6xl text-primary" />
              )}
              {skill.icon === 'Git' && (
                <FaGitAlt className="text-6xl text-primary" />
              )}
              {skill.icon === 'Github' && (
                <FaGithub className="text-6xl text-primary" />
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
