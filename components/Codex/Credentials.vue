<script setup lang="ts">
const credentials = ['work', 'education']
</script>

<template>
    <div>
        <h2 class="text-5xl text-center font-bold">More of my credentials.</h2>
        <Separator />
        <div class="w-3/5 my-10 mx-auto grid justify-center items-center">
            <h4 class="my-10 text-center text-xl font-bold uppercase">Work Experience</h4>
            <Timeline :type="credentials[0]" />
            <h4 class="my-10 text-center text-xl font-bold uppercase">Education</h4>
            <Timeline :type="credentials[1]" />
        </div>
    </div>
</template>