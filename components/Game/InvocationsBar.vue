<script setup>

  import _ from 'lodash'
  import { useAppStore } from '~/stores/app'
  const appStore = useAppStore();
  const semences = ref(appStore.getSemences)
  const season = ref(appStore.season)
  const switcher = ref('semences')

  // mes invocations
  const playerInvocations = ref(_.sampleSize(appStore.invocations.filter(invocation => !invocation.goddess), 5))
  appStore.playerInvocations = playerInvocations.value

  const getInvocation = (index) => {

    appStore.currentInvocations.push(playerInvocations.value[index]);

    // appStore.currentInvocations.push(goddessInvocations.value[goddessInvocations.value.length - 1]);
    // je supprime cet index des invocations du player
    playerInvocations.value.splice(index, 1)
    appStore.playerInvocations = playerInvocations.value
  };

  const switchInvocationsSemences = () => {
    switcher.value = switcher.value === 'invocations' ? 'semences' : 'invocations'
  }

  const selectSemence = (semence) => {
    appStore.selectedSemence = semence
  }

</script>
<template>
    <div class="flex flex-col w-2/12 h-full bg-yellow-200 justify-between p-4">
      <div @click="switchInvocationsSemences">
        switch invocations - semences
      </div>
      <div class="invocations h-full overflow-y-scroll space-y-2" v-if="switcher == 'invocations'">
        <div class="flex flex-col justify-between space-y-3 h-full">
          <GameInvocation v-for="(invocation, index) in playerInvocations" :invocation="invocation" @click="getInvocation(index)" />
        </div>
      </div>
      <div class="semences h-full overflow-y-scroll space-y-2" v-if="switcher == 'semences'">
        <div v-for="semence in semences" @click="selectSemence(semence)" class="cursor-pointer flex flex-col bg-white shadow-xl rounded-lg h-auto p-3">
          <div class="font-bold text-xl">{{ semence.name }}</div>
          <div>
            Price : {{ semence.price }}
          </div>
          <div class="text-xs">
            Season properties : 
            <div>
              Quantity: {{ semence[season].quantity }}
            </div>
            <div>
              Quality: {{ semence[season].quality }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
          <img src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png" class="w-32 h-32 rounded-full" alt="goddess">
          <h1 class="text-2xl font-bold">You</h1>
      </div>
    </div>
</template>