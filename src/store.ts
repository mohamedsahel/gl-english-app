import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useScore = create(
  persist(
    (set, get) => ({
      score: 0,
      updateScore: (points: number) => {
        console.log('points', points)
        set((state: any) => ({ score: state.score + points }))
      }
    }),
    {
      name: 'gl-english-app', // unique name
    }
  )
)
