<script setup lang="ts">
import type { ImageProps } from '@/Types/Types'
const props = defineProps<{
  icons: ImageProps[]
}>()
</script>
<template>
  <div class="social-media-zone">
    <img v-for="icon in icons" :src="icon.src" :alt="icon.alt" class="social-media-zone__icon" />
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as *;
@use '@/assets/scss/mixins.scss' as *;
.social-media-zone {
  @include flex-layout($justify-content: space-between);
  @include set-gap(1em, 0);
  &__icon {
    width: 2.75em;
    height: 2.75em;
  }
}
</style>
