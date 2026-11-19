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
  <Transition name="nested">
    <ul
      class="mobile-nav-container"
      :class="{ 'is-open': !store.isMenuOpen }"
      v-show="!store.isMenuOpen"
    >
      <li v-for="item in navItems" :key="item.id" class="mobile-nav-container__nav-item">
        <a href="#" class="mobile-nav-container__nav-item--link">{{ item.title }}</a>
      </li>
    </ul>
  </Transition>

  <ul class="desktop-nav-container">
    <li v-for="item in navItems" :key="item.id" class="desktop-nav-container__nav-item">
      <a href="#" class="desktop-nav-container__nav-item--link">{{ item.title }}</a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/breakpoints.scss' as *;
@use '@/assets/scss/fonts.scss' as *;
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/colors.scss' as *;

@media (min-width: $mobile-view) {
  .nested-enter-active,
  .nested-leave-active {
    transition: all 0.3s ease-in-out;
  }
  .nested-enter-from,
  .nested-leave-to {
    transform: translateY(-31.25em);
    opacity: 0;
  }

  .mobile-nav-container {
    display: none;
    padding: 2em;
    @include set-gap(0, 1.5em);
    border-radius: 0.4em;
    font-weight: setWeight('medium');
    position: absolute;
    left: 5%;
    right: 5%;
    top: 125%;
    z-index: 100;
    background-color: setColor('gray-50');

    &.is-open {
      @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
    }

    &__nav-item {
      padding: 0.25em;
      cursor: pointer;

      &--link {
        color: setColor('gray-950');
      }
    }
  }

  .desktop-nav-container {
    display: none;
  }
}

@media (min-width: $desktop-small) {
  .mobile-nav-container {
    display: none !important;
  }

  .desktop-nav-container {
    @include flex-layout(
      $flex-direction: row,
      $justify-content: space-between,
      $align-items: center
    );
    display: flex;
    @include set-gap(1.25em, 0);
    position: static;

    &__nav-item {
      &--link {
        color: setColor('gray-950');
        transition: color 0.3s ease-in-out;

        &:hover {
          color: setColor('gray-500');
        }
      }
    }
  }
}
</style>