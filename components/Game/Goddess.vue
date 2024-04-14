<script setup>

  import _ from 'lodash'
  import { useAppStore } from '~/stores/app'
  const appStore = useAppStore();
  const season = ref(appStore.season); // Make appStore.season reactive
  appStore.goddessInvocations = appStore.invocations.filter(invocation => invocation.goddess);
  const goddessInvocations = ref([])

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
    <div class="flex-none w-3/12 h-full bg-green-100 pt-12">
        <div class="flex flex-col items-center justify-center">
            <img src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png" class="w-32 h-32 rounded-full" alt="goddess">
            <h1 class="text-2xl font-bold">Goddess</h1>
        </div>
        <div class="relative mt-12 flex ml-12">
          <GameInvocation v-for="(invocation, index) in goddessInvocations" :invocation="invocation" class="-mr-20" />
        </div>
        <!-- tricks for tailwind -->
        <div class="left-32 left-24 left-16"></div>
    </div>
</template>