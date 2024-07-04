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
      className={`max-w-[250px] dark:border-[1px] dark:border-zinc-800 project project-${id} flex flex-col   bg-bglightsecundary dark:bg-bgdarksecundary rounded-md shadow-shadowlight  dark:shadow-none hover:border-primary hover:border-[1px] border-transparent dark:hover:border-primary transition  delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110  ${size === 'large' && 'w-[98%] max-w-[400px] h-[650px] justify-between'} ${size === 'small' && 'h-[150px] justify-between py-3 md:py-6 min-w-[100px] w-[25%] md:max-w-[150px] '} ${size === 'normal' && 'h-[400px] w-[45%] gap-2 md:gap-5'}`}
    >
      <Image
        src={img}
        alt=""
        width={400}
        height={400}
        className={`w-full object-cover object-top h-[50%] rounded-t-md border-b border-primary ${size === 'small' && 'hidden'} ${size === 'large' && 'h-[70%]'}`}
      />
      <p className="text-center font-bold">{title}</p>

      <div className={`flex gap-2 justify-center w-full flex-wrap`}>
        <Link
          href={`/projetos/${slug}`}
          className=" p-1 rounded-md bg-primary text-black shadow-shadowlight dark:shadow-shadowdark "
        >
          <Info />
        </Link>
        <Link
          href={repo}
          target="_blank"
          className=" p-1 rounded-md bg-primary text-black shadow-shadowlight dark:shadow-shadowdark"
        >
          <Github />
        </Link>
        <Link
          href={page}
          target="_blank"
          className=" p-1 rounded-md bg-primary text-black shadow-shadowlight dark:shadow-shadowdark"
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
              className=" p-1 rounded-md bg-bglight dark:bg-bgdark shadow-shadowlight dark:shadow-none dark:border-[1px] dark:border-zinc-800"
              key={i}
            >
              {tec === 'HTML' && <RiHtml5Line className="text-2xl" />}
              {tec === 'CSS' && <FaCss3Alt className="text-2xl" />}
              {tec === 'JS' && <TbBrandJavascript className="text-2xl" />}
              {tec === 'TS' && <TbBrandTypescript className="text-2xl" />}
              {tec === 'React' && <RiReactjsLine className="text-2xl" />}
              {tec === 'Next' && <RiNextjsLine className="text-2xl" />}
              {tec === 'Tailwind' && <RiTailwindCssFill className="text-2xl" />}
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
    </li>
  )
}
