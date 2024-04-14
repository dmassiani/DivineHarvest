<script setup>
import _ from 'lodash'
const { $anime } = useNuxtApp()
const props = defineProps({
    semence: Object,
    index: Number
})   
const played = ref(false)

onMounted(() => {

    const x = _.random(-100, 100)
    const y = _.random(-400, -250)
    const tl = $anime({ 
        targets: `.semence-${props.index}`, 
        loop: false,
        direction: 'normal',
        delay: _.random(100, 1000),
        easing: 'easeInOutQuad',
        duration: _.random(1000, 2000),
        keyframes: [
            {translateY: 100, translateX: x},
            {translateX: 500, translateY: y},
        ],
    })

})

</script>
<template>
    <div v-if="!played" :class="`semence-${props.index}`" class="bg-white rounded-lg w-60 h-40 p-6 shadow-xl">
        <h1 class="text-xl font-bold">
            {{ semence.name }}
        </h1>
    </div>
</template>