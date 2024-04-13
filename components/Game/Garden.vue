<script setup>

    import { useAppStore } from '~/stores/app'
    import { storeToRefs } from 'pinia'
    import _ from 'lodash'
    const appStore = useAppStore();
    const currentSemence = ref(null)
    const season = ref(appStore.season)

    watch(() => appStore.season, (newSeason) => {
        season.value = newSeason
    })

    const { currentInvocations } = storeToRefs(appStore)

    watch(() => currentInvocations, (newInvocations) => {
        console.log('new invocations', newInvocations)
    })

    const semenceConfig = ref({
        quality: 0,
        quantity: 0,
        grow: 0
    })

    const recolte = () => {
        const semenceCloned = _.cloneDeep(semenceConfig.value)
        const gain = semenceCloned.quality * semenceCloned.quantity * semenceCloned.grow
        appStore.tunes += gain
    }

    let timer = null;
    const clickOnGarden = () => {

        // je relance un setinterval de pousse
        if (timer !== null) {
            clearInterval(timer);
        }

        if (currentSemence.value !== null) {
            // s'il y a une semence en cours de pousse
            recolte()
            currentSemence.value = null
        }
          
        semenceConfig.value = {
            quality: 0,
            quantity: 0,
            grow: 0
        }

        if(appStore.selectedSemence === null){
            return
        }
        currentSemence.value = appStore.selectedSemence
        appStore.selectedSemence = null

        semenceConfig.value.quality = currentSemence.value[season.value].quality
        semenceConfig.value.quantity = currentSemence.value[season.value].quantity

        timer = setInterval(() => {
            // je fais pousser les semences
            semenceConfig.value.grow++
        }, 100)

    }

    // Je dois définir le temps de poussée de la semence
    // je défini sa qualité
    // je défini sa quantité
    // la quantité est variable entre un spectre défini par la saison


</script>
<template>
    <div @click="clickOnGarden" class="h-48 bg-white rounded-lg">
        {{ currentSemence?.name }}
        <div>
            <div>Quality: {{ semenceConfig.quality }}</div>
            <div>Quantity: {{ semenceConfig.quantity }}</div>
            <div>Growing: {{ semenceConfig.grow }}</div>
        </div>
    </div>
</template>