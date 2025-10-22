'use client'

import { useState, useEffect } from 'react'
import { api } from '@/data/api'
import { ProjectProps } from '@/data/types/projects'

interface ProjectModalProps {
  project: ProjectProps | null
  onClose: () => void
  onSave: (isEdit?: boolean) => void
}

export default function ProjectModal({
  project,
  onClose,
  onSave,
}: ProjectModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    img: '',
    video: '',
    repo: '',
    page: '',
    featured: false,
    dateProject: '',
    technologies: [] as string[],
    images: [] as string[],
    slug: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedCoverFile, setSelectedCoverFile] = useState<File | null>(null)
  const [selectedCarouselFiles, setSelectedCarouselFiles] = useState<File[]>([])
  const [selectedVideoFile, setSelectedVideoFile] = useState<File | null>(null)
  const [coverPreview, setCoverPreview] = useState<string>('')
  const [carouselPreviews, setCarouselPreviews] = useState<string[]>([])
  const [videoPreview, setVideoPreview] = useState<string>('')

  useEffect(() => {
    if (project) {
      // Converter data para formato yyyy-MM-dd se existir
      let formattedDate = ''
      if (project.dateProject) {
        try {
          const date = new Date(project.dateProject)
          if (!isNaN(date.getTime())) {
            formattedDate = date.toISOString().split('T')[0] // yyyy-MM-dd
          }
        } catch (error) {
          console.error('Erro ao formatar data:', error)
        }
      }

      setFormData({
        title: project.title,
        description: project.description,
        img: project.img,
        video: project.video || '',
        repo: project.repo || '',
        page: project.page || '',
        featured: project.featured,
        dateProject: formattedDate,
        technologies: project.technologies || [],
        images: project.images || [],
        slug: project.slug || '',
      })
    }
  }, [project])

  // Função para gerar slug automaticamente
  const generateSlug = (title: string, projectId?: number) => {
    // Limpar título: remover acentos, converter para minúsculas, substituir espaços por hífens
    const cleanTitle = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/-+/g, '-') // Remove hífens duplicados
      .trim()

    // Se for edição (project existe), usar ID do projeto
    if (projectId) {
      const idSuffix = projectId.toString().slice(-4) // Últimos 4 dígitos
      return `${cleanTitle}-${idSuffix}`
    }

    // Se for criação, usar timestamp
    const timestamp = Date.now().toString().slice(-4)
    return `${cleanTitle}-${timestamp}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const finalFormData = { ...formData }

      // Limpar campos vazios
      if (!finalFormData.repo.trim()) finalFormData.repo = ''
      if (!finalFormData.page.trim()) finalFormData.page = ''
      if (!finalFormData.video.trim()) finalFormData.video = ''
      if (!finalFormData.dateProject.trim()) finalFormData.dateProject = ''

      // Gerar slug automaticamente
      const autoSlug = generateSlug(formData.title, project?.id)
      finalFormData.slug = autoSlug

      // Upload da foto de capa
      if (selectedCoverFile) {
        const uploadFormData = new FormData()
        uploadFormData.append('file', selectedCoverFile)

        const uploadResponse = await api(
          '/upload/image?folder=projects/cover',
          {
            method: 'POST',
            body: uploadFormData,
            credentials: 'include',
          },
        )

        if (uploadResponse.ok) {
          const uploadResult = await uploadResponse.json()
          finalFormData.img = uploadResult.data.secure_url
        } else {
          let errorMessage = 'Erro ao fazer upload da foto de capa'
          try {
            const uploadData = await uploadResponse.json()
            errorMessage =
              uploadData.error || uploadData.message || errorMessage
          } catch (parseError) {
            console.error('Erro ao fazer parse da resposta:', parseError)
            errorMessage = `Erro ${uploadResponse.status}: ${uploadResponse.statusText}`
          }
          setError(errorMessage)
          setLoading(false)
          return
        }
      }

      // Upload das fotos do carousel
      if (selectedCarouselFiles.length > 0) {
        const carouselFormData = new FormData()
        selectedCarouselFiles.forEach((file) => {
          carouselFormData.append('files', file)
        })

        const carouselResponse = await api(
          '/upload/images?folder=projects/carousel',
          {
            method: 'POST',
            body: carouselFormData,
            credentials: 'include',
          },
        )

        if (carouselResponse.ok) {
          const carouselResult = await carouselResponse.json()
          const newImages = carouselResult.results.map(
            (result: { data: { secure_url: string } }) =>
              result.data.secure_url,
          )
          finalFormData.images = [...(finalFormData.images || []), ...newImages]
        } else {
          let errorMessage = 'Erro ao fazer upload das fotos do carousel'
          try {
            const carouselData = await carouselResponse.json()
            errorMessage =
              carouselData.error || carouselData.message || errorMessage
          } catch (parseError) {
            console.error('Erro ao fazer parse da resposta:', parseError)
            errorMessage = `Erro ${carouselResponse.status}: ${carouselResponse.statusText}`
          }
          setError(errorMessage)
          setLoading(false)
          return
        }
      }

      // Upload do vídeo
      if (selectedVideoFile) {
        const videoFormData = new FormData()
        videoFormData.append('file', selectedVideoFile)

        const videoResponse = await api(
          '/upload/video?folder=projects/videos',
          {
            method: 'POST',
            body: videoFormData,
            credentials: 'include',
          },
        )

        if (videoResponse.ok) {
          const videoResult = await videoResponse.json()
          finalFormData.video = videoResult.data.secure_url
        } else {
          let errorMessage = 'Erro ao fazer upload do vídeo'
          try {
            const videoData = await videoResponse.json()
            errorMessage = videoData.error || videoData.message || errorMessage
          } catch (parseError) {
            console.error('Erro ao fazer parse da resposta:', parseError)
            errorMessage = `Erro ${videoResponse.status}: ${videoResponse.statusText}`
          }
          setError(errorMessage)
          setLoading(false)
          return
        }
      }

      // Salva o projeto
      const url = project ? `/projects/${project.id}` : '/projects'
      const method = project ? 'PUT' : 'POST'

      const response = await api(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalFormData),
        credentials: 'include',
      })

      if (response.ok) {
        onSave(!!project) // Se project existe, é edição
      } else {
        let errorMessage = 'Erro ao salvar projeto'
        try {
          const data = await response.json()
          errorMessage = data.message || data.error || errorMessage
        } catch (parseError) {
          console.error('Erro ao fazer parse da resposta:', parseError)
          errorMessage = `Erro ${response.status}: ${response.statusText}`
        }
        setError(errorMessage)
        setLoading(false)
      }
    } catch (error) {
      console.error('Erro geral no submit:', error)
      setError('Erro interno do servidor durante o upload')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleCoverFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedCoverFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setCoverPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCarouselFilesSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setSelectedCarouselFiles(files)
      files.forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          setCarouselPreviews((prev) => [...prev, e.target?.result as string])
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const handleVideoFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedVideoFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setVideoPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-bglight dark:bg-bgdark rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-textlight dark:text-textdark">
              {project ? 'Editar Projeto' : 'Novo Projeto'}
            </h2>
            <button
              onClick={onClose}
              className="text-textlight dark:text-textdark hover:opacity-70"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-textlight dark:text-textdark mb-1">
                Título
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary bg-bglight dark:bg-bgdark text-textlight dark:text-textdark"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textlight dark:text-textdark mb-1">
                Descrição
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary bg-bglight dark:bg-bgdark text-textlight dark:text-textdark"
              />
            </div>

            {/* Foto de Capa */}
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-textlight dark:text-textdark mb-3">
                📸 Foto de Capa
              </h3>

              <div className="mb-3">
                <input
                  id="cover-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleCoverFileSelect}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-green-600 file:text-white hover:file:bg-green-700"
                />
                {selectedCoverFile && (
                  <p className="mt-2 text-sm text-green-600 font-medium">
                    ✅ {selectedCoverFile.name}
                  </p>
                )}
              </div>

              {/* Preview da foto de capa */}
              {coverPreview && (
                <div className="mb-3">
                  <p className="text-sm text-textlight dark:text-textdark opacity-70 mb-2">
                    Preview:
                  </p>
                  <img
                    src={coverPreview}
                    alt="Preview capa"
                    className="w-40 h-24 object-cover rounded border"
                  />
                </div>
              )}

              {/* Imagem atual */}
              {formData.img && (
                <div className="mb-3">
                  <p className="text-sm text-textlight dark:text-textdark opacity-70 mb-2">
                    Capa atual:
                  </p>
                  <img
                    src={formData.img}
                    alt="Capa atual"
                    className="w-40 h-24 object-cover rounded border"
                  />
                </div>
              )}
            </div>

            {/* Mídia do Carousel */}
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-textlight dark:text-textdark mb-3">
                🎠 Mídia do Carousel
              </h3>
              <p className="text-sm text-textlight dark:text-textdark opacity-70 mb-3">
                Adicione fotos e/ou vídeo que aparecerão no carousel da página
                do projeto
              </p>

              {/* Upload de fotos */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Fotos (múltiplas)
                </label>
                <input
                  id="carousel-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleCarouselFilesSelect}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
                {selectedCarouselFiles.length > 0 && (
                  <p className="mt-2 text-sm text-blue-600 font-medium">
                    ✅ {selectedCarouselFiles.length} foto(s) selecionada(s)
                  </p>
                )}
              </div>

              {/* Upload de vídeo */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Vídeo (opcional)
                </label>
                <input
                  id="video-upload"
                  type="file"
                  accept="video/*"
                  onChange={handleVideoFileSelect}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-red-600 file:text-white hover:file:bg-red-700"
                />
                {selectedVideoFile && (
                  <p className="mt-2 text-sm text-red-600 font-medium">
                    ✅ {selectedVideoFile.name}
                  </p>
                )}
              </div>

              {/* Preview das fotos do carousel */}
              {carouselPreviews.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Preview das fotos:
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {carouselPreviews.map((preview, index) => (
                      <img
                        key={index}
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className="w-20 h-16 object-cover rounded border"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Preview do vídeo */}
              {videoPreview && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Preview do vídeo:
                  </p>
                  <video
                    src={videoPreview}
                    controls
                    className="w-64 h-36 rounded border"
                  />
                </div>
              )}

              {/* Mídia atual */}
              {(formData.images && formData.images.length > 0) ||
              formData.video ? (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Mídia atual:
                  </p>

                  {/* Fotos atuais */}
                  {formData.images && formData.images.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-500 mb-1">Fotos:</p>
                      <div className="flex gap-2 flex-wrap">
                        {formData.images.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={image}
                              alt={`Foto ${index + 1}`}
                              className="w-20 h-16 object-cover rounded border"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setFormData((prev) => ({
                                  ...prev,
                                  images: prev.images.filter(
                                    (_, i) => i !== index,
                                  ),
                                }))
                              }}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                              title="Remover foto"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Vídeo atual */}
                  {formData.video && (
                    <div className="relative group">
                      <p className="text-xs text-gray-500 mb-1">Vídeo:</p>
                      <video
                        src={formData.video}
                        controls
                        className="w-64 h-36 rounded border"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            video: '',
                          }))
                        }}
                        className="absolute top-6 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                        title="Remover vídeo"
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              ) : null}
            </div>

            <div>
              <label className="block text-sm font-medium text-textlight dark:text-textdark mb-1">
                Repositório GitHub (opcional)
              </label>
              <input
                type="url"
                name="repo"
                value={formData.repo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary bg-bglight dark:bg-bgdark text-textlight dark:text-textdark"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-textlight dark:text-textdark mb-1">
                URL da Página (opcional)
              </label>
              <input
                type="url"
                name="page"
                value={formData.page}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary bg-bglight dark:bg-bgdark text-textlight dark:text-textdark"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tecnologias
              </label>

              {/* Input para adicionar nova tecnologia */}
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  id="newTech"
                  placeholder="Digite uma tecnologia"
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      const value = (e.target as HTMLInputElement).value.trim()
                      if (value && !formData.technologies.includes(value)) {
                        setFormData((prev) => ({
                          ...prev,
                          technologies: [...prev.technologies, value],
                        }))
                        ;(e.target as HTMLInputElement).value = ''
                      }
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    const input = document.getElementById(
                      'newTech',
                    ) as HTMLInputElement
                    const value = input.value.trim()
                    if (value && !formData.technologies.includes(value)) {
                      setFormData((prev) => ({
                        ...prev,
                        technologies: [...prev.technologies, value],
                      }))
                      input.value = ''
                    }
                  }}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Adicionar
                </button>
              </div>

              {/* Tags das tecnologias */}
              <div className="flex flex-wrap gap-2">
                {formData.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          technologies: prev.technologies.filter(
                            (_, i) => i !== index,
                          ),
                        }))
                      }}
                      className="text-primary hover:text-red-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-textlight dark:text-textdark mb-1">
                Data do Projeto (opcional)
              </label>
              <input
                type="date"
                name="dateProject"
                value={formData.dateProject}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-primary focus:border-primary bg-bglight dark:bg-bgdark text-textlight dark:text-textdark"
              />
              <p className="text-xs text-gray-500 mt-1">
                Data real de criação do projeto (diferente da data de cadastro
                no sistema)
              </p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Projeto em destaque
              </label>
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-textlight dark:text-textdark rounded-md hover:bg-bglightsecondary dark:hover:bg-bgdarksecondary transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Salvando...' : 'Salvar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
