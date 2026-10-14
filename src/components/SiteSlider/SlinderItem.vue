<script setup lang="ts">
import RevieverImage from '@/components/ReuseableComponents/Image.vue'
import type { SliderItem } from '@/Types/Types'
const props = defineProps<{
  reviewItems: SliderItem[]
}>()
</script>
<template>
  <div class="slider-item" v-for="reviewItem in reviewItems" :key="reviewItem.id">
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
.slider-item {
  @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
  @include set-gap(0, 1em);
  text-align: center;
}
</style>
