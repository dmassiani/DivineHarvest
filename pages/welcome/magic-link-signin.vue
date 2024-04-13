<script setup>

    definePageMeta({
      layout: 'fullscreen',
    })
    
    const supabase = useSupabaseClient()

    const loading = ref(false)
    const email = ref('')

    const handleLogin = async () => {
        try {
            loading.value = true
            const { error } = await supabase.auth.signInWithOtp({ email: email.value })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            loading.value = false
        }
    }

</script>

<template>

    <div class="flex h-screen items-center justify-between">
      <div class="hidden h-screen md:block md:w-1/2 lg:w-1/2">
        <img
        src="https://images.unsplash.com/photo-1711522676532-d6dce8a42335?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Login form image"
          class="size-full object-cover"
        />
      </div>
      <div class="w-full md:w-1/2">
        <div class="mx-auto w-full max-w-[330px] px-5">
          <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">Log in</h1>
          <p class="mt-1 text-muted-foreground">Enter your email to log in.</p>

          <form class="mt-10" @submit="submit">
            <fieldset :disabled="isSubmitting" class="grid gap-5">
              <div>
                <UiVeeInput label="Email" type="email" name="email" placeholder="john@example.com" />
              </div>
              <div>
                <UiButton class="w-full" type="submit" text="Log in" />
              </div>
              <UiDivider label="OR" />
              <UiButton @click="signInWithGoogle()" variant="outline" type="button">
                <Icon class="size-4" name="logos:google-icon" />
                <span class="ml-2">Continue with Google</span>
              </UiButton>
            </fieldset>
          </form>
          <p class="mt-4 text-sm text-muted-foreground">
            Don't have an account?
            <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/welcome/signup"
              >Create account</NuxtLink
            >
          </p>
        </div>
      </div>
    </div>

</template>