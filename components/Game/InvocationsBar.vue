<script setup>

  import { useAppStore } from '~/stores/app'
  const cartStore = useAppStore();

  const switcher = ref('invocations')

  const switchInvocationsSemences = () => {
    switcher.value = switcher.value === 'invocations' ? 'semences' : 'invocations'
  }

</script>
<template>
    <div class="flex flex-col w-2/12 h-full bg-yellow-200 justify-between p-4">
      <div @click="switchInvocationsSemences">
        switch invocations - semences
      </div>
      <div class="invocations" v-if="switcher == 'invocations'">
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
      <div class="semences" v-if="switcher == 'semences'">
        semences
      </div>
    </div>
</template>