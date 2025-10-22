import { create } from 'zustand'

export const useSearch = create((set) => ({
  search: '',
  setSearch: (query: string) => set({ search: query }),
}))

export const useData = create((set) => ({
  data: [],
  setData: (state: unknown[]) => set({ data: state }),
}))

export const useDataSearch = create((set) => ({
  dataSearch: [],
  setDataSearch: (state: unknown[]) => set({ dataSearch: state }),
}))

export const useSize = create((set) => ({
  size: 'normal',
  setSize: (state: string) => set({ size: state }),
}))

export const useDisplay = create((set) => ({
  display: 'destaque',
  setDisplay: (state: string) => set({ display: state }),
}))

export const useLoading = create((set) => ({
  loading: true,
  setLoading: (state: boolean) => set({ loading: state }),
}))
