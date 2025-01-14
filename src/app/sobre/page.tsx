import Resume from '@/components/resume'

import TimeLine from '@/components/timeline'

export default function Sobre() {
  return (
    <section className="min-h-screen flex flex-col items-center w-[100vw] bg-bglightsecondary dark:bg-bgdarksecondary dark:bg-[url(../assets/bg-dark2.webp)] bg-[url(../assets/bg-light2.webp)]  bg-bottom bg-repeat-x">
      <Resume />

      <h1
        id="projetos"
        className="text-2xl border-[1px] flex items-center  gap-2 justify-center rounded-md px-2 border-zinc-400 dark:border-zinc-700 bg-bglight dark:bg-bgdark bg-gradient-to-r dark:from-bgdark dark:via-bgdarksecondary dark:to-bgdarksecondary  from-bglight via-bglightsecondary to-bglightsecondary mb-10"
      >
        <span className="text-primary text-2xl">&#123;</span> Formação
        <span className="text-primary text-2xl">&#125;</span>
      </h1>

      <div className="flex pb-10 w-full justify-center">
        <TimeLine />
      </div>
    </section>
  )
}
