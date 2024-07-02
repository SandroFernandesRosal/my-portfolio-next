import { Globe, MonitorSmartphone, Database } from 'lucide-react'

export default function ServiceHighLight() {
  return (
    <div className="flex w-full justify-center bottom-10  absolute  z-20">
      <div className="flex justify-between  w-[29%] max-w-[230px] h-[230px] flex-col items-center text-center border-l-[1px] border-y-[1px] dark:border-zinc-800 border-transparent bg-bglightsecundary dark:bg-bgdarksecundary rounded-l-md py-2  shadow-shadowlight dark:shadow-none">
        <div className="flex flex-col gap-2 items-center">
          <MonitorSmartphone className="text-primary size-10 md:size-14" />
          <h1 className="text-lg font-bold">Front-end</h1>
        </div>
        <p className="px-1 text-zinc-700 dark:text-zinc-400">
          Sites modernos e que se adaptam a multiplos dispositivos
        </p>
      </div>

      <div className="flex justify-between  w-[29%] max-w-[230px]  h-[230px] flex-col items-center text-center border-[1px] dark:border-zinc-800 border-transparent bg-bglightsecundary dark:bg-bgdarksecundary  py-2  shadow-shadowlight dark:shadow-none">
        <div className="flex flex-col gap-2 items-center">
          <Database className="text-primary size-10 md:size-14" />
          <h1 className="text-lg font-bold">Back-end</h1>
        </div>

        <p className="px-1 text-zinc-700 dark:text-zinc-400">
          APIs para integrar com o front e impulsionar seu negócio.
        </p>
      </div>

      <div className="flex justify-between  w-[29%] max-w-[230px] h-[230px] flex-col items-center text-center border-r-[1px] border-y-[1px] dark:border-zinc-800 border-transparent bg-bglightsecundary dark:bg-bgdarksecundary rounded-r-md py-2  shadow-shadowlight dark:shadow-none">
        <div className="flex flex-col gap-2 items-center">
          <Globe className="text-primary size-10 md:size-14" />
          <h1 className="text-lg font-bold">Hospedagem</h1>
        </div>
        <p className="px-1 text-zinc-700 dark:text-zinc-400">
          A melhor opção de hospedagem para o seu negócio
        </p>
      </div>
    </div>
  )
}
