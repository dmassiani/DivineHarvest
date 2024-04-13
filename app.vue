<script setup lang="ts">
  import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <div class="relative">
    <NuxtLayout>
      <NuxtPage/>
      <UiVueSonner />
      <SpeedInsights />
    </NuxtLayout>
  </div>
</template>
