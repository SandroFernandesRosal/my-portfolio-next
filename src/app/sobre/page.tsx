import Resume from '@/components/resume'

import TimeLine from '@/components/timeline'

export default function Sobre() {
  return (
    <section className="min-h-screen flex flex-col items-center w-[100vw] bg-bglightsecondary dark:bg-bgdarksecondary">
      <Resume />

      <h1 className="text-4xl  pt-5  font-extrabold" style={{
    WebkitTextStroke: '2px',
    WebkitTextFillColor: 'transparent',
  }}>Formação</h1>
      <span className="border-b-4 pb-2 w-24   border-primary  text-3xl mb-5" />

      <div className="flex pb-10 w-full justify-center">
        <TimeLine />
      </div>
    </section>
  )
}
