<script setup></script>

<template>
  <div class="flex flex-col w-full h-screen bg-black items-center justify-center text-white px-20">
    <h1 class="font-bold text-6xl p-12">Divine Harvest</h1>
    <div class="flex justify-start">
      <div class="flex flex-col justify-start text-left w-2/4 pr-12 space-y-12">
        <h3 class="font-semibold text-xl">Instructions</h3>
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
      <div class="flex flex-col w-2/4 h-60 text-white justify-start">
        <div class="text-zinc-500">
          Game made with my own theory about energy in game.
        </div>
        <div>
          Follow me on <a href="https://david.flaaag.me" target="_blank">flaaag.me</a>
        </div>
        <NuxtLink to="/play" class="w-60 bg-blue-700 rounded-lg text-white mt-12 py-4 text-3xl font-bold text-center">
          Play!
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
