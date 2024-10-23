'use client'

import { useLayoutEffect, useRef, useState } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

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

export default function TimeLine() {
  const [open, setOpen] = useState<keyof certificateProps | null>(null)
  const el = useRef<HTMLUListElement | null>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: el.current,
            scrub: true,
            markers: false,
            start: 'top 100%',
            end: 'bottom 100%',
          },
        })
        .fromTo(
          '.timeline',
          {
            opacity: 0,
            x: 360,
          },
          {
            opacity: 1,
            x: 0,
          },
        )
    }, el)

    return () => {
      gsap.killTweensOf('.timeline')
    }
  }, [])

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
  return (
    <>
      {open && (
        <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black dark:bg-white dark:bg-opacity-20  bg-opacity-50">
          <div className="bg-white dark:bg-bgdarksecundary  flex  flex-col items-center justify-center gap-5  p-5 rounded-md shadow-md w-[90%] md:w-[50%]">
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
      <ul
        ref={el}
        className="relative  mx-10  w-[85%] overflow-visible border-l border-gray-700 dark:border-gray-700 md:w-[45%] mb-20 "
      >
        <div className="timeline relative">
          <li className="mb-5 ml-6">
            <span className="absolute  -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40 ">
              <svg
                aria-hidden="true"
                className="h-3 w-3 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 flex  text-lg font-semibold text-gray-900 dark:text-white">
              Análise e Desenvolvimento de Sistemas
              <span className=" rounded px-2 w-[150px] flex justify-center items-center h-[30px] ml-2 py-0.5 text-sm font-bold bg-primary dark:text-black">
                Formado
              </span>
            </h3>{' '}
            <time className="mb-2 block overflow-hidden text-sm font-normal leading-none text-textlight  dark:text-textdark">
              Universidade Estácio de Sá
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              04/22 - 10/24.{' '}
              <button
                onClick={() => setOpen('ads')}
                className="p-1 px-2 mx-2 dark:bg-bgdarksecundary rounded-md text-textlight dark:text-textdark font-bold shadow-shadowlight dark:shadow-none  dark:border-zinc-800 bg-bglight border-[1px]  border-transparent hover:border-primary dark:hover:border-primary"
              >
                Certificado
              </button>
            </p>
          </li>

          <li className="mb-5 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
              <svg
                aria-hidden="true"
                className="h-3 w-3 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-textlight dark:text-textdark">
              Programação para Internet
            </h3>
            <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
              Estácio
            </time>
            <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
              Introdução a programação estruturada em C, Desenvolvimento Web em
              HTML5, CSS, Javascript e PHP, Paradigmas de Linguagem de
              Programação em Python.{' '}
              <button
                onClick={() => setOpen('internet')}
                className="p-1 px-2 mx-2 dark:bg-bgdarksecundary rounded-md text-textlight dark:text-textdark font-bold shadow-shadowlight dark:shadow-none  dark:border-zinc-800 bg-bglight border-[1px]  border-transparent hover:border-primary dark:hover:border-primary mb-1"
              >
                Certificado
              </button>
            </p>
          </li>

          <li className="mb-5 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
              <svg
                aria-hidden="true"
                className="h-3 w-3 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-textlight dark:text-textdark">
              Programação para dispositivos móveis
            </h3>
            <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
              Estácio
            </time>
            <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
              Introdução a segurança da informação, Desenvolvimento Web em
              HTML5, CSS, Javascript e PHP, Programação para dispositivos móveis
              em android e React Native.{' '}
              <button
                onClick={() => setOpen('mobile')}
                className="p-1 px-2 mx-2 dark:bg-bgdarksecundary rounded-md text-textlight dark:text-textdark font-bold shadow-shadowlight dark:shadow-none  dark:border-zinc-800 bg-bglight border-[1px]  border-transparent hover:border-primary dark:hover:border-primary mb-1"
              >
                Certificado
              </button>
            </p>
          </li>
          <li className="mb-5 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
              <svg
                aria-hidden="true"
                className="h-3 w-3 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-textlight dark:text-textdark">
              Programação de Algoritmos Escaláveis
            </h3>
            <time className=" mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
              Universidade Estácio de Sá
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Estrutura de dados e C, Matemática e lógica, Paradigmas de
              programação em Python.
              <button
                onClick={() => setOpen('escalaveis')}
                className="p-1 px-2 mx-2 dark:bg-bgdarksecundary rounded-md text-textlight dark:text-textdark font-bold shadow-shadowlight dark:shadow-none  dark:border-zinc-800 bg-bglight border-[1px]  border-transparent hover:border-primary dark:hover:border-primary mb-1"
              >
                Certificado
              </button>
            </p>
          </li>

          <li className="ml-6 mb-5">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
              <svg
                aria-hidden="true"
                className="h-3 w-3 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Programação de Sistemas de Informação
            </h3>
            <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
              Universidade Estácio de Sá
            </time>
            <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
              Introdução a programação estruturada em C, Modelagem de sistemas
              com UML e Programação orientada a objetos em Java
              <button
                onClick={() => setOpen('sistemas')}
                className="p-1 px-2 mx-2 dark:bg-bgdarksecundary rounded-md text-textlight dark:text-textdark font-bold shadow-shadowlight dark:shadow-none  dark:border-zinc-800 bg-bglight border-[1px]  border-transparent hover:border-primary dark:hover:border-primary mb-1"
              >
                Certificado
              </button>
            </p>
          </li>

          <li className="ml-6 mb-5">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
              <svg
                aria-hidden="true"
                className="h-3 w-3 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              NLW Pocket: Javascript - Full-stack Intermediário
            </h3>
            <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
              Rocketseat
            </time>
            <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
              Desenvolvimento de uma aplicação back-end em Node.js, aplicação
              dos conceitos de API REST, utilizando TypeScript, Fastify como
              framework, integração do DrizzleORM + PostgreSQL, Docker e Zod
              para validação de dados. Desenvolvimento de uma aplicação
              front-end em ReactJS, aplicação dos conceitos de Propriedades,
              Estados e Componentes, tipagem com Typescript, tooling com Vite,
              interface responsiva com TailwindCSS, consumo de API Node.js,
              gerenciamento de dados assíncronos com TanStack Query.
              <button
                onClick={() => setOpen('nlw')}
                className="p-1 px-2 mx-2 dark:bg-bgdarksecundary rounded-md text-textlight dark:text-textdark font-bold shadow-shadowlight dark:shadow-none  dark:border-zinc-800 bg-bglight border-[1px]  border-transparent hover:border-primary dark:hover:border-primary mb-1"
              >
                Certificado
              </button>
            </p>
          </li>

          <li className="ml-6 mb-5">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
              <svg
                aria-hidden="true"
                className="h-3 w-3 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Especializar
            </h3>
            <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
              Rocketseat
            </time>
            <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
              javaScript Assíncrono e Promises, APIs, Fundamentos de ReactJS e
              TypeScript, GitHub para times, CSS Transition e Animation, SQL
              Avançado.
              <button
                onClick={() => setOpen('especializar')}
                className="p-1 px-2 mx-2 dark:bg-bgdarksecundary rounded-md text-textlight dark:text-textdark font-bold shadow-shadowlight dark:shadow-none  dark:border-zinc-800 bg-bglight border-[1px]  border-transparent hover:border-primary dark:hover:border-primary mb-1"
              >
                Certificado
              </button>
            </p>
          </li>

          <li className="ml-6 mb-5">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 dark:ring-primary/20 ring-primary/40">
              <svg
                aria-hidden="true"
                className="h-3 w-3 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Fundamentar
            </h3>
            <time className="mb-2 block overflow-hidden text-sm font-bold leading-none text-textlight dark:text-textdark">
              Rocketseat
            </time>
            <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
              fundamentos de HTML, CSS, JavaScript, DOM, Terminal, NodeJS, EJS,
              SQL, Estrutura de Dados, Programação Orientada a Objetos,
              Programação Funcional, Git, GitHub e HTTP.
              <button
                onClick={() => setOpen('fundamentar')}
                className="p-1 px-2 mx-2 dark:bg-bgdarksecundary rounded-md text-textlight dark:text-textdark font-bold shadow-shadowlight dark:shadow-none  dark:border-zinc-800 bg-bglight border-[1px]  border-transparent hover:border-primary dark:hover:border-primary mb-1"
              >
                Certificado
              </button>
            </p>
          </li>
        </div>
      </ul>
    </>
  )
}
