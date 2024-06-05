import { Monitor, ShoppingCart, Rss, Speech } from 'lucide-react'

export default function Services() {
  return (
    <section className="w-full px-5 mt-5  dark:bg-bgdarksecundary bg-bglightsecundary py-5">
      <h1 className="border-l-8 border-primary pl-2 rounded-md text-2xl">
        Meus serviços
      </h1>

      <div className="flex  gap-4  mt-5">
        <p className="w-20 h-20  bg-bgdark rounded-md justify-center items-center flex">
          <Monitor className="text-primary" />
        </p>
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-lg font-bold">Criação de sites responsivos</h1>
          <p>Sites modernos e que se adaptam a qualquer dispositivo</p>
        </div>
      </div>

      <div className="flex  gap-4  mt-5 ">
        <p className="w-20 h-20 bg-bgdark rounded-md justify-center items-center flex">
          <ShoppingCart className="text-primary" />
        </p>
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-lg font-bold">Criação de loja virtual</h1>
          <p>Loja moderna e segura</p>
        </div>
      </div>

      <div className="flex  gap-4  mt-5 ">
        <p className="w-20 h-20 bg-bgdark rounded-md justify-center items-center flex">
          <Rss className="text-primary" />
        </p>
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-lg font-bold">Criação de Blog</h1>
          <p>Blog totalmente personalizado</p>
        </div>
      </div>

      <div className="flex  gap-4  mt-5 ">
        <p className="w-20 h-20 bg-bgdark rounded-md justify-center items-center flex">
          <Speech className="text-primary" />
        </p>
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-lg font-bold">Criação de Landing Pages</h1>
          <p>Página de vendas, divulgação, marketing ou convites em geral.</p>
        </div>
      </div>
    </section>
  )
}
