import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const isMenuOpen = ref(true)
  const isShadow = ref(true)
  const isMenuDesktop = ref(true)
  const toggleIcon = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  return {
    isMenuOpen,
    isShadow,
    isMenuDesktop,
    toggleIcon,
  }
})
