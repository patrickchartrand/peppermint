<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'

const target = ref<HTMLElement | null>(null)
const targetIsVisible = useElementVisibility(target)
</script>

<template>
  <section class="h-screen w-screen max-w-full px-10 mx-0 flex flex-col items-center justify-between">
    <div class="mt-20">
      <div class="flex justify-center mb-20">
        <img class="relative z-10 rounded-full w-60 h-60 mx-0 -mr-10 grayscale" src="../assets/images/profil.jpeg" />
        <i class="w-60 h-60 block rounded-full relative z-20 -ml-10 opacity-50" style="background-color: var(--accent);" />
      </div>
      <h1 style="color: var(--accent);" class="text-lg text-center font-semibold uppercase">Patrick Chartrand</h1>
      <br>
      <h2 class="text-7xl text-center">Frontend Developer</h2>
      <p class="text-2xl min-h-[32px] w-fit mx-auto"><BlocksTyper :writing="['I\'m a Javascript enthusiast', 'I\'m an avid learner', 'I\'m a digital artisan']" /></p>
    </div>
    <div class="h-fit">
      <img class="w-28 h-28 mx-auto" src="../assets/images/scroll.gif" />
    </div>
  </section>
  <section class="h-screen w-screen max-w-full px-10 mx-0 flex flex-col justify-center">
    <h3 class="text-2xl text-center">A few brands I've worked with</h3>
    <hr ref="target" :class="{ 'separator': targetIsVisible }">
    <div class="flex flex-col justify-center w-fit mx-auto mt-20">
      <div class="md:flex justify-center gap-x-4 mb-2">
        <img src="/brands/avril.png" class="h-[80px] grayscale" />
        <img src="/brands/beaulieucanada.png" class="h-[80px] invert grayscale" />
      </div>
      <div class="md:flex justify-center gap-x-4 mt-2">
        <img src="/brands/clariprod.png" class="h-[80px] grayscale" />
        <img src="/brands/senspublic.png" class="h-[80px] invert grayscale" />
        <img src="/brands/diyrobotics.png" class="h-[80px] grayscale" />
      </div>
    </div>
  </section>
  <section class="h-screen w-screen max-w-full px-10 mx-0">
    <article class="bg-white w-full relative px-10">
      <video class="w-full mx-auto max-h-[400px]" loop autoplay muted>
        <source src="/animation.mov" type="video/mp4">
      </video>
      <p class="absolute top-1/3 w-1/3">
        <span class="text-2xl text-black">Where 3D animation meets web development and design.</span>
        <br>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">JAVASCRIPT</span>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2  rounded-full">CPANEL</span>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2  rounded-full">HTML</span>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2  rounded-full">CSS</span>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2  rounded-full">PHP</span>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2  rounded-full">WORDPRESS</span>
      </p>
    </article>
    <article class="bg-stone-400 relative px-10">
      <img class="w-fit relative mr-0 max-h-[398px] rounded-md" src="/responsive.png" />
      <p class="absolute top-1/3 w-1/3">
        <span class="text-2xl text-black">Build responsive and cross browser efficient website.</span>
        <br>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">MARKDOWN</span>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2  rounded-full">XML</span>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2  rounded-full">HTML</span>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2  rounded-full">CSS</span>
      </p>
    </article>
    <article class="bg-black relative px-10">
      <img class="w-full max-h-[398px] rounded-md" src="/publish.png" />
      <p class="absolute top-1/3 w-1/3">
        <span class="text-2xl bg-black py-2">Editing digital textualities for online reading.</span>
        <br>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">MARKDOWN</span>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2  rounded-full">XML</span>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2  rounded-full">HTML</span>
        <span style="background-color: var(--bg-accent);" class="inline-block w-fit text-white text-xs font-medium me-2 px-2.5 pt-1.5 pb-1 mt-2  rounded-full">CSS</span>
      </p>
    </article>
  </section>
</template>

<style>
.separator {
  border: 1px solid var(--accent);
  margin: 30px auto 0;
  width: 0;
  animation: separator 1s ease-out forwards;
}

@keyframes separator {
  0% {
    width: 0;
  }
  100% {
    width: 30%;
  }
}
</style>