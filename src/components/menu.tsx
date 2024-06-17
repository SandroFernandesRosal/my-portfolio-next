'use client'
import { useState } from 'react'
import { AlignRight, X } from 'lucide-react'

import ChangeTheme from './change-theme'

export default function Menu() {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }
  return (
    <>
      {!menu ? (
        <AlignRight
          onClick={handleMenu}
          size={40}
          className="md:hidden cursor-pointer hover:text-primary"
        />
      ) : (
        <X
          onClick={handleMenu}
          size={40}
          className="md:hidden cursor-pointer hover:text-primary"
        />
      )}

      <div
        className={`fixed top-[70px]  right-0 z-30 flex min-h-screen w-[70%] shadow-shadowlight dark:shadow-shadowdark transform rounded-l-xl flex-col items-center pt-5 gap-10 bg-bglightsecundary dark:bg-bgdarksecundary font-bold backdrop-blur-md transition-transform duration-300 md:hidden ${
          menu ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <ChangeTheme />

        <ul className="flex flex-col w-full text-xl">
          <li className="hover:bg-bglight dark:hover:bg-bgdark pl-2 cursor-pointer">
            <p className="border-l-8  border-primary pl-2 rounded-md my-2">
              Sobre
            </p>
          </li>

          <li className="hover:bg-bglight dark:hover:bg-bgdark pl-2 cursor-pointer">
            <p className="border-l-8 border-primary pl-2 rounded-md my-2">
              Serviços
            </p>
          </li>
          <li className="hover:bg-bglight dark:hover:bg-bgdark pl-2 cursor-pointer">
            <p className="border-l-8  border-primary pl-2 rounded-md my-2">
              Habilidades
            </p>
          </li>
          <li className="hover:bg-bglight dark:hover:bg-bgdark pl-2 cursor-pointer">
            <p className="border-l-8  border-primary pl-2 rounded-md my-2">
              Projetos
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}
