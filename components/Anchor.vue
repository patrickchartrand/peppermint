<script setup lang="ts">
    defineProps(['text', 'link'])
</script>

<template>
    <a :href="link" class="mt-1.5 text-amber-50 text-xl font-medium hover:text-teal-500 transition-all duration-300">{{ text }}</a>
</template>