<script lang="ts" setup>
  const { locale, setLocale } = useI18n();
  const user = useSupabaseUser();

  const lightMode = ref(true);

  const placement = ref("top-start");
  const placements = [
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "bottom-start",
    "bottom",
    "bottom-end",
    "left-start",
    "left",
    "left-end",
  ];
  const beachAmenities = [
    {
      title: "Sun",
      description: "The Sun is the star at the center of the Solar System.",
    },
    {
      title: "Sand",
      description:
        "Sand is a granular material composed of finely divided rock and mineral particles.",
    },
    {
      title: "Water",
      description:
        "Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.",
    },
  ];
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/components/alertdialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/components/hovercard",
      description: "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/components/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/components/scrollarea",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/components/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/components/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
</script>


<template>
  <div>
    <UiNavbar class="border-0">
      <UiContainer class="flex h-32 items-center justify-between px-20">
        <div>
          <NuxtLink to="/" class="font-bold text-2xl">SuperNuxt !</NuxtLink>
          <BasicThemeSimpleSwitcher />

          <BasicLangSwitcher/>

        </div>
        <UiNavigationMenu>
          <UiNavigationMenuList>
            <UiNavigationMenuItem>
              <UiNavigationMenuTrigger class="bg-transparent hover:bg-transparent font-extralight text-zinc-800 dark:text-zinc-300" title="Beach day" />
              <UiNavigationMenuContent>
                <div class="grid w-[600px] grid-cols-2 gap-5 p-4">
                  <img
                    src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                    alt="Beach"
                    class="h-full w-full rounded-md object-cover"
                  />
                  <ul class="flex flex-col gap-2">
                    <li
                      v-for="(item, i) in beachAmenities"
                      :key="i"
                      class="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p class="mb-1 font-semibold leading-none text-foreground">{{ item.title }}</p>
                      <p class="line-clamp-2 text-muted-foreground">{{ item.description }}</p>
                    </li>
                  </ul>
                </div>
              </UiNavigationMenuContent>
            </UiNavigationMenuItem>
            <UiNavigationMenuItem>
              <UiNavigationMenuTrigger class="bg-transparent hover:bg-transparent font-extralight text-zinc-800 dark:text-zinc-300" title="Components" />
              <UiNavigationMenuContent>
                <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li
                    v-for="item in components"
                    :key="item.title"
                    :title="item.title"
                    :href="item.href"
                  >
                    {{ item.description }}
                  </li>
                </ul>
              </UiNavigationMenuContent>
            </UiNavigationMenuItem>

            <UiNavigationMenuItem>
              <UiNavigationMenuTrigger class="bg-transparent hover:bg-transparent font-extralight text-zinc-800 dark:text-zinc-300" title="Learn more" />
              <UiNavigationMenuContent>
                <div class="grid w-[500px] grid-cols-2 place-items-center gap-5 p-3">
                  <img
                    src="https://www.radix-vue.com/logo.svg"
                    alt="Radix Vue Logo"
                    class="h-full w-full"
                  />
                  <div>
                    <p class="text-lg font-semibold text-foreground">Radix Vue</p>
                    <p class="mt-2 text-muted-foreground">
                      Unstyled, accessible components for building high-quality design systems and web
                      apps in Vue.
                    </p>
                  </div>
                </div>
              </UiNavigationMenuContent>
            </UiNavigationMenuItem>

            <UiNavigationMenuItem>
              <UiNavigationMenuLink asChild>
                <UiButton variant="ghost" class="font-extralight text-zinc-800 dark:text-zinc-300">Documentation</UiButton>
              </UiNavigationMenuLink>
            </UiNavigationMenuItem>

          </UiNavigationMenuList>
        </UiNavigationMenu>

        <div class="flex items-center">

          <UiButton v-if="!user" variant="ghost">
            sign in
            <Icon class="h-4 w-4" name="lucide:user"/>
          </UiButton>

          <button v-else type="button" class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Logged in as {{ user }}
            <svg class="-mr-0.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </button>

        </div>


      </UiContainer>
    </UiNavbar>
  </div>
</template>