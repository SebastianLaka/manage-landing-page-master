<script setup lang="ts">
import type { ImageProps } from '@/Types/Types'
const props = defineProps<{
  icons: ImageProps[]
}>()
</script>
<template>
  <div class="social-media-zone">
    <a href="#" class="social-media-redirect-link">
      <img
        v-for="icon in icons"
        :src="icon.src"
        :alt="icon.alt"
        class="social-media-redirect-link__icon"
      />
    </a>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as *;
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/breakpoints.scss' as *;
.social-media-zone {
  .social-media-redirect-link {
    @include flex-layout($justify-content: space-between);
    @include set-gap(1em, 0);
    &__icon {
      width: 2.75em;
      height: 2.75em;
    }
  }
}
@media (min-width: $desktop-small) {
  .social-media-zone {
    .social-media-redirect-link {
      &__icon {
        width: 2em;
        height: 2em;
        transition: filter .1s ease-out;
        &:hover{
         filter: brightness(0) saturate(100%) invert(53%) sepia(58%) saturate(3654%) hue-rotate(337deg) brightness(97%) contrast(96%);
        }
      }
    }
  }
}
</style>
