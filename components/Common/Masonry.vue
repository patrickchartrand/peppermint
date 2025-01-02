<template>
    <div class="text-stone-800">
        <div class="grid-wrapper">
            <div class="relative !overflow-hidden w-full h-full p-3 bg-amber-50 flex flex-col !justify-between gap-10" @click="navigateTo('https://beaulieucanada.com', { external: true, open: { target: '_blank' } })">
                <div class="w-full flex justify-between">
                    <span class="font-medium text-2xl">Beaulieu Canada</span>
                    <span class="font-medium text-2xl text-right">2025</span>
                </div>
                <div class="url h-fit w-full leading-[0.75] tracking-wide text-7xl font-light break-words">
                    beaulieucanada.com
                </div>
                <div class="badges w-full flex flex-wrap-reverse gap-1.5">
                    <Badge :text="'Nuxt.JS'" />
                    <Badge :text="'Vue'" />
                    <Badge :text="'Tailwind'" />
                    <Badge :text="'Primevue'" />
                    <Badge :text="'Javascript'" />
                </div>
            </div>
            <div class="relative !overflow-hidden w-full h-full p-3 bg-teal-200 flex flex-col !justify-between gap-10" @click="navigateTo('https://diy-robotics.com', { external: true, open: { target: '_blank' } })">
                <div class="w-full flex justify-between">
                    <span class="font-medium text-2xl">DIY Robotics</span>
                    <span class="font-medium text-2xl text-right">2024</span>
                </div>
                <div class="url h-fit w-full leading-[0.75] tracking-wide text-7xl font-light break-words">
                    diy-robotics.com
                </div>
                <div class="badges w-full flex flex-wrap-reverse gap-1.5">
                    <Badge :text="'Wordpress'" />
                    <Badge :text="'PHP'" />
                    <Badge :text="'SQL'" />
                    <Badge :text="'JQuery'" />
                    <Badge :text="'Woocommerce'" />
                </div>
            </div>
            <div class="tall relative !overflow-hidden w-full h-full p-3 bg-teal-600 flex flex-col !justify-between gap-10" @click="navigateTo('https://clariprod.com', { external: true, open: { target: '_blank' } })">
                <div class="w-full flex justify-between">
                    <span class="font-medium text-2xl">Clariprod</span>
                    <span class="font-medium text-2xl text-right">2024</span>
                </div>
                <div class="url h-fit w-full leading-[0.75] tracking-wide text-7xl font-light break-words">
                    clariprod.com
                </div>
                <div class="badges w-full flex flex-wrap-reverse gap-1.5">
                    <Badge :text="'Wordpress'" />
                    <Badge :text="'Jquery'" />
                    <Badge :text="'CSS'" />
                </div>
            </div>
            <div class="tall relative !overflow-hidden w-full h-full p-3 bg-teal-600 flex flex-col !justify-between gap-10" @click="navigateTo('https://sens-public.org', { external: true, open: { target: '_blank' } })">
                <div class="w-full flex justify-between">
                    <span class="font-medium text-2xl">Sens Public</span>
                    <span class="font-medium text-2xl text-right">2020</span>
                </div>
                <div class="url h-fit w-full leading-[0.75] tracking-wide text-7xl font-light break-words">
                    sens-public.org
                </div>
                <div class="badges w-full flex flex-wrap-reverse gap-1.5">
                    <Badge :text="'XML'" />
                    <Badge :text="'Markdown'" />
                    <Badge :text="'CSS'" />
                    <Badge :text="'HTML'" />
                </div>
            </div>
            <div class="relative !overflow-hidden w-full h-full p-3 bg-amber-50 flex flex-col !justify-between gap-10" @click="navigateTo('https://cfmrobotique.com', { external: true, open: { target: '_blank' } })">
                <div class="w-full flex justify-between">
                    <span class="font-medium text-2xl">CFM Robotique</span>
                    <span class="font-medium text-2xl text-right">2024</span>
                </div>
                <div class="url h-fit w-full leading-[0.75] tracking-wide text-7xl font-light break-words">
                    cfmrobotique.com
                </div>
                <div class="badges w-full flex flex-wrap-reverse gap-1.5">
                    <Badge :text="'Wordpress'" />
                    <Badge :text="'Jquery'" />
                </div>
            </div>
            <div class="wide relative !overflow-hidden w-full h-full p-3 bg-teal-200 flex flex-col !justify-between gap-10" @click="navigateTo('https://avril.ca', { external: true, open: { target: '_blank' } })">
                <div class="w-full flex justify-between">
                    <span class="font-medium text-2xl">Avril &mdash; Supermarché Santé</span>
                    <span class="font-medium text-2xl text-right">2021</span>
                </div>
                <div class="url h-fit w-full leading-[0.75] tracking-wide text-7xl font-light break-words">
                    avril.ca
                </div>
                <div class="badges w-full flex flex-wrap-reverse gap-1.5">
                    <Badge :text="'Magento'" />
                    <Badge :text="'HTML'" />
                    <Badge :text="'CSS'" />
                    <Badge :text="'SEO'" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid-wrapper div {
    border-radius: 0.375rem;
    overflow: visible;
}
.grid-wrapper span {
    transition: transform .4s;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    display: inline-block;
}
.grid-wrapper div:hover span {
    transform: scale(1.05);
}
.grid-wrapper > div {
    display: flex;
    justify-content: center;
    align-items: center;
}
.grid-wrapper > div > span {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}    
.grid-wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-auto-rows: 250px;
    grid-auto-flow: dense;
}
.grid-wrapper .wide {
    grid-column: span 1;
}
.grid-wrapper .tall {
    grid-row: span 1;
}
.grid-wrapper .big {
    grid-column: span 1;
    grid-row: span 1;
}
@media (min-width: 768px) { 
    .grid-wrapper {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-auto-rows: 300px;
        grid-auto-flow: dense;
    }
    .grid-wrapper .wide {
        grid-column: span 2;
    }
    .grid-wrapper .tall {
        grid-row: span 2;
    }
    .grid-wrapper .big {
        grid-column: span 2;
        grid-row: span 2;
    }
}
.grid-wrapper > div:hover {
    cursor: url('../../assets/images/link.png') 32 32, auto;
}
.grid-wrapper > div .badges {
    position: relative;
    bottom: 0;
    animation: showBadges 1s forwards; 
}
.grid-wrapper > div .url {
    position: absolute;
    bottom: -250px;
    transform: rotate(-15deg);
    animation: hideUrl 1s forwards;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
}
@keyframes hideBadges {
    0% {
        bottom: 0;
    }
    100% {
        bottom: -100px;
    }
}
@keyframes showUrl {
    0% {
        bottom: -250px;
        transform: rotate(-15deg);
    }
    50% {
        bottom: 0.50rem;
        transform: rotate(0deg);
    }
    100% {
        bottom: 0.75rem;
        transform: rotate(0deg);
    }
}
.grid-wrapper > div:hover .badges {
    animation: hideBadges 1s forwards;
}
.grid-wrapper > div:hover .url {
    animation: showUrl 1s 0.5s forwards; 
}
@keyframes showBadges {
    0% {
        bottom: -100px;
    }
    100% {
        bottom: 0;
    }
}
@keyframes hideUrl {
    0% {
        bottom: 0.75rem;
        transform: rotate(0deg);
    }
    100% {
        bottom: -250px;
        transform: rotate(-15deg);
    }
}
</style>