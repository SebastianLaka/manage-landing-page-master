<script lang="ts" setup>
interface Items {
  id: number
  cardNumber: string
  title: string
  content: string
}
const props = defineProps<{
  featureItems: Items[]
}>()
</script>
<template>
  <div class="features">
    <div class="feature-card" v-for="item in featureItems" :key="item.id">
      <div class="feature-card-header">
        <p class="feature-card-header__number">{{ item.cardNumber }}</p>
        <h3 class="feature-card-header__title">{{ item.title }}</h3>
      </div>
      <p class="feature-card__description">{{ item.content }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/fonts.scss' as *;
@use '@/assets/scss/colors.scss' as *;
.features {
  @include flex-layout($flex-direction: column);
  @include set-gap(0, 3em);
  padding-top: 3em;
  .feature-card {
    @include flex-layout($flex-direction: column);
    @include set-gap(0, 1em);
    .feature-card-header {
      @include flex-layout($align-items: center);
      @include set-gap(1em, 0);
      &__number{
        background-color: setColor('orange-400');
        color: setColor('gray-50');
        padding: .5em 1.5em;
        border-radius: 4em;
      }
      &__title{
        font-size: setSize('base');
      }
    }
  }
}
</style>
