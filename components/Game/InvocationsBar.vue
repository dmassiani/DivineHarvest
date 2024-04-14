<script setup>

  import _ from 'lodash'
  import { useAppStore } from '~/stores/app'
  const appStore = useAppStore();

  const semencesTmp = _.sampleSize(appStore.getSemences, 6)
  appStore.playerSemences = semencesTmp

  watch(() => appStore.playerSemences, (newSemences) => {
    newSemences.forEach(semence => {
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
    semences.value.push(...newSemences)
  })

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

  const semences = ref(semencesTmp)
  // je rempli les semences d'une quantité et qualité aléatoire et d'un prix
  const season = ref(appStore.season)
  const switcher = ref('semences')

  // mes invocations
  const playerInvocations = ref(_.sampleSize(appStore.invocations.filter(invocation => !invocation.goddess), 5))
  appStore.playerInvocations = playerInvocations.value

  watch(() => appStore.playerInvocations, (newInvocations) => {
    playerInvocations.value.push(...newInvocations)
  })

  const getInvocation = (index) => {
    appStore.currentInvocations.push(playerInvocations.value[index]);
    playerInvocations.value.splice(index, 1)
    appStore.playerInvocations = playerInvocations.value
  };

  const switchInvocationsSemences = () => {
    switcher.value = switcher.value === 'invocations' ? 'semences' : 'invocations'
  }

  const switchSeeds = () => {
    switcher.value = 'semences'
  }
  const switchInvocations = () => {
    switcher.value = 'invocations'
  }

  const selectedIndexSemence = ref(null)
  const selectSemence = (semence, index) => {
    semence.index = index
    selectedIndexSemence.value = index
    appStore.selectedSemence = semence
  }

  useNuxtApp().hooks.hook('app:semence', (message) => {
      semences.value.splice(message.index, 1)
      selectedIndexSemence.value = null
  });

</script>
<template>
    <div class="flex flex-col w-2/12 h-full bg-yellow-200 justify-between p-4">
      <div class="sm:block mb-4">
        <nav class="flex space-x-4" aria-label="Tabs">
          <a href="#" @click.prevent="switchSeeds" :class="{ 'bg-stone-900 text-stone-100': switcher == 'semences', 'text-stone-700 hover:text-stone-900': switcher == 'invocations' }" class="rounded-md px-3 py-2 text-sm font-medium">Seeds</a>
          <a href="#" @click.prevent="switchInvocations" :class="{ 'text-stone-700 hover:text-stone-900': switcher == 'semences', 'bg-stone-900 text-stone-100': switcher == 'invocations' }" class="rounded-md px-3 py-2 text-sm font-medium">Invocations</a>
        </nav>
      </div>

      <div class="invocations h-full overflow-y-scroll space-y-2" v-if="switcher == 'invocations'">
        <div class="flex flex-col justify-between space-y-3 h-full">
          <GameInvocation v-for="(invocation, index) in playerInvocations" :invocation="invocation" @click="getInvocation(index)" />
        </div>
      </div>
      <div class="semences h-full overflow-y-scroll space-y-2" v-if="switcher == 'semences'">
        <div v-for="(semence, index) in semences" @click="selectSemence(semence, index)" :class="{'bg-emerald-800': selectedIndexSemence == index}" class="cursor-pointer flex flex-col text-lime-100 bg-emerald-600 rounded-lg h-auto p-3">
          <div class="font-semibold text-xl text-white">{{ semence.name }}</div>
          <div>
            Price : ${{ semence.price }}
          </div>
          <div class="text-xs">
            {{ season }} properties : 
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
          <img src="/you.png" class="w-32 h-32 rounded-full border-8 border-stone-700" alt="goddess">
          <h1 class="text-2xl font-bold">You</h1>
      </div>
    </div>
</template>