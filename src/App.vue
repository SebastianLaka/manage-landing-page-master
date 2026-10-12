<script setup lang="ts">
import NavigationSite from '@/components/NavSite/NavigationSite.vue';
import HeaderSite from './components/HeaderSite/HeaderSite.vue';
</script>

<template>
    <NavigationSite />
    <HeaderSite />
</template>

<style lang="scss">
@use "@/assets/scss/reset.scss" as *;
@use "@/assets/scss/colors.scss" as *;
body{
    font-family: 'Be Vietnam Pro', sans-serif;
    background-color: setColor('gray-50');
}
</style>
