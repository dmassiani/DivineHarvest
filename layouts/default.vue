<script setup>
  useHead({
    htmlAttrs: {
      class: 'dark'
    }
  });
</script>
<template>
  <nav>
    <BasicHeader />
  </nav>
  <main class="flex-grow">
    <slot />
  </main>
</template>
