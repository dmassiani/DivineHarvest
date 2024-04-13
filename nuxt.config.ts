// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/seo",
    "nuxt-delay-hydration",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@vee-validate/nuxt",
    "@morev/vue-transitions/nuxt"
  ],

  routeRules: {
    // Don't add any /secret/** URLs to the sitemap.xml
    // '/logout': { robots: false },
    // '/local/**': { robots: false },
    // '/user/**': { robots: false },
  },

  delayHydration: {
    mode: "mount",
    // enables nuxt-delay-hydration in dev mode for testing
    // NOTE: you should disable this once you've finished testing, it will break HMR
    debug: process.env.NODE_ENV === "development",
  },

  supabase: {
    redirect: false,
  },

  tailwindcss: {
    exposeConfig: {
      level: 2,
    },

    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config.js",
    config: {},
    viewer: true,
  },

  buildModules: ["@nuxtjs/svg"],

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },

  nitro: {
    preset: "vercel",
  },

  colorMode: {
    classSuffix: "",
  },

  typescript: {
    shim: false,
  },

  imports: {
    imports: [{
      from: "tailwind-variants",
      name: "tv",
    }, {
      from: "tailwind-variants",
      name: "VariantProps",
      type: true,
    }, {
      from: "vue-sonner",
      name: "toast",
      as: "useSonner"
    }],
  },

  /*
  ==== @nuxtjs/i18n ====
  https://i18n.nuxtjs.org/docs/guide
  */
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },

  build: {
    transpile: ["vue-sonner"]
  }
});