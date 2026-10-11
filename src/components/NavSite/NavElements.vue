<script lang="ts" setup>
interface Items {
  id: number
  title: string
}
const props = defineProps<{
  navItems: Items[]
}>()
</script>
<template>
  <ul class="nav-items-container">
    <li v-for="item in navItems" :key="item.id" class="nav-item">{{ item.title }}</li>
  </ul>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/breakpoints.scss' as *;
@use '@/assets/scss/fonts.scss' as *;
@media (min-width: $mobile-view) {
  .nav-items-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2em;
    gap: 2em;
    border-radius: .4em;
    font-weight: setWeight('medium');
    position: absolute;
    left: 5%;
    right: 5%;
    top: 125%;
    z-index: 10;
  }
}

@media (min-width: $desktop-small) {
  .nav-items-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 0 1em;
    position: static;
    .nav-item {
      padding: 0.25em;
      cursor: pointer;
    }
  }
}
</style>
