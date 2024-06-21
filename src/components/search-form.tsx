'use client'

import { useState, FormEvent } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function SearchForm() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const inputElement = event.currentTarget.elements.namedItem(
      'q',
    ) as HTMLInputElement
    const newQuery = inputElement.value

    if (!newQuery) {
      return
    }

    setQuery(newQuery)
    router.push(`/search?q=${newQuery}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex  items-center md:gap-3 rounded-full dark:bg-bgdarksecundary bg-bglightsecundary w-[250px]   p-1 shadow-shadowlight dark:shadow-shadowdark mb-5 justify-center"
    >
      <Search className="w- h-5 text-zinc-500" />
      <input
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar projetos..."
        className=" w-full bg-transparent text-sm outline-none placeholder:text-zinc-500 focus:ring-0 border-none rounded-full px-1"
        required
      />
    </form>
  )
}
