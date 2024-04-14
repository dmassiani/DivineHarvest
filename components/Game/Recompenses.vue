<script setup>

    import _ from 'lodash'
    import { useAppStore } from '~/stores/app'
    const appStore = useAppStore();
    const { season } = storeToRefs(appStore)

    // j'ai besoin d'un set random de semences
    const semencesTmp = _.sampleSize(appStore.getSemences, 2)
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

    const playerInvocations = ref(_.sampleSize(appStore.invocations.filter(invocation => !invocation.goddess), 2))

    const gain = ref(null)
    useNuxtApp().hooks.hook('app:recolte', (message) => {
        gain.value = message;
        setTimeout(() => {
            popSemences();
            setTimeout(() => {
                popInvocations();
                setTimeout(() => {
                    popTunes();
                }, 2000);
            }, 2000);
        }, 2000);
        // je gagne de nouvelles invocations
        // je gagne de nouvelles semences
        // je gagne de la thune

    });

    const popSemences = () => {
        const newSemencesTmp = _.sampleSize(appStore.getSemences, 2)
        newSemencesTmp.forEach(semence => {
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
        for (let i = 0; i < newSemencesTmp.length; i++) {
            setTimeout(() => {
                useSonner('New seed', {
                    duration: 2000,
                    description: `${newSemencesTmp[i][season.value].quantity} ${newSemencesTmp[i].name}`, 
                })
            }, 400 * i)
            appStore.playerSemences.push(newSemencesTmp[i])
        }
    }
    
    const popInvocations = () => {
        // je pop des invocations
        const newPlayerInvocations = ref(_.sampleSize(appStore.invocations.filter(invocation => !invocation.goddess), 2))

        for (let i = 0; i < newPlayerInvocations.value.length; i++) {
            setTimeout(() => {
                useSonner('New invocation', {
                    duration: 2000,
                    description: `${newPlayerInvocations.value[i].name}`, 
                })
            }, 400 * i)
            appStore.playerInvocations.push(newPlayerInvocations.value[i])
        }
    }

    const popTunes = () => {
        // je pop la thune
        useSonner('New money', {
            duration: 2000,
            description: `$${Math.round(gain.value/10)}`, 
        })
    }

</script>

<template>
    <div class="absolute bottom-0 h-4 w-full left-0">
        <GameRecompensesSemence v-for="(semence, index) in semences" :semence="semence" :index="index" />
    </div>
</template>