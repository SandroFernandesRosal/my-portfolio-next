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

export default function Project({
  id,
  slug,
  title,
  img,
  repo,
  page,
  tecs,
}: ProjectProps) {
  return (
    <li
      key={id}
      className="w-[45%] max-w-[250px] h-[400px] flex flex-col justify-between  bg-bglightsecundary dark:bg-bgdarksecundary rounded-md shadow-shadowlight dark:shadow-shadowdark transition  delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110  hover:shadow-hover"
    >
      <Image
        src={img}
        alt=""
        width={400}
        height={400}
        className="w-full object-cover object-top h-[60%] rounded-t-md border-b border-primary"
      />
      <p className="text-center">{title}</p>

      <div className="flex gap-3 justify-center">
        <Link
          href={`/projetos/${slug}`}
          className=" p-1 rounded-md bg-primary text-black shadow-shadowlight dark:shadow-shadowdark"
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

      <ul className="flex px-1 gap-2 justify-center flex-wrap mb-2 font-bold">
        {tecs.map((tec, i) => {
          return (
            <li
              className=" p-1 rounded-md bg-bglight dark:bg-bgdark shadow-shadowlight dark:shadow-shadowdark"
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
