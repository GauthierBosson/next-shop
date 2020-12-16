import create from 'zustand'
import { ShoppingCardState } from './types'

export const useShoppingCard = create<ShoppingCardState>((set) => ({
  isOpen: false,
  toggleShoppingCard: () => set((state) => ({ isOpen: !state.isOpen })),
}))
