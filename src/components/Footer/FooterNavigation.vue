<script setup lang="ts">
interface Items {
  id: number
  title: string
}
const props = defineProps<{
  footerItems: Items[]
}>()
</script>
<template>
  <ul class="footer-items">
    <li v-for="footeritem in footerItems" :key="footeritem.id" class="footer-items__item">
      <a href="#" class="footer-items__item--link">{{ footeritem.title }}</a>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/colors.scss' as *;
@use '@/assets/scss/breakpoints.scss' as *;
@media (min-width: $mobile-view) {
  .footer-items {
    @include flex-layout();
    flex-flow: column wrap;
    height: 10em;
    @include set-gap(4em, 1em);
    &__item {
      &--link {
        text-decoration: none;
        color: setColor('gray-500');
      }
    }
  }
}
</style>
