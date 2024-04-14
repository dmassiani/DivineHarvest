<script setup>

    import { useAppStore } from '~/stores/app'
    import { storeToRefs } from 'pinia'
    import _ from 'lodash'
    const appStore = useAppStore();
    const currentSemence = ref(null)
    const malusQuantity = ref(0);
    const malusQuality = ref(0);
    const malusGrow = ref(100);

    const { currentInvocations, season } = storeToRefs(appStore)
    let timer = null;

    const defineMalus = () => {
        let sumQuality = 0;
        let sumQuantity = 0;
        let grow = 0;
        currentInvocations.value.forEach((invocation) => {
            sumQuality += invocation[season.value].quality;
            sumQuantity += invocation[season.value].quantity;
            grow += invocation[season.value].grow;
        });
        // console.log('Sum of quality and quantity:', sum);
        malusQuality.value = sumQuality;
        malusQuantity.value = sumQuantity;
        // malusGrow est une moyenne de grow et du nombre d'invocations
        malusGrow.value = Math.round(grow / currentInvocations.value.length);
        appStore.malus = {
            quality: malusQuality.value,
            quantity: malusQuantity.value,
            grow: malusGrow.value
        }
    };


    // ##########################################
    // NOUVELLE INCANTATION
    // ##########################################
    watch(() => currentInvocations, (newInvocations) => {
        defineMalus();
        if(currentSemence.value !== null){
            if (timer !== null) {
                clearInterval(timer);
            }
            timer = setInterval(() => {
                // je fais pousser les semences
                semenceConfig.value.grow++
            }, 100 + (malusGrow.value * 5))
        }
    }, { deep: true })

    // ##########################################
    // CHANGEMENT DE SAISON
    // ##########################################
    watch(() => season, (newSeason) => {
        defineMalus();
    }, { deep: true })

    const semenceConfig = ref({
        quality: 0,
        quantity: 0,
        grow: 0
    })

    const recolte = () => {
        const semenceCloned = _.cloneDeep(semenceConfig.value)
        const gain = semenceCloned.quality * semenceCloned.quantity * semenceCloned.grow
        appStore.tunes += gain
        // je créé un event pour dire au jeu que j'ai récolté
        useNuxtApp().callHook("app:recolte", gain)
    }

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

        semenceConfig.value.quality = currentSemence.value[season.value].quality + malusQuality.value
        semenceConfig.value.quantity = currentSemence.value[season.value].quantity
        // semenceConfig.value.quantity = _.random(10, 60) + malusQuantity.value

        timer = setInterval(() => {
            // je fais pousser les semences
            semenceConfig.value.grow++
        }, 100 + (malusGrow.value * 5))

    }


</script>
<template>
    <div @click="clickOnGarden" class="h-32 bg-white rounded-lg">
        {{ currentSemence?.name }}
        <div>
            <div>Quality: {{ semenceConfig.quality }}</div>
            <div>Quantity: {{ semenceConfig.quantity }}</div>
            <div>Growing: {{ semenceConfig.grow }}</div>
        </div>
    </div>
</template>