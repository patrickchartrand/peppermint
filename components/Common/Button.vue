<script setup lang="ts">
defineProps(['isDark', 'type'])
</script>

<template>
    <button :type="type" :class="{ 'prose-light-bright hover:!text-stone-900 bg-stone-800 focus:ring-teal-300 hover:bg-teal-200': isDark, 'prose-dark-bright !text-stone-900 bg-teal-200 focus:ring-stone-300 hover:bg-teal-300': !isDark }" class="uppercase text-xl px-9 pb-4 pt-5 rounded-md hover:px-11 cursor-pointer focus:ring-4 transform-all duration-300">
        <slot name="label" />
    </button>
</template>