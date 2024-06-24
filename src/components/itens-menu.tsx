import Link from 'next/link'

export interface MenuProps {
  menu: boolean
  handleMenu: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function ItensMenu({ menu, handleMenu }: MenuProps) {
  return (
    <ul
      className={`w-full md:w-auto text-xl md:text-md ${!menu ? 'hidden' : 'flex flex-col'} md:flex md:items-center`}
    >
      <li className="hover:bg-bglight dark:hover:bg-bgdark pl-2 md:pl-0 cursor-pointer">
        <Link
          onClick={handleMenu}
          href={'/sobre'}
          className="border-l-8 md:border-none md:pl-0 md:my-0 border-primary pl-2 rounded-md my-2 md:hover:text-primary"
        >
          Sobre
        </Link>
      </li>

      <li className="hover:bg-bglight dark:hover:bg-bgdark pl-2 cursor-pointer">
        <Link
          onClick={handleMenu}
          href={'/projetos'}
          className="border-l-8  border-primary pl-2 rounded-md my-2 md:border-none md:pl-0 md:my-0 md:hover:text-primary"
        >
          Projetos
        </Link>
      </li>
      <li className="hover:bg-bglight dark:hover:bg-bgdark pl-2 cursor-pointer">
        <Link
          onClick={handleMenu}
          href={'/contato'}
          className="border-l-8  border-primary pl-2 rounded-md my-2 md:border-none md:pl-0 md:my-0 "
        >
          Contato
        </Link>
      </li>
    </ul>
  )
}
