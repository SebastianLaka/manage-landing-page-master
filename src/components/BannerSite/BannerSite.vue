<script setup lang="ts">
import BgMobile from '@/components/icons/bg-simplify-section-mobile.svg'
import BgDesktop from '@/components/icons/bg-simplify-section-desktop.svg'
import BannerButton from '@/components/ReuseableComponents/ButtonSite.vue'
</script>
<template>
  <section class="site-banner">
    <h3 class="site-banner__header">Simplify how your team works today.</h3>
    <BannerButton class="site-banner__cta">Get Started</BannerButton>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/breakpoints' as *;
@use '@/assets/scss/colors' as *;
@use '@/assets/scss/fonts' as *;
@media (min-width: $mobile-view) {
  .site-banner {
    background-image: url('@/components/icons/bg-simplify-section-mobile.svg');
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em 2em;
    height: 20em;
    gap: 2em 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: start center;
    background-color: setColor('orange-400');
    &__header {
      color: setColor('gray-50');
      font-size: setSize('header-2');
      max-width: 25ch;
      text-align: center;
    }
    &__cta {
      background-color: setColor('gray-50');
      color: setColor('orange-400');
      font-weight: setWeight('bold');
      box-shadow: none;
    }
  }
}
@media (min-width: $desktop-small) {
  .site-banner {
    background-image: url('@/components/icons/bg-simplify-section-desktop.svg');
    background-position: center center;
  }
}
</style>
