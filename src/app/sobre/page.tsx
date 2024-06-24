import Services from '@/components/services'
import TimeLine from '@/components/timeline'

export default function Sobre() {
  return (
    <section className="min-h-screen pt-[100px]">
      <h1 className="border-l-8 mb-5 border-primary pl-2 rounded-md text-2xl mx-5">
        Sobre
      </h1>
      <div className="text-left max-w-[400px] lg:max-w-[500px] mx-5 mb-10">
        <p className="mb-5">
          Sempre fui fascinado pela tecnologia, mas foi em um momento muito
          difícil que descobri que a programação era o que eu realmente queria
          para a minha vida. E esse momento difícil foi em 2020, ínicio da
          pândemia do corona vírus. Eu trabalhava como garçon em eventos, e
          também vendia trufas na rua. Quando começou a pândemia, eu não pude
          mais ir trabalhar. Foi aí que eu tive mais tempo pra começar a estudar
          programação.
        </p>

        <p>
          Especialzado na criação de sites resposivos, lojas virtuais e blogs.
          Tenho experiência com as mais recentes tecnologias de desenvolvimento,
          garantindo que cada projeto seja moderno, eficiente e escalável.
        </p>
      </div>

      <TimeLine />

      <Services />
    </section>
  )
}
