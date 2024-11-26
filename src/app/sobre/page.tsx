import Resume from '@/components/resume'

import TimeLine from '@/components/timeline'

export default function Sobre() {
  return (
    <section className="min-h-screen flex flex-col items-center w-[100vw] bg-bglightsecondary dark:bg-bgdarksecondary dark:bg-[url(../assets/bg-dark2.png)] bg-[url(../assets/bg-light2.png)]  bg-bottom bg-repeat-x">
      <Resume />

      <h1 className="text-3xl  pt-5  font-extrabold" >Formação</h1>
      <span className="border-b-4 pb-2 w-24   border-primary  text-3xl mb-5" />

      <div className="flex pb-10 w-full justify-center">
        <TimeLine />
      </div>
    </section>
  )
}
