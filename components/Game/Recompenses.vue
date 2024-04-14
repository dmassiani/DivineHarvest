<script setup>

    import _ from 'lodash'
    import { useAppStore } from '~/stores/app'
    const appStore = useAppStore();

    // j'ai besoin d'un set random de semences
    const semencesTmp = _.sampleSize(appStore.getSemences, 4)
    semencesTmp.forEach(semence => {
        semence.spring = {
        quantity: _.random(1, 10),
        quality: _.random(1, 10)
        }
        semence.summer = {
        quantity: _.random(1, 10),
        quality: _.random(1, 10)
        }
        semence.autumn = {
        quantity: _.random(1, 10),
        quality: _.random(1, 10)
        }
        semence.winter = {
        quantity: _.random(1, 10),
        quality: _.random(1, 10)
        }
        semence.price = _.random(1, 10)
    })
    const semences = ref(null)

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
        semences.value = semencesTmp
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
    <div class="absolute bottom-0 h-4 w-full left-0">
        <GameRecompensesSemence v-for="(semence, index) in semences" :semence="semence" :index="index" />
    </div>
</template>