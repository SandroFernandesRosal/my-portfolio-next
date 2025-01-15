import Link from 'next/link'
import Image from 'next/image'
import Menu from './menu'
import ChangeTheme from './change-theme'
import ItensMenu from './itens-menu'
import { FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  return (
    <div
      id="highlight"
      className={` w-[100vw] z-40  flex items-center   dark:shadow-none border-b-[1px] dark:border-zinc-700 border-zinc-400 py-1 dark:bg-bgdark bg-bglight fixed '} `}
    >
      <div className="flex items-center justify-around gap-2 w-full ">
        <div className="flex items-center">
          <Link
            href="/#highlight"
            className="md:text-2xl text-xl font-extrabold hover:text-primary"
          >
            <Image src="/logo1.png" alt="logo" width={60} height={60} />
          </Link>
        </div>

        <ItensMenu menu={false} />
        <Link
          href={'https://api.whatsapp.com/send?phone=5521935009933'}
          target="blank"
          rel="noopener noreferrer"
          className="flex text-center md:hidden  gap-2  p-2 rounded-lg dark:bg-bgdark dark:border-zinc-700 bg-bglight border-[1px] border-zinc-400 hover:border-primary dark:hover:border-primary"
          aria-label="Entre em contato"
        >
          <span>Contato</span>
          <FaWhatsapp className="text-2xl text-primary" />
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <ChangeTheme />
          </div>

          <Menu />
        </div>
      </div>
    </div>
  )
}
