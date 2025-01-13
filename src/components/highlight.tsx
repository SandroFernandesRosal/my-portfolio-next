import Link from 'next/link'

import { FaWhatsapp } from 'react-icons/fa'

import { PiPersonArmsSpreadFill } from 'react-icons/pi'
import SkillScroll from './skills-scroll'
import Image from 'next/image'

export default function HighLight() {
  return (
    <section className="flex flex-col relative w-[100vw]">
      <section className="relative flex flex-wrap items-center pt-5  justify-center md:justify-around bg-bglight dark:bg-bgdark md:items-start">
        <div className="absolute  top-0  w-[50%] h-36 md:h-20 bg-green-500/30 blur-[100px]" />

        <div className="my-5 flex px-10 md:px-5 flex-col items-center justify-center w-[100%] md:w-[50%]">
          <Image
            src={'/highlight2.webp'}
            alt="imagem de um notebook"
            width={300}
            height={300}
            priority
            className="max-w-[300px] w-full"
          />
        </div>

        <div className="flex flex-col justify-center items-center self-center  mb-10  w-[100%] md:max-w-[50%]  z-20 md:py-5 dark:md:border-zinc-700">
          <h1 className="text-3xl px-10 md:px-5 text-center  lg:w-[70%]  md:text-4xl">
            Sites modernos e personalizados para impulsionar seu negócio.
          </h1>

          <div className="flex mt-5 gap-3 justify-center w-ful flex-wrap">
            <Link
              href={'/sobre'}
              className="flex text-center gap-2 p-2 rounded-lg dark:bg-bgdark dark:border-zinc-700 bg-bglight border-[1px] border-zinc-400 hover:border-primary dark:hover:border-primary"
              aria-label="Saiba mais sobre mim"
            >
              <span>Quem sou</span>{' '}
              <PiPersonArmsSpreadFill className="text-2xl text-primary" />
            </Link>
            <Link
              href={'https://api.whatsapp.com/send?phone=5521969501614'}
              target="blank"
              rel="noopener noreferrer"
              className="flex text-center gap-2 p-2 rounded-lg dark:bg-bgdark dark:border-zinc-700 bg-bglight border-[1px] border-zinc-400 hover:border-primary dark:hover:border-primary"
              aria-label="Entre em contato"
            >
              <span>Contato</span>{' '}
              <FaWhatsapp className="text-2xl text-primary" />
            </Link>
          </div>
        </div>

        <div
          id="serviços"
          className="h-[120px] w-full bg-[url(../assets/bg-lightsecondary2.webp)] dark:bg-[url(../assets/bg-darksecondary2.webp)]   bg-bottom bg-repeat-x"
        />
      </section>
    </section>
  )
}
