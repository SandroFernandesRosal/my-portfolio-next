import Link from 'next/link'

import Menu from './menu'
import ChangeTheme from './change-theme'

export default function Header() {
  return (
    <div
      className={` w-full z-40 shadow-shadowlight flex items-center   dark:shadow-shadowdark  py-4 dark:bg-bgdark bg-bglight fixed '} `}
    >
      <div className="flex items-center justify-around gap-2 w-full ">
        <div className="flex items-center">
          <Link
            href="/"
            className="md:text-2xl text-xl font-extrabold hover:text-green-950"
          >
            <p>Sandro Fernandes</p>
          </Link>
        </div>

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
