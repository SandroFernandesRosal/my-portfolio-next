'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

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

    'Como vou saber se o site está sendo feito?',
    'Quais são as formas de pagamento?',
    'Como funciona o suporte?',
  ]

  const faqAnswers: string[] = [
    'O site é aquele composto por diversas páginas, com o objetivo de informar sobre um negócio, produto, pessoa etc. Já a Landing Page é composta por uma única página, que visa transformar o seu visitante em lead (contatos que demonstraram interesse por seu produto ou serviço).',
    'Os projetos são sob medida, de acordo com sua necessidade. Logo o investimento para criar um site depende da necessidade do seu negócio.',
    'O prazo de entrega varia conforme o escopo do projeto, mas geralmente leva de 4 a 6 semanas. Caso seja uma Landing page, até 1 semana.',
    'O cliente, junto com o desenvolvedor, definirão quais serão as funcionalidades, links e páginas do site. Também será definido o Layout. Após essas definições, o layout será convertido em código. Ou seja, o site ganhará vida.',

    'Após a finalização projeto, a pasta será enviada para a nuvem com seu projeto e com as instruções de uso. Caso queira, também será disponibilizado acesso ao respositório do Github. Caso não entenda nada disso, não se preocupe, pois também tenho o serviço de hospedagem e manutenção do seu site.',

    'Durante o processo de produção, será disponibilizado um link temporário, onde poderá acompanhar a produção do site em tempo real.',
    'Aceito diversas formas de pagamento, incluindo pix, cartão de crédito, boleto e transferência bancária.',
    'Oferecemos suporte contínuo para garantir que seu site esteja sempre funcionando corretamente.',
  ]

  return (
    <section
      className="z-10 px-5   flex flex-col items-center  dark:bg-bgdark bg-bglight py-5  pb-40 dark:bg-[url(../assets/bg-darksecondary.png)] bg-[url(../assets/bg-lightsecondary.png)]   bg-bottom bg-repeat-x"
      id="faq"
    >
      <h1 className="text-3xl font-Rubiki">Perguntas frequentes</h1>
      <span className="border-b-4 pb-2 w-24  border-primary  text-3xl mb-5"></span>

      <ul className="w-[90%] px-5 max-w-[500px] flex flex-col gap-3">
        {faqItems.map((item, index) => (
          <li key={index} onClick={() => handleOpen(index)} className={``}>
            <h1 className="bg-primary h-20 items-center text-black rounded-md p-5 font-bold cursor-pointer flex justify-between">
              {`${index + 1} - ${item}`}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </h1>
            <div
              className={`p-1 border-x-[1px] rounded-md bg-bglightsecundary dark:bg-bgdarksecundary border-b-[1px] dark:border-zinc-800 border-zinc-400 transition ease-in-out duration-300 delay-150 ${openIndex === index ? 'flex' : 'hidden'}`}
            >
              {faqAnswers[index]}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
