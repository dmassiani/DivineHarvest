<script setup></script>

<template>
  <div class="flex flex-col h-screen bg-black items-center justify-start text-white px-20">
    <div class="max-w-lg">
      <h1 class="font-bold text-6xl p-12">Divine Harvest</h1>
      <div class="flex flex-col justify-start">
        <div class="flex flex-col justify-start text-left pr-12 space-y-12">
          <div class="text-zinc-500 flex flex-col space-y-4">
            <p>
              As a farmer, you have to harvest as many resources as possible.
            </p>
            <p>
              The goddess Harvest will do anything to stop you destroying her land.
              She'll summon gods to stop you harvesting.
            </p>
            <p>
              You too can invoke the gods to help you.
              These are not always benevolent. Like those summoned by the goddess, who may take pity on you.
            </p>
            <div>
              <ul class="text-white">
                <li>1 - Choose a seed</li>
                <li>2 - Choose a piece of your garden</li>
                <li>3 - Invoke your gods to help you</li>
                <li>4 - Harvest your plot before it rots</li>
              </ul>
              <p class="mt-4">Your goal is to make as much money as possible</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col text-white justify-start">
          <div class="text-zinc-500">
            Game made with my own theory about energy in game.
            Built with Nuxt.js, TailwindCSS and my SaaS kit starter <a href="https://supernuxt.dev/" class="text-white">SuperNuxt !</a>
          </div>
          <div class="mt-2">
            Follow me on <a href="https://david.flaaag.me" target="_blank">flaaag.me</a>
          </div>
          <div class="flex justify-center">
            <NuxtLink to="/play" class="w-60 bg-emerald-400 rounded-lg text-white mt-12 py-4 text-3xl font-bold text-center">
              Play!
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
