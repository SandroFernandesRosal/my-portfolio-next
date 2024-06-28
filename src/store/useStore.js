import { create } from 'zustand'

export const useSearch = create((set) => ({
  search: '',
  setSearch: (query) => set({ search: query }),
}))

export const useData = create((set) => ({
  data: [],
  setData: (state) => set({ data: state }),
}))

export const useDataSearch = create((set) => ({
  dataSearch: [],
  setDataSearch: (state) => set({ dataSearch: state }),
}))

export const useSize = create((set) => ({
  size: 'normal',
  setSize: (state) => set({ size: state }),
}))

export const useDisplay = create((set) => ({
  display: 'destaque',
  setDisplay: (state) => set({ display: state }),
}))

export const useLoading = create((set) => ({
  loading: true,
  setLoading: (state) => set({ loading: state }),
}))
