<script setup lang="ts">
const mail = useMail()

const name = ref<string>('')
const email = ref<string>('')
const content = ref<string>('')

const status = reactive<Record<string, null | boolean>>({ value: null })

function solveCurrentStatus(e: boolean | null) {
    status.value = e
}

function onSubmit() {
    try {
        mail.send({
            from: '',
            subject: `${name.value} | ${email.value}`,
            text: `${content.value}`,
        })
        
        status.value = true
        name.value = ''
        email.value = ''
        content.value = ''
    } catch (err) {
        status.value = false
    } finally {
        setTimeout(() => status.value = null, 3000)
    }
}
</script>

<template>
    <CommonToasts :status="status" @update:status="solveCurrentStatus($event)" />
    <form class="max-w-2xl mx-auto mt-10" @submit.prevent="onSubmit()">
        <input v-model="name" type="text" id="name" class="bg-stone-100 border border-stone-300 prose-dark-bright !text-stone-900 text-lg lg:text-xl pb-4 pt-5 rounded-md placeholder:text-stone-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5" placeholder="Your name..." required />
        <input v-model="email" type="email" id="email" class="bg-stone-100 border border-stone-300 prose-dark-bright !text-stone-900 text-lg lg:text-xl pb-4 pt-5 rounded-md placeholder:text-stone-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5" placeholder="Your email..." required />
        <textarea v-model="content" id="message" rows="10" class="block p-2.5 mb-5 w-full border-stone-300 prose-dark-bright !text-stone-900 text-lg lg:text-xl pb-4 pt-5 bg-stone-100 rounded-md border placeholder:text-stone-700 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>        
        <CommonButton class="w-full" :isDark="false" :type="'submit'">
            <template #label>
                Send Message
            </template>
        </CommonButton>
    </form>
</template>