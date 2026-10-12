<script setup lang="ts">
import NavigationSite from '@/components/NavSite/NavigationSite.vue'
import HeaderSite from './components/HeaderSite/HeaderSite.vue'
import FeaturesMain from './components/FeaturesSite/FeaturesMain.vue'
import SiteReviews from './components/SiteSlider/SiteReviews.vue';
</script>

<template>
  <main class="main">
    <NavigationSite />
    <HeaderSite />
    <FeaturesMain />
    <SiteReviews />
  </main>
</template>

<style lang="scss">
@use '@/assets/scss/reset.scss' as *;
@use '@/assets/scss/colors.scss' as *;
@use '@/assets/scss/mixins.scss' as *;
body {
  font-family: 'Be Vietnam Pro', sans-serif;
  background-color: setColor('gray-50');
  .main {
    @include flex-layout($flex-direction: column);
    @include set-gap(0, 6em)
  }
}
</style>
