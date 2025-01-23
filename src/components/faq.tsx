'use client'
import { useState, useLayoutEffect, useRef } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems: string[] = [
    'Qual a diferença de um site para uma Landing page?',
    'Quanto custa pra fazer um site?',
    'Qual é o prazo de entrega?',
    'Como funciona o processo de criação de um site?',
    'Como é feita a entrega?',
    'Quais são as formas de pagamento?',
    'Como funciona o suporte?',
  ]

  const faqAnswers: string[] = [
    'O site é aquele composto por diversas páginas, com o objetivo de informar sobre um negócio, produto, pessoa etc. Já a Landing Page é composta por uma única página, que visa transformar o seu visitante em lead (contatos que demonstraram interesse por seu produto ou serviço).',

    'Os projetos são sob medida, de acordo com sua necessidade. Logo o investimento para criar um site depende da necessidade do seu negócio.',

    'O prazo de entrega varia conforme o escopo do projeto, mas geralmente leva de 4 a 6 semanas. Caso seja uma Landing page, até 1 semana.',

    'O cliente, junto com o desenvolvedor, definirão quais serão as funcionalidades, links e páginas do site. Também será definido o Layout. Após essas definições, o layout será convertido em código. Ou seja, o site ganhará vida.',

    'Após a finalização projeto, a pasta será enviada para a nuvem com seu projeto e com as instruções de uso. Caso queira, também será disponibilizado acesso ao respositório do Github. Caso não entenda nada disso, não se preocupe, pois também tenho o serviço de hospedagem e manutenção do seu site.',

    'Aceito pix e cartão de crédito.',

    'Oferecemos suporte contínuo para garantir que seu site esteja sempre funcionando corretamente.',
  ]

  const el = useRef<HTMLDivElement | null>(null)
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
            start: 'top 90%',
            end: 'bottom 90%',
          },
        })
        .fromTo(
          '.faq',
          {
            opacity: 0,
            y: -50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 2.5,
            ease: 'power2.out',
          },
        )
    }, el)

    return () => {
      gsap.killTweensOf('.faq')
    }
  }, [])

  return (
    <section className="z-10 px-5   flex flex-col items-center  dark:bg-bgdarksecondary bg-bglightsecondary py-5 pb-[160px] dark:bg-[url(../assets/bg-dark2.webp)] bg-[url(../assets/bg-light2.webp)]   bg-bottom bg-repeat-x relative pt-[68px] -mt-[68px]">
      <h1
        id="projetos"
        className="text-2xl border-[1px] flex items-center  gap-2 justify-center rounded-md px-2 border-zinc-400 dark:border-zinc-700 bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary  from-bglight via-bglightsecondary to-bglightsecondary mb-10"
      >
        <span className="text-primary text-2xl">&#123;</span> Perguntas
        frequentes
        <span className="text-primary text-2xl">&#125;</span>
      </h1>

      <div ref={el} className="flex justify-center">
        <ul className="w-[90%] px-5 max-w-[500px] flex flex-col gap-3">
          {faqItems.map((item, index) => (
            <li key={index} onClick={() => handleOpen(index)} className="faq">
              <h1 className="border-[1px] hover:border-primary hover:border-[1px] border-zinc-400 dark:hover:border-primary dark:border-zinc-700 rounded-md  h-20 items-center p-5 font-bold cursor-pointer flex justify-between">
                {`${index + 1} - ${item}`}
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </h1>
              <div
                className={`p-1 border-x-[1px] rounded-md bg-bglightsecundary dark:bg-bgdarksecundary border-b-[1px] dark:border-zinc-700 border-zinc-400 transition ease-in-out duration-300 delay-150 ${openIndex === index ? 'flex' : 'hidden'}`}
              >
                {faqAnswers[index]}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
