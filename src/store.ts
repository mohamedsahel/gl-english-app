import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useScore = create(
  persist(
    (set, get) => ({
      score: 0,
      increaseScore: (points: number = 1) =>
        set((state: any) => ({ score: state.score + points })),
    }),
    {
      name: 'gl-english-app', // unique name
    }
  )
)
