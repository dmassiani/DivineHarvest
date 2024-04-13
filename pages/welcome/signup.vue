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
  .superRefine(({ password }, checkPassComplexity) => {
    const containsUppercase = (ch) => /[A-Z]/.test(ch);
    const containsLowercase = (ch) => /[a-z]/.test(ch);
    const containsSpecialChar = (ch) =>
      /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
    let countOfUpperCase = 0,
      countOfLowerCase = 0,
      countOfNumbers = 0,
      countOfSpecialChar = 0;
    for (let i = 0; i < password.length; i++) {
      let ch = password.charAt(i);
      if (!isNaN(+ch)) countOfNumbers++;
      else if (containsUppercase(ch)) countOfUpperCase++;
      else if (containsLowercase(ch)) countOfLowerCase++;
      else if (containsSpecialChar(ch)) countOfSpecialChar++;
    }
    if (
      countOfLowerCase < 1 ||
      countOfUpperCase < 1 ||
      countOfSpecialChar < 1 ||
      countOfNumbers < 1
    ) {
      checkPassComplexity.addIssue({
        code: "custom",
        message: "password does not meet complexity requirements",
      });
    }
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  const signUp = async (form) => {
      try {
          const { user, error } = await supabase.auth.signUp({
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
        console.error('Sign up error:', error.error_description || error.message)
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
          <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">Sign up</h1>
          <p class="mt-1 text-muted-foreground">Enter your email & password to register.</p>

          <form class="mt-10" @submit.prevent="signUp">
            <fieldset :disabled="isSubmitting" class="grid gap-5">
              <div>
                <UiVeeInput label="Email" type="email" name="email" placeholder="john@example.com" />
              </div>
              <div>
                <UiVeeInput label="Password" type="password" name="password" />
              </div>
              <div>
                <UiButton class="w-full" type="submit" text="Register" />
              </div>
              <UiDivider label="OR" />
              <UiButton @click="signInWithGoogle()" variant="outline" type="button">
                <Icon class="size-4" name="logos:google-icon" />
                <span class="ml-2">Continue with Google</span>
              </UiButton>
            </fieldset>
          </form>
          <p class="mt-4 text-sm text-muted-foreground">
            Do you have an account?
            <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/welcome/signin"
              >Sign in</NuxtLink>
          </p>
        </div>
      </div>
    </div>
</template>