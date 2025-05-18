<script setup lang="ts">
import { useWindowScroll, useElementBounding } from '@vueuse/core'
import useMetaData from '@/composables/useMetaData'

const isLoading = ref<boolean>(true)
const element = ref<HTMLElement | null>()

const { top } = useElementBounding(element)
const { y } = useWindowScroll()

const blurLevel = computed(() => {
  if (!top.value) {
    return ''
  } else {
    const relative = top.value / window.innerHeight

    if (relative < 0.4) 
        return 'backdrop-blur-md blur'
    if (relative < 0.7) 
        return 'backdrop-blur-sm blur'

    return ''
  }
})

onMounted(() => {
    useMetaData()
    
    setTimeout(() => {
        isLoading.value = false
    }, 4000)
})
</script>


<template>
    <article class="sticky top-0 flex items-center pt-48 px-8 lg:px-24">
        <div class="absolute top-0 left-0 h-full w-full transition-all duration-500" :class="blurLevel" />
        <div class="text-4xl lg:text-6xl">
            <p class="prose-light-bright flex gap-2 h-28 lg:h-auto">Hello. <TypeWriter v-if="!isLoading" :writing="['I\'m Patrick.', 'I\'m a Javascript enthusiast.', 'I\'m an avid learner.', 'I\'m a digital artisan.']" /></p>
            <p class="prose-dark-slim ">I'm an interdisciplinary frontend Developer living in Granby, Quebec. Currently I work at <a class="prose-theme-slim">Beaulieu Canada</a>, transforming how we experience the internet.</p>
            <br>
            <CommonButton class="relative z-10" :isDark="true" :type="'button'">
                <template #label>
                    view my curriculum
                </template>
            </CommonButton>
        </div>
    </article>
    <section dragscroll ref="element" id="projects" class="relative z-20 bg-stone-900 h-full flex flex-col items-center pt-5 pb-32 px-8 lg:px-24">
        <svg v-if="y > 0" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24"><path fill="#fff" d="M3 15v-2h2v2zm0-4V9h2v2zm4 4v-2h2v2zm0-4V9h2v2zm4 4v-2h2v2zm0-4V9h2v2zm4 4v-2h2v2zm0-4V9h2v2zm4 4v-2h2v2zm0-4V9h2v2z"/></svg>
        <h2 class="prose-light-slim text-4xl lg:text-5xl py-20 w-full text-left">Featured <span class="prose-light-bright">Projects</span></h2>
        <div class="w-full flex flex-col lg:flex-row gap-10 justify-between items-center lg:items-stretch">
            <CommonCard @click="navigateTo('https://www.beaulieucanada.com', { open: { target: '_blank' } })">
                <template #image>
                    <img class="rounded-t-lg w-full h-64 group-hover:scale-110 transition-all duration-500 object-cover" src="@/assets/medias/big.png" alt="" />
                </template>
                <template #text>
                    <p class="prose-light-bright text-2xl mb-3 mt-0 group-hover:mt-5 transition-all duration-500">Beaulieu Canada</p>
                    <p class="prose-dark-bright text-lg mb-3 group-hover:mb-8 transition-all duration-500">Modern UI and browsing experience with Vue framework.</p>
                    <div class="pt-1.5">
                        <CommonBadge :theme="'bg-sky-200 text-sky-800'">
                            Vue & Nuxt
                        </CommonBadge>
                        <CommonBadge :theme="'bg-sky-200 text-sky-800'">
                            TypeScript
                        </CommonBadge>
                        <CommonBadge :theme="'bg-sky-200 text-sky-800'">
                            Figma
                        </CommonBadge>
                        <CommonBadge :theme="'bg-sky-200 text-sky-800'">
                            JavaScript
                        </CommonBadge>
                        <CommonBadge :theme="'bg-sky-200 text-sky-800'">
                            Node.JS
                        </CommonBadge>
                    </div>
                </template>
            </CommonCard>
            <CommonCard @click="navigateTo('https://diy-robotics.com', { open: { target: '_blank' } })">
                <template #image>
                    <img class="rounded-t-lg w-full h-64 group-hover:scale-110 transition-all duration-500 object-cover" src="@/assets/medias/diy.png" alt="" />
                </template>
                <template #text>
                    <p class="prose-light-bright text-2xl mb-3 group-hover:mt-5 transition-all duration-500">DIY Robotics</p>
                    <p class="prose-dark-bright text-lg mb-3 group-hover:mb-8 transition-all duration-500">E-commerce solution with interactive product visualization.</p>
                    <div class="pt-1.5">
                        <CommonBadge :theme="'bg-amber-200 text-amber-800'">
                            Wordpress
                        </CommonBadge>
                        <CommonBadge :theme="'bg-amber-200 text-amber-800'">
                            3DS Max
                        </CommonBadge>
                        <CommonBadge :theme="'bg-amber-200 text-amber-800'">
                            PHP
                        </CommonBadge>
                        <CommonBadge :theme="'bg-amber-200 text-amber-800'">
                            JQuery
                        </CommonBadge>
                        <CommonBadge :theme="'bg-amber-200 text-amber-800'">
                            SEO
                        </CommonBadge>
                    </div>
                </template>
            </CommonCard>
            <CommonCard @click="navigateTo('https://www.ecrituresnumeriques.ca/', { open: { target: '_blank' } })">
                <template #image>
                    <img class="rounded-t-lg w-full h-64 group-hover:scale-110 transition-all duration-500 object-cover brightness-200" src="@/assets/medias/crc.png" alt="" />
                </template>
                <template #text>
                    <p class="prose-light-bright text-2xl mb-3 group-hover:mt-5 transition-all duration-500">Canada Research Chair in Digital Textualities</p>
                    <p class="prose-dark-bright text-lg mb-3 group-hover:mb-8 transition-all duration-500">Digital layouts that elevates editorial content and reading.</p>
                    <div class="pt-1.5">
                        <CommonBadge :theme="'bg-indigo-200 text-indigo-800'">
                            XML
                        </CommonBadge>
                        <CommonBadge :theme="'bg-indigo-200 text-indigo-800'">
                            MARKDOWN
                        </CommonBadge>
                        <CommonBadge :theme="'bg-indigo-200 text-indigo-800'">
                            CSS
                        </CommonBadge>
                        <CommonBadge :theme="'bg-indigo-200 text-indigo-800'">
                            HTML
                        </CommonBadge>
                    </div>
                </template>
            </CommonCard>
        </div>
    </section>
    <section id="expertise" class="relative z-30 flex flex-col items-center bg-stone-800 px-8 lg:px-24 pt-5 pb-32">
        <h2 class="prose-light-slim text-4xl lg:text-5xl py-20 w-full text-left">Technical <span class="prose-light-bright">Skills</span></h2>
        <div class="w-full flex flex-col lg:flex-row gap-8">
            <div class="lg:flex-1 flex flex-col justify-center gap-4 h-40 bg-stone-900 hover:bg-teal-500 transition-all duration-300 shadow rounded-md">
                <svg class="mx-auto" fill="#99f6e4" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24"><path d="M12 11a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M4.22 4.22C5.65 2.79 8.75 3.43 12 5.56c3.25-2.13 6.35-2.77 7.78-1.34s.79 4.53-1.34 7.78c2.13 3.25 2.77 6.35 1.34 7.78s-4.53.79-7.78-1.34c-3.25 2.13-6.35 2.77-7.78 1.34S3.43 15.25 5.56 12C3.43 8.75 2.79 5.65 4.22 4.22m11.32 4.24c.61.62 1.17 1.25 1.69 1.88c1.38-2.13 1.88-3.96 1.13-4.7c-.74-.75-2.57-.25-4.7 1.13c.63.52 1.26 1.08 1.88 1.69m-7.08 7.08c-.61-.62-1.17-1.25-1.69-1.88c-1.38 2.13-1.88 3.96-1.13 4.7c.74.75 2.57.25 4.7-1.13c-.63-.52-1.26-1.08-1.88-1.69m-2.82-9.9c-.75.74-.25 2.57 1.13 4.7c.52-.63 1.08-1.26 1.69-1.88c.62-.61 1.25-1.17 1.88-1.69c-2.13-1.38-3.96-1.88-4.7-1.13m4.24 8.48c.7.7 1.42 1.34 2.12 1.91c.7-.57 1.42-1.21 2.12-1.91s1.34-1.42 1.91-2.12c-.57-.7-1.21-1.42-1.91-2.12S12.7 8.54 12 7.97c-.7.57-1.42 1.21-2.12 1.91S8.54 11.3 7.97 12c.57.7 1.21 1.42 1.91 2.12m8.48 4.24c.75-.74.25-2.57-1.13-4.7c-.52.63-1.08 1.26-1.69 1.88c-.62.61-1.25 1.17-1.88 1.69c2.13 1.38 3.96 1.88 4.7 1.13"/></svg>
                <p class="prose-light-bright text-2xl text-center">Web Development</p>
            </div>
            <div class="lg:flex-1 flex flex-col justify-center gap-4 h-40 bg-stone-900 hover:bg-teal-500 transition-all duration-300  shadow rounded-md">
                <svg class="mx-auto" fill="#99f6e4" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24"><path d="M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8"/></svg>
                <p class="prose-light-bright text-2xl text-center">UX Design</p>
            </div>
            <div class="lg:flex-1 flex flex-col justify-center gap-4 h-40 bg-stone-900 hover:bg-teal-500 transition-all duration-300  shadow rounded-md">
                <svg class="mx-auto" fill="#99f6e4" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L6.04 7.5L12 10.85l5.96-3.35zM5 15.91l6 3.38v-6.71L5 9.21zm14 0v-6.7l-6 3.37v6.71z"/></svg>
                <p class="prose-light-bright text-2xl text-center">3D Animation</p>
            </div>
            <div class="lg:flex-1 flex flex-col justify-center gap-4 h-40 bg-stone-900 hover:bg-teal-500 transition-all duration-300  shadow rounded-md">
                <svg class="mx-auto" fill="#99f6e4" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24"><path d="M16 18H7V4h9m-4.5 18a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m4-21h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1z" /></svg>
                <p class="prose-light-bright text-2xl text-center">Responsive User Interface</p>
            </div>
        </div>
    </section>
    <!--<section id="experience" class="relative z-40 bg-stone-900 pt-5 pb-3 px-8 lg:px-24">
        <h2 class="prose-light-slim text-4xl lg:text-5xl py-20 w-full text-left">Acquired <span class="prose-light-bright">Experience</span></h2>
        <CommonTimeline />
    </section>-->
    <section id="contact" class="relative z-50 bg-stone-900 h-full pb-32 pt-5 px-8 lg:px-24">
        <h2 class="prose-light-slim text-4xl lg:text-5xl pt-20 w-full text-center">Let's Create <span class="prose-light-bright">Together</span></h2>
        <p class="prose-light-slim text-xl lg:text-2xl text-center mt-5">Have a project in mind? Let's bring your vision to life.</p>
        <CommonForm />
    </section>
</template>

<style>
    body:has(.blur) header {
        z-index: 0;
    }
</style>