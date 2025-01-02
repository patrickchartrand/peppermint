<script setup lang="ts">
const isLoading = ref<boolean>(true)

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 4000)
})
</script>


<template>
    <article class="py-20 h-full w-full flex items-center group">
        <div class="text-4xl md:text-6xl w-full md:w-11/12">
            <p class="text-amber-50 font-medium m-0 flex gap-2 h-28 md:h-auto leading-none">Hello. <CommonTypewriter v-if="!isLoading" :writing="['I\'m a Patrick.', 'I\'m a Javascript enthusiast.', 'I\'m an avid learner.', 'I\'m a digital artisan.']" /></p>
            <p class="text-stone-500 m-0 leading-none">I'm an interdisciplinary frontend Developer living in Granby, Quebec. Currently I work at <a class="text-teal-500 opacity-100 md:text-inherit cursor-pointer md:opacity-60 group-hover:opacity-100 group-hover:text-teal-500 transition-all duration-300 leading-none">Beaulieu Canada</a>, transforming how we experience internet.</p>
            <br class="mt-10 md:mt-0">
            <a href="/pchartrandCV.pdf" download style="pointer-events: none;">
                <Button :label="'view my curriculum'" :action="null" :isBasic="true" />
            </a>
        </div>
    </article>
    <section id="about" class="py-20 h-full flex md:items-center">
        <div>
            <p class="text-3xl md:text-5xl text-amber-50 font-medium mb-10">A little about me</p>
            <p class="md:max-w-2xl text-stone-500 font-medium leading-snug text-xl my-5">
                <img class="md:hidden float-right grayscale sepia-[35%] rounded-full w-32 h-fit mt-5 mx-2.5" src="@/assets/images/profil.jpeg" />
                I bring over five years of experience in front-end development and website management, with a passion for editing 3D animations and writing contents.
            </p>
            <p class="md:max-w-2xl text-stone-500 font-medium leading-snug text-xl my-5">
                The technologies I frequently work with include <span class="text-teal-500 font-medium leading-snug">CSS, HTML, JavaScript, Nuxt3, WordPress, Node.JS, SQL, Vite,</span> and various libraries.
            </p>
            <CommonTable />
        </div>
        <img class="hidden md:block rounded-full grayscale sepia-[35%] w-full h-fit min-w-40 max-w-xs mx-auto mt-32 md:mt-0" src="@/assets/images/profil.jpeg" />
    </section>
    <section id="projects" class="py-20 h-full">
        <p class="text-3xl md:text-5xl text-amber-50 font-medium mb-10">Some of my projects</p>
       <CommonMasonry />
    </section>
</template>
