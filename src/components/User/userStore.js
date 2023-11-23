import { create } from 'zustand'

export const useUserStore = create(set => ({
  firstname: 'John',
  lastname: 'Smith',
  age: 45,
  updateFirstname: (payload) => set({ firstname: payload })
}))