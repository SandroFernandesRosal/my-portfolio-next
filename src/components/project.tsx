'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ProjectProps } from '@/data/types/projects'
import { useSize, useSearch } from '@/store/useStore'

export default function Project({ slug, title, img }: ProjectProps) {
  const { size } = useSize()
  const { search } = useSearch()

  return (
    <Link
      href={`/projetos/${slug}`}
      aria-hidden="true"
      tabIndex={-1}
      className={`border-[1px] dark:border-zinc-700 my-10   overflow-hidden  flex p-2 gap-1 rounded-md hover:border-primary hover:border-[1px] border-zinc-400 dark:hover:border-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${size === 'large' && 'w-[100%] h-[800px] lg:h-[1000px] justify-between'} ${size === 'normal' && 'h-[400px] flex-col md:h-[500px] lg:h-[700px] w-[100%]  justify-between'}  ${search && size === 'large' && 'w-[80%] h-[600px] md:w-[100%] md:h-[800px]  md:max-w-[500px] lg:max-w-[400px] '} ${search && size === 'normal' && 'w-[45%] h-[400px] md:w-[300px]'} `}
    >
      <Image
        src={img}
        alt={`imagem de ${title}`}
        width={500}
        height={1000}
        quality={100}
        loading="lazy"
        className={`object-cover object-top flex h-[100%] rounded-md ${size === 'large' && 'h-[100%] w-full md:h-[100%]'} ${size === 'normal' && 'rounded-md'}`}
      />
    </Link>
  )
}
