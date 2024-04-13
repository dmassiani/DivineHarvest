<script setup>

  import { useAppStore } from '~/stores/app'
  const appStore = useAppStore();
  const semences = ref(appStore.getSemences)
  const season = ref(appStore.season)
  const switcher = ref('invocations')

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
        <ol class="flex flex-col justify-between space-y-3 h-full">
          <li>
            <div class="flex justify-between bg-white shadow-xl rounded-lg h-32">
              <div>Invocation 1</div>
            </div>
          </li>
          <li>
            <div class="flex justify-between bg-white shadow-xl rounded-lg h-32">
              <div>Invocation 2</div>
            </div>
          </li>
          <li>
            <div class="flex justify-between bg-white shadow-xl rounded-lg h-32">
              <div>Invocation 3</div>
            </div>
          </li>
          <li>
            <div class="flex justify-between bg-white shadow-xl rounded-lg h-32">
              <div>Invocation 4</div>
            </div>
          </li>
          <li>
            <div class="flex justify-between bg-white shadow-xl rounded-lg h-32">
              <div>Invocation 5</div>
            </div>
          </li>
        </ol>
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