<template>
    <form class="max-w-2xl mx-auto mt-10">
        <input type="text" id="name" class="bg-stone-100 border border-stone-300 prose-dark-bright !text-stone-900 text-xl pb-4 pt-5 rounded-md placeholder:text-stone-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5" placeholder="Your name..." required />
        <input type="email" id="email" class="bg-stone-100 border border-stone-300 prose-dark-bright !text-stone-900 text-xl pb-4 pt-5 rounded-md placeholder:text-stone-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5" placeholder="Your email..." required />
        <textarea id="message" rows="10" class="block p-2.5 mb-5 w-full border-stone-300 prose-dark-bright !text-stone-900 text-xl pb-4 pt-5 bg-stone-100 rounded-md border placeholder:text-stone-700 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>        
        <CommonButton class="w-full" :isDark="false">
            <template #label>
                Send Message
            </template>
        </CommonButton>
    </form>
</template>