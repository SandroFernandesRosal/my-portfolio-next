'use client'

import { ProjectProps } from '@/data/types/projects'
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

interface ProjectViewModalProps {
  project: ProjectProps | null
  onClose: () => void
}

export default function ProjectViewModal({
  project,
  onClose,
}: ProjectViewModalProps) {
  if (!project) return null

  // Filtrar imagens duplicadas (remover a imagem de capa se ela estiver no array de imagens)
  const filteredImages =
    project.images?.filter((img) => img !== project.img) || []

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-bglight dark:bg-bgdark rounded-lg w-[95vw] max-h-[95vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-textlight dark:text-textdark">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="text-textlight dark:text-textdark hover:opacity-70 transition-opacity"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 justify-center items-center w-full">
            <div className="flex flex-col gap-4">
              <p className="text-center text-textlight dark:text-textdark">
                {project.description}
              </p>

              {/* Data do Projeto */}
              {project.dateProject && (
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Data do Projeto:</strong>{' '}
                    {new Date(project.dateProject).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              )}

              {/* Technologies */}
              <ul className="flex gap-4 justify-center flex-wrap mb-2 font-bold">
                {project.technologies &&
                  Array.isArray(project.technologies) &&
                  project.technologies.map((tec, i) => {
                    return (
                      <li
                        className="p-2 bg-bglightsecondary dark:bg-bgdarksecondary rounded-md flex flex-col items-center w-16 justify-center text-center h-24 border-b-4 border-primary"
                        key={i}
                      >
                        <span className="text-xs text-textlight dark:text-textdark leading-tight break-words">
                          {tec}
                        </span>
                        {tec === 'HTML' && (
                          <RiHtml5Line className="text-4xl text-primary" />
                        )}
                        {tec === 'CSS' && (
                          <FaCss3Alt className="text-4xl text-primary" />
                        )}
                        {tec === 'JS' && (
                          <TbBrandJavascript className="text-4xl text-primary" />
                        )}
                        {tec === 'TS' && (
                          <TbBrandTypescript className="text-4xl text-primary" />
                        )}
                        {tec === 'React' && (
                          <RiReactjsLine className="text-4xl text-primary" />
                        )}
                        {tec === 'Next' && (
                          <RiNextjsLine className="text-4xl text-primary" />
                        )}
                        {tec === 'Tailwind' && (
                          <RiTailwindCssFill className="text-4xl text-primary" />
                        )}
                        {tec === 'Zustand' && (
                          <RiBearSmileLine className="text-4xl text-primary" />
                        )}
                        {tec === 'Angular' && (
                          <RiAngularjsLine className="text-4xl text-primary" />
                        )}
                        {tec === 'API' && (
                          <RiNodejsLine className="text-4xl text-primary" />
                        )}
                        {tec === 'Node' && (
                          <SiNodedotjs className="text-4xl text-primary" />
                        )}
                        {tec === 'Fastify' && (
                          <SiFastify className="text-4xl text-primary" />
                        )}
                        {tec === 'Express' && (
                          <SiExpress className="text-4xl text-primary" />
                        )}
                        {tec === 'Styled Components' && (
                          <SiStyledcomponents className="text-4xl text-primary" />
                        )}
                        {tec === 'Prisma' && (
                          <SiPrisma className="text-4xl text-primary" />
                        )}
                        {tec === 'MySQL' && (
                          <SiMysql className="text-4xl text-primary" />
                        )}
                        {tec === 'PostgreSQL' && (
                          <SiPostgresql className="text-4xl text-primary" />
                        )}
                        {tec === 'Supabase' && (
                          <SiSupabase className="text-4xl text-primary" />
                        )}
                        {tec === 'OpenAI' && (
                          <SiOpenai className="text-4xl text-primary" />
                        )}
                        {tec === 'Z-API' && (
                          <FaWhatsapp className="text-4xl text-primary" />
                        )}
                        {tec === 'Scrum' && (
                          <FaHandsHelping className="text-4xl text-primary" />
                        )}
                        {tec === 'Kanban' && (
                          <FaTools className="text-4xl text-primary" />
                        )}
                        {tec === 'N8N' && (
                          <Workflow
                            className="text-4xl text-primary"
                            style={{ width: '2.5rem', height: '2.5rem' }}
                          />
                        )}
                        {tec === 'Evolution-API' && (
                          <MessageSquare
                            className="text-4xl text-primary"
                            style={{ width: '2.5rem', height: '2.5rem' }}
                          />
                        )}
                      </li>
                    )
                  })}
              </ul>
            </div>

            {/* Video */}
            {project.video && (
              <video
                width="320"
                height="240"
                controls
                preload="none"
                className="flex self-center w-full max-w-[600px] min-h-[240px] md:min-h-[300px] border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md"
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

            {/* Carousel */}
            {filteredImages && filteredImages.length > 0 && (
              <div className="w-full pt-4">
                <CarouselProject imgs={filteredImages} />
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4 mt-6">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Repositório
                </a>
              )}
              {project.page && (
                <a
                  href={project.page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Ver Projeto
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
