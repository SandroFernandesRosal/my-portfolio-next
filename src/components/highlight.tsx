import Link from 'next/link'
import Image from 'next/image'
import fotoPerfil from '../../public/perfil-1.png'

export default function HighLight() {
  return (
    <div className="flex flex-wrap  items-center pt-5  justify-evenly  px-5 bg-bglightsecundary dark:bg-bgdarksecundary dark:shadow-shadowsection md:pb-10">
      <div className="flex flex-col font-bold  ">
        <h1 className="">Olá, eu sou o </h1>
        <p className="font-MsMadi nome  text-primary text-5xl max-w-[305px] pl-1 ">
          Sandro Fernandes
        </p>
        <h2>Desenvolvedor Font-end</h2>

        <div className="mt-5  text-left max-w-[500px]">
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
          className=" mt-5 text-center p-3 rounded-lg dark:bg-bgdark z-10 shadow-shadowlight dark:shadow-shadowdark bg-bglight self-center hover:shadow-primary dark:hover:shadow-primary"
        >
          Entrar em contato
        </Link>
      </div>

      <div className=" z-0 md:z-10 relative -bottom-10 md:static  md:dark:shadow-shadowdark md:shadow-shadowlight flex items-end md:h-[270px] md:w-[270px] lg:h-[400px] lg:w-[400px]  justify-center md:rounded-perfil md:border-2px border-green md:dark:bg-bgdarksecundary overflow-hidden md:mt-5">
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
