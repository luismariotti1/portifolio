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
            <div class="flex flex-col items-center justify-center gap-4 p-4">
              <strong class="text-lg capitalize text-accent-100"
                >Front-end</strong
              >
              <ul class="flex flex-row gap-2">
                <li>
                  <img class="h-16" src="/svg/html5.svg" alt="html5" />
                </li>
                <li class="flex items-center gap-2">
                  <img class="h-16" src="/svg/css3.svg" alt="css3" />
                </li>
                <li class="flex items-center gap-2">
                  <img class="h-14" src="/svg/js.svg" alt="javascript" />
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
