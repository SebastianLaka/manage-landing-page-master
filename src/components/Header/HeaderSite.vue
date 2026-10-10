<script setup lang="ts">
import LogoImage from "@/components/icons/logo.svg"
import Logo from '@/components/ReuseableComponents/Logo.vue';

const logoData = {
    img: LogoImage,
    alt: 'Logo in navigation for site manage lading page master'
}
</script>
<template>
    <nav>
        <Logo :src="logoData.img" :alt="logoData.alt"/>
    </nav>
</template>
<style scoped lang="scss">
@use "@/assets/scss/fonts.scss" as *;
@use "@/assets/scss/colors.scss" as *;
</style>