'use client'

import Link from 'next/link'
import Image from 'next/image'
import { api } from '@/data/api'
import { useAuth } from '@/contexts/auth-context'
import { LogOut, User, LayoutDashboard } from 'lucide-react'

export default function UserAvatarMobile() {
  const { user, loading } = useAuth()

  const handleLogout = async () => {
    try {
      await api('/auth/logout', {
        method: 'POST',
        credentials: 'include',
      })
      window.location.href = '/admin/login'
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
      // Mesmo em caso de erro, redirecionar para login
      window.location.href = '/admin/login'
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
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Avatar */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
        {user.imageUrl ? (
          <Image
            src={user.imageUrl}
            alt={user.name}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-primary flex items-center justify-center text-white font-semibold text-lg">
            {getInitials(user.name)}
          </div>
        )}
      </div>

      {/* User Info */}
      <div className="text-center">
        <p className="text-sm font-semibold text-textlight dark:text-textdark">
          {user.name}
        </p>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 truncate max-w-[200px]">
          {user.email}
        </p>
      </div>

      {/* Menu Options */}
      <div className="w-full flex flex-col gap-2 px-4">
        <Link
          href="/admin"
          className="flex items-center gap-3 px-4 py-3 text-sm text-textlight dark:text-textdark border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary from-bglight via-bglightsecondary to-bglightsecondary hover:border-primary dark:hover:border-primary transition-colors"
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/admin/profile"
          className="flex items-center gap-3 px-4 py-3 text-sm text-textlight dark:text-textdark border-[1px] border-zinc-400 dark:border-zinc-700 rounded-md bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary from-bglight via-bglightsecondary to-bglightsecondary hover:border-primary dark:hover:border-primary transition-colors"
        >
          <User size={18} />
          <span>Perfil</span>
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-sm text-red-600 dark:text-red-400 border-[1px] border-red-400 dark:border-red-700 rounded-md bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors text-left"
        >
          <LogOut size={18} />
          <span>Sair</span>
        </button>
      </div>
    </div>
  )
}
