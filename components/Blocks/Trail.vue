<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const trail = ref<any>([])

const recordTrail = (x: number, y: number) => {
  trail.value.push({ x, y })
  if (trail.value.length > 20) {
    trail.value.shift()
  }
}

onMounted(() => {
  const onMouseMove = (event: MouseEvent) => {
    recordTrail(event.pageX, event.pageY)
  }
  window.addEventListener('mousemove', onMouseMove)
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
  })
})
</script>

<template>
  <div class="absolute w-screen h-screen">
    <div
      v-for="(point, index) in trail"
      :key="index"
      class="absolute w-20 h-20 rounded-full bg-blue-500 opacity-50"
      :style="`top: ${(point as any).y}px; left: ${(point as any).x}px; opacity: ${(trail.length - index) / trail.length}; transform: translate(-50%, -50%);`"
    />
  </div>
</template>

