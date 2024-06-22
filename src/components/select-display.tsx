'use client'
import { useDisplay } from '@/store/useStore'

export default function SelectDisplay() {
  const { setDisplay } = useDisplay()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplay(event.target.value)
  }

  return (
    <select
      onChange={handleChange}
      className="p-2 border-primary border-2 rounded-md bg-bglightsecundary dark:bg-bgdarksecundary h-9 flex items-center text-sm"
    >
      <option value="destaque">Destaques</option>
      <option value="todos">Todos</option>
    </select>
  )
}
