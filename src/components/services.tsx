import { Monitor, ShoppingCart, Rss, Speech } from 'lucide-react'

export default function Services() {
  return (
    <section className="z-10 px-5   dark:bg-bgdark bg-bglight py-5">
      <h1 className="border-l-8 border-primary pl-2 rounded-md text-2xl">
        Meus serviços
      </h1>

      <div className="flex  gap-4  mt-5">
        <p className="w-20 h-20  dark:bg-bgdarksecundary bg-bglightsecundary rounded-md justify-center items-center flex shadow-shadowlight dark:shadow-shadowdark">
          <Monitor className="text-primary size-8" />
        </p>
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-lg font-bold">Criação de sites responsivos</h1>
          <p>Sites modernos e que se adaptam a qualquer dispositivo</p>
        </div>
      </div>

      <div className="flex  gap-4  mt-5 ">
        <p className="w-20 h-20 dark:bg-bgdarksecundary bg-bglightsecundary rounded-md justify-center items-center flex shadow-shadowlight dark:shadow-shadowdark">
          <ShoppingCart className="text-primary size-8" />
        </p>
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-lg font-bold">Criação de loja virtual</h1>
          <p>Loja moderna e segura</p>
        </div>
      </div>

      <div className="flex  gap-4  mt-5 ">
        <p className="w-20 h-20 dark:bg-bgdarksecundary bg-bglightsecundary rounded-md justify-center items-center flex shadow-shadowlight dark:shadow-shadowdark">
          <Rss className="text-primary size-8" />
        </p>
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-lg font-bold">Criação de Blog</h1>
          <p>Blog totalmente personalizado</p>
        </div>
      </div>

      <div className="flex  gap-4  mt-5 ">
        <p className="w-20 h-20 dark:bg-bgdarksecundary bg-bglightsecundary rounded-md justify-center items-center flex shadow-shadowlight dark:shadow-shadowdark">
          <Speech className="text-primary size-8" />
        </p>
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-lg font-bold">Criação de Landing Pages</h1>
          <p>Página de vendas, divulgação, marketing ou convites em geral.</p>
        </div>
      </div>
    </section>
  )
}
