'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { api } from '@/data/api'
import { LogOut, User, LayoutDashboard } from 'lucide-react'

interface UserData {
  id: string
  email: string
  name: string
  imageUrl: string | null
}

export default function UserAvatar() {
  const [user, setUser] = useState<UserData | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api('/auth/me', {
          credentials: 'include',
        })

        if (response.ok) {
          const data = await response.json()
          setUser(data)
        }
      } catch (error) {
        console.error('Erro ao buscar usuário:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLogout = async () => {
    try {
      await api('/auth/logout', {
        method: 'POST',
        credentials: 'include',
      })
      router.push('/')
      router.refresh()
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  if (loading || !user) {
    return null
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-zinc-300 dark:border-zinc-700 hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-bgdark"
      >
        {user.imageUrl ? (
          <Image
            src={user.imageUrl}
            alt={user.name}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-primary flex items-center justify-center text-white font-semibold text-sm">
            {getInitials(user.name)}
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-bglightsecondary dark:bg-bgdarksecondary rounded-lg shadow-lg border border-zinc-300 dark:border-zinc-700 py-2 z-[60]">
          <div className="px-4 py-2 border-b border-zinc-300 dark:border-zinc-700">
            <p className="text-sm font-semibold text-textlight dark:text-textdark truncate">
              {user.name}
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 truncate">
              {user.email}
            </p>
          </div>

          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-2 text-sm text-textlight dark:text-textdark hover:bg-bglight dark:hover:bg-bgdark transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <LayoutDashboard size={16} />
            Dashboard
          </Link>

          <Link
            href="/admin/profile"
            className="flex items-center gap-3 px-4 py-2 text-sm text-textlight dark:text-textdark hover:bg-bglight dark:hover:bg-bgdark transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <User size={16} />
            Perfil
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-left"
          >
            <LogOut size={16} />
            Sair
          </button>
        </div>
      )}
    </div>
  )
}

