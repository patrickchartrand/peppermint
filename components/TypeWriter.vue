<script setup lang="ts">
const props = defineProps(['writing'])

const element = ref<HTMLElement | null>(null)

const properties = reactive({
    speed: 30,
    index: 0,
    currentIndex: 0,
})

onMounted(() => {
    writeText()
})

function writeText() {
    let currentString = props.writing[properties.currentIndex]

    if (element.value && properties.index < currentString.length) {
        element.value.innerHTML += currentString.charAt(properties.index)
        properties.index++
        setTimeout(writeText, properties.speed)
    } else {
        setTimeout(clearText, 3000)
    }
}

function clearText() {
    let currentText = element.value?.innerHTML

    if (element.value && (currentText && currentText.length > 0)) {
        currentText = currentText.slice(0, -1)
        element.value.innerHTML = currentText
        setTimeout(clearText, properties.speed)
    } else {
        properties.index = 0
        properties.currentIndex = (properties.currentIndex + 1) % props.writing.length
        setTimeout(writeText, properties.speed)
    }
}
</script>

<template>
    <div ref="element" />
</template>

<style scoped>
div {
    width: 100%;
    min-height: 44px;
    widows: fit-content;
    /* border-right: .05em solid #fff; */
    white-space: normal;
    /* letter-spacing: .15em; */
    line-height: 1;
    margin-left: -2.65em;
    text-indent: 2.65em;
    font-weight: 500;
}

div::after {
    content: "|";
    color: #fff /*rgb(68 64 60)*/;
    animation: blink-caret .75s step-end infinite;
}

@keyframes blink-caret {
  from, to { color: transparent }
  50% { color: #fff /*rgb(68 64 60)*/; }
}
</style>