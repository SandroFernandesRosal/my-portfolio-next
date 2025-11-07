'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { api } from '@/data/api'
import { Save, Upload, X, Loader2 } from 'lucide-react'

interface UserData {
  id: string
  email: string
  name: string
  imageUrl: string | null
  createdAt: string
  updatedAt: string
}

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [checkingAuth, setCheckingAuth] = useState(true)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    imageUrl: '',
  })

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api('/auth/me', {
          credentials: 'include',
        })

        if (response.ok) {
          const data = await response.json()
          setUser(data)
          setFormData({
            name: data.name,
            email: data.email,
            imageUrl: data.imageUrl || '',
          })
          setCheckingAuth(false)
        } else {
          router.push('/admin/login')
        }
      } catch (error) {
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSuccess('')

    try {
      const response = await api('/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          imageUrl: formData.imageUrl || null,
        }),
        credentials: 'include',
      })

      if (response.ok) {
        const updatedUser = await response.json()
        setUser(updatedUser)
        setSuccess('Perfil atualizado com sucesso!')
        setTimeout(() => setSuccess(''), 3000)
      } else {
        const data = await response.json()
        setError(data.message || 'Erro ao atualizar perfil')
      }
    } catch (error) {
      setError('Erro de conexão. Tente novamente.')
    } finally {
      setSaving(false)
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

  const handleImageSelect = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validar tipo de arquivo
    const allowedTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
      'image/gif',
    ]
    if (!allowedTypes.includes(file.type)) {
      setError('Tipo de arquivo não permitido. Use: JPEG, PNG, WebP ou GIF')
      return
    }

    // Validar tamanho (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Arquivo muito grande. Tamanho máximo: 5MB')
      return
    }

    setUploading(true)
    setError('')
    setSuccess('')

    try {
      const uploadFormData = new FormData()
      uploadFormData.append('file', file)

      const uploadResponse = await api('/upload/image?folder=users/profile', {
        method: 'POST',
        body: uploadFormData,
        credentials: 'include',
      })

      if (uploadResponse.ok) {
        const uploadResult = await uploadResponse.json()
        setFormData({ ...formData, imageUrl: uploadResult.data.secure_url })
        setSuccess('Imagem enviada com sucesso!')
        setTimeout(() => setSuccess(''), 3000)
      } else {
        const uploadData = await uploadResponse.json()
        setError(uploadData.error || 'Erro ao fazer upload da imagem')
      }
    } catch (error) {
      setError('Erro ao fazer upload da imagem. Tente novamente.')
    } finally {
      setUploading(false)
      // Limpar o input para permitir selecionar o mesmo arquivo novamente
      if (event.target) {
        event.target.value = ''
      }
    }
  }

  const handleRemoveImage = () => {
    setFormData({ ...formData, imageUrl: '' })
  }

  if (checkingAuth || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bglight dark:bg-bgdark">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-bglight dark:bg-bgdark pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-bglightsecondary dark:bg-bgdarksecondary rounded-2xl border border-zinc-300 dark:border-zinc-700 p-8">
          <h1 className="text-3xl font-bold text-textlight dark:text-textdark mb-8">
            Perfil
          </h1>

          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              {formData.imageUrl ? (
                <>
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
                    <Image
                      src={formData.imageUrl}
                      alt={user.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {!uploading && (
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors shadow-lg border-2 border-white dark:border-bgdark z-10 flex items-center justify-center w-8 h-8"
                      title="Remover imagem"
                    >
                      <X size={18} strokeWidth={2.5} />
                    </button>
                  )}
                </>
              ) : (
                <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center text-white font-bold text-4xl border-4 border-primary">
                  {getInitials(formData.name || user.name)}
                </div>
              )}
            </div>

            {/* Upload Button */}
            <div className="mt-4">
              <input
                type="file"
                id="image-upload"
                accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                onChange={handleImageSelect}
                className="hidden"
                disabled={uploading}
              />
              <label
                htmlFor="image-upload"
                className={`inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-[#059669] text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                  uploading
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-lg'
                }`}
              >
                {uploading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Upload size={18} />
                    <span>
                      {formData.imageUrl
                        ? 'Alterar Imagem'
                        : 'Selecionar Imagem'}
                    </span>
                  </>
                )}
              </label>
              <p className="mt-2 text-xs text-center text-zinc-600 dark:text-zinc-400">
                Formatos aceitos: JPEG, PNG, WebP, GIF (máx. 5MB)
              </p>
            </div>
          </div>

          {/* Messages */}
          {error && (
            <div className="mb-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 px-4 py-3 rounded-lg text-sm">
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-textlight dark:text-textdark mb-2"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-bglight dark:bg-bgdark text-textlight dark:text-textdark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-textlight dark:text-textdark mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-bglight dark:bg-bgdark text-textlight dark:text-textdark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={saving || uploading}
                className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-[#059669] text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-bgdarksecondary disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Salvando...</span>
                  </>
                ) : (
                  <>
                    <Save size={20} />
                    <span>Salvar Alterações</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => router.push('/admin')}
                className="px-6 py-3 bg-zinc-600 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-all duration-200"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
