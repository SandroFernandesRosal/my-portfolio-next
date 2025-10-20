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
            <p>Desenvolvedor Fullstack</p>
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
            Formado em Análise e Desenvolvimento de Sistemas, atuo como
            Desenvolvedor Fullstack, onde trabalho com React, Next.js, Node.js,
            Tailwind CSS, MySQL, PostgreSQL e Supabase. Tenho experiência em
            integrações com APIs (incluindo OpenAI e Z-API) e automação de
            processos, desde a criação de interfaces responsivas até a lógica de
            negócio e estruturação de dados. Minha atuação envolve desde a
            implementação de interfaces até a lógica de negócio e organização de
            dados, sempre alinhado a boas práticas de desenvolvimento. No dia a
            dia, utilizo Git/GitHub para versionamento e aplico metodologias
            ágeis como Scrum e Kanban para organizar e acompanhar as demandas de
            forma eficiente.
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
