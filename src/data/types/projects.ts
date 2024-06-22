export interface ProjectProps {
  id: number
  title: string
  img: string
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
