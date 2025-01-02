<script setup lang="ts">
import { useWindowScroll, useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const { y } = useWindowScroll()

const isLoading = ref<boolean>(true)
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

onBeforeMount(() => {
    const nuxtApp = useNuxtApp()
    nuxtApp.hook("page:finish", () => {
        window.scrollTo(0, 0)
    })
})

onMounted(() => {
    const router = useRouter()
    router.push({ hash: undefined })

    setTimeout(() => {
        isLoading.value = false
    }, 4000)
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
        <div v-if="isLoading" class="bg-[#0b0b0b] absolute z-50 top-0 left-0 h-screen w-screen flex items-center justify-center">
            <i class="loader" />
        </div>
        <slot />
    </main>
    <footer class="md:flex flex-row-reverse justify-between items-center px-10 md:px-20 my-3">
        <div class="text-amber-50 flex justify-center md:justify-start items-center gap-3">
            <NuxtLink to="https://www.linkedin.com/in/patrick-chartrand-6b4331235/" target="_blank">
                <svg style="margin-top: -5px;" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20"><path fill="currentColor" d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2M1 19V6h4v13zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7z"/></svg>
            </NuxtLink>
            <NuxtLink to="https://github.com/patrickchartrand" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path fill="currentColor" d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799m4.526-4.683c.149-.365.155-2.439-.635-4.426c0 0-1.811.199-4.551 2.08c-.575-.16-1.548-.238-2.519-.238c-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002l1.732-.002c1.506 0 7.467-.115 7.467-7.301c0-1.652-.566-2.863-1.494-3.871m-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115c0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531c.735.676 1.045 1.49 1.045 2.369c0 3.666-2.937 4.115-6.709 4.115m-3.207-5.606c-.718 0-1.3.807-1.3 1.799c0 .994.582 1.801 1.3 1.801s1.301-.807 1.301-1.801c0-.992-.582-1.799-1.301-1.799"/></svg>
            </NuxtLink>
            <NuxtLink to="https://x.com/p_chartrand" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path fill="currentColor" d="M17.316 6.246q.011.244.011.488c0 4.99-3.797 10.742-10.74 10.742c-2.133 0-4.116-.625-5.787-1.697a7.58 7.58 0 0 0 5.588-1.562a3.78 3.78 0 0 1-3.526-2.621a3.86 3.86 0 0 0 1.705-.065a3.78 3.78 0 0 1-3.028-3.703v-.047a3.8 3.8 0 0 0 1.71.473a3.775 3.775 0 0 1-1.168-5.041a10.72 10.72 0 0 0 7.781 3.945a3.8 3.8 0 0 1-.097-.861a3.773 3.773 0 0 1 3.774-3.773a3.77 3.77 0 0 1 2.756 1.191a7.6 7.6 0 0 0 2.397-.916a3.8 3.8 0 0 1-1.66 2.088a7.6 7.6 0 0 0 2.168-.594a7.6 7.6 0 0 1-1.884 1.953"/></svg>
            </NuxtLink>
        </div>
        <h1 class="text-amber-50 font-medium tracking-wider text-base text-center md:text-start">Designed and developed by&nbsp;Patrick&nbsp;Chartrand</h1>
    </footer>
</template>

<style>
    html:has(.loader) {
        overflow: hidden;
    }
    .loader {
        width: 40px;
        height: 20px;
        background: #14b8a6;
        position: relative;
        animation: l19-0 1.5s infinite linear;
    }
    .loader:before,
    .loader:after {
        content:"";
        position: absolute;
        background: inherit; 
        bottom: 100%;
        width: 50%;
        height: 100%;
        animation: inherit;
        animation-name: l19-1;
    }
    .loader:before {
        left:0;
        --s:-1,1;
    }
    .loader:after {
        right:0;
    }
    @keyframes l19-0 {
        0%,30%   {transform:translateY(0)     scaleY(1)}
        49.99%   {transform:translateY(-50%)  scaleY(1)}
        50%      {transform:translateY(-50%)  scaleY(-1)}
        70%,100% {transform:translateY(-100%) scaleY(-1)}
    }
    @keyframes l19-1 {
        0%,10%,90%,100% {transform: scale(var(--s,1)) translate(0)}
        30%,70%         {transform: scale(var(--s,1)) translate(20px)}
        50%             {transform: scale(var(--s,1)) translate(20px,20px)}
    }
</style>


