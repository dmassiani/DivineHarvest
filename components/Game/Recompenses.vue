<script setup>

    const gain = ref(null)
    useNuxtApp().hooks.hook('app:recolte', (message) => {
        gain.value = message;
        setTimeout(() => {
            popSemences();
            setTimeout(() => {
                popInvocations();
                setTimeout(() => {
                    popTunes();
                }, 1000);
            }, 1000);
        }, 1000);
        // je gagne de nouvelles invocations
        // je gagne de nouvelles semences
        // je gagne de la thune

    });

    const popSemences = () => {
        // je pop des semences
        console.log('pop semences')
    }

    const popInvocations = () => {
        // je pop des invocations
        console.log('pop invocations')
    }

    const popTunes = () => {
        // je pop la thune
        console.log('pop tunes')
    }

</script>

<template>
    <div class="absolute bg-green-200 bottom-0 h-20 w-full left-0">
        récompenses {{ gain }}
    </div>
</template>