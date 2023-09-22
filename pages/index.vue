<template>
  <div class="flex h-full flex-col p-6">
    <div class="flex flex-col items-center gap-10">
      <HomeHello />
      <HomeCode />
      <HomeBio />
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl text-primary-300">Principais tecnologias</h2>
        <div class="rounded-md bg-surface-100 bg-opacity-60">
          <div>
            <div class="flex flex-col items-center justify-center p-4">
              <strong class="capitalize text-accent-200">Front-end</strong>
              <ul>
                <li class="flex items-center gap-2">
                  <nuxt-icon name="html5" /> HTML
                </li>
                <li class="flex items-center gap-2">
                  <nuxt-icon name="css3" /> CSS
                </li>
                <li class="flex items-center gap-2">
                  <nuxt-icon name="vuejs" /> Vue.js
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
