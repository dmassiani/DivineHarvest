<script setup>
const colorMode = useColorMode();
const changeColor = () => {
    colorMode.preference = (colorMode.value === 'dark' || colorMode.value === 'system') ? 'light' : 'dark';
}
</script>

<template>
    <UiButton v-on:click="changeColor" variant="ghost" size="icon" class="ml-2">
        <Icon v-if="colorMode.value == 'dark' || colorMode.value == 'system'" class="h-4 w-4" name="lucide:sun" />
        <Icon v-else class="h-4 w-4" name="lucide:moon" />
    </UiButton>
</template>
