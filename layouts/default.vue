<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
</script>

<template>
    <header class="bg-[#161616] px-40 py-4 w-full fixed top-0 left-0 z-10 flex justify-between items-center transition-all duration-300" :class="{ '-top-[100px]': y > 200 }">
        <h1 class="text-emerald-300 text-xl font-bold">Patrick</h1>
        <nav class="flex items-center gap-10">
            <button type="button" class="light-prose text-lg font-medium opacity-100 hover:opacity-80">About</button>
            <button type="button" class="light-prose text-lg font-medium opacity-100 hover:opacity-80">Work</button>
            <button type="button" class="uppercase text-sm text-[#161616] font-bold bg-emerald-300 px-8 py-3 rounded-sm pl-8 hover:px-10 opacity-100 hover:opacity-80 transform-all duration-300">Get in touch</button>
        </nav>
    </header>
    <main class="bg-[#161616] relative grid items-center">
        <slot />
    </main>
</template>

<style>
html {
    -webkit-font-smoothing: antialiased;
}

* {
    font-family: Inter, sans-serif;
    font-weight: 300;
    letter-spacing: -.5px;
    line-height: 48px;
}

.light-prose {
    color: #aaa9a3;
}

.dark-prose {
    color: #55565c;
}
</style>