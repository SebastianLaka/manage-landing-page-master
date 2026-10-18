<script setup lang="ts"></script>
<template>
  <div class="footer-email">
    <form method="post" class="validation-form">
      <label for="e-mail-validation" class="e-mail-label">
        <input type="text" name="fruit-dir" class="e-mail-label__input" placeholder="Updates in your inbox"/>
      </label>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.footer-email {
  .validation-form {
    .e-mail-label {
      &__input {
        padding: 1em 2em;
        border-radius: 4em;
        
      }
    }
  }
}

</style>
