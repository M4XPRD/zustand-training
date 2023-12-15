import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { createWithEqualityFn } from 'zustand/traditional';
import {
  devtools, persist, createJSONStorage,
} from 'zustand/middleware';

export const useTodos = createWithEqualityFn(
  devtools(
    persist(
      (set, get) => ({
        todos: [
          { id: 1, title: 'Learn JS', completed: true },
          { id: 2, title: 'Learn React', completed: false },
        ],
        loading: false,
        error: null,
        // addTodo: (title) => set((state) => {
        //   const newTodo = { id: nanoid(), title, completed: false };
        //   return { todos: [...state.todos, newTodo] };
        // }),
        // addTodo: (title) => set((state) => ({
        //   todos: [...state.todos, { id: nanoid(), title, completed: false }],
        // })),
        addTodo: (title) => {
          const newTodo = { id: nanoid(), title, completed: false };
          set({ todos: [...get().todos, newTodo] });
        },
        toggleTodo: (todoId) => set({
          todos: get().todos
            .map((todo) => (todoId === todo.id ? { ...todo, completed: !todo.completed } : todo)),
        }),
        fetchTodos: async () => {
          set({ loading: true });

          try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

            if (!res.ok) {
              throw new Error('Failed to fetch todos, try again.');
            }

            set({ todos: await res.json(), error: null });
          } catch (error) {
            set({ error: error.message });
          } finally {
            set({ loading: false });
          }
        },
      }),
      {
        name: 'todos-storage',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export const useFilter = create(
  devtools((set) => ({
    filter: 'all',
    setFilter: (value) => set({ filter: value }),
  })),
);
