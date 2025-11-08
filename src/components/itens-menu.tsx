'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { api } from '@/data/api'
import {
  UserCircle,
  Settings,
  Star,
  FolderOpen,
  Mail,
  HelpCircle,
} from 'lucide-react'

export interface MenuProps {
  menu: boolean
  handleMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function ItensMenu({ menu, handleMenu }: MenuProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api('/auth/me', {
          credentials: 'include',
        })

        if (response.ok) {
          setIsAuthenticated(true)
        } else {
          // Não autenticado - não é erro, apenas definir estado
          setIsAuthenticated(false)
        }
      } catch (error) {
        // Silenciar erros de autenticação - são esperados quando não logado
        setIsAuthenticated(false)
      } finally {
        setCheckingAuth(false)
      }
    }

    checkAuth()
  }, [])
  return (
    <ul
      className={`w-full md:w-auto text-2xl md:text-base gap-2 md:gap-6 ${!menu ? 'hidden' : 'flex flex-col'} md:flex md:items-center md:flex-row`}
    >
      <li className="w-full px-4 md:px-0">
        <Link
          onClick={handleMenu}
          href={'/sobre'}
          className="flex items-center gap-3 px-4 py-3 text-sm md:text-base md:px-0 md:py-2 text-textlight dark:text-textdark border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary from-bglight via-bglightsecondary to-bglightsecondary hover:border-primary dark:hover:border-primary transition-all duration-200 md:border-none md:bg-none md:hover:bg-none md:hover:text-primary md:relative md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-0 md:after:h-[2px] md:after:bg-primary md:after:transition-all md:after:duration-200 md:hover:after:w-full"
        >
          <UserCircle size={18} className="md:hidden" />
          <span>Sobre</span>
        </Link>
      </li>

      <li className="w-full px-4 md:px-0">
        <Link
          onClick={handleMenu}
          href={'/#serviços'}
          className="flex items-center gap-3 px-4 py-3 text-sm md:text-base md:px-0 md:py-2 text-textlight dark:text-textdark border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary from-bglight via-bglightsecondary to-bglightsecondary hover:border-primary dark:hover:border-primary transition-all duration-200 md:border-none md:bg-none md:hover:bg-none md:hover:text-primary md:relative md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-0 md:after:h-[2px] md:after:bg-primary md:after:transition-all md:after:duration-200 md:hover:after:w-full"
        >
          <Settings size={18} className="md:hidden" />
          <span>Serviços</span>
        </Link>
      </li>

      <li className="w-full px-4 md:px-0">
        <Link
          onClick={handleMenu}
          href={'/#beneficios'}
          className="flex items-center gap-3 px-4 py-3 text-sm md:text-base md:px-0 md:py-2 text-textlight dark:text-textdark border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary from-bglight via-bglightsecondary to-bglightsecondary hover:border-primary dark:hover:border-primary transition-all duration-200 md:border-none md:bg-none md:hover:bg-none md:hover:text-primary md:relative md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-0 md:after:h-[2px] md:after:bg-primary md:after:transition-all md:after:duration-200 md:hover:after:w-full"
        >
          <Star size={18} className="md:hidden" />
          <span>Beneficios</span>
        </Link>
      </li>

      <li className="w-full px-4 md:px-0">
        <Link
          onClick={handleMenu}
          href={'/#projetos'}
          className="flex items-center gap-3 px-4 py-3 text-sm md:text-base md:px-0 md:py-2 text-textlight dark:text-textdark border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary from-bglight via-bglightsecondary to-bglightsecondary hover:border-primary dark:hover:border-primary transition-all duration-200 md:border-none md:bg-none md:hover:bg-none md:hover:text-primary md:relative md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-0 md:after:h-[2px] md:after:bg-primary md:after:transition-all md:after:duration-200 md:hover:after:w-full"
        >
          <FolderOpen size={18} className="md:hidden" />
          <span>Projetos</span>
        </Link>
      </li>
      <li className="w-full px-4 md:px-0">
        <Link
          onClick={handleMenu}
          href={'/#contato'}
          className="flex items-center gap-3 px-4 py-3 text-sm md:text-base md:px-0 md:py-2 text-textlight dark:text-textdark border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary from-bglight via-bglightsecondary to-bglightsecondary hover:border-primary dark:hover:border-primary transition-all duration-200 md:border-none md:bg-none md:hover:bg-none md:hover:text-primary md:relative md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-0 md:after:h-[2px] md:after:bg-primary md:after:transition-all md:after:duration-200 md:hover:after:w-full"
        >
          <Mail size={18} className="md:hidden" />
          <span>Contato</span>
        </Link>
      </li>
      <li className="w-full px-4 md:px-0">
        <Link
          onClick={handleMenu}
          href={'/#faq'}
          className="flex items-center gap-3 px-4 py-3 text-sm md:text-base md:px-0 md:py-2 text-textlight dark:text-textdark border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary from-bglight via-bglightsecondary to-bglightsecondary hover:border-primary dark:hover:border-primary transition-all duration-200 md:border-none md:bg-none md:hover:bg-none md:hover:text-primary md:relative md:after:absolute md:after:bottom-0 md:after:left-0 md:after:w-0 md:after:h-[2px] md:after:bg-primary md:after:transition-all md:after:duration-200 md:hover:after:w-full"
        >
          <HelpCircle size={18} className="md:hidden" />
          <span>Dúvidas</span>
        </Link>
      </li>
    </ul>
  )
}
