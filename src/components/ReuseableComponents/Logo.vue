<script lang="ts" setup>
const props = defineProps<{
    src: string,
    alt: string,
}>();
</script>
<template>
    <img :src="props.src" :alt="props.alt">
</template>
