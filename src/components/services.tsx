import {
  Monitor,
  ShoppingCart,
  Rss,
  Speech,
  Settings,
  Globe,
} from 'lucide-react'

export default function Services() {
  return (
    <section className="z-10 px-5  flex flex-col items-center  dark:bg-bgdark bg-bglight pb-40 bg-[url(../assets/bg-lightsecondary.png)] dark:bg-[url(../assets/bg-darksecondary.png)]   w-full bg-bottom bg-repeat-x">
      <h1 className="text-3xl font-Rubiki font-bold">Meus serviços</h1>
      <span className="border-b-4 pb-2 w-24  border-primary  text-3xl mb-5"></span>

      <div className="flex flex-wrap gap-3 justify-center">
        <div className="flex justify-between  w-[45%] max-w-[230px] h-[230px] flex-col items-center text-center border-[1px] dark:border-zinc-800 border-transparent bg-bglightsecundary dark:bg-bgdarksecundary rounded-md py-2 hover:border-primary dark:hover:border-primary shadow-shadowlight dark:shadow-none">
          <div className="flex flex-col gap-2 items-center">
            <Monitor className="text-primary size-10 md:size-14" />
            <h1 className="text-lg font-bold">Criação de sites responsivos</h1>
          </div>
          <p className="px-1 text-zinc-700 dark:text-zinc-400">
            Sites modernos e que se adaptam a multiplos dispositivos
          </p>
        </div>

        <div className="flex justify-between  w-[45%] max-w-[230px]  h-[230px] flex-col items-center text-center border-[1px] dark:border-zinc-800 border-transparent bg-bglightsecundary dark:bg-bgdarksecundary rounded-md py-2 hover:border-primary dark:hover:border-primary shadow-shadowlight dark:shadow-none">
          <div className="flex flex-col gap-2 items-center">
            <ShoppingCart className="text-primary size-10 md:size-14" />
            <h1 className="text-lg font-bold">Criação de loja virtual</h1>
          </div>

          <p className="px-1 text-zinc-700 dark:text-zinc-400">
            Loja moderna e segura, para o seu negócio decolar
          </p>
        </div>

        <div className="flex justify-between  w-[45%] max-w-[230px] h-[230px] flex-col items-center text-center border-[1px] dark:border-zinc-800 border-transparent bg-bglightsecundary dark:bg-bgdarksecundary rounded-md py-2 hover:border-primary dark:hover:border-primary shadow-shadowlight dark:shadow-none">
          <div className="flex flex-col gap-2 items-center">
            <Rss className="text-primary size-10 md:size-14" />
            <h1 className="text-lg font-bold">Criação de Blog personalizado</h1>
          </div>
          <p className="px-1 text-zinc-700 dark:text-zinc-400">
            Blog totalmente personalizado
          </p>
        </div>

        <div className="flex justify-between  w-[45%] max-w-[230px] h-[230px] flex-col items-center text-center border-[1px] dark:border-zinc-800 border-transparent bg-bglightsecundary dark:bg-bgdarksecundary rounded-md py-2 hover:border-primary dark:hover:border-primary shadow-shadowlight dark:shadow-none">
          <div className="flex flex-col gap-2 items-center">
            <Speech className="text-primary size-10 md:size-14" />
            <h1 className="text-lg font-bold">Criação de Landing Pages</h1>
          </div>
          <p className="px-1 text-zinc-700 dark:text-zinc-400">
            Página de vendas, divulgação, marketing ou convites em geral.
          </p>
        </div>

        <div className="flex justify-between  w-[45%] max-w-[230px] h-[230px] flex-col items-center text-center border-[1px] dark:border-zinc-800 border-transparent bg-bglightsecundary dark:bg-bgdarksecundary rounded-md py-2 hover:border-primary dark:hover:border-primary shadow-shadowlight dark:shadow-none">
          <div className="flex flex-col gap-2 items-center">
            <Settings className="text-primary size-10 md:size-14" />
            <h1 className="text-lg font-bold">Manutenção mensal </h1>
          </div>
          <p className="px-1 text-zinc-700 dark:text-zinc-400">
            Suporte mensal para manter seu site atualizado, seguro e otimizado.
          </p>
        </div>

        <div className="flex justify-between  w-[45%] max-w-[230px] h-[230px] flex-col items-center text-center border-[1px] dark:border-zinc-800 border-transparent bg-bglightsecundary dark:bg-bgdarksecundary rounded-md py-2 hover:border-primary dark:hover:border-primary shadow-shadowlight dark:shadow-none">
          <div className="flex flex-col gap-2 items-center">
            <Globe className="text-primary size-10 md:size-14" />
            <h1 className="text-lg font-bold">Hospedagem do site</h1>
          </div>
          <p className="px-1 text-zinc-700 dark:text-zinc-400">
            A melhor opção de hospedagem para o seu negócio
          </p>
        </div>
      </div>
    </section>
  )
}
