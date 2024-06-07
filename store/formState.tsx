import { create } from 'zustand'

interface FormState {
  formState: boolean
  setFormState: (formState: boolean) => void
}

export const useFormState = create<FormState>((set) => ({
  formState: false,
  setFormState: (formState) => set({ formState })
}))