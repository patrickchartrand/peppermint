<script setup lang="ts">
defineProps(['isDark', 'type'])
</script>

<template>
    <button :type="type" :class="{ 'prose-light-bright hover:!text-stone-900 bg-stone-800 focus:ring-teal-300 hover:bg-teal-200': isDark, 'prose-dark-bright !text-stone-900 bg-teal-200 focus:ring-stone-300 hover:bg-teal-500': !isDark }" class="uppercase flex justify-center items-center min-h-[3.25rem] text-xl px-9 pt-[0.35rem] rounded-md hover:px-11 cursor-pointer focus:ring-4 transform-all duration-300">
        <slot name="label" />
    </button>
</template>