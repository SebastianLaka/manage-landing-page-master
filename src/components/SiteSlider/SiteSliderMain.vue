<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import SliderItem from './SlinderItem.vue'
import { useSliderStore } from '@/stores/slider.ts'
const slider = useSliderStore()

const handleDotClick = (index: number) => {
  slider.setSlide(index)
}

onMounted(() => {
  slider.slideAutoplay(3000)
})

onUnmounted(() => {
  slider.stopSlideAutoplay()
})
</script>
<template>
  <div class="reviews-container">
    <div
      class="slider-items-container"
      :style="{ '--desktop-offset': `${slider.currentCarousellItem === 0 ? '6%' : '-21.5%'}` }"
    >
      <SliderItem :review-items="slider.sliderItems" />
    </div>
  </div>
  <div class="carousel-dots">
    <button
      v-for="(_, index) in slider.sliderItems"
      :key="index"
      class="carousel-dot"
      :class="{ 'is-active': slider.currentCarousellItem === index }"
      @click="handleDotClick(index)"
    ></button>
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
    width: 100vw;
  }
}
@media (min-width: $mobile-view) and (max-width: $desktop-small) {
  .reviews-container {
    .slider-items-container {
      @include flex-layout($justify-content: center, $align-items: start);
      @include set-gap(2em, 0);
      position: relative;
      height: 30svh;
      transform: translateX(calc(var(--current-slide, 0) * -100%));
      transition: transform 0.4s ease-in-out;
    }
  }
  .carousel-dots {
    @include flex-layout();
    @include set-gap(1em, 0);
    .carousel-dot {
      border-radius: 50%;
      border-color: setColor('orange-400');
      border: 0.1em solid setColor('orange-400');
      width: 0.75em;
      height: 0.75em;
      &.is-active {
        background-color: setColor('orange-400');
      }
    }
  }
}
@media (min-width: 992px) {
  .reviews-container {
    padding: 0 1em;
    .slider-items-container {
      @include flex-layout($justify-content: space-between, $align-items: center);
      @include set-gap(8em, 0);
      width: 120%;
      transform: translateX(var(--desktop-offset, -400px));
      transition: transform 0.4s ease-in-out;
    }
  }
}
</style>
