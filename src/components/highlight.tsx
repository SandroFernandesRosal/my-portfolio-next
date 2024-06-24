import Link from 'next/link'
import Image from 'next/image'
import fotoPerfil from '../../public/perfil-1.png'
import { FaWhatsapp } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io'

export default function HighLight() {
  return (
    <div className="flex flex-wrap  items-center pt-5  justify-evenly  px-5 bg-bglightsecundary dark:bg-bgdarksecundary dark:shadow-shadowsection md:pb-10 rounded-b-3xl mb-2 border-white shadow-shadowlight dark:shadow-shadowdark">
      <div className="flex flex-col font-bold  ">
        <h1 className="">Olá, eu sou o </h1>
        <p className="font-MsMadi nome  text-primary text-5xl max-w-[305px] pl-1 ">
          Sandro Fernandes
        </p>
        <h2>Desenvolvedor Font-end</h2>

        <div className="mt-5  text-left max-w-[400px] lg:max-w-[500px]">
          <p>
            Especialzado na criação de sites resposivos, lojas virtuais e blogs.
            Tenho experiência com as mais recentes tecnologias de
            desenvolvimento, garantindo que cada projeto seja moderno, eficiente
            e escalável.
          </p>
        </div>

        <div className="flex my-5 gap-3 justify-center w-ful flex-wrap">
          <Link
            href={'https://api.whatsapp.com/send?phone=5521969501614'}
            target="blank"
            rel="noopener noreferrer"
            locale={false}
            download
            className=" flex gap-2 text-center p-2 rounded-lg dark:bg-bgdark shadow-shadowlight dark:shadow-shadowdark bg-bglight  hover:shadow-primary dark:hover:shadow-primary"
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
            className=" flex text-center gap-2 p-2 rounded-lg dark:bg-bgdark shadow-shadowlight dark:shadow-shadowdark bg-bglight  hover:shadow-primary dark:hover:shadow-primary"
          >
            <span>Currículo</span>{' '}
            <IoMdDownload className="text-2xl text-primary" />
          </Link>
        </div>
      </div>

      <div className=" h-[315px]   md:dark:shadow-shadowdark md:shadow-shadowlight flex items-end md:h-[270px] md:w-[270px] lg:h-[400px] lg:w-[400px]  justify-center md:rounded-perfil md:border-2px border-green md:dark:bg-bgdarksecundary overflow-hidden md:mt-5">
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
