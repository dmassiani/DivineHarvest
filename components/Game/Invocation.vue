<script setup>

  const props = defineProps({
    invocation: Object
  })    

  import _ from 'lodash'
  import { useAppStore } from '~/stores/app'
  const appStore = useAppStore();
  const season = ref(appStore.season); // Make appStore.season reactive

  watch(() => appStore.season, (newSeason) => {
    season.value = newSeason;
  })

</script>
<template>
    <div class="bg-stone-100 w-32 h-40 shadow-xl p-4 rounded-lg flex flex-col justify-between text-stone-900">
        <p class="text-xs">God of</p>
        <h1 class="font-bold text-xl -mt-4">{{ invocation.name }}</h1>
        <div class="text-xs mt-4">
            <div>
                quality: {{ invocation[season].quality }}
            </div>
            <div>
                growing: {{ invocation[season].grow }}
            </div>
        </div>
    </div>
</template>