<script lang="ts" setup>
import { z } from "zod";

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(
    z.object({
        fullName: z
            .string({
                required_error: "Full name is required",
            })
            .min(3, "Full name must be at least 3 characters"),
        email: z
            .string({
                required_error: "Email is required",
            })
            .email("Email must be a valid email"),
        phone: z
            .string()
            .transform((value) => (!!!value ? null : value))
            .refine((value) => !value || value.length === 10, {
                message: "Phone must be 10 digits",
            })
            .nullish(),
        message: z
            .string({
                required_error: "Message is required",
            })
            .min(3, "Message must be at least 3 characters"),
    })
  ),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
    <div class="px-6 py-24 sm:py-32 lg:px-8">
        <!-- <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
            <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div> -->
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Contact us</h2>
            <p class="mt-2 text-lg leading-8 text-zinc-300 dark:text-zinc-600">We are delighted to hear from you.</p>
        </div>

        <UiCard class="mx-auto max-w-xl mt-4">
            <template #content>
                <UiCardContent as="form" @submit="onSubmit" class="flex flex-col gap-4">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <fieldset :disabled="isSubmitting" class="grid gap-5">
                            <Field v-slot="{ componentField }" name="fullName">
                                <UiFormItem label="Full name">
                                    <UiInput v-bind="componentField" />
                                </UiFormItem>
                            </Field>
                        </fieldset>
                        <fieldset :disabled="isSubmitting" class="grid gap-5">
                            <Field v-slot="{ componentField }" name="phone">
                                <UiFormItem hint="Optional" label="Phone">
                                    <UiInput type="tel" v-bind="componentField" />
                                </UiFormItem>
                            </Field>
                        </fieldset>
                    </div>
                    <Field v-slot="{ componentField }" name="email">
                        <UiFormItem label="Email">
                            <UiInput type="email" v-bind="componentField" />
                        </UiFormItem>
                    </Field>
                    <div>
                        <UiVeeTextarea
                            label="Message"
                            name="message"
                        />
                    </div>
                    <div class="flex w-full justify-left">
                        <div class="flex items-center space-x-2">
                            <UiSwitch id="privacy" />
                            <UiLabel for="privacy">By selecting this, you agree to our <NuxtLink to="/legal/privacy" class="font-semibold text-green-400 inline-flex ml-1">privacy policy</NuxtLink></UiLabel>
                        </div>
                    </div>
                    <div>
                        <UiButton type="submit">Contact sales</UiButton>
                    </div>
                </UiCardContent>
            </template>
        </UiCard>

    </div>

</template>