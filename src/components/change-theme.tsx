'use client'

import { useTheme } from 'next-themes'
import ReactSwitch from 'react-switch'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

export default function ChangeTheme() {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ReactSwitch
      className="flex items-center justify-center border-[1px] dark:border-zinc-700 border-zinc-400"
      aria-label="Tema light ou dark"
      onChange={changeTheme}
      checked={theme === 'light'}
      checkedIcon={
        <BsFillMoonFill color="#6D28D9" fontSize="28" className="p-[4px]" />
      }
      uncheckedIcon={
        <BsFillSunFill color="yellow" fontSize="28" className="p-[4px]" />
      }
      onColor={'#F4F4F5'}
      offColor={'#121214'}
      onHandleColor={'#10B981'}
      offHandleColor={'#10B981'}
      activeBoxShadow={'0 0 0px 0px #3f3f46'}
    />
  )
}
