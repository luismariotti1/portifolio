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
});
