<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const isScrolled = ref<boolean>(false)
const sections = ref<any>([
  { title: 'HTML5 & XML', targetNumber: 9, isLoaded: false, width: 0, currentNumber: 0 },
  { title: 'CSS3, Bootstrap & Tailwind', targetNumber: 9, isLoaded: false, width: 0, currentNumber: 0 },
  { title: 'JavaScript & JQuery', targetNumber: 8, isLoaded: false, width: 0, currentNumber: 0 },
  { title: 'Node.JS, Vue, Nuxt.JS', targetNumber: 8, isLoaded: false, width: 0, currentNumber: 0 },
  { title: 'PHP & SQL', targetNumber: 5, isLoaded: false, width: 0, currentNumber: 0 },
  { title: 'Wordpress & Magento', targetNumber: 8, isLoaded: false, width: 0, currentNumber: 0 },
  { title: 'Sentry, cPanel & Portainer', targetNumber: 6, isLoaded: false, width: 0, currentNumber: 0 },
  { title: 'Microsoft Office suite, Atom & VS Code', targetNumber: 10, isLoaded: false, width: 0, currentNumber: 0 },
  { title: 'Blender & Autodesk 3ds Max', targetNumber: 10, isLoaded: false, width: 0, currentNumber: 0 },
])

const { y } = useWindowScroll();

watch(y, (val) => {
  if (val > 666) {
    isScrolled.value = true;
  }
});

watch(isScrolled, (val) => {
    if (val === true) {
        sections.value.forEach((section: any) => {
            section.isLoaded = true;
            animateNumber(section);
        });
    }
})

function animateNumber(section: any) {
  const animationDuration = 3000;
  const interval = animationDuration / (section.targetNumber + 1);

  let currentValue = 0;

  const numberAnimation = setInterval(() => {
    if (currentValue <= section.targetNumber) {
      section.currentNumber = currentValue;
      currentValue++;
      section.width = section.targetNumber * 10;
    } else {
      clearInterval(numberAnimation);
    }
  }, interval);
}
</script>

<template>
    <div>
        <dl v-for="(section, index) in sections" :key="index">
            <dt class="text-sm font-medium">{{ section.title }}</dt>
            <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 mr-2">
                    <div class="bg-[#303030] h-2.5 rounded transition-all duration-[3000ms]" :style="section.isLoaded ? `width: ${section.width}%` : 'width: 0%;'" />
                </div>
                <span class="text-sm font-medium">{{ section.currentNumber }}</span>
            </dd>
        </dl>
    </div>
</template>
