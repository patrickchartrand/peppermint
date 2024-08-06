<script setup lang="ts">
</script>

<template>
    <main class="w-screen h-screen">
      <slot />
    </main>
</template>

<style>
body {
  background-image: url('../assets/images/background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

section {
  backdrop-filter: blur(16px);

}
</style>