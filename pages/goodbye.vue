<script setup>
    const supabase = useSupabaseClient()

    const logout = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error(error);
            return;
        }

        await navigateTo('/');
    };

    onBeforeMount(() => {
        logout();
    });

</script>

<template>
  <h1>See you soon</h1>
</template>