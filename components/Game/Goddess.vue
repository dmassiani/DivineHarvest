<script setup>

  import _ from 'lodash'
  import { useAppStore } from '~/stores/app'
  const appStore = useAppStore();
  const season = ref(appStore.season); // Make appStore.season reactive

  watch(() => appStore.season, (newSeason) => {
    season.value = newSeason;
  })

  const invocation = () => {
    const invocations = appStore.invocations;
    const goddessInvocations = _.filter(invocations, { 'goddess': true });
    const randomInvocation = _.sample(goddessInvocations);
    // Perform the invocation logic using randomInvocation
    // console.log('Random Invocation', randomInvocation, season.value, randomInvocation[season.value])
    // const goddessInvocation = randomInvocation[season.value];
    console.log('new invocation');
    // Update the appStore
    appStore.currentInvocations.push(randomInvocation);

    clearInterval(timer);
    timer = setInterval(() => {
      invocation();
    }, _.random(3000, 20000));
  };

  let timer = null;
  onMounted(() => {
    timer = setInterval(() => {
      invocation()
    }, 6000)
  })

</script>
<template>
    <div class="flex-none w-3/12 h-full bg-green-100">
        <div class="flex flex-col items-center justify-center">
            <img src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png" class="w-32 h-32 rounded-full" alt="goddess">
            <h1 class="text-2xl font-bold">Goddess</h1>
            <p class="text-sm">Level: 1</p>
            <p class="text-sm">Exp: 0/100</p>
            <p class="text-sm">Gold: 0</p>
        </div>
        <div>
          <!-- circle timer -->
          Timer
        </div>
        <div class="relative">
          <div class="bg-stone-100 h-40 w-32 shadow-xl absolute p-4 rounded-lg top-0 left-32">
            invocation 5
          </div>
          <div class="bg-stone-100 h-40 w-32 shadow-xl absolute p-4 rounded-lg top-0 left-24">
            invocation 4
          </div>
          <div class="bg-stone-100 h-40 w-32 shadow-xl absolute p-4 rounded-lg top-0 left-16">
            invocation 3
          </div>
          <div class="bg-stone-100 h-40 w-32 shadow-xl absolute p-4 rounded-lg top-0 left-8">
            invocation 2
          </div>
          <div class="bg-stone-100 h-40 w-32 shadow-xl absolute p-4 rounded-lg top-0 left-0">
            invocation 1
          </div>
        </div>
    </div>
</template>