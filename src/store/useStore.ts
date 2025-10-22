import { create } from 'zustand'

interface SearchStore {
  search: string
  setSearch: (query: string) => void
}

interface DataStore {
  data: unknown[]
  setData: (state: unknown[]) => void
}

interface DataSearchStore {
  dataSearch: unknown[]
  setDataSearch: (state: unknown[]) => void
}

interface SizeStore {
  size: string
  setSize: (state: string) => void
}

interface DisplayStore {
  display: string
  setDisplay: (state: string) => void
}

interface LoadingStore {
  loading: boolean
  setLoading: (state: boolean) => void
}

export const useSearch = create<SearchStore>((set) => ({
  search: '',
  setSearch: (query: string) => set({ search: query }),
}))

export const useData = create<DataStore>((set) => ({
  data: [],
  setData: (state: unknown[]) => set({ data: state }),
}))

export const useDataSearch = create<DataSearchStore>((set) => ({
  dataSearch: [],
  setDataSearch: (state: unknown[]) => set({ dataSearch: state }),
}))

export const useSize = create<SizeStore>((set) => ({
  size: 'normal',
  setSize: (state: string) => set({ size: state }),
}))

export const useDisplay = create<DisplayStore>((set) => ({
  display: 'destaque',
  setDisplay: (state: string) => set({ display: state }),
}))

export const useLoading = create<LoadingStore>((set) => ({
  loading: true,
  setLoading: (state: boolean) => set({ loading: state }),
}))
