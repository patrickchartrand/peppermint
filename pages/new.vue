<template>
    <section class="min-h-screen w-3/5 mx-40 grid items-center">
        <div class="text-4xl">
            <p class="light-prose m-0 flex gap-2">Hello. <BlocksTyper :writing="['I\'m a Patrick.', 'I\'m a Javascript enthusiast.', 'I\'m an avid learner.', 'I\m a digital artisan.']" /></p>
            <p class="dark-prose m-0">I'm an interdisciplinary frontend Developer living in Granby, Quebec. Currently I work at <a class="cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300">Beaulieu Canada</a>, transforming how we experience internet.</p>
            <br>
            <button type="button" class="uppercase text-sm text-[#161616] font-bold bg-[#aaa9a3] px-8 py-3 rounded-sm hover:px-10 opacity-100 hover:opacity-80 transform-all duration-300">View my work</button>
        </div>
    </section>
    <aside class="w-screen mb-48 py-16 bg-black bg-opacity-30">
        <h2 class="text-4xl text-center light-prose">A few brands I've worked with</h2>
        <br>
        <div class="flex justify-center items-center gap-10">
            <img src="/brands/avril.png" class="h-[80px] grayscale opacity-60" />
            <img src="/brands/beaulieucanada.png" class="h-[80px] invert grayscale opacity-60" />
            <img src="/brands/clariprod.png" class="h-[80px] grayscale opacity-60" />
            <img src="/brands/senspublic.png" class="h-[80px] invert grayscale opacity-60" />
            <img src="/brands/diyrobotics.png" class="h-[80px] grayscale opacity-60" />
        </div>
    </aside>
    <section class="min-h-screen mx-40 grid justify-center items-center gap-y-10">
        <h2 class="text-4xl light-prose">Some of my work</h2>
        <article class="bg-white rounded-sm relative px-5">
            <video class="w-screen mx-auto max-h-[400px]" loop autoplay muted>
                <source src="/animation.mov" type="video/mp4">
            </video>
            <div class="absolute left-5 top-5 flex items-center gap-3 leading-none mb-6">
                <span class="w-[60px] h-[60px] flex items-center rounded-2xl bg-[#161616]"><img src="/icons/diyrobotics.png" class="h-[40px] w-fit mx-auto grayscale" /></span>
                <p class="leading-none dark-prose"><strong class="leading-none font-semibold">DIY Robotics</strong><br class="leading-none">Webmaster</p>
            </div>
            <p class="absolute top-1/3 w-1/3 leading-none">
                <span class="block text-2xl dark-prose font-medium leading-none mb-4">Where 3D animation meets web development and design.</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">JAVASCRIPT</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">CPANEL</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">HTML</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">CSS</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">JQUERY</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">PHP</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">WORDPRESS</span>
            </p>
        </article>
        <article class="bg-black bg-opacity-30 rounded-sm relative px-5 overflow-hidden">
            <img class="w-fit relative ml-auto max-h-[398px] rounded-md" src="/responsive.png" />
            <img class="absolute top-0 left-[100px] opacity-10 max-h-[398px] rotate-[-4deg] from-transparent" src="/website.png" />
            <div class="absolute left-5 top-5 flex items-center gap-3 leading-none mb-6">
                <span class="w-[60px] h-[60px] flex items-center rounded-2xl bg-[#161616]"><img src="/icons/beaulieucanada.png" class="h-[40px] w-fit mx-auto grayscale" /></span>
                <p class="leading-none light-prose"><strong class="light-prose leading-none font-semibold">Beaulieu Canada</strong><br class="leading-none">UX, Frontend developer</p>
            </div>
            <p class="absolute top-1/3 w-1/3 leading-none">
                <span class="block text-2xl light-prose font-medium leading-none mb-4">Build responsive and cross browser efficient website.</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">NUXT.JS</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">JAVASCRIPT</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">VUE</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">HTML</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">CSS</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">TAILWIND</span>
                <span class="inline-block bg-emerald-300 w-fit text-white text-xs font-semibold me-2 px-2.5 pt-1.5 pb-1 mt-2 rounded-full">PRIMEVUE</span>
            </p>
        </article>
    </section>
    <section class="h-screen"></section>
</template>
