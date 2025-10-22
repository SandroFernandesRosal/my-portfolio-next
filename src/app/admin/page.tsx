'use client'

import { useState, useEffect } from 'react'
import { api } from '@/data/api'
import { ProjectProps } from '@/data/types/projects'
import ProjectModal from '@/components/admin/project-modal'
import ProjectViewModal from '@/components/admin/project-view-modal'
import { Eye, Edit, Trash2, ImageIcon } from 'lucide-react'
import Image from 'next/image'

export default function AdminDashboard() {
  const [projects, setProjects] = useState<ProjectProps[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null,
  )
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Estados para toast e modal de confirmação
  const [toast, setToast] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState<number | null>(null)
  const [showViewModal, setShowViewModal] = useState(false)
  const [projectToView, setProjectToView] = useState<ProjectProps | null>(null)

  useEffect(() => {
    checkAuth()
    fetchProjects()
  }, [])

  // Função para mostrar toast
  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 3000)
  }

  const checkAuth = async () => {
    try {
      console.log('🔍 Admin: Verificando autenticação...')
      console.log('🍪 Admin: Cookies atuais:', document.cookie)

      const response = await api('/auth/me', {
        credentials: 'include',
      })

      console.log(
        '📡 Admin: Resposta /auth/me:',
        response.status,
        response.statusText,
      )

      if (response.ok) {
        const data = await response.json()
        console.log('✅ Admin: Usuário autenticado:', data)
        setIsAuthenticated(true)
      } else {
        const data = await response.json()
        console.log('❌ Admin: Erro de autenticação:', data)

        // Redirecionar para login se não autenticado
        if (data.code === 'TOKEN_EXPIRED') {
          console.log('⏰ Admin: Token expirado, redirecionando para login...')
        }
        window.location.href = '/admin/login'
      }
    } catch (error) {
      console.error('❌ Admin: Erro de autenticação:', error)
      window.location.href = '/admin/login'
    }
  }

  const fetchProjects = async () => {
    try {
      const response = await api('/projects')
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      console.error('Erro ao carregar projetos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleEditProject = (project: ProjectProps) => {
    setSelectedProject(project)
    setShowProjectModal(true)
  }

  const handleCreateProject = () => {
    setSelectedProject(null)
    setShowProjectModal(true)
  }

  const handleDeleteProject = (id: number) => {
    setProjectToDelete(id)
    setShowDeleteModal(true)
  }

  const handleViewProject = (project: ProjectProps) => {
    setProjectToView(project)
    setShowViewModal(true)
  }

  const confirmDelete = async () => {
    if (projectToDelete) {
      try {
        const response = await api(`/projects/${projectToDelete}`, {
          method: 'DELETE',
        })

        if (response.ok) {
          setProjects(projects.filter((p) => p.id !== projectToDelete))
          showToast('success', 'Projeto deletado com sucesso!')
        } else {
          showToast('error', 'Erro ao deletar projeto')
        }
      } catch (error) {
        console.error('Erro ao deletar projeto:', error)
        showToast('error', 'Erro ao deletar projeto')
      }
    }
    setShowDeleteModal(false)
    setProjectToDelete(null)
  }

  const cancelDelete = () => {
    setShowDeleteModal(false)
    setProjectToDelete(null)
  }

  const handleProjectSaved = (isEdit: boolean = false) => {
    setShowProjectModal(false)
    setSelectedProject(null)
    fetchProjects()
    showToast(
      'success',
      isEdit ? 'Projeto editado com sucesso!' : 'Projeto criado com sucesso!',
    )
  }

  const handleLogout = async () => {
    try {
      await api('/auth/logout', {
        method: 'POST',
        credentials: 'include',
      })

      // Redirecionar para login
      window.location.href = '/admin/login'
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
      // Mesmo com erro, redirecionar para login
      window.location.href = '/admin/login'
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bglight dark:bg-bgdark">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-textlight dark:text-textdark">
            Verificando autenticação...
          </h1>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bglight dark:bg-bgdark">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-textlight dark:text-textdark">
            Carregando projetos...
          </h1>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bglight dark:bg-bgdark">
      {/* Header */}
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <h1 className="text-2xl font-bold text-textlight dark:text-textdark">
                Dashboard
              </h1>
              <span className="text-sm text-textlight dark:text-textdark opacity-60">
                Gerenciar Projetos
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleCreateProject}
                className="bg-primary hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md"
              >
                + Novo Projeto
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-bglightsecondary dark:bg-bgdarksecondary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/20 group flex flex-col h-full max-h-[600px]"
            >
              <div className="h-[100%]  bg-bglight dark:bg-bgdark relative overflow-hidden">
                {project.img ? (
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-textlight dark:text-textdark opacity-50 h-full w-full">
                    <ImageIcon className="w-12 h-12 mb-2" />
                    <span className="text-sm">Sem imagem</span>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                    Destaque
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col h-[300px]">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-textlight dark:text-textdark mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-textlight dark:text-textdark text-sm mb-4 line-clamp-2 opacity-70">
                    {project.description}
                  </p>

                  {/* Data do Projeto */}
                  {project.dateProject && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        <strong>Criado em:</strong>{' '}
                        {new Date(project.dateProject).toLocaleDateString(
                          'pt-BR',
                        )}
                      </p>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies?.length > 3 && (
                      <span className="text-xs text-textlight dark:text-textdark opacity-60 bg-bglight dark:bg-bgdark px-3 py-1 rounded-full border">
                        +{project.technologies.length - 3} mais
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons - Always at bottom */}
                <div className="flex gap-4 justify-center mt-auto pt-4">
                  <button
                    onClick={() => handleViewProject(project)}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    title="Visualizar"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleEditProject(project)}
                    className="text-primary hover:text-green-800 transition-colors"
                    title="Editar"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                    title="Deletar"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-textlight dark:text-textdark mb-2">
                Nenhum projeto encontrado
              </h2>
              <p className="text-textlight dark:text-textdark opacity-60 mb-8">
                Comece criando seu primeiro projeto para gerenciar seu
                portfólio.
              </p>
              <button
                onClick={handleCreateProject}
                className="bg-primary hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md"
              >
                + Criar Primeiro Projeto
              </button>
            </div>
          </div>
        )}
      </div>

      {showProjectModal && (
        <ProjectModal
          project={selectedProject}
          onClose={() => {
            setShowProjectModal(false)
            setSelectedProject(null)
          }}
          onSave={handleProjectSaved}
        />
      )}

      {showViewModal && projectToView && (
        <ProjectViewModal
          project={projectToView}
          onClose={() => {
            setShowViewModal(false)
            setProjectToView(null)
          }}
        />
      )}

      {/* Toast de notificação */}
      {toast && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg animate-pulse ${
            toast.type === 'success'
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
          }`}
        >
          <div className="flex items-center">
            <span className="mr-2">
              {toast.type === 'success' ? '✅' : '❌'}
            </span>
            {toast.message}
          </div>
        </div>
      )}

      {/* Modal de confirmação para deletar */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-bglightsecondary dark:bg-bgdarksecondary p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-textlight dark:text-textdark mb-4">
              Confirmar exclusão
            </h3>
            <p className="text-textlight dark:text-textdark mb-6 opacity-70">
              Tem certeza que deseja deletar este projeto? Esta ação não pode
              ser desfeita.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 text-textlight dark:text-textdark hover:opacity-80 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
