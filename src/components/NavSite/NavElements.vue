<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter.ts'
const store = useCounterStore()
interface Items {
  id: number
  title: string
}
const props = defineProps<{
  navItems: Items[]
}>()
</script>
<template>
  <ul class="nav-items-container" :class="{ 'is-open': !store.isMenuOpen }">
    <li v-for="item in navItems" :key="item.id" class="nav-item">{{ item.title }}</li>
  </ul>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/breakpoints.scss' as *;
@use '@/assets/scss/fonts.scss' as *;
@use '@/assets/scss/mixins.scss' as *;
@media (min-width: $mobile-view) {
  .nav-items-container {
    display: none;
    padding: 2em;
    @include set-gap(0, 1.5em);
    border-radius: 0.4em;
    font-weight: setWeight('medium');
    position: absolute;
    left: 5%;
    right: 5%;
    top: 125%;
    z-index: 10;
    &.is-open {
      @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
    }
  }
}

@media (min-width: $desktop-small) {
  .nav-items-container {
    @include flex-layout($flex-direction: row, $justify-content: space-between, $align-items: center);
    @include set-gap(1.25em, 0);
    position: static;
    .nav-item {
      padding: 0.25em;
      cursor: pointer;
    }
  }
}
</style>
