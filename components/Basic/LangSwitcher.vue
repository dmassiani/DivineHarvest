<script setup>
const { locale, setLocale } = useI18n()
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="ghost" size="icon">
        <Icon class="h-4 w-4" name="lucide:languages" />
      </UiButton>
    </UiDropdownMenuTrigger>

    <UiDropdownMenuContent class="w-20">
      <UiButton @click="setLocale('en')" variant="ghost" class="w-full">
        English
      </UiButton>
      <UiButton @click="setLocale('fr')" variant="ghost" class="w-full">
        Français
      </UiButton>
    </UiDropdownMenuContent>

  </UiDropdownMenu>
</template>
