import { create } from 'zustand'
import axios from 'axios'

export const useCounterStore = create(set => ({
  count: 0,
  name: 'John',
  todos: [],
  age: 40,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  incrementByAmount: (payload) => set(state => ({ count: state.count + payload})),
  fetchTodos: async () => {
    const res = await axios.get('https://dummyjson.com/todos')
    set({ todos: res.data.todos })
  },
  updateName: (payload) => set({ name: payload })
}))
