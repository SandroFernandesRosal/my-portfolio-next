import Link from 'next/link'

import { FaWhatsapp } from 'react-icons/fa'

import ServiceHighLight from './service-higlight'
import { PiPersonArmsSpreadFill } from 'react-icons/pi'

export default function HighLight() {
  return (
    <section className="flex flex-col relative">
      <section className="flex flex-wrap mb-24 md:mb-36  bg-[url(../assets/bgtopo-dark3.png)] dark:bg-[url(../assets/bgtopo-light3.png)]  bg-cover items-center pt-5  justify-center md:justify-around   bg-bglightsecundary dark:bg-bgdarksecundary  dark:shadow-none dark:border-b-[1px] dark:border-none">
        <div className="flex  justify-center   items-center mb-10 font-bold w-[100%]  md:max-w-[50%]  z-20 md:py-12">
          <h1 className="text-3xl text-center  font-Rubiki md:text-4xl lg:text-5xl px-5 md:px-0    ">
            Transformo ideias em realidade digital, com soluções web inovadoras
            e personalizadas.
          </h1>
        </div>

        <div className="  mb-28 md:mb-0   flex flex-col items-center  justify-center  ">
          <div className="flex justify-center gap-3 mt-5">
            <div className="flex  items-center gap-1">
              <span className="font-Rubiki text-5xl lg:text-7xl font-bold text-primary">
                +3
              </span>{' '}
              <div className="flex flex-col text-sm">
                <span className="lg:text-lg">anos de</span>
                <span className="lg:text-lg">experiência</span>
              </div>
            </div>

            <div className="flex  items-center gap-1">
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
              className=" flex text-center gap-2 p-2 rounded-lg dark:bg-bgdark shadow-shadowlight dark:shadow-none  dark:border-zinc-800 bg-bglight border-[1px]  border-transparent hover:border-primary dark:hover:border-primary"
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
              className=" flex text-center gap-2 p-2 rounded-lg dark:bg-bgdark shadow-shadowlight dark:shadow-none  dark:border-zinc-800 bg-bglight border-[1px]  border-transparent hover:border-primary dark:hover:border-primary"
            >
              <span>Contato</span>{' '}
              <FaWhatsapp className="text-2xl text-primary" />
            </Link>
          </div>
        </div>
        <div className="h-[120px]  w-full bg-[url(../assets/bg-light.png)] dark:bg-[url(../assets/bg-dark.png)]  bg-right md:bg-left  bg-repeat-x" />
      </section>
      <ServiceHighLight />
    </section>
  )
}
