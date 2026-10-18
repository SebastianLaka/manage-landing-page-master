import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useValidationStore = defineStore('validation', () => {
  const eEmail = ref<string>('')
  const error = ref<string>('')
  const regex = /^[^@]+@\w+(\.\w+)+\w$/
  
  const validation = () => {
    if (!eEmail.value) {
        error.value = 'Required email'
    }else if(!regex.test(eEmail.value)){
        error.value = 'Please insert a valid e-mail'
    }else{
        error.value = ''
    }
  }

  return {
    eEmail,
    error,
    validation
  }
})
