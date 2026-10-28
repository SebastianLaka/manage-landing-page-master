<script setup lang="ts">
import BannerButton from '@/components/ReuseableComponents/ButtonSite.vue'
</script>
<template>
  <section class="site-banner">
    <div class="site-banner-container wrapper">
      <h3 class="site-banner-container__header">Simplify how your team works today.</h3>
      <BannerButton class="site-banner-container__cta">Get Started</BannerButton>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/breakpoints' as *;
@use '@/assets/scss/colors' as *;
@use '@/assets/scss/fonts' as *;
@media (min-width: $mobile-view) {
  .wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 81.25em;
  }
  .site-banner {
    background-image: url('@/components/icons/bg-simplify-section-mobile.svg');
    padding: 5em 2em;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: start center;
    background-color: setColor('orange-400');
    .site-banner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2em 0;
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
        transition: color 0.3s ease-in-out;
        &:hover {
          color: hsl(12, 97%, 75%);
        }
      }
    }
  }
}
@media (min-width: $desktop-small) {
  .site-banner {
    background-image: url('@/components/icons/bg-simplify-section-desktop.svg');
    background-position: center center;
    .site-banner-container {
      flex-direction: row;
      justify-content: space-between;
      &__header {
        text-align: left;
        max-width: 20ch;
      }
    }
  }
}
</style>
