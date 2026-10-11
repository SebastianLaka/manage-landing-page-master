<script lang="ts" setup>
interface Items{
    id: number
    title: string
}
const props = defineProps<{
    navItems: Items[]
}>()
</script>
<template>
<ul class="nav-items-container">
    <li v-for="item in navItems" :key="item.id" class="nav-item">{{ item.title }}</li>
</ul>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/breakpoints.scss' as *;
@media (min-width: $desktop-small){
    .nav-items-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0 1em;
        .nav-item{
            padding: .25em;
            cursor: pointer;
        }
    }
}
</style>
