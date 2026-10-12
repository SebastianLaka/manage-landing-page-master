<script lang="ts" setup>
import FeaturesItems from './FeaturesItems.vue'
const featuresItems = [
  {
    id: 1,
    cardNumber: '01',
    title: 'Track company-wide progress',
    content:
      'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
  },
  {
    id: 2,
    cardNumber: '02',
    title: 'Advanced built-in reports',
    content:
      'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
  },
  {
    id: 3,
    cardNumber: '03',
    title: ' Everything you need in one place',
    content:
      'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
  },
]
</script>
<template>
  <section class="features-container">
    <div class="features-content">
      <h2 class="features-content__header">What's different about Manage?</h2>
      <p class="features-content__description">
        Manage provides all the functionality your team needs, without the complexity. Our software
        is tailor-made for modern digital product teams.
      </p>
    </div>
    <FeaturesItems :feature-items="featuresItems"/>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;
@use '@/assets/scss/fonts.scss' as *;
.features-container {
  padding: 0 1em;
  .features-content {
    @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
    @include set-gap(0, 1em);
    text-align: center;
    &__header {
      font-size: setSize('header-2');
      font-weight: setWeight('bold');
    }
  }
}
</style>
