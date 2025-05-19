<script setup lang="ts">
import { useWindowScroll, useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const { y } = useWindowScroll()
const route = useRoute()

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
    <header :class="{ 'top-0': y < 150, '-top-80 lg:top-0': y > 150 }" class="bg-stone-900 px-8 lg:px-24 w-full h-28 flex sticky z-[999] lg:z-10 left-0 justify-between items-center transition-all duration-700">
        <img :class="{ 'top-0': y < 150, '-top-80 lg:top-0': y > 150 }" class="transition-all duration-700 relative w-40 h-40 -ml-8 -mt-8 grayscale invert cursor-pointer" src="@/assets/medias/signature.png" @click="navigateTo('/')" />
        <nav class="hidden lg:flex items-center gap-10">
            <a :href="route.name === 'index' ? '#projects' : '/'" class="text-stone-100 hover:text-teal-200 transition-all duration-300 text-xl font-medium">Projects</a>
            <a :href="route.name === 'index' ? '#expertise' : '/'" class="text-stone-100 hover:text-teal-200 transition-all duration-300 text-xl font-medium">Expertise</a>
            <CommonButton :isDark="false" :type="'button'" @click="navigateTo(route.name === 'index' ? '#contact' : '/')">
                <template #label>
                    Contact
                </template>
            </CommonButton>
        </nav>
        <nav class="lg:hidden">
            <button v-if="!isClicked && !isTimeout" type="button" class="w-fit h-fit lg:hidden fixed right-10 z-30 grid items-center rounded-full bg-stone-100 p-4 hover:cursor-pointer transition-all duration-700" :class="{ 'shadow-md ': isMouseOver, 'shadow ': !isMouseOver, 'top-5': y < 150, '-top-80 lg:top-0': y > 150 }" @mouseenter="isMouseOver = true" @mouseleave="isMouseOver = false" @click="isClicked = !isClicked">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-stone-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <div class="lg:hidden flex justify-center items-center absolute transition-all duration-[500ms]" :class="isClicked ? 'w-full h-screen z-30 top-0 right-0 rounded-none bg-stone-950' : 'h-[64px] w-[64px] z-0 top-5 right-10 rounded-full bg-transparent'">
                <button v-if="isClicked && isTimeout" type="button" class="w-fit h-fit absolute z-30 top-6 right-10 rounded-full bg-stone-100 p-4 hover:cursor-pointer"  @click="isClicked = !isClicked">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-stone-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <ul v-if="isClicked && isTimeout">
                    <li class="my-6 text-4xl text-stone-200 hover:cursor-pointer hover:text-5xl transition-all durantion-[3000ms]" @click="onClick(), navigateTo(route.name === 'index' ? '#projects' : '/')">01 PROJECTS</li>
                    <li class="my-6 text-4xl text-stone-200 hover:cursor-pointer hover:text-5xl transition-all durantion-[3000ms]" @click="onClick(), navigateTo(route.name === 'index' ? '#expertise' : '/')">02 EXPERTISE</li>
                    <li class="my-6 text-4xl text-teal-200 hover:cursor-pointer hover:text-5xl transition-all durantion-[3000ms]" @click="onClick(), navigateTo(route.name === 'index' ? '#contact' : '/')">03 CONTACT</li>
                </ul>
            </div>
        </nav>
    </header>
    <main class="-mt-20">
        <slot />
    </main> 
    <footer class="lg:flex flex-row-reverse justify-between items-center px-8 lg:px-24 my-3">
        <div class="text-stone-100 flex justify-center lg:justify-start items-center gap-3 mb-3 lg:mb-0">
            <NuxtLink to="https://www.linkedin.com/in/patrick-chartrand-6b4331235/" target="_blank">
                <svg style="margin-top: -5px;" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20"><path fill="currentColor" d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2M1 19V6h4v13zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7z"/></svg>
            </NuxtLink>
            <NuxtLink to="https://github.com/patrickchartrand" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path fill="currentColor" d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799m4.526-4.683c.149-.365.155-2.439-.635-4.426c0 0-1.811.199-4.551 2.08c-.575-.16-1.548-.238-2.519-.238c-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002l1.732-.002c1.506 0 7.467-.115 7.467-7.301c0-1.652-.566-2.863-1.494-3.871m-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115c0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531c.735.676 1.045 1.49 1.045 2.369c0 3.666-2.937 4.115-6.709 4.115m-3.207-5.606c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801s1.301-.807 1.301-1.801c0-.992-.582-1.799-1.301-1.799"/></svg>
            </NuxtLink>
            <NuxtLink to="https://bsky.app/profile/pchartrand.bsky.social" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565C.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479c.815 2.736 3.713 3.66 6.383 3.364c.136-.02.275-.039.415-.056c-.138.022-.276.04-.415.056c-3.912.58-7.387 2.005-2.83 7.078c5.013 5.19 6.87-1.113 7.823-4.308c.953 3.195 2.05 9.271 7.733 4.308c4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056c2.67.297 5.568-.628 6.383-3.364c.246-.828.624-5.79.624-6.478c0-.69-.139-1.861-.902-2.206c-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8"/></svg>           
            </NuxtLink>
        </div>
        <div>
            <a class="text-stone-100 gap-1 flex justify-center lg:justify-start items-center font-medium tracking-wider text-base" href="/privacy-policy">
                <svg class="float-left -mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"/></svg>
                Privacy Policy
            </a>
            <h1 class="text-stone-100 font-medium tracking-wider text-base text-center lg:text-start">Designed and developed by&nbsp;Patrick&nbsp;Chartrand</h1>
        </div>
    </footer>
</template>

<style>
    .prose-light-bright {
        @apply text-stone-100 font-medium leading-none;
    }
    .prose-dark-bright {
        @apply text-stone-500 font-medium leading-none;
    }
    .prose-theme-bright {
        @apply text-teal-200 font-medium leading-none;
    }
    .prose-light-slim {
        @apply text-stone-100 font-light leading-none;
    }
    .prose-dark-slim {
        @apply text-stone-500 font-light leading-none;
    }
    .prose-theme-slim {
        @apply text-teal-200 font-light leading-none;
    }
</style>