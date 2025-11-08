import { ProjectProps } from '@/data/types/projects'
import { api } from '@/data/api'
import { Metadata } from 'next'

import {
  RiHtml5Line,
  RiReactjsLine,
  RiNextjsLine,
  RiAngularjsLine,
  RiNodejsLine,
  RiTailwindCssFill,
  RiBearSmileLine,
} from 'react-icons/ri'
import { FaCss3Alt, FaHandsHelping, FaTools, FaWhatsapp } from 'react-icons/fa'
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb'
import { Workflow, MessageSquare } from 'lucide-react'
import {
  SiPrisma,
  SiStyledcomponents,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiOpenai,
  SiFastify,
  SiNodedotjs,
  SiExpress,
} from 'react-icons/si'
import CarouselProject from '@/components/carousel-project'

interface SlugProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<ProjectProps> {
  const response = await api(`/projects/${slug}`, {
    cache: 'no-store',
  })

  const project = await response.json()

  return project
}

export async function generateStaticParams() {
  const response = await api('/projects', {
    cache: 'no-store',
  })

  const products = await response.json()

  // Verificar se products é um array
  if (!Array.isArray(products)) {
    return []
  }

  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({
  params,
}: SlugProps): Promise<Metadata> {
  const project = await getProduct(params.slug)

  return {
    title: project.title,
  }
}

export default async function ProjectPage({ params }: SlugProps) {
  const project = await getProduct(params.slug)

  // Filtrar imagens duplicadas (remover a imagem de capa se ela estiver no array de imagens)
  const filteredImages =
    project.images?.filter((img) => img !== project.img) || []

  return (
    <div className="pt-[90px] flex flex-col items-center gap-5 min-h-screen bg-bglightsecundary dark:bg-bgdarksecundary pb-10 px-5">
      <h1
        id="servicos"
        className="md:text-4xl text-2xl flex items-center  gap-2 justify-center rounded-md px-2  mb-10"
      >
        <span className="text-primary text-2xl md:text-4xl">&#123;</span>{' '}
        {project.title}
        <span className="text-primary text-2xl md:text-4xl">&#125;</span>
      </h1>

      <div className="flex flex-col gap-5 justify-center items-center w-full">
        <div className="flex flex-col gap-4">
          <p className="text-center">{project.description}</p>

          {/* Data do Projeto */}
          {project.dateProject && (
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Data do Projeto:</strong>{' '}
                {new Date(project.dateProject).toLocaleDateString('pt-BR')}
              </p>
            </div>
          )}

          <ul className="flex  gap-4 justify-center flex-wrap mb-2 font-bold">
            {project.technologies &&
              Array.isArray(project.technologies) &&
              project.technologies.map((tec, i) => {
                return (
                  <li
                    className="p-2   bg-bglightsecondary dark:bg-bgdarksecondary rounded-md flex flex-col items-center w-16 justify-center text-center h-24 border-b-4 border-primary"
                    key={i}
                  >
                    <span className="text-xs leading-tight break-words">
                      {tec}
                    </span>
                    {tec === 'HTML' && (
                      <RiHtml5Line className="text-6xl text-primary" />
                    )}
                    {tec === 'CSS' && (
                      <FaCss3Alt className="text-6xl text-primary" />
                    )}
                    {tec === 'JS' && (
                      <TbBrandJavascript className="text-6xl text-primary" />
                    )}
                    {tec === 'TS' && (
                      <TbBrandTypescript className="text-6xl text-primary" />
                    )}
                    {tec === 'React' && (
                      <RiReactjsLine className="text-6xl text-primary" />
                    )}
                    {tec === 'Next' && (
                      <RiNextjsLine className="text-6xl text-primary" />
                    )}
                    {tec === 'Tailwind' && (
                      <RiTailwindCssFill className="text-6xl text-primary" />
                    )}
                    {tec === 'Zustand' && (
                      <RiBearSmileLine className="text-6xl text-primary" />
                    )}
                    {tec === 'Angular' && (
                      <RiAngularjsLine className="text-6xl text-primary" />
                    )}
                    {tec === 'API' && (
                      <RiNodejsLine className="text-6xl text-primary" />
                    )}
                    {tec === 'Node' && (
                      <SiNodedotjs className="text-6xl text-primary" />
                    )}
                    {tec === 'Fastify' && (
                      <SiFastify className="text-6xl text-primary" />
                    )}
                    {tec === 'Express' && (
                      <SiExpress className="text-6xl text-primary" />
                    )}
                    {tec === 'Styled Components' && (
                      <SiStyledcomponents className="text-6xl text-primary" />
                    )}
                    {tec === 'Prisma' && (
                      <SiPrisma className="text-6xl text-primary" />
                    )}
                    {tec === 'MySQL' && (
                      <SiMysql className="text-6xl text-primary" />
                    )}
                    {tec === 'PostgreSQL' && (
                      <SiPostgresql className="text-6xl text-primary" />
                    )}
                    {tec === 'Supabase' && (
                      <SiSupabase className="text-6xl text-primary" />
                    )}
                    {tec === 'OpenAI' && (
                      <SiOpenai className="text-6xl text-primary" />
                    )}
                    {tec === 'Z-API' && (
                      <FaWhatsapp className="text-6xl text-primary" />
                    )}
                    {tec === 'Scrum' && (
                      <FaHandsHelping className="text-6xl text-primary" />
                    )}
                    {tec === 'Kanban' && (
                      <FaTools className="text-6xl text-primary" />
                    )}
                    {tec === 'N8N' && (
                      <Workflow
                        className="text-6xl text-primary"
                        style={{ width: '3.75rem', height: '3.75rem' }}
                      />
                    )}
                    {tec === 'Evolution-API' && (
                      <MessageSquare
                        className="text-6xl text-primary"
                        style={{ width: '3.75rem', height: '3.75rem' }}
                      />
                    )}
                  </li>
                )
              })}
          </ul>
        </div>

        {project.video && (
          <video
            width="320"
            height="240"
            controls
            preload="none"
            className="flex self-center w-full max-w-[900px] min-h-[240px] md:min-h-[400px] border-[1px] border-zinc-400 dark:border-xinc-700 rounded-md"
          >
            <source src={project.video} type="video/mp4" />
            <track
              src={project.video}
              kind="subtitles"
              srcLang="pt-br"
              label="Portuguese"
            />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="w-full pt-10">
          <CarouselProject imgs={filteredImages} />
        </div>
      </div>
    </div>
  )
}
