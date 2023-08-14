<script setup lang="ts">
import { useStore } from '@/store'
const store = useStore()

const isMouseOver = ref<boolean | any>(false)
const isClicked = ref<boolean>(false)
const isTimeout = ref<boolean>(false)

function timing() {
    isTimeout.value = true
}

watch(isClicked, (val) => {
    if (val) {
        setTimeout(timing, 500)
    } else {
        isTimeout.value = false
    }
})
</script>

<template>
    <div>
        <header class="sticky top-0 z-10"> 
            <nav class="flex justify-center items-center absolute z-20 transition-all duration-[500ms]" :class="isClicked ? 'h-screen w-screen top-0 right-0 rounded-none bg-[#141e31]' : 'h-[64px] w-[64px] top-5 right-5 rounded-full bg-white'">
                <ul v-if="isClicked && isTimeout">
                    <li class="my-6 text-4xl text-white opacity-70 hover:opacity-100 hover:cursor-pointer hover:text-5xl transition-all durantion-[3000ms]">01 ABOUT</li>
                    <li class="my-6 text-4xl text-white opacity-70 hover:opacity-100 hover:cursor-pointer hover:text-5xl transition-all durantion-[3000ms]">02 CREDENTIALS</li>
                    <li class="my-6 text-4xl text-white opacity-70 hover:opacity-100 hover:cursor-pointer hover:text-5xl transition-all durantion-[3000ms]">03 CRAFTS</li>
                    <li class="my-6 text-4xl text-white opacity-70 hover:opacity-100 hover:cursor-pointer hover:text-5xl transition-all durantion-[3000ms]">04 CONTACT</li>
                </ul>
            </nav>
            <button v-if="isClicked && isTimeout" type="button" class="w-fit h-fit absolute z-30 top-5 right-5 rounded-full bg-white p-4 hover:cursor-pointer"  @click="isClicked = !isClicked">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <button v-else type="button" class="w-fit h-fit grid items-center absolute z-20 top-5 right-5 rounded-full bg-white p-4 hover:cursor-pointer" :class="isMouseOver ? 'shadow-md' : 'shadow'" @mouseenter="isMouseOver = true" @mouseleave="isMouseOver = false" @click="isClicked = !isClicked">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </header>
        <main>
            <section class="h-screen w-screen min-h-screen min-w-screen" :style="`background-image: url(${store.website}/images/background.png)`">
                <CodexHome />
            </section>
            <section class="h-fit w-screen flex justify-center bg-[#f4f4f4] py-20">
                <CodexAbout />
            </section>
            <section class="h-fit w-screen flex justify-center py-20">
                <CodexCredentials />
            </section>
            <section class="h-fit w-screen flex justify-center py-20">
                <!-- <CodexWorks /> -->
            </section>
            <section class="h-fit w-screen flex justify-center bg-[#f4f4f4] py-20">
                <CodexCraft/>
            </section>
        </main>
        <footer>

        </footer>
    </div>
</template>

<style>
    section:first-of-type {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>