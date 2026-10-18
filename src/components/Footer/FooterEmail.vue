<script setup lang="ts">
import { useValidationStore } from '@/stores/validation.ts'
const validateMail = useValidationStore();
</script>
<template>
  <div class="footer-email">
    <form class="validation-form" @submit.prevent="validateMail.validation">
      <label for="e-mail-validation" class="e-mail-label">
        <input type="email" name="email" class="e-mail-label__input" placeholder="Updates in your inbox" v-model="validateMail.eEmail" :class="{'has-error': validateMail.error}"/>
      </label>
      <p v-if="validateMail.error" class="validation-form__error">{{ validateMail.error }}</p>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as *;
.footer-email {
  .validation-form {
    &__error{
      padding: .5em 1em;
      font-style: italic;
      color: setColor('orange-400');
    }
    .e-mail-label {
      &__input {
        padding: 1em 2em;
        border-radius: 4em;
        &.has-error{
          border: .15em solid setColor('orange-400');
          color: setColor('orange-400');
        }
      }
      
    }
  }
}

</style>
