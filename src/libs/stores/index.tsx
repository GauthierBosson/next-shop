import create from 'zustand'
import { ShoppingCardState, LoginState, SignupState } from './types'

export const useShoppingCard = create<ShoppingCardState>((set) => ({
  isOpen: false,
  toggleShoppingCard: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export const useLogin = create<LoginState>((set) => ({
  isOpen: false,
  toggleLogin: () => {
    set((state) => {
      !state.isOpen === true
        ? document.body.classList.add('overflow-y-hidden')
        : document.body.classList.remove('overflow-y-hidden')
      return { isOpen: !state.isOpen }
    })
  },
}))

export const useSignup = create<SignupState>((set) => ({
  isOpen: false,
  toggleSignup: () => {
    set((state) => {
      !state.isOpen === true
        ? document.body.classList.add('overflow-y-hidden')
        : document.body.classList.remove('overflow-y-hidden')
      return { isOpen: !state.isOpen }
    })
  },
}))
