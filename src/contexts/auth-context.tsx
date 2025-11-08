'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from 'react'
import { api } from '@/data/api'

interface UserData {
  id: number
  email: string
  name: string
  imageUrl: string | null
}

interface AuthContextType {
  user: UserData | null
  isAuthenticated: boolean
  loading: boolean
  refetch: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const hasFetched = useRef(false)

  const fetchUser = async () => {
    try {
      const response = await api('/auth/me', {
        credentials: 'include',
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data)
      } else {
        // Usuário não autenticado - não é erro, apenas não mostrar o avatar
        setUser(null)
      }
    } catch (error) {
      // Silenciar erros de autenticação - são esperados quando não logado
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Prevenir requisições duplicadas causadas pelo React Strict Mode
    if (hasFetched.current) return
    hasFetched.current = true
    fetchUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        refetch: fetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
