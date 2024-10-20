import Image from 'next/image'
import fotoPerfil from '../../public/perfil-1.png'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io'

export default function Resume() {
  return (
    <div className="flex  flex-wrap w-full items-center px-5 mb-5 justify-center md:justify-around bg-bglightsecundary dark:bg-bgdarksecundary pt-[100px] dark:bg-[url(../assets/bg-dark.png)] bg-[url(../assets/bg-light.png)] bg-bottom bg-repeat-x">
      <div className="">
        <div className="mb-5">
          <p className="text-xl pl-3">Olá, eu sou o</p>
          <p className="font-MsMadi nome  text-primary text-5xl max-w-[305px] pl-3  pt-2 ">
            Sandro Fernandes
          </p>

          <div className="pl-5">
            <p>Desenvolvedor Front-end</p>
            <p>Freelancer - Disponível </p>
          </div>

          <div className="flex my-5 gap-3 justify-center w-ful flex-wrap">
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

            <Link
              href={'/cv.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
              download
              className=" flex text-center gap-2 p-2 rounded-lg dark:bg-bgdark shadow-shadowlight dark:shadow-none  dark:border-zinc-800 bg-bglight border-[1px]  border-transparent hover:border-primary dark:hover:border-primary"
            >
              <span>Currículo</span>{' '}
              <IoMdDownload className="text-2xl text-primary" />
            </Link>
          </div>
        </div>

        <div className="text-left mx-5 lg:mb-10 max-w-[600px]">
          <p className="pb-[100px]">
            Recem graduado em Análise e Desenvolvimento de Sistemas. Sempre fui
            fascinado pela tecnologia, mas foi em um momento muito difícil que
            descobri que a programação era o que eu realmente queria para a
            minha vida. E esse momento difícil foi em 2020, ínicio da pândemia
            do corona vírus. Eu trabalhava como garçom em eventos, e também
            vendia trufas nas ruas. Quando começou a pândemia, eu não pude mais
            ir trabalhar. Foi aí que eu tive mais tempo pra começar a estudar
            programação.
          </p>
        </div>
      </div>

      <div className=" h-[325px] md:mb-5 md:dark:shadow-shadowdark md:shadow-shadowlight flex items-end md:h-[270px] md:w-[270px] lg:h-[400px] lg:w-[400px]  justify-center rounded-perfil border-2px border-green dark:bg-bgdarksecundary overflow-hidden md:mt-5">
        <Image
          src={fotoPerfil}
          height={400}
          width={400}
          alt=""
          className="w-[350px] h-[350px] md:w-[250px] md:h-[250px]  lg:h-[400px] lg:w-[400px] relative -bottom-5 hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  )
}
