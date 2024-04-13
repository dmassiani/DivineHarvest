<script setup>

    import { z } from "zod";

    definePageMeta({
      layout: 'fullscreen',
    })

    const user = useSupabaseUser();
    const supabase = useSupabaseClient();

    // Define the form schema
    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    })

    const { handleSubmit, isSubmitting } = useForm({
      validationSchema: toTypedSchema(schema),
    });

    const onSubmit = handleSubmit(async (values) => {
      signIn(values);
    });

    const signIn = async (form) => {
      try {
        isSubmitting.value = true;
        const { data, error } = await supabase.auth.signInWithPassword({
            email: form.email,
            password: form.password
        })
        if (error) {
          throw new Error(error.message)
        }else{
          useSonner.success("", { description: "User added" });
          // then : TODO after useSonner success
          navigateTo("/space");
        }

      } catch (error) {

        console.error('Sign in error:', error.error_description || error.message)
        useSonner.warning("", { description: "User not added" });

      } finally {
        isSubmitting.value = false;
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
          <p class="mt-1 text-muted-foreground">Enter your email & password to log in.</p>

          <form class="mt-10" @submit.prevent="onSubmit">
            <fieldset :disabled="isSubmitting" class="grid gap-5">
              <div>
                <UiVeeInput label="Email" type="email" name="email" placeholder="john@example.com" />
              </div>
              <div>
                <UiVeeInput label="Password" type="password" name="password" />
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
          <p class="mt-8 text-sm">
            <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/welcome/forgot-password">Forgot password?</NuxtLink>
          </p>
          <p class="mt-4 text-sm text-muted-foreground">
            Don't have an account?
            <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/welcome/signup">Create account</NuxtLink>
          </p>
        </div>
      </div>
    </div>

</template>