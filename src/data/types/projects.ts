export interface ProjectProps {
  id: number
  title: string
  img: string
  video: string | null
  repo: string
  page: string
  tecs: string[]
  slug: string
  imgs: string[]
  featured: boolean
  description: string
}

export interface ProjectArray {
  projects: ProjectProps[]
}
