<script setup lang="ts">
const slides = [
  { 
    titles: ['Web Development', 'UX/UI Design'], 
    descriptions: ['I hold a strong appreciation for robust data architecture, efficient server logic, and secure communication protocols. I thrive on crafting intricate databases and seamless API integrations, all while prioritizing scalability and data integrity. Just as a composer meticulously arranges notes to create a symphony, I meticulously piece together code to orchestrate the harmony of a dynamic and reliable web experience.', 'My approach is guided by a passion for crafting meaningful user experiences, visually stunning interfaces, and intuitive interactions. I believe in the power of empathy-driven design, where every pixel and interaction serves a purpose in enhancing user satisfaction. I thrive on translating complex ideas into elegant and accessible designs, ensuring that aesthetics merge seamlessly with functionality.'], 
    icons: ['<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>'] 
  },
  { 
    titles: ['Multimedia Creation', 'Writing & Editing'], 
    descriptions: ['I embrace the role of a digital artisan, molding pixels, sounds, and interactions into experiences that transcend the screen. Like a conductor orchestrating a symphony, I harmonize visual and auditory elements to create a captivating narrative. I thrive on exploring the intersections of mediums, crafting immersive journeys that spark curiosity and emotion.', 'I discover a profound connection with words, a passion for refining ideas, and a commitment to crafting compelling narratives. It is translated by choosing every word to convey meaning and evoke emotions and thriving on the process of transforming rough drafts into polished gems, meticulously shaping content for clarity, coherence, and resonance.'], 
    icons: ['<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>'] 
  },
]
</script>

<template>
    <NuxtCarousel class="my-20">
      <NuxtSlide v-for="(slide, index) in slides" :key="index">
        <div class="flex gap-6">
          <div class="carousel__item">
            <div class="flex justify-center" :innerHTML="slide.icons[0]" />
            <h4 class="text-lg font-bold text-white">{{ slide.titles[0] }}</h4>
            <p class="text-left">{{ slide.descriptions[0] }}</p>
          </div>
          <div class="carousel__item">
            <div class="flex justify-center" :innerHTML="slide.icons[1]" />
            <h4 class="text-lg font-bold text-white">{{ slide.titles[1] }}</h4>
            <p class="text-left">{{ slide.descriptions[1] }}</p>
          </div>
        </div>
      </NuxtSlide>
  
      <template #addons>
        <NuxtPagination />
      </template>
    </NuxtCarousel>
  </template>
  
  <style>
  .carousel__item {
    background-color: #303030;
    color: white;
    height: 350px;
    width: 500px;
    padding: 20px;
    border-radius: 8px;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .carousel__pagination-button::after {
    background-color: #e5e7eb;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    margin: 2px;
  }

  .carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
    background-color: #303030;
  }
  
  .carousel__slide {
    padding: 10px;
  }
  </style>
