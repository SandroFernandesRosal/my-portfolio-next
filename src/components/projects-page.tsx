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
    <section className="lg:px-10 flex flex-col  items-center dark:bg-bgdarksecondary bg-bglightsecondary  pb-40 dark:bg-[url(../assets/bg-dark2.webp)] bg-[url(../assets/bg-light2.webp)]  w-full bg-bottom bg-repeat-x">
      <h1 className="md:text-4xl text-2xl flex items-center  gap-2 justify-center rounded-md px-2  mb-10">
        <span className="text-primary text-2xl md:text-4xl">&#123;</span>{' '}
        Últimos sites
        <span className="text-primary text-2xl md:text-4xl">&#125;</span>
      </h1>

      <div className="flex flex-col items-center">
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
