Fragment kodu
<script setup lang="ts">
import RevieverImage from '@/components/ReuseableComponents/Image.vue'
import type { SliderItem } from '@/Types/Types'
import { useSliderStore } from '@/stores/slider.ts'

const slider = useSliderStore()
const props = defineProps<{
  reviewItems: SliderItem[]
}>()
</script>

<template>
  <div
    class="slider-item"
    v-for="(reviewItem, index) in reviewItems"
    :key="reviewItem.id"
    :index="index"
    :class="{ 'is-active': slider.currentCarousellItem === index }"
  >
    <div class="reviewer-avatar">
      <RevieverImage
        :src="reviewItem.reviewerImage.src"
        :alt="reviewItem.reviewerImage.alt"
        :image-item="reviewItem.reviewerImage"
      />
    </div>
    <h3 class="slider-item__reviewer-name">{{ reviewItem.reviewerName }}</h3>
    <p class="slider-item__description">{{ reviewItem.content }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/breakpoints' as *;
@use '@/assets/scss/colors' as *;

@media (min-width: $mobile-view) and (max-width: $desktop-small) {
  .slider-item {
    display: none;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: setColor('gray-50');
    &.is-active {
      @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
      @include set-gap(1em, 1em);
    }

    &__description {
      max-width: 30ch;
    }
  }
}
@media (min-width: $desktop-small) {
  .slider-item {
    @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
    @include set-gap(1em, 1em);

    &__description {
      max-width: 32ch;
    }
  }
}
</style>
