export interface ProjectProps {
  id: number
  title: string
  img: string
  video: string | null
  repo: string
  page: string
  technologies: string[]
  slug: string
  images: string[]
  featured: boolean
  ativo: boolean
  description: string
  dateProject: string | null
}

export interface ProjectArray {
  projects: ProjectProps[]
}
