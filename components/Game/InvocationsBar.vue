<script setup>

  const switcher = ref('invocations')

  const switchInvocationsSemences = () => {
    switcher.value = switcher.value === 'invocations' ? 'semences' : 'invocations'
  }

</script>
<template>
    <div class="flex flex-col w-2/12 h-full bg-yellow-200 justify-between p-4">
      <div>
        Timer
      </div>
      <div class="invocations" v-if="switcher == 'invocations'">
        <ol>
          <li>
            <div class="flex justify-between">
              <div>Invocation 1</div>
            </div>
          </li>
          <li>
            <div class="flex justify-between">
              <div>Invocation 2</div>
            </div>
          </li>
          <li>
            <div class="flex justify-between">
              <div>Invocation 3</div>
            </div>
          </li>
          <li>
            <div class="flex justify-between">
              <div>Invocation 4</div>
            </div>
          </li>
          <li>
            <div class="flex justify-between">
              <div>Invocation 5</div>
            </div>
          </li>
        </ol>
      </div>
      <div class="semences" v-if="switcher == 'semences'">
        semences
      </div>
      <div @click="switchInvocationsSemences">
        switch invocations - semences
      </div>
    </div>
</template>