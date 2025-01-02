<script setup lang="ts">
    defineProps(['text'])
</script>

<template>
    <i class="not-italic bg-black/20 text-stone-800 tracking-wider text-sm font-medium px-5 pt-1.5 pb-1 rounded-full">{{ text }}</i>
</template>