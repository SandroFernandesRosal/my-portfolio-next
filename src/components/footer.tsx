import Link from 'next/link'
import Socials from './socials'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center ">
      <div className="py-2 min-h-24 w-full flex flex-col justify-around items-center border-t-[1px] border-zinc-400 dark:border-zinc-700 gap-2">
        <Link
          href="/#highlight"
          className="md:text-2xl text-xl font-extrabold hover:text-primary"
        >
          <Image src="/logo1.png" alt="logo" width={70} height={70} />
        </Link>

        <Socials />
      </div>
    </footer>
  )
}
