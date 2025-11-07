'use client'
import { useState } from 'react'
import { AlignRight, X } from 'lucide-react'

import ChangeTheme from './change-theme'
import Opacity from './opacity'
import ItensMenu from './itens-menu'
import Socials from './socials'
import UserAvatarMobile from './user-avatar-mobile'

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
          size={60}
          className="md:hidden cursor-pointer hover:text-primary"
        />
      ) : (
        <X
          onClick={handleMenu}
          size={60}
          className="md:hidden cursor-pointer hover:text-primary"
        />
      )}

      <Opacity menu={menu} />

      <div
        className={`fixed top-[68px] right-0 z-30 flex h-[calc(100vh-68px)] w-[70%] border-l-[1px] border-t-[1px] border-zinc-400 dark:border-zinc-700 transform rounded-l-xl flex-col items-center pt-5 gap-10 bg-bglightsecondary dark:bg-bgdarksecondary font-bold backdrop-blur-md transition-transform duration-300 overflow-y-auto md:hidden ${
          menu ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <ChangeTheme />

        <UserAvatarMobile />

        <ItensMenu menu={menu} handleMenu={handleMenu} />

        <Socials />
      </div>
    </>
  )
}
