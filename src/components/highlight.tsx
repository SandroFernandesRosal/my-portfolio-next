import Link from 'next/link'

import { FaWhatsapp } from 'react-icons/fa'

import { PiPersonArmsSpreadFill } from 'react-icons/pi'
import SkillScroll from './skills-scroll'

export default function HighLight() {
  return (
    <section className="flex flex-col relative w-[100vw]">
      <section className="relative flex flex-wrap items-center pt-5 justify-center md:justify-around bg-bglightsecundary dark:bg-bgdarksecundary dark:shadow-none dark:border-b-[1px] dark:border-none md:items-start">
        <div className="absolute  top-0  w-[50%] h-36 md:h-20 bg-green-500/30 blur-[100px]" />

        <div className="flex justify-center items-center md:items-start mb-10 font-bold w-[100%] md:max-w-[50%]  z-20 md:py-5">
          <h1 className="text-3xl px-10 md:px-5 text-center  lg:w-[70%]  md:text-4xl">
            Quer ficar visível para o seu público na internet e lucrar ainda
            mais? Eu tenho a solução ideal para você.
          </h1>
        </div>

        <div className="my-5 flex px-10 md:px-5 flex-col items-center justify-center w-[100%] md:w-[50%]">
          <div className="border-l-[3px] border-primary px-[5px] ">
            <h1 className="text-xl">
              Eu sou o <span className="text-primary">Sandro Fernandes</span> e
              vou te ajudar a ter visibilidade com um site incrível e totalmente
              personalizado.
            </h1>
          </div>
          <div className="flex justify-center gap-3 mt-5">
            <div className="flex items-center gap-1">
              <span className="font-Rubiki text-5xl lg:text-7xl font-bold text-primary">
                +3
              </span>{' '}
              <div className="flex flex-col text-sm">
                <span className="lg:text-lg">anos de</span>
                <span className="lg:text-lg">experiência</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="font-bold text-5xl lg:text-7xl text-primary font-Rubiki">
                +15
              </span>{' '}
              <div className="flex flex-col text-sm">
                <span className="lg:text-lg">projetos</span>
                <span className="lg:text-lg">concluídos</span>
              </div>
            </div>
          </div>

          <div className="flex mt-5 gap-3 justify-center w-ful flex-wrap">
            <Link
              href={'/sobre'}
              className="flex text-center gap-2 p-2 rounded-lg dark:bg-bgdark shadow-shadowlight dark:shadow-none dark:border-zinc-800 bg-bglight border-[1px] border-transparent hover:border-primary dark:hover:border-primary"
            >
              <span>Quem sou</span>{' '}
              <PiPersonArmsSpreadFill className="text-2xl text-primary" />
            </Link>
            <Link
              href={'https://api.whatsapp.com/send?phone=5521969501614'}
              target="blank"
              rel="noopener noreferrer"
              locale={false}
              download
              className="flex text-center gap-2 p-2 rounded-lg dark:bg-bgdark shadow-shadowlight dark:shadow-none dark:border-zinc-800 bg-bglight border-[1px] border-transparent hover:border-primary dark:hover:border-primary"
            >
              <span>Contato</span>{' '}
              <FaWhatsapp className="text-2xl text-primary" />
            </Link>
          </div>
        </div>
        <SkillScroll />
        <div className="h-[120px] w-full bg-[url(../assets/bg-light.png)] dark:bg-[url(../assets/bg-dark.png)]   bg-bottom bg-repeat-x" />
      </section>
    </section>
  )
}
