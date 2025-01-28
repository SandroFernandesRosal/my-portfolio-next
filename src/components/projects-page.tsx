import { api } from '@/data/api'
import SizeProject from './size-project'
import SelectDisplay from './select-display'
import Search from './search'
import CarouselItems from './carouse-item'


export default async function ProjectsPage() {
  const response = await api('/products', {
    next: {
      revalidate: 1 * 1,
    },
  })

  const projects = await response.json()

  return (
    <section className="lg:px-10 flex flex-col items-center dark:bg-bgdarksecondary bg-bglightsecondary  pb-40 dark:bg-[url(../assets/bg-dark2.webp)] bg-[url(../assets/bg-light2.webp)]  w-full bg-bottom bg-repeat-x">
      <h1
        id="projetos"
        className="text-2xl border-[1px] flex items-center  gap-2 justify-center rounded-md px-2 border-zinc-400 dark:border-zinc-700 bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary  from-bglight via-bglightsecondary to-bglightsecondary mb-10"
      >
        <span className="text-primary text-2xl">&#123;</span> últimos sites{' '}
        <span className="text-primary text-2xl">&#125;</span>
      </h1>

      <div className="flex flex-col items-center mb-5 ">
        <Search />
        <div className="flex gap-2">
          <SelectDisplay />
          <SizeProject />
        </div>
      </div>
      
      <div className=" w-full flex justify-center">
        <CarouselItems projects={projects} />
      </div>

      <div id="contato" />
    </section>
  )
}
