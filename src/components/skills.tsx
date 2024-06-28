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

export default function Skills() {
  return (
    <section className="w-full flex flex-col px-5 py-5 bg-bglightsecundary dark:bg-bgdarksecundary">
      <h1 className="border-l-8 mb-5 border-primary pl-2 rounded-md text-2xl">
        Minhas Habilidades
      </h1>

      <ul className="flex flex-wrap gap-3 justify-center">
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4  dark:border-t-zinc-800  border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800">
          HTML
          <RiHtml5Line className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4  dark:border-t-zinc-800  border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800">
          CSS
          <FaCss3Alt className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4  dark:border-t-zinc-800  border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800">
          Javascript
          <TbBrandJavascript className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4  dark:border-t-zinc-800  border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800">
          Typescript
          <TbBrandTypescript className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4  dark:border-t-zinc-800  border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800">
          ReactJS
          <RiReactjsLine className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4  dark:border-t-zinc-800  border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800">
          NextJS
          <RiNextjsLine className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4  dark:border-t-zinc-800  border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800">
          Angular
          <RiAngularjsLine className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4  dark:border-t-zinc-800  border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800">
          NodeJS
          <RiNodejsLine className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4  dark:border-t-zinc-800  border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800">
          Prisma
          <SiPrisma className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4  dark:border-t-zinc-800  border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800">
          TailwindCSS
          <RiTailwindCssFill className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4  dark:border-t-zinc-800  border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800">
          Styled Components
          <SiStyledcomponents className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-none rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4  dark:border-t-zinc-800  border-b-primary dark:border-t-[1px] dark:border-r-zinc-800 dark:border-x-[1px] dark:border-x-zinc-800">
          Zustand
          <RiBearSmileLine className="text-6xl text-primary" />
        </li>
      </ul>
    </section>
  )
}
