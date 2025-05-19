<script setup lang="ts">
const mail = useMail()

const name = ref<string>('')
const email = ref<string>('')
const content = ref<string>('')
const isChecked = ref<boolean>(false)

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
        <input v-model="name" type="text" id="name" class="bg-stone-100 border border-stone-300 prose-dark-bright !text-stone-900 text-lg lg:text-xl pb-4 pt-5 rounded-md placeholder:text-stone-700 focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5 mb-5" placeholder="Your name..." required />
        <input v-model="email" type="email" id="email" class="bg-stone-100 border border-stone-300 prose-dark-bright !text-stone-900 text-lg lg:text-xl pb-4 pt-5 rounded-md placeholder:text-stone-700 focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5 mb-5" placeholder="Your email..." required />
        <textarea v-model="content" id="message" rows="10" class="block p-2.5 mb-5 w-full border-stone-300 prose-dark-bright !text-stone-900 text-lg lg:text-xl pb-4 pt-5 bg-stone-100 rounded-md border placeholder:text-stone-700 focus:ring-stone-500 focus:border-stone-500" placeholder="Leave a comment..."></textarea>        
        <label for="checkbox" class="lg:flex items-center gap-1 text-sm font-medium text-stone-100">
            <input v-model="isChecked" checked id="checkbox" type="checkbox" class="w-4 h-4 lg:-mt-1 mr-1 accent-teal-200 text-stone-950 bg-stone-100 border-stone-300 rounded-sm focus:ring-stone-500 focus:ring-2">
            I consent to the use of my personal information in accordance with the <a href="/privacy-policy" class="text-rose-300" style="font-weight: inherit; letter-spacing: inherit; font-family: inherit;">Privacy Policy<b class="text-stone-100">.</b></a>
        </label>
        <CommonButton class="w-full mt-4" :isDark="false" :type="'submit'" :disabled="!isChecked">
            <template #label>
                Send Message
            </template>
        </CommonButton>
    </form>
</template>