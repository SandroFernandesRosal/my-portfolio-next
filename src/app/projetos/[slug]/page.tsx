import { Project } from '@/data/types/projects'
import { api } from '@/data/api'
import { Metadata } from 'next'
import Image from 'next/image'

interface ProjectProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Project> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })

  const project = await response.json()

  return project
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const project = await getProduct(params.slug)

  return {
    title: project.title,
  }
}

export default async function ProjecttPage({ params }: ProjectProps) {
  const project = await getProduct(params.slug)
  return (
    <div className="pt-[90px] flex flex-col items-center gap-5 min-h-screen bg-bglightsecundary dark:bg-bgdarksecundary pb-10">
      <h1 className="text-center text-2xl font-extrabold">{project.title}</h1>

      <div className="flex flex-wrap gap-5 justify-evenly w-full  ">
        <div className="flex flex-col gap-4">
          <p className="text-center">{project.description}</p>
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
        </div>
        <div className="flex flex-col justify-center gap-5">
          {project.imgs.map((img, i) => {
            return (
              <Image
                key={i}
                src={img}
                alt=""
                height={900}
                width={900}
                quality={100}
                className="rounded-lg max-w-[400px] shadow-shadowlight dark:shadow-shadowdark object-contain  object-top"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
