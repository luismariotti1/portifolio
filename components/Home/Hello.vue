<template>
  <div class="flex flex-col items-center gap-4 xlg:w-2/3">
    <div class="h-28 w-28 flex-none overflow-hidden rounded-full">
      <NuxtImg
        src="/img/ProfilePicture.jpg"
        alt="foto de perfil"
        loading="lazy"
      />
    </div>
    <div class="flex flex-col gap-6 text-center">
      <h1 class="text-4xl text-primary-300">Olá, Sou Luís Mariotti!</h1>
      <h2 class="text-xl text-secundary-200" style="text-wrap: balance">
        Desenvolvedor full stack apaixonado por tecnologia, estou pronto para
        transformar suas ideias em realidade.
      </h2>
      <div class="flex w-full justify-center gap-4">
        <a href="https://github.com/luismariotti1" target="_blank">
          <div
            class="flex items-center gap-2 rounded-md bg-primary-300 p-2 text-center"
          >
            <Icon name="grommet-icons:github" color="black" class="h-6 w-6" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/luis-fernando-mariotti-paiva-7851371a2/"
          target="_blank"
        >
          <div
            class="flex items-center gap-2 rounded-md bg-primary-300 p-2 text-center"
          >
            <Icon name="grommet-icons:linkedin" color="black" class="h-6 w-6" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
