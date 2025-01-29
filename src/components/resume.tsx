import Image from 'next/image'
import fotoPerfil from '../../public/fotoperfil2.png'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io'

export default function Resume() {
  return (
    <div className="flex  flex-wrap w-full items-center px-5  justify-center md:justify-around  pt-[100px] dark:bg-bgdarksecondary dark:bg-[url(../assets/bg-dark2.webp)] bg-[url(../assets/bg-light2.webp)]  bg-bottom bg-repeat-x">
      <div className="">
        <div className="mb-5">
          <p className="text-xl pl-3">Olá, eu sou o</p>
          <p className="font-MsMadi nome  text-primary text-5xl max-w-[305px] pl-3  pt-2 ">
            Sandro Fernandes
          </p>

          <div className="pl-5">
            <p>Desenvolvedor Web</p>
            <p>Freelancer - Disponível </p>
          </div>

          <div className="flex my-5 gap-3 justify-center w-ful flex-wrap">
            <Link
              href={'https://api.whatsapp.com/send?phone=5521969501614'}
              target="blank"
              rel="noopener noreferrer"
              locale={false}
              download
              className=" flex text-center gap-2 p-2 rounded-lg dark:border-zinc-700  border-[1px]  border-zinc-400 hover:border-primary dark:hover:border-primary"
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
              className=" flex text-center gap-2 p-2 rounded-lg dark:border-zinc-700  border-[1px]  border-zinc-400 hover:border-primary dark:hover:border-primary"
            >
              <span>Currículo</span>{' '}
              <IoMdDownload className="text-2xl text-primary" />
            </Link>
          </div>
        </div>

        <div className="text-left mx-5 lg:mb-10 max-w-[600px]">
          <p className="pb-[20px] md:pb-[100px]">
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

      <Image
        src={fotoPerfil}
        height={787}
        width={583}
        alt="foto de Sandro"
        className="w-full mb-40 max-w-[350px] [mask-image:linear-gradient(to_top,transparent,white_35%,white_90%,transparent)]"
      />
    </div>
  )
}
