<script setup lang="ts">
defineProps(['theme'])
</script>

<template>
    <div class="inline-block mx-1 mt-1">
        <span :class="theme" class="font-medium px-3 pt-1.5 pb-0.5 rounded-md shadow"><slot /></span>
    </div>
</template>