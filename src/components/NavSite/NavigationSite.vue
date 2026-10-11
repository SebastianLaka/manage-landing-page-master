<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LogoImage from '@/components/icons/logo.svg'
import Logo from '@/components/ReuseableComponents/Logo.vue'
import IconHamburger from '@/components/icons/icon-hamburger.svg'
import IconClose from '@/components/icons/icon-close.svg'
import NavElements from './NavElements.vue'
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

const isMobile = ref<boolean>(true);

const toggleIcon = () => {
  isMobile.value = !isMobile.value
}
const viewMenu = () => {
  const width = window.innerWidth < 992;
  if(width){
    isMobile.value = true
  }else{
    isMobile.value = false
  }
}

onMounted(()=> {
  viewMenu();
  window.addEventListener('resize', viewMenu);
})
onUnmounted(()=> {
  window.addEventListener('resize', viewMenu);
})
</script>
<template>
  <nav class="nav-site">
    <div class="logo-box">
      <Logo :src="logoData.img" :alt="logoData.alt" class="logo-box__logo" />
    </div>
    <NavElements :nav-items="navItems" v-if="!isMobile"/>
    <button class="nav-site__desktop-cta">Get Started</button>
    <button @click="toggleIcon" class="nav-site__mobile-nav-button">
      <img
        :src="isMobile ? IconHamburger : IconClose"
        alt="Mobile menu for toggle with site navigation"
      />
    </button>
  </nav>
</template>
<style scoped lang="scss">
@use '@/assets/scss/fonts.scss' as *;
@use '@/assets/scss/colors.scss' as *;
@use '@/assets/scss/breakpoints.scss' as *;
.nav-site {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  position: relative;
  z-index: 0;
  .logo-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__mobile-nav-button {
    display: flex;
    justify-content: center;
    align-items: center;
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
      font-size: setSize('base');
      padding: 0.25em 0.75em;
      background-color: transparent;
    }
  }
}
</style>
