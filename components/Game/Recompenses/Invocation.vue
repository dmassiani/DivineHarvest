<script setup>
const { $anime } = useNuxtApp()

onMounted(() => {
    console.log('mounted')
    $anime({ targets: '.invocation', translateX: 250, duration: 800 })
})

</script>
<template>
    <div class="invocation">
        invocation
    </div>
</template>