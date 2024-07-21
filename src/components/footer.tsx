import Link from 'next/link'
import Socials from './socials'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center">
      <div className="shadow-shadowlight dark:shadow-none  py-2 min-h-24 w-full flex flex-col justify-around items-center dark:border-t-[1px] dark:border-zinc-800">
        <Link
          href="/"
          className="md:text-2xl text-xl font-extrabold  hover:text-primary mb-2"
        >
          <p className="text-3xl font-medium flex items-center">
            San
            <span className="text-primary text-xl font-bold">
              &#x0007B; &#41;
            </span>
            ro
            <span className="text-primary text-xl font-bold">
              &#x0007B; &#41;
            </span>
            ev
          </p>
        </Link>

        <Socials />
      </div>
    </footer>
  )
}
