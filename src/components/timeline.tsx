'use client'

import { useState } from 'react'

import Image from 'next/image'
import { BadgeCheck, Building2, Calendar, FileText } from 'lucide-react'

export interface certificateProps {
  ads: string
  internet: string
  mobile: string
  escalaveis: string
  sistemas: string
  nlw: string
  especializar: string
  fundamentar: string
}

interface EducationItem {
  id: keyof certificateProps
  title: string
  institution: string
  description: string
  period?: string
  status: 'graduated' | 'certified'
}

export default function TimeLine() {
  const [open, setOpen] = useState<keyof certificateProps | null>(null)

  const certificados: certificateProps = {
    ads: '/ads.png',
    internet: '/internet.png',
    mobile: '/mobile.png',
    escalaveis: '/escalaveis.png',
    sistemas: '/sistemas.png',
    nlw: '/nlw.png',
    especializar: '/especializar.png',
    fundamentar: '/fundamentar.png',
  }

  const educationItems: EducationItem[] = [
    {
      id: 'ads',
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade Estácio de Sá',
      description: '04/22 - 10/24.',
      period: '04/22 - 10/24',
      status: 'graduated',
    },
    {
      id: 'internet',
      title: 'Programação para Internet',
      institution: 'Estácio',
      description:
        'Introdução a programação estruturada em C, Desenvolvimento Web em HTML5, CSS, Javascript e PHP, Paradigmas de Linguagem de Programação em Python.',
      status: 'certified',
    },
    {
      id: 'mobile',
      title: 'Programação para dispositivos móveis',
      institution: 'Estácio',
      description:
        'Introdução a segurança da informação, Desenvolvimento Web em HTML5, CSS, Javascript e PHP, Programação para dispositivos móveis em android e React Native.',
      status: 'certified',
    },
    {
      id: 'escalaveis',
      title: 'Programação de Algoritmos Escaláveis',
      institution: 'Universidade Estácio de Sá',
      description:
        'Estrutura de dados e C, Matemática e lógica, Paradigmas de programação em Python.',
      status: 'certified',
    },
    {
      id: 'sistemas',
      title: 'Programação de Sistemas de Informação',
      institution: 'Universidade Estácio de Sá',
      description:
        'Introdução a programação estruturada em C, Modelagem de sistemas com UML e Programação orientada a objetos em Java',
      status: 'certified',
    },
    {
      id: 'nlw',
      title: 'NLW Pocket: Javascript - Full-stack Intermediário',
      institution: 'Rocketseat',
      description:
        'Desenvolvimento de uma aplicação back-end em Node.js, aplicação dos conceitos de API REST, utilizando TypeScript, Fastify como framework, integração do DrizzleORM + PostgreSQL, Docker e Zod para validação de dados. Desenvolvimento de uma aplicação front-end em ReactJS, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, tooling com Vite, interface responsiva com TailwindCSS, consumo de API Node.js, gerenciamento de dados assíncronos com TanStack Query.',
      status: 'certified',
    },
    {
      id: 'especializar',
      title: 'Especializar',
      institution: 'Rocketseat',
      description:
        'javaScript Assíncrono e Promises, APIs, Fundamentos de ReactJS e TypeScript, GitHub para times, CSS Transition e Animation, SQL Avançado.',
      status: 'certified',
    },
    {
      id: 'fundamentar',
      title: 'Fundamentar',
      institution: 'Rocketseat',
      description:
        'fundamentos de HTML, CSS, JavaScript, DOM, Terminal, NodeJS, EJS, SQL, Estrutura de Dados, Programação Orientada a Objetos, Programação Funcional, Git, GitHub e HTTP.',
      status: 'certified',
    },
  ]

  return (
    <>
      {open && (
        <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black dark:bg-white dark:bg-opacity-20  bg-opacity-50">
          <div className="bg-bglightsecondary dark:bg-bgdarksecondary  flex  flex-col items-center justify-center gap-5  p-5 rounded-md shadow-md w-[90%] md:w-[50%]">
            <Image
              src={certificados[open]}
              alt=""
              width={500}
              height={700}
              className="border-[1px] border-zinc-300"
            />
            <button
              onClick={() => setOpen(null)}
              className="px-4 py-2 bg-primary text-black font-bold rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      <div className="relative w-full max-w-5xl mx-auto px-4 md:px-10 mb-20">
        {/* Timeline vertical line with gradient */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-transparent dark:from-primary dark:via-primary/60 dark:to-transparent transform md:-translate-x-1/2"></div>

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-6 z-10">
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-md animate-pulse"></div>
                  {/* Main dot */}
                  <div className="relative w-4 h-4 rounded-full bg-primary ring-4 ring-bglightsecondary dark:ring-bgdarksecondary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-black dark:bg-white"></div>
                  </div>
                </div>
              </div>

              {/* Card */}
              <div
                className={`
                  relative ml-16 md:ml-0 md:w-[calc(50%-2rem)]
                  ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}
                  transition-all duration-500 ease-out
                  hover:scale-[1.02] hover:translate-y-[-4px]
                `}
              >
                <div
                  className={`
                    relative p-6 rounded-xl
                    bg-gradient-to-br from-bglight/80 to-bglightsecondary/80
                    dark:from-bgdark/80 dark:to-bgdarksecondary/80
                    backdrop-blur-sm
                    border border-zinc-300/50 dark:border-zinc-700/50
                    shadow-lg
                    hover:shadow-2xl hover:shadow-primary/10
                    hover:border-primary/50
                    transition-all duration-300
                    before:absolute before:inset-0 before:rounded-xl
                    before:bg-gradient-to-br before:from-primary/0 before:to-primary/0
                    hover:before:from-primary/5 hover:before:to-primary/10
                    before:transition-all before:duration-300
                    overflow-hidden
                  `}
                >
                  {/* Decorative gradient corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full pointer-events-none"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header with title and badge */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <h3 className="text-xl font-bold text-textlight dark:text-textdark group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.status === 'graduated' ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary text-black shadow-lg shadow-primary/30">
                          <BadgeCheck className="w-4 h-4 mr-1.5" />
                          Formado
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border-2 border-zinc-400 dark:border-zinc-600 text-textlight dark:text-textdark">
                          Certificado
                        </span>
                      )}
                    </div>

                    {/* Institution */}
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-4 h-4 text-primary" />
                      <time className="text-sm font-semibold text-primary">
                        {item.institution}
                      </time>
                    </div>

                    {/* Period (if exists) */}
                    {item.period && (
                      <div className="flex items-center gap-2 mb-3 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Certificate button */}
                    <button
                      onClick={() => setOpen(item.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm bg-transparent border border-zinc-400 dark:border-zinc-600 text-textlight dark:text-textdark hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-95 transition-all duration-200 group/btn"
                    >
                      <FileText className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                      Ver Certificado
                    </button>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
