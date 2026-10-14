<script setup lang="ts">
import { ref, computed } from 'vue'
import SiteSliderMain from './SiteSliderMain.vue'
import { useSliderStore } from '@/stores/slider.ts'
const slider = useSliderStore()
const currentSlider = ref(0)
const slides = computed(() => slider.sliderItems.length)

</script>
<template>
  <section class="reviews">
    <h1 class="reviews__header">What they've said</h1>
    <div class="reviews-container">
      <div class="slider-items-container">
        <SiteSliderMain />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/breakpoints.scss' as *;
@use '@/assets/scss/colors.scss' as *;
.reviews {
  position: relative;
  overflow-x: hidden;
  &__header {
    text-align: center;
    padding-bottom: 3em;
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    width: 12%;
    background-color: setColor('gray-50');
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
    top: 0;
    bottom: 0;
  }
  .reviews-container {
    .slider-items-container {
      @include flex-layout($justify-content: center, $align-items: center);
      @include set-gap(2em, 4em);
    }
  }
}
</style>
