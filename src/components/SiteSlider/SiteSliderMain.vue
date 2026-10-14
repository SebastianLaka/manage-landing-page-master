<script setup lang="ts">
import SlinderItem from './SlinderItem.vue'
import { useSliderStore } from '@/stores/slider.ts'
const slider = useSliderStore()
</script>
<template>
  <SlinderItem :review-items="slider.sliderItems" />
</template>
