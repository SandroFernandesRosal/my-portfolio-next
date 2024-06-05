import Link from 'next/link'
import Image from 'next/image'
import fotoPerfil from '../../public/perfil-1.png'

export default function HighLight() {
  return (
    <div className="flex flex-wrap-reverse  gap-10 items-center   justify-evenly   px-5">
      <div className="flex flex-col font-bold px-5  ">
        <h1 className="">Olá, eu sou o </h1>
        <p className="font-MsMadi nome text-primary text-6xl max-w-[375px] ">
          Sandro Fernandes
        </p>
        <h2>Desenvolvedor Font-end</h2>

        <div className="mt-5  text-left max-w-[500px]">
          <p>
            Atualmente cursando 5º período de Anlálise e Desenvolvimento de
            Sistemas, pela Universidade Estácio de Sá.
          </p>
          <p>
            Especialzado na criação de sites resposivos, lojas virtuais e blogs.
            Tenho experiência com as mais recentes tecnologias de
            desenvolvimento, garantindo que cada projeto seja moderno, eficiente
            e escalável.
          </p>
        </div>

        <Link
          href={'/cv.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
          download
          className=" mt-5 text-center p-3 rounded-lg dark:bg-bgdarksecundary z-10 shadow-shadowlight dark:shadow-shadowdark bg-bglightsecundary self-center hover:shadow-primary dark:hover:shadow-primary"
        >
          Entrar em contato
        </Link>
      </div>

      <div className=" z-10 dark:shadow-shadowdark shadow-shadowlight flex items-end h-[270px] w-[270px] lg:h-[400px] lg:w-[400px]  justify-center rounded-perfil border-2px border-green bg-bglightsecundary dark:bg-bgdarksecundary overflow-hidden ">
        <Image
          src={fotoPerfil}
          height={400}
          width={400}
          alt=""
          className="w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative -bottom-5 hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  )
}
