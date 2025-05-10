<template>
    <div class="max-w-sm bg-stone-800 rounded-lg shadow-sm group overflow-hidden cursor-pointer">
        <slot name="image" />
        <div class="p-5">
            <slot name="text" />
        </div>
    </div>
</template>