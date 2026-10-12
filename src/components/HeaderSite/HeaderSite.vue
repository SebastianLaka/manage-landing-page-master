<script lang="ts" setup>
import Image from '../ReuseableComponents/Image.vue'
import HeroImage from '@/components/icons/illustration-intro.svg'
import HeroButton from '@/components/ReuseableComponents/ButtonSite.vue'
const heroImageData = {
  src: HeroImage,
  alt: 'Hero image with charts and increase products price',
}
</script>
<template>
  <section class="header wrapper">
    <div class="logo-box">
      <Image :src="heroImageData.src" :alt="heroImageData.alt" />
    </div>

    <div class="content">
      <h1 class="content__header">Bring everyone together to build better products.</h1>
      <p class="content__description">
        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger
        team goals in view.
      </p>
      <HeroButton class="content__cta">Get Started</HeroButton>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/colors.scss' as *;
@use '@/assets/scss/breakpoints.scss' as *;
@use '@/assets/scss/fonts.scss' as *;
.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 81.25em;
}
.header {
  padding: 0 1em;
  .content {
    @include flex-layout(
      $flex-direction: column,
      $justify-content: space-between,
      $align-items: center
    );
    @include set-gap(0, 1.25em);
    text-align: center;
    &__header {
      max-width: 35ch;
      font-size: setSize('header-1');
    }
    &__description {
      max-width: 45ch;
    }
    &__cta{
      transition: background-color .3s ease-in-out;
      &:hover{
        background-color: hsl(12, 97%, 75%);
      }
    }
  }
}
@media (min-width: $desktop-wide) {
  .header {
    @include flex-layout($flex-direction: row-reverse, $justify-content: space-between);
    .content {
      @include flex-layout(
        $flex-direction: column,
        $justify-content: center,
        $align-items: start
      );
      text-align: left;
      @include set-gap(0, 2.25em);
      &__header{
        
        max-width: 15ch;
      }
      &__description {
        max-width: 35ch;
      }
    }
  }
}
</style>
