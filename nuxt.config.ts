export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/aos"],
  modules: ["nuxt-icon", "@vueuse/motion/nuxt"],
  app: {
    head: {
      title: "Portfólio de Luís Mariotti",
      charset: "utf-8",
      htmlAttrs: {
        lang: "pt-br",
      },
    },
  },
});
