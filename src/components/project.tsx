import Link from 'next/link'
import Image from 'next/image'
import { ProjectProps } from '@/data/types/projects'
import { useSize } from '@/store/useStore'
import { useRouter } from 'next/navigation'

export default function Project({ id, slug, title, img }: ProjectProps) {
  const { size } = useSize()

  const router = useRouter()
  const handleClick = () => {
    router.push(`/projetos/${slug}`)
  }

  return (
    <div
      key={id}
      className={`border-[1px] dark:border-zinc-700 flex p-2 gap-1 rounded-md hover:border-primary hover:border-[1px] border-zinc-400 dark:hover:border-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${size === 'large' && 'w-[100%] h-[600px] justify-between'} ${size === 'normal' && 'h-[400px] flex-col md:h-[500px] w-[100%] justify-between'}`}
    >
      <Link
        onClick={handleClick}
        aria-label="abrir projeto"
        href={`/projetos/${slug}`}
        className="overflow-hidden rounded-md flex w-full h-full"
      >
        <Image
          src={img}
          alt={`imagem de ${title}`}
          width={500}
          height={600}
          quality={100}
          loading="lazy"
          className={`object-cover object-top rounded-md ${size === 'large' && 'h-[100%] md:h-[100%]'} ${size === 'normal' && 'rounded-md'}`}
        />
      </Link>
    </div>
  )
}
