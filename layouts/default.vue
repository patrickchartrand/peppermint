<script setup lang="ts">
import { useWindowScroll, useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const { y } = useWindowScroll()

const isMouseOver = ref<boolean>(false)
const isClicked = ref<boolean>(false)
const isTimeout = ref<boolean>(false)

function onTimeout() {
    isTimeout.value = true
    y.value = 0
    useHead({
        htmlAttrs: {
            style: 'overflow: hidden;'
        }
    })
}

function onClick() {
    isClicked.value = false
    isTimeout.value = false
    useHead({
        htmlAttrs: {
            style: 'overflow: auto;'
        }
    })
}

watch(isClicked, (val) => {
    if (val) {
        setTimeout(onTimeout, 500)
    } else {
        isTimeout.value = false
        useHead({
            htmlAttrs: {
                style: 'overflow: auto;'
            }
        })
    }
})

watch(width, () => {
    if (width.value > 768) {
        isClicked.value = false
        isTimeout.value = false
        useHead({
            htmlAttrs: {
                style: 'overflow: auto;'
            }
        })
    }
})
</script>

<template>
    <header class="px-10 md:px-20 w-full h-28 relative fixed... left-0 z-10 flex justify-between items-center transition-all duration-300" :class="{ '-top...-[130px] top-0 ': y > 200, 'top-0 ': y <= 200 }">
        <img class="w-40 h-40 -ml-8 -mt-6 grayscale sepia-[35%] invert" src="@/assets/images/signature.png" />
        <nav class="hidden md:flex items-center gap-10">
            <Anchor :text="'About'" :link="'#about'" />
            <Anchor :text="'Projects'" :link="'#projects'" />
            <Button :label="'contact'" :action="{ subject: 'nuxtlink', code: 'mailto:patrick.chartrand@umontreal.ca' }" :isBasic="false" />
        </nav>
        <button type="button" class="w-fit h-fit md:hidden grid items-center rounded-full bg-amber-50 p-4 hover:cursor-pointer" :class="{ 'shadow-md ': isMouseOver, 'shadow ': !isMouseOver }" @mouseenter="isMouseOver = true" @mouseleave="isMouseOver = false" @click="isClicked = !isClicked">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-stone-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    </header>
    <aside class="md:hidden flex justify-center items-center absolute transition-all duration-[500ms]" :class="isClicked ? 'w-full h-screen z-20 top-0 right-0 rounded-none bg-[#0e0d0a]' : 'h-[64px] w-[64px] z-0 top-6 right-10 rounded-full bg-amber-50'">
        <button v-if="isClicked && isTimeout" type="button" class="w-fit h-fit absolute z-30 top-6 right-10 rounded-full bg-amber-50 p-4 hover:cursor-pointer"  @click="isClicked = !isClicked">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-stone-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <ul v-if="isClicked && isTimeout">
            <li class="my-6 text-4xl text-stone-500 hover:cursor-pointer hover:text-5xl transition-all durantion-[3000ms]" @click="onClick(), navigateTo('#about')">01 ABOUT</li>
            <li class="my-6 text-4xl text-stone-500 hover:cursor-pointer hover:text-5xl transition-all durantion-[3000ms]" @click="onClick(), navigateTo('#projects')">02 PROJECTS</li>
            <li class="my-6 text-4xl text-teal-500 hover:cursor-pointer hover:text-5xl transition-all durantion-[3000ms]" @click="onClick(), navigateTo('mailto:patrick.chartrand@umontreal.ca', { external: true })">03 CONTACT</li>
        </ul>
    </aside>
    <main class="px-10 md:px-20">
        <slot />
    </main>
    <footer>

    </footer>
</template>

<style>
    html, body {
        background-color: #0e0d0a;
        /*background: url('@/assets/images/bg.png');
        filter: sepia(100%);*/
    }
</style>

<!--<style>
    * {
        cursor: url("@/assets/images/dot.png"), auto !important;
    }
</style>-->