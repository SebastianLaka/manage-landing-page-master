<script setup lang="ts">
import SlinderItem from './SlinderItem.vue'
import { useSliderStore } from '@/stores/slider.ts'
const slider = useSliderStore()
</script>
<template>
  <div class="reviews-container">
    <div class="slider-items-container">
      <SlinderItem :review-items="slider.sliderItems" />
    </div>
  </div>
  <div class="carousel-dots">
    <button v-for="(_, index) in slider.sliderItems" :key="index" class="carousel-dot"></button>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/mixins' as *;
@use '@/assets/scss/breakpoints' as *;
@use '@/assets/scss/colors' as *;
.reviews-container {
  .slider-items-container {
    @include flex-layout($justify-content: space-between, $align-items: center);
    @include set-gap(0, 2em);
  }
}

@media (min-width: $mobile-view) {
  .reviews-container {
    width: 300%;
    .slider-items-container {
      transform: translateX(15%);
    }
  }
  .carousel-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    @include flex-layout();
    @include set-gap(1em, 0);
    .carousel-dot {
      border-radius: 50%;
      border-color: setColor('orange-400');
      border: 0.1em solid setColor('orange-400');
      width: 0.75em;
      height: 0.75em;
    }
  }
}
@media (min-width: $desktop-small) {
  .reviews-container {
    width: 170%;
    .slider-items-container {
      transform: translateX(0);
    }
  }
  .carousel-dots{
    display: none;
  }
}
@media (min-width: $desktop-wide) {
  .reviews-container {
    width: 140%;
    .slider-items-container {
      transform: translateX(0%);
    }
  }
}
</style>
