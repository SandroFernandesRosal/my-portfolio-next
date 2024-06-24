import Link from 'next/link'
import Socials from './socials'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center">
      <div className="shadow-shadowlight dark:shadow-shadowdark py-2 min-h-24 w-full flex flex-col justify-around items-center">
        <Link
          href="/"
          className="md:text-2xl text-xl font-extrabold  hover:text-primary mb-2"
        >
          <p className="text-2xl font-medium">&lt;Sandro &#47;&gt;</p>
        </Link>
        <Socials />
      </div>
    </footer>
  )
}
