import Link from 'next/link'
import Image from 'next/image'
import fotoPerfil from '../../public/perfil-1.png'
import { FaWhatsapp } from 'react-icons/fa'

import ServiceHighLight from './service-higlight'
import { PiPersonArmsSpreadFill } from 'react-icons/pi'

export default function HighLight() {
  return (
    <section className="flex flex-col relative">
      <section className="flex flex-wrap mb-24  bg-[url(../assets/bgtopo-dark3.png)] dark:bg-[url(../assets/bgtopo-light3.png)]  bg-cover items-center pt-5  justify-center md:justify-around   bg-bglightsecundary dark:bg-bgdarksecundary  dark:shadow-none dark:border-b-[1px] dark:border-none">
        <div className="flex flex-col mb-10 font-bold w-[100%]  md:max-w-[60%] lg:max-w-[50%]  z-20 ">
          <h1 className="text-3xl text-center font-Rubiki md:text-4xl lg:text-5xl px-5  flex self-center">
            Transformo ideias em realidade digital, com soluções web inovadoras
            e personalizadas.
          </h1>

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

        <div className="  mt-5    bg-cover md:bg-none dark:md:bg-none h-[315px] relative bottom-12 md:bottom-0 z-20  md:mb-[110px]  md:dark:shadow-shadowdark md:shadow-shadowlight md:flex items-end md:h-[270px] md:w-[270px] lg:h-[400px] lg:w-[400px]  justify-center md:rounded-perfil md:border-2px border-green md:dark:bg-bgdarksecundary md:bg-bglightsecundary overflow-hidden md:mt-5 ">
          <Image
            src={fotoPerfil}
            height={400}
            width={400}
            alt=""
            className="w-[350px] h-[350px] md:w-[250px] md:h-[250px]  lg:h-[400px] lg:w-[400px] relative -bottom-5 hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="h-[120px]  w-full bg-[url(../assets/bg-light.png)] dark:bg-[url(../assets/bg-dark.png)]  bg-right md:bg-left  bg-repeat-x" />
      </section>
      <ServiceHighLight />
    </section>
  )
}
