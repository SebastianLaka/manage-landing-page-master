<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter.ts'
import Logo from '@/components/ReuseableComponents/Logo.vue'
import IconHamburger from '@/components/icons/icon-hamburger.svg'
import IconClose from '@/components/icons/icon-close.svg'
import NavElements from './NavElements.vue'
import NavButton from '@/components/ReuseableComponents/ButtonSite.vue'
const store = useCounterStore()
const isWhite = ref(false)

const navItems = ref([
  {
    id: 1,
    title: 'Pricing',
  },
  {
    id: 2,
    title: 'Product',
  },
  {
    id: 3,
    title: 'About Us',
  },
  {
    id: 4,
    title: 'Careers',
  },
  {
    id: 5,
    title: 'Community',
  },
])
</script>
<template>
  <nav class="nav-site wrapper">
    <div v-if="!store.isMenuOpen" class="nav-overlay" @click="store.toggleIcon"></div>
    <div class="logo-box">
      <Logo :is-white="isWhite" width="180" height="30" class="logo-box__logo" />
    </div>
    <NavElements :nav-items="navItems"  />
    <NavButton class="nav-site__desktop-cta">Get Started</NavButton>
    <NavButton @click="store.toggleIcon" class="nav-site__mobile-nav-button">
      <img
        :src="store.isMenuOpen ? IconHamburger : IconClose"
        alt="Mobile menu for toggle with site navigation"
      />
    </NavButton>
  </nav>
</template>
<style scoped lang="scss">
@use '@/assets/scss/fonts.scss' as *;
@use '@/assets/scss/colors.scss' as *;
@use '@/assets/scss/breakpoints.scss' as *;
@use '@/assets/scss/mixins.scss' as *;
.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 81.25em;
}
.nav-site {
  @include flex-layout($justify-content: space-between, $align-items: center);
  padding: 1em;
  position: relative;
  z-index: 100;
  background-color: setColor('gray-50');
  .logo-box {
    @include flex-layout($justify-content: center, $align-items: center);
  }
  &__mobile-nav-button {
    @include flex-layout($justify-content: center, $align-items: center);
    padding: 0.5em;
    width: 2.5em;
    height: 2.5em;
    background-color: transparent;
  }
  &__desktop-cta {
    display: none;
  }
}

@media (min-width: $mobile-view) and (max-width: $desktop-small) {
  .nav-site {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    .nav-overlay {
      position: fixed;
      inset: 7.8% 0 0 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.4) 30%,
        rgba(0, 0, 0, 0.6) 100%
      );
      z-index: 1;
    }
  }
}
@media (min-width: $desktop-small) {
  .nav-site {
    .nav-overlay{
      display: none;
    }
    &__mobile-nav-button {
      display: none;
    }
    &__desktop-cta {
      display: block;
      transition: background-color 0.3s ease-in-out;
      &:hover {
        background-color: hsl(12, 97%, 75%);
      }
    }
  }
}
</style>
