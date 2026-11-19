<script setup lang="ts">
import { useValidationStore } from '@/stores/validation.ts'
const validateMail = useValidationStore()
</script>
<template>
  <div class="footer-email">
    <form class="validation-form" @submit.prevent="validateMail.validation">
      <label for="e-mail-validation" class="e-mail-label">
        <input
          type="email"
          name="email"
          class="e-mail-label__input"
          placeholder="Updates in your inbox"
          v-model="validateMail.eEmail"
          :class="{ 'has-error': validateMail.error }"
        />
      </label>

      <Transition name="error-slide">
        <p v-if="validateMail.error" class="validation-form__error">{{ validateMail.error }}</p>
      </Transition>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as *;
.footer-email {
  @keyframes shake-horizontal {
  0%, 100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-0.35em);
  }
  40% {
    transform: translateX(0.35em);
  }
  60% {
    transform: translateX(-0.2em);
  }
  80% {
    transform: translateX(0.2em);
  }
}
  .validation-form {
    &__error {
      padding: 0.5em 1em;
      font-style: italic;
      color: setColor('orange-400');
    }
    .e-mail-label {
      &__input {
        padding: 1em 2em;
        border-radius: 4em;
        &.has-error {
          border: 0.15em solid setColor('orange-400');
          color: setColor('orange-400');
          animation: shake-horizontal 0.3s ease-in-out;
        }
      }
    }
  }
}
</style>
