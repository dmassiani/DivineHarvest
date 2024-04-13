<script setup>
const colorMode = useColorMode();
const dark = ref(true);

if(colorMode.value === 'light') {
    dark.value = true;
}

const changeColor = () => {
    colorMode.preference = (colorMode.value === 'dark') ? 'light' : 'dark';
    dark.value = !dark.value;
}
</script>

<template>
    <div class="flex w-full justify-center">
        <div class="flex items-center space-x-2">
            <UiSwitch id="dark-mode" :checked="!dark" @update:checked="changeColor"/>
            <UiLabel for="dark-mode">Light mode</UiLabel>
        </div>
    </div>
</template>
