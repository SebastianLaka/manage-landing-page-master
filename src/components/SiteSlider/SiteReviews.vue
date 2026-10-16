<script setup lang="ts">
import SiteSliderMain from './SiteSliderMain.vue'
import ReviewButton from '../ReuseableComponents/ButtonSite.vue';
</script>
<template>
  <section class="reviews">
    <h1 class="reviews__header">What they've said</h1>
    <SiteSliderMain />
    <ReviewButton>Get Started</ReviewButton>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/breakpoints.scss' as *;
@use '@/assets/scss/colors.scss' as *;
.reviews {
  @include flex-layout($flex-direction: column, $align-items: center);
  @include set-gap(0, 6em);
  &__header {
    text-align: center;
  }
}

</style>
