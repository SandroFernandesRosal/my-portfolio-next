import Resume from '@/components/resume'
import Skills from '@/components/skills'

import TimeLine from '@/components/timeline'
import Experiences from '@/components/experiences'

export default function Sobre() {
  return (
    <section className="min-h-screen flex flex-col items-center w-[100vw] bg-bglightsecondary dark:bg-bgdarksecondary dark:bg-[url(../assets/bg-dark2.webp)] bg-[url(../assets/bg-light2.webp)]  bg-bottom bg-repeat-x">
      <Resume />
      <Skills />

      <h1
        id="projetos"
        className="md:text-4xl text-2xl flex items-center gap-2 justify-center rounded-md px-2 mb-10"
      >
        <span className="text-primary text-2xl md:text-4xl">&#123;</span>{' '}
        Formação
        <span className="text-primary text-2xl md:text-4xl">&#125;</span>
      </h1>

      <div className="flex pb-10 w-full justify-center">
        <TimeLine />
      </div>

      <h1 className="md:text-4xl text-2xl flex items-center gap-2 justify-center rounded-md px-2 mb-10">
        <span className="text-primary text-2xl md:text-4xl">&#123;</span>{' '}
        Experiência
        <span className="text-primary text-2xl md:text-4xl">&#125;</span>
      </h1>

      <div className="flex pb-10 w-full justify-center">
        <Experiences />
      </div>
    </section>
  )
}
