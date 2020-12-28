import create from 'zustand'
import { ShoppingCardState, ProductDetailsState, LoginState } from './types'

export const useShoppingCard = create<ShoppingCardState>((set) => ({
  isOpen: false,
  toggleShoppingCard: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export const useProductDetails = create<ProductDetailsState>((set) => ({
  isOpen: false,
  toggleProductDetails: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export const useLogin = create<LoginState>((set) => ({
  isOpen: false,
  toggleModal: () => {
    set((state) => {
      !state.isOpen === true
        ? document.body.classList.add('overflow-y-hidden')
        : document.body.classList.remove('overflow-y-hidden')
      return { isOpen: !state.isOpen }
    })
  },
}))
