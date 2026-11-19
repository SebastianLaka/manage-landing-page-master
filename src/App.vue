<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const Layout = defineAsyncComponent(() => import('@/Layout/Layout.vue'))
</script>

<template>
  <Suspense>
    <template #default>
      <Layout />
    </template>

    <template #fallback>
      <div class="sections-loader">
        <p>Loding...</p>
      </div>
    </template>
  </Suspense>
</template>

<style lang="scss">
@use '@/assets/scss/reset.scss' as *;
@use '@/assets/scss/colors.scss' as *;
@use '@/assets/scss/mixins.scss' as *;
body {
  font-family: 'Be Vietnam Pro', sans-serif;
  background-color: setColor('gray-50');
  .sections-loader {
    padding: 5em;
    text-align: center;
    font-weight: 500;
    opacity: 0.7;
    color: setColor('gray-50');
  }
}
</style>
