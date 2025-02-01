import Link from 'next/link'
import Socials from './socials'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-3  border-t-[1px] border-zinc-400 dark:border-zinc-700">
      <div className="py-2 w-full flex justify-center   items-center ">
        <Link href="/#highlight" className="flex-1 flex justify-center">
          <Image
            src="/logo1.png"
            alt="logo"
            width={100}
            height={100}
            className="w-[100%] max-w-[80px] "
          />
        </Link>
        <div className="flex-1">
          <Socials />
        </div>
      </div>
      <p className="text-xs sm:text-sm text-center  hover:text-primary transition-colors">
        &copy; {new Date().getFullYear()} -{' '}
        <span title="Este conteúdo está protegido por leis de direitos autorais.">
          Todos os direitos reservados
        </span>
      </p>
    </footer>
  )
}
