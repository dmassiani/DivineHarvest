<script setup>

  import _ from 'lodash'
  import { useAppStore } from '~/stores/app'
  const appStore = useAppStore();
  const season = ref(appStore.season); // Make appStore.season reactive
  appStore.goddessInvocations = appStore.invocations.filter(invocation => invocation.goddess);
  const goddessInvocations = ref([])
  const dialogueDisplay = ref('');
  // j'ai besoin d'un interval qui va chercher un dialogue dan qsl'appstore de manière random
  // je vais chercher un dialogue toutes les 6 secondes
  onMounted(() => {
    setInterval(() => {
      dialogueDisplay.value = '';
      setTimeout(() => {
        dialogueDisplay.value = _.sample(appStore.dialogs)
      }, 10000)
    }, 18000)
  })

  onMounted(() => {
    goddessInvocations.value = _.sampleSize(appStore.goddessInvocations, 3);
  })

  watch(() => appStore.season, (newSeason) => {
    season.value = newSeason;
  })

  const invocation = () => {

    appStore.currentInvocations.push(goddessInvocations.value[goddessInvocations.value.length - 1]);

    // je supprime la dernière invocation
    goddessInvocations.value.pop()
    goddessInvocations.value.unshift(_.sample(appStore.goddessInvocations));

    clearInterval(timer);
    timer = setInterval(() => {
      invocation();
    }, _.random(6000, 60000));
  };

  let timer = null;
  onMounted(() => {
    timer = setInterval(() => {
      invocation()
    }, 6000)
  })

</script>
<template>
    <div class="flex-none w-3/12 h-full bg-stone-600 pt-12">
        <div class="flex flex-col items-center justify-center">
            <img src="/divineharvest.png" class="w-60 h-60 border-8 border-emerald-600 rounded-full" alt="goddess">
            <h1 class="text-2xl font-bold text-white">Divine Harvest</h1>
            <p class="text-stone-400 p-6">{{ dialogueDisplay }}</p>
        </div>
        <div class="relative mt-12 flex ml-12">
          <GameInvocation v-for="(invocation, index) in goddessInvocations" :invocation="invocation" class="-mr-20" />
        </div>
        <!-- tricks for tailwind -->
        <div class="left-32 left-24 left-16"></div>
    </div>
</template>