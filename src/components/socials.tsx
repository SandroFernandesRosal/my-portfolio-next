import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      <Link
        href={'https://api.whatsapp.com/send?phone=5521969501614'}
        target="blank"
        className="flex items-center justify-around gap-2 md:gap-0 md:w-[150px]  bg-bglight dark:bg-bgdark rounded-md  p-2  shadow-shadowlight dark:shadow-shadow-none dark:border-[1px] dark:border-zinc-800 font-bold border-[1px]  border-transparent hover:border-primary dark:hover:border-primary"
      >
        <span>Whatsapp</span> <FaWhatsapp className="text-2xl text-primary" />
      </Link>

      <Link
        href={'https://github.com/SandroFernandesRosal'}
        target="blank"
        className="flex items-center justify-around gap-2 md:gap-0 md:w-[150px]  bg-bglight dark:bg-bgdark rounded-md  p-2  shadow-shadowlight dark:shadow-shadow-none dark:border-[1px] dark:border-zinc-800 font-bold border-[1px]  border-transparent hover:border-primary dark:hover:border-primary"
      >
        <span>Github</span> <FaGithub className="text-2xl text-primary" />
      </Link>

      <Link
        href={'https://www.linkedin.com/in/sandrofernandesrosal'}
        target="blank"
        className="flex items-center justify-around gap-2 md:gap-0 md:w-[150px]  bg-bglight dark:bg-bgdark rounded-md  p-2  shadow-shadowlight dark:shadow-shadow-none dark:border-[1px] dark:border-zinc-800 font-bold border-[1px]  border-transparent hover:border-primary dark:hover:border-primary"
      >
        <span>Linkedin</span> <FaLinkedin className="text-2xl text-primary" />
      </Link>
    </div>
  )
}
