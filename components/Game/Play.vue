<template>
    <div class="grow h-full bg-stone-400 p-4">
      <header class="flex flex-col w-full space-y-4">

        <!-- Les scores -->
        <div class="flex flex-row">
          <div class="w-1/2">
            <h1 class="text-4xl font-bold">$0</h1>
          </div>
          <div class="w-1/2">
            <h1 class="text-4xl font-bold">0pt</h1>
          </div>
        </div>

        <!-- Les saisons -->
        <div class="flex flex-row">
          <div class="w-1/4 bg-cyan-100 h-14"></div>
          <div class="w-1/4 bg-yellow-100 h-14"></div>
          <div class="w-1/4 bg-yellow-400 h-14"></div>
          <div class="w-1/4 bg-orange-100 h-14"></div>
        </div>

      </header>

      <!-- Le jardin qui est une grille de 3 -->
      <main class="mt-4">
        <div class="grid grid-cols-3 gap-4 h-full">
          <div class="h-48 bg-white rounded-lg">

          </div>
          <div class="h-48 bg-white rounded-lg">

          </div>
          <div class="h-48 bg-white rounded-lg">

          </div>
          <div class="h-48 bg-white rounded-lg">

          </div>
          <div class="h-48 bg-white rounded-lg">

          </div>
          <div class="h-48 bg-white rounded-lg">

          </div>
          <div class="h-48 bg-white rounded-lg">

          </div>
          <div class="h-48 bg-white rounded-lg">

          </div>
          <div class="h-48 bg-white rounded-lg">

          </div>
        </div>
      </main>

    </div>
</template>