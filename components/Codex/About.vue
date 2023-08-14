<script setup lang="ts">
import { useStore } from '@/store'
const store = useStore()
</script>

<template>
    <div>
        <h2 class="text-5xl text-center font-bold">Let me introduce myself.</h2>
        <Separator />
        <div class="w-3/5 my-10 mx-auto grid grid-cols-3 justify-center items-center">
            <img class="w-56 rounded-full" :src="`${store.website}/images/profil.png`" />
            <div class="col-span-2">
                I have a diverse set of skills from design to Semantic and well structured HTML + reasonable and efficient CSS along with Sass, BEM and 7 - 1 pattern for scss organization + JS (ES6 - ESX, ESLint for linting JS, Babel for transpiling)+ React ( for building complex UIs ) + Redux ( for state management ) + module bundlers like Webpack and Parcel. I love things that are open source I use VS Code as my editor and Ubuntu as My operating system. 
            </div>
        </div>
        <div class="w-3/5 mx-auto grid grid-cols-2">
            <div>
                <h3 class="my-10 text-3xl font-bold">Profil</h3>
                <Infos />
            </div>
            <div>
                <h3 class="my-10 text-3xl font-bold">Skills</h3>
                <Levels />
            </div>
        </div>
        <div class="flex justify-center">
            <a href="http://localhost:3000/images/background.png" download>
                <button type="button" class="w-fit py-2.5 px-10 mt-10 mb-2 text-md text-[#303030] font-bold bg-transparent rounded-lg border-2 border-[#303030] hover:bg-[#303030] hover:text-[#f4f4f4] focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200">DOWNLOAD CV</button> 
            </a>
        </div>
    </div>
</template>