import Link from 'next/link'

export interface MenuProps {
  menu: boolean
  handleMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function ItensMenu({ menu, handleMenu }: MenuProps) {
  return (
    <ul
      className={`w-full md:w-auto text-2xl md:text-xl gap-3 md:text-md ${!menu ? 'hidden' : 'flex flex-col'} md:flex md:items-center`}
    >
      <li className="flex justify-center cursor-pointer">
        <Link
          onClick={handleMenu}
          href={'/sobre'}
          className=" md:hover:text-primary border-[1px] md:border-none rounded-md px-2 md:px-0 flex gap-2 border-zinc-400 dark:border-zinc-700 bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary  from-bglight via-bglightsecondary to-bglightsecondary md:bg-none hover:border-primary hover:border-[1px] dark:hover:border-primary"
        >
          <span className="text-primary md:hidden text-2xl">&#123;</span>Sobre
          <span className="text-primary md:hidden text-2xl">&#125;</span>
        </Link>
      </li>

      <li className="flex justify-center cursor-pointer">
        <Link
          onClick={handleMenu}
          href={'/#serviços'}
          className=" md:hover:text-primary border-[1px] md:border-none rounded-md px-2 md:px-0 flex gap-2 border-zinc-400 dark:border-zinc-700 bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary  from-bglight via-bglightsecondary to-bglightsecondary md:bg-none hover:border-primary hover:border-[1px] dark:hover:border-primary"
        >
          <span className="text-primary md:hidden text-2xl">&#123;</span>
          Serviços
          <span className="text-primary md:hidden text-2xl">&#125;</span>
        </Link>
      </li>

      <li className="flex justify-center cursor-pointer">
        <Link
          onClick={handleMenu}
          href={'/#beneficios'}
          className=" md:hover:text-primary border-[1px] md:border-none rounded-md px-2 md:px-0 flex gap-2 border-zinc-400 dark:border-zinc-700 bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary  from-bglight via-bglightsecondary to-bglightsecondary md:bg-none hover:border-primary hover:border-[1px] dark:hover:border-primary"
        >
          <span className="text-primary md:hidden text-2xl">&#123;</span>
          Beneficios
          <span className="text-primary md:hidden text-2xl">&#125;</span>
        </Link>
      </li>

      <li className="flex justify-center cursor-pointer">
        <Link
          onClick={handleMenu}
          href={'/#projetos'}
          className=" md:hover:text-primary border-[1px] md:border-none rounded-md px-2 md:px-0 flex gap-2 border-zinc-400 dark:border-zinc-700 bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary  from-bglight via-bglightsecondary to-bglightsecondary md:bg-none hover:border-primary hover:border-[1px] dark:hover:border-primary"
        >
          <span className="text-primary md:hidden text-2xl">&#123;</span>
          Projetos
          <span className="text-primary md:hidden text-2xl">&#125;</span>
        </Link>
      </li>
      <li className="flex justify-center cursor-pointer">
        <Link
          onClick={handleMenu}
          href={'/#contato'}
          className=" md:hover:text-primary border-[1px] md:border-none rounded-md px-2 md:px-0 flex gap-2 border-zinc-400 dark:border-zinc-700 bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary  from-bglight via-bglightsecondary to-bglightsecondary md:bg-none hover:border-primary hover:border-[1px] dark:hover:border-primary"
        >
          <span className="text-primary md:hidden text-2xl">&#123;</span>
          Contato
          <span className="text-primary md:hidden text-2xl">&#125;</span>
        </Link>
      </li>
      <li className="flex justify-center cursor-pointer">
        <Link
          onClick={handleMenu}
          href={'/#faq'}
          className=" md:hover:text-primary border-[1px] md:border-none rounded-md px-2 md:px-0 flex gap-2 border-zinc-400 dark:border-zinc-700 bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary  from-bglight via-bglightsecondary to-bglightsecondary md:bg-none hover:border-primary hover:border-[1px] dark:hover:border-primary"
        >
          <span className="text-primary md:hidden text-2xl">&#123;</span>
          Dúvidas
          <span className="text-primary md:hidden text-2xl">&#125;</span>
        </Link>
      </li>
    </ul>
  )
}
