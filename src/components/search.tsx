'use client'
import { ChangeEvent } from 'react'
import { useSearch } from '../store/useStore'
import { Search } from 'lucide-react'

export default function SearchForm() {
  const { search, setSearch } = useSearch()

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const normalizedQuery = e.target.value.toLowerCase()
    setSearch(normalizedQuery)
  }

  return (
    <form className="flex  items-center md:gap-3 rounded-full dark:bg-bgdarksecundary bg-bglightsecundary w-[250px]   p-1 shadow-shadowlight dark:shadow-shadow-none mb-5 justify-center dark:border-[1px] dark:border-zinc-800">
      <input
        name="search"
        type="text"
        placeholder="Buscar projeto..."
        className=" w-full bg-transparent text-sm outline-none placeholder:text-textlight dark:placeholder:text-textdark focus:ring-0 border-none rounded-full px-1"
        value={search}
        onChange={handleSearchChange}
      />
      <Search className="w- h-5 text-textlight dark:text-textdark" />
    </form>
  )
}
