<script setup lang="ts">
import { useStore } from '@/store'

onMounted(() => {
    const store = useStore()
    store.getDomain()
})
</script>
<template>
    <slot />
</template>