<script lang="ts" setup>
import type { ImageProps } from '@/Types/Types';
const props = defineProps<{
    imageItem: ImageProps
}>();
</script>
<template>
    <img :src="props.imageItem.src" :alt="props.imageItem.alt">
</template>
