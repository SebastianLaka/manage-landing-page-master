<script setup lang="ts">
import { ref} from 'vue'
import { useCounterStore } from '@/stores/counter.ts'
import LogoImage from '@/components/icons/logo.svg'
import Logo from '@/components/ReuseableComponents/Logo.vue'
import IconHamburger from '@/components/icons/icon-hamburger.svg'
import IconClose from '@/components/icons/icon-close.svg'
import NavElements from './NavElements.vue'
import NavButton from '@/components/ReuseableComponents/ButtonSite.vue'
const store = useCounterStore();
const logoData = {
  img: LogoImage,
  alt: 'Logo in navigation for site manage lading page master',
}
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
    <div class="logo-box">
      <Logo :src="logoData.img" :alt="logoData.alt" class="logo-box__logo" />
    </div>
    <NavElements :nav-items="navItems" />
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
.wrapper{
  margin: 0 auto;
  width: 100%;
  max-width: 81.25em;
}
.nav-site {
  @include flex-layout($justify-content: space-between, $align-items: center);
  padding: 1em;
  position: relative;
  z-index: 0;
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
@media (min-width: $desktop-small) {
  .nav-site {
    &__mobile-nav-button {
      display: none;
    }
    &__desktop-cta {
      display: block;
      transition: background-color .3s ease-in-out;
      &:hover{
        background-color: hsl(12, 97%, 75%);
      }
    }
  }
}
</style>
