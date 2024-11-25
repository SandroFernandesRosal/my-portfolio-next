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
import { FaCss3Alt } from 'react-icons/fa'
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb'
import { SiPrisma, SiStyledcomponents } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Info, ExternalLink } from 'lucide-react'
import { ProjectProps } from '@/data/types/projects'
import { useSize } from '@/store/useStore'

export default function Project({
  id,
  slug,
  title,
  img,
  repo,
  page,
  tecs,
}: ProjectProps) {
  const { size } = useSize()

  return (
    <li
      key={id}
      className={` max-w-[250px] border-[1px] dark:border-zinc-700 project project-${id} flex flex-col  rounded-md  hover:border-primary hover:border-[1px] border-zinc-400 dark:hover:border-primary transition  delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110  ${size === 'large' && 'w-[100%] mx-5 md:mx-0 max-w-[500px] h-[650px] justify-between'} ${size === 'small' && 'h-[230px] justify-between py-3 md:py-6 min-w-[100px] w-[25%] md:max-w-[150px] '} ${size === 'normal' && 'h-[400px] md:h-[500px] w-[45%] justify-between'}`}
    >
      <Image
        src={img}
        alt={title}
        width={400}
        height={400}
        className={`w-full object-cover object-top h-[40%] md:h-[60%] rounded-t-md border-b border-primary ${size === 'small' && 'hidden'} ${size === 'large' && 'h-[70%]'}`}
      />
      <div
        className={`bg-[url(../assets/bg-dot.svg)] m-2  flex flex-col gap-2 justify-between h-[60%] ${size === 'small' && ' h-full   justify-between '}`}
      >
        <p className="text-center font-bold">{title}</p>

        <div className={`flex gap-2 justify-center w-full flex-wrap`}>
          <Link
            aria-label="abrir projeto"
            aria-description="abrir projeto"
            href={`/projetos/${slug}`}
            className=" p-1 rounded-md bg-primary text-black border-[1px] border-zinc-400 dark:border-zinc-700 font-bold flex  items-center gap-1 px-2 "
          >
            <Info />
          </Link>
          <Link
            aria-label="abrir respositório"
            aria-description="abrir repositório"
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className=" p-1 rounded-md bg-primary text-black border-[1px] border-zinc-400 dark:border-zinc-700 font-bold flex  items-center gap-1 px-2"
          >
            <Github />
          </Link>
          <Link
            aria-label="abrir site do projeto"
            aria-description="abrir site do projeto"
            href={page}
            target="_blank"
            rel="noopener noreferrer"
            className=" p-1 rounded-md bg-primary text-black border-[1px] border-zinc-400 dark:border-zinc-700 font-bold flex  items-center gap-1 px-2"
          >
            <ExternalLink />
          </Link>
        </div>

        <ul
          className={`flex px-1 gap-2 justify-center flex-wrap mb-2 font-bold ${size === 'small' && 'hidden'}`}
        >
          {tecs.map((tec, i) => {
            return (
              <li
                className=" p-1 rounded-md bg-bglight dark:bg-bgdark border-[1px] border-zinc-400 dark:border-zinc-700"
                key={i}
              >
                {tec === 'HTML' && <RiHtml5Line className="text-2xl" />}
                {tec === 'CSS' && <FaCss3Alt className="text-2xl" />}
                {tec === 'JS' && <TbBrandJavascript className="text-2xl" />}
                {tec === 'TS' && <TbBrandTypescript className="text-2xl" />}
                {tec === 'React' && <RiReactjsLine className="text-2xl" />}
                {tec === 'Next' && <RiNextjsLine className="text-2xl" />}
                {tec === 'Tailwind' && (
                  <RiTailwindCssFill className="text-2xl" />
                )}
                {tec === 'Zustand' && <RiBearSmileLine className="text-2xl" />}
                {tec === 'Angular' && <RiAngularjsLine className="text-2xl" />}
                {tec === 'API' && <RiNodejsLine className="text-2xl" />}
                {tec === 'Styled Components' && (
                  <SiStyledcomponents className="text-2xl" />
                )}
                {tec === 'Prisma' && <SiPrisma className="text-2xl" />}
              </li>
            )
          })}
        </ul>
      </div>
    </li>
  )
}
