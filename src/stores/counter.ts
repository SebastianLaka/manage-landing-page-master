import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const isMenuOpen = ref<boolean>(true)
  const isShadow = ref<boolean>(true)
  const isMenuDesktop = ref<boolean>(true)
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
