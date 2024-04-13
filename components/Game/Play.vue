<script setup>

  import { useAppStore } from '~/stores/app'
  const appStore = useAppStore();

  const tunes = computed(() => {
    return Math.round(appStore.tunes / 10);
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
    appStore.currentSeason = season.value;

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
    <div class="grow h-full bg-stone-400 p-4">
      <header class="flex flex-col w-full space-y-4">

        <!-- Les scores -->
        <div class="flex flex-row justify-end">
          <div class="">
            <h1 class="text-4xl font-bold">${{ tunes }}</h1>
          </div>
        </div>

        <!-- Les saisons -->
        <div class="flex flex-row relative">
          <div class="absolute h-full bg-black" :style="{ 'width': percentage + '%' }"></div>

          <div class="flex justify-right items-center text-center w-1/4 bg-cyan-100 h-14">winter</div>
          <div class="flex justify-right items-center text-center w-1/4 bg-yellow-100 h-14">spring</div>
          <div class="flex justify-right items-center text-center w-1/4 bg-yellow-400 h-14">summer</div>
          <div class="flex justify-right items-center text-center w-1/4 bg-orange-100 h-14">fall</div>
        </div>

      </header>

      <!-- Le jardin qui est une grille de 3 -->
      <main class="mt-4">
        <div class="grid grid-cols-3 gap-4 h-full">
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

    </div>
</template>