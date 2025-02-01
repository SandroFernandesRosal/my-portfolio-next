import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className="flex w-full gap-3 flex-wrap justify-center ">
      <Link
        href={'https://api.whatsapp.com/send?phone=5521935009933'}
        target="blank"
        rel="noopener noreferrer"
        className="flex items-center justify-around gap-2 md:gap-0  md:w-[150px]   rounded-md  p-2 border-[1px] dark:border-zinc-700 font-bold  border-zinc-400 hover:border-primary dark:hover:border-primary"
        aria-label="Meu whatsapp"
      >
        <span>Whatsapp</span> <FaWhatsapp className="text-2xl text-primary" />
      </Link>

      <Link
        href={'https://www.instagram.com/devsandro/'}
        target="blank"
        rel="noopener noreferrer"
        className="flex items-center justify-around gap-2 md:gap-0 md:w-[150px]   rounded-md  p-2 border-[1px] dark:border-zinc-700 font-bold  border-zinc-400 hover:border-primary dark:hover:border-primary"
        aria-label="Meu instagram"
      >
        <span>Instagram</span> <FaInstagram className="text-2xl text-primary" />
      </Link>
    </div>
  )
}
