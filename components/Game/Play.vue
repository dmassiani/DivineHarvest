<script setup>

  import { useAppStore } from '~/stores/app'
  const appStore = useAppStore();
  const goddessInvocations = ref(appStore.currentInvocations);
  const tunes = computed(() => {
    return Math.round(appStore.tunes / 10);
  });
  const malusQuality = computed(() => {
    return appStore.malus.quality;
  });
  const malusQuantity = computed(() => {
    return appStore.malus.quantity;
  });
  const malusGrow = computed(() => {
    return appStore.malus.grow;
  });

  const delayOFRemoveInvocation = 30000;
  onMounted(() => {
    setInterval(() => {
      if(appStore.currentInvocations.length > 1) appStore.currentInvocations.shift();
    }, delayOFRemoveInvocation);
  });

  let seasonCursor = 0;
  const seasons = ['winter', 'spring', 'summer', 'fall'];
  const season = ref(seasons[seasonCursor]);
  let timer = null;
  let timerDisplay = null;
  const timerValue = ref(0);
  const seasonDuration = 1200;
  const totalSeasonTiming = ref(1200 * seasons.length);

  const changeSeason = () => {
    
    if (seasonCursor === seasons.length - 1) {
      if (timer !== null) {
        clearInterval(timer);
        clearInterval(timerDisplay);
      }
    } else {
      seasonCursor++;
    }
    season.value = seasons[seasonCursor];
    appStore.season = season.value;

  }

  const startSeasonsTimer = () => {
    timer = setInterval(() => {
      changeSeason()
    }, seasonDuration * 100) // 2 minutes in milliseconds
    timerDisplay = setInterval(() => {
      timerValue.value++
    }, 100)
  }

  onMounted(() => {
    startSeasonsTimer()
  })

  const percentage = computed(() => {
    return Math.floor((timerValue.value / totalSeasonTiming.value) * 100);
  });

</script>
<template>
    <div class="grow h-full p-4 bg-stone-900 text-white">
      <header class="flex flex-col w-full space-y-4">

        <!-- Les scores -->
        <div class="flex flex-row justify-between">
          <div>
            <h2 class="text-2xl font-bold">Ground health</h2>
            <p class="text-sm">Quality : {{ malusQuality }}</p>
            <p class="text-sm">Delay between growths : {{ malusGrow }}</p>
          </div>
          <h1 class="text-4xl font-bold">${{ tunes }}</h1>
        </div>

        <!-- Les saisons -->
        <div class="flex flex-row relative rounded-full overflow-hidden h-6">
          <div class="flex justify-end pr-3 absolute h-full bg-transparent border-r-2 border-white" :style="{ 'width': percentage + '%' }">{{ season }}</div>
          <div class="flex justify-right items-center text-center w-1/4 bg-stone-700 h-14"></div>
          <div class="flex justify-right items-center text-center w-1/4 bg-stone-700 h-14"></div>
          <div class="flex justify-right items-center text-center w-1/4 bg-stone-700 h-14"></div>
          <div class="flex justify-right items-center text-center w-1/4 bg-stone-700 h-14"></div>
        </div>

      </header>

      <!-- Le jardin qui est une grille de 3 -->
      <main class="mt-8">
        <h3 class="text-center">Garden</h3>
        <div class="grid grid-cols-3 gap-4 h-full px-20 mt-4">
          <GameGarden />
          <GameGarden />
          <GameGarden />
          <GameGarden />
          <GameGarden />
          <GameGarden />
          <GameGarden />
          <GameGarden />
          <GameGarden />
        </div>
      </main>

      <!-- les invocations en cours de sa mère la goddess -->
      <div class="flex flex-row mt-8">
        <GameInvocation  v-for="goddessInvocation in goddessInvocations" :invocation="goddessInvocation" class="-mr-20" />
      </div>

    </div>
</template>