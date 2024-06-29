import Services from '@/components/services'
import Skills from '@/components/skills'
import TimeLine from '@/components/timeline'

export default function Sobre() {
  return (
    <section className="min-h-screen flex flex-col items-center">
      <div className="flex flex-col w-full items-center bg-bglightsecundary dark:bg-bgdarksecundary pt-[100px]">
        <div></div>
        <div className="mb-5">
          <p className="text-xl">Olá, eu sou o</p>
          <p className="font-MsMadi nome  text-primary text-5xl max-w-[305px] pl-1 text-with-border pt-2 ">
            Sandro Fernandes
          </p>
        </div>

        <div className="text-left mx-5 mb-10 max-w-[600px]">
          <p className="mb-5">
            Sempre fui fascinado pela tecnologia, mas foi em um momento muito
            difícil que descobri que a programação era o que eu realmente queria
            para a minha vida. E esse momento difícil foi em 2020, ínicio da
            pândemia do corona vírus. Eu trabalhava como garçom em eventos, e
            também vendia trufas nas ruas. Quando começou a pândemia, eu não
            pude mais ir trabalhar. Foi aí que eu tive mais tempo pra começar a
            estudar programação.
          </p>
        </div>

        <div className="pl-5 pb-5">
          <p>Desenvolvedor Front-end</p>
          <p>Freelancer - Disponível </p>
        </div>
      </div>

      <Services />

      <Skills />

      <h1 className="text-3xl pt-5">Formação</h1>
      <span className="border-b-4 pb-2 w-24  border-primary  text-3xl mb-5" />

      <TimeLine />
    </section>
  )
}
