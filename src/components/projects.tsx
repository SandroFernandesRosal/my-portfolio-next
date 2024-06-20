import Link from 'next/link'
import Image from 'next/image'
import { Github, Info, ExternalLink } from 'lucide-react'
import { Project } from '@/data/types/projects'
import { api } from '@/data/api'

export default async function Projects() {
  const response = await api('/products', {
    next: {
      revalidate: 1,
    },
  })

  const projects = await response.json()
  return (
    <section className="px-5 dark:bg-bgdark bg-bglight py-5 ">
      <h1 className="border-l-8 mb-5 border-primary pl-2 rounded-md text-2xl">
        Meus projetos
      </h1>

      <ul className="flex flex-wrap gap-5 justify-center">
        {projects.map((project: Project) => {
          return (
            <li
              key={project.id}
              className="w-[45%] max-w-[250px] h-[440px] flex flex-col justify-between  bg-bglightsecundary dark:bg-bgdarksecundary rounded-md shadow-shadowlight dark:shadow-shadowdark transition  delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110  hover:shadow-hover"
            >
              <Image
                src={project.img}
                alt=""
                width={400}
                height={400}
                className="w-full object-cover object-top h-[60%] rounded-t-md border-b border-primary"
              />
              <p className="text-center">{project.title}</p>

              <div className="flex gap-3 justify-center">
                <Link
                  href={`/projetos/${project.slug}`}
                  className=" p-1 rounded-md bg-primary text-black shadow-shadowlight dark:shadow-shadowdark"
                >
                  <Info />
                </Link>
                <Link
                  href={project.repo}
                  target="_blank"
                  className=" p-1 rounded-md bg-primary text-black shadow-shadowlight dark:shadow-shadowdark"
                >
                  <Github />
                </Link>
                <Link
                  href={project.page}
                  target="_blank"
                  className=" p-1 rounded-md bg-primary text-black shadow-shadowlight dark:shadow-shadowdark"
                >
                  <ExternalLink />
                </Link>
              </div>

              <ul className="flex px-1 gap-2 justify-center flex-wrap mb-2 font-bold">
                {project.tecs.map((tec, i) => {
                  return (
                    <li
                      className=" p-1 rounded-md bg-bglight dark:bg-bgdark shadow-shadowlight dark:shadow-shadowdark"
                      key={i}
                    >
                      {tec}
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
