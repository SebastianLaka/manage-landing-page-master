<script setup lang="ts">
import Layout from './Layout/Layout.vue'
</script>

<template>
<Layout />
</template>

<style lang="scss">
@use '@/assets/scss/reset.scss' as *;
@use '@/assets/scss/colors.scss' as *;
@use '@/assets/scss/mixins.scss' as *;
body {
  font-family: 'Be Vietnam Pro', sans-serif;
  background-color: setColor('gray-50');
}
</style>
