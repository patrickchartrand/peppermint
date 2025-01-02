<script setup lang="ts">
    defineProps(['isBasic', 'label', 'action'])
</script>

<template>
    <button v-if="!action" type="button" :class="isBasic ? 'text-amber-50 bg-stone-700 hover:bg-stone-800' : 'text-amber-50 bg-teal-500 hover:bg-teal-600'" class="uppercase text-base font-bold px-6 pt-3 pb-2.5 shadow rounded-sm hover:px-8 transform-all duration-300">{{ label }}</button>
    <NuxtLink v-else-if="action.subject === 'nuxtlink'" :to="action.code">
        <button type="button" :class="isBasic ? 'text-amber-50 bg-stone-700 hover:bg-stone-800' : 'text-amber-50 bg-teal-500 hover:bg-teal-600'" class="uppercase text-base font-bold px-6 pt-3 pb-2.5 shadow rounded-sm hover:px-8 transform-all duration-300">{{ label }}</button>
    </NuxtLink>
</template>