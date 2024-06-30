import Link from 'next/link'

import Menu from './menu'
import ChangeTheme from './change-theme'
import ItensMenu from './itens-menu'

export default function Header() {
  return (
    <div
      className={` w-[100vw] z-40 shadow-shadowlight flex items-center   dark:shadow-none dark:border-b-[1px] dark:border-zinc-800  py-4 dark:bg-bgdark bg-bglight fixed '} `}
    >
      <div className="flex items-center justify-around gap-2 w-full ">
        <div className="flex items-center">
          <Link
            href="/"
            className="md:text-2xl text-xl font-extrabold hover:text-primary"
          >
            <p className="text-2xl font-medium">&lt;SF&#47;&gt;</p>
          </Link>
        </div>

        <ItensMenu menu={false} />

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
