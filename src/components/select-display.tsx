'use client'
import { useDisplay } from '@/store/useStore'

export default function SelectDisplay() {
  const { setDisplay } = useDisplay()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplay(event.target.value)
  }

  return (
    <select
      aria-label="Selecionar entre destaques e todos"
      onChange={handleChange}
      className="border-double border-4 border-primary   bg-bglightsecundary dark:bg-bgdarksecundary h-9 flex items-center rounded-md focus:ring-0 outline-none "
    >
      <option value="destaque" aria-label="destaques">
        Destaques
      </option>
      <option value="todos" aria-label="todos">
        Todos
      </option>
    </select>
  )
}
