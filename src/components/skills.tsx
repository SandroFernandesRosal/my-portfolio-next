import {
  RiHtml5Line,
  RiReactjsLine,
  RiNextjsLine,
  RiAngularjsLine,
  RiNodejsLine,
  RiTailwindCssFill,
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

      <ul className="flex flex-wrap gap-3 ">
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4 border-primary">
          HTML
          <RiHtml5Line className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4 border-primary">
          CSS
          <FaCss3Alt className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4 border-primary">
          Javascript
          <TbBrandJavascript className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4 border-primary">
          Typescript
          <TbBrandTypescript className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark  rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4 border-primary">
          ReactJS
          <RiReactjsLine className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4 border-primary">
          NextJS
          <RiNextjsLine className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4 border-primary">
          Angular
          <RiAngularjsLine className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4 border-primary">
          NodeJS
          <RiNodejsLine className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark  rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4 border-primary">
          Prisma
          <SiPrisma className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark  rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4 border-primary">
          TailwindCSS
          <RiTailwindCssFill className="text-6xl text-primary" />
        </li>
        <li className="p-2 dark:bg-bgdark bg-bglight shadow-shadowlight dark:shadow-shadowdark  rounded-md flex flex-col items-center w-24 justify-center text-center h-32 border-b-4 border-primary">
          Styled Components
          <SiStyledcomponents className="text-6xl text-primary" />
        </li>
      </ul>
    </section>
  )
}
