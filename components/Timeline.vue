<script setup lang="ts">
const props = defineProps({
    type: String
})
</script>

<template>
    <div class="w-4/5 ml-auto">
        <ol v-if="props.type === 'work'" class="relative border-l border-[#303030]">   
            <li class="mb-10 ml-8">
                <div class="flex justify-center items-center absolute w-12 h-12 bg-[#303030] rounded-full mt-6 -left-6 border border-[#303030]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">September 2022 - Now</time>
                <h3 class="text-lg font-semibold text-gray-900">Frontend Web Developer at Beaulieu Canada</h3>
                <p class="mb-4 text-base font-normal text-gray-500">Using Vue.js and Nuxt.js, I shaped captivating online experiences that adapt seamlessly to all devices. From elegant product showcases to lightning-fast applications, I blended aesthetics and functionality to amplify Beaulieu Canada's brand impact.</p>
            </li>               
            <li class="mb-10 ml-8">
                <div class="flex justify-center items-center absolute w-12 h-12 bg-[#303030] rounded-full mt-6 -left-6 border border-[#303030]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                </div>                
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">September 2021 - Now</time>
                <h3 class="text-lg font-semibold text-gray-900">Webmaster at DIY Robotics</h3>
                <p class="mb-4 text-base font-normal text-gray-500">Meticulously crafted on the robust WordPress platform and seamlessly hosted through cPanel, boasts a comprehensive array of over 20+ pages and dynamic applications.</p>
            </li>
            <li class="mb-10 ml-8">
                <div class="flex justify-center items-center absolute w-12 h-12 bg-[#303030] rounded-full mt-6 -left-6 border border-[#303030]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">March 2021 - September 2021</time>
                <h3 class="text-lg font-semibold text-gray-900">Web Editor at Avril supermarché santé</h3>
                <p class="text-base font-normal text-gray-500">Through my words, I infused life into their online presence (product card & blog), curating content that captures our essence, and created the famed slogan: "<i>qui inspire, qui vivifie et qui ressource</i>".</p>
            </li>
            <li class="mb-10 ml-8">
                <div class="flex justify-center items-center absolute w-12 h-12 bg-[#303030] rounded-full mt-6 -left-6 border border-[#303030]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">January 2021 - May 2022</time>
                <h3 class="text-lg font-semibold text-gray-900">Teacher Assistant at University of Montreal</h3>
                <p class="text-base font-normal text-gray-500">My focus was on interactive learning and collaborative exploration of Hypothesis, an online reading and annotation application for researchers.</p>
            </li>
            <li class="mb-10 ml-8">
                <div class="flex justify-center items-center absolute w-12 h-12 bg-[#303030] rounded-full mt-6 -left-6 border border-[#303030]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">September 2017 - May 2020</time>
                <h3 class="text-lg font-semibold text-gray-900">Editorial and Digital Project Consultant at the Canada Research Chair on Digital Textualites</h3>
                <p class="text-base font-normal text-gray-500">Collaborating with researchers, I contributed to innovative digital initiatives that enriched scholarly pursuits. Through strategic editorial and digital approaches, I helped merge traditional and digital scholarship, shaping a vibrant academic realm.</p>
            </li>
            <li class="mb-10 ml-8">
                <div class="flex justify-center items-center absolute w-12 h-12 bg-[#303030] rounded-full mt-6 -left-6 border border-[#303030]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">September 2017 - May 2020</time>
                <h3 class="text-lg font-semibold text-gray-900">Editorial and Digital Project Consultant at the Canada Research Chair on Digital Textualites</h3>
                <p class="text-base font-normal text-gray-500">Collaborating with researchers, I contributed to innovative digital initiatives that enriched scholarly pursuits. Through strategic editorial and digital approaches, I helped merge traditional and digital scholarship, shaping a vibrant academic realm.</p>
            </li>
            <li class="mb-10 ml-8">
                <button type="button">See more</button>
            </li>
        </ol>
        <ol v-if="props.type === 'education'" class="relative border-l border-[#303030]">
            <li class="mb-10 ml-8">
                <div class="flex justify-center items-center absolute w-12 h-12 bg-[#303030] rounded-full mt-6 -left-6 border border-[#303030]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">September 2021 - December 2021</time>
                <h3 class="text-lg font-semibold text-gray-900">Formation in Wordpress Integration</h3>
                <p class="mb-4 text-base font-normal text-gray-500">At Cégep de Limoulou, I explored the world of WordPress integration. Through hands-on experience with programming languages such as JavaScript, I honed my skills in crafting web sites that effortlessly adapt to various devices, whether creating elegant product showcases or developing lightning-fast applications.</p>
            </li> 
            <li class="mb-10 ml-8">
                <div class="flex justify-center items-center absolute w-12 h-12 bg-[#303030] rounded-full mt-6 -left-6 border border-[#303030]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">September 2019 - August 2020</time>
                <h3 class="text-lg font-semibold text-gray-900">Certificate in Internet Programming</h3>
                <p class="mb-4 text-base font-normal text-gray-500">Pursuing a Certificate in Internet Programming at the University of Montreal, I delved headfirst into the intricate realm of web technologies, setting out to decode the language of the internet and master the art of crafting immersive online experiences.</p>
            </li> 
            <li class="mb-10 ml-8">
                <div class="flex justify-center items-center absolute w-12 h-12 bg-[#303030] rounded-full mt-6 -left-6 border border-[#303030]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">September 2019 - August 2020</time>
                <h3 class="text-lg font-semibold text-gray-900">Specialized Graduate Diploma in Digital Editing</h3>
                <p class="mb-4 text-base font-normal text-gray-500">My pursuit of a Specialized Graduate Diploma in Digital Editing at the University of Montreal empowered me with skills and knowledge of the web. Through the synergy of information sciences and creative design, I embarked on a transformative journey that reshaped my understanding of digital landscapes.</p>
            </li>    
            <li class="ml-8">
                <div class="flex justify-center items-center absolute w-12 h-12 bg-[#303030] rounded-full mt-6 -left-6 border border-[#303030]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                </div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">September 2015 - December 2018</time>
                <h3 class="text-lg font-semibold text-gray-900">Bachelor Degree in French Literature</h3>
                <p class="mb-4 text-base font-normal text-gray-500">During my journey to attain a Bachelor's Degree in French Literature at the University of Montreal, I ventured beyond the realm of literature by amalgamating semantics and web practicalities. This unique fusion allowed me to transcend traditional boundaries and explore the art of creating digital textualities.</p>
            </li> 
        </ol>
    </div>
</template>