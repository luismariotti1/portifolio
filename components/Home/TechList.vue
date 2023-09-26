<template>
  <div class="xlg:w-2/3 flex w-full flex-col gap-4">
    <h2 class="text-center text-2xl text-primary-300">
      Principais tecnologias
    </h2>
    <div
      class="xs:grid xs:grid-cols-2 flex w-full flex-col gap-4 p-2"
      style="overflow-x: hidden"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        class="rounded-md bg-surface-100 bg-opacity-40"
      >
        <div class="flex flex-col items-center justify-center gap-4 p-4">
          <strong class="text-xl uppercase text-accent-100">Front-end</strong>
          <div class="flex flex-col gap-3">
            <ul class="flex flex-row gap-3">
              <li>
                <img class="h-16" src="/svg/html5.svg" alt="html5" />
              </li>
              <li class="flex items-center">
                <img class="h-16" src="/svg/css3.svg" alt="css3" />
              </li>
              <li class="flex items-center">
                <img class="h-16" src="/svg/tailwind.svg" alt="tailwind" />
              </li>
            </ul>
            <ul class="flex flex-row gap-3">
              <li class="flex items-center">
                <img class="h-14" src="/svg/js.svg" alt="javascript" />
              </li>
              <li class="flex items-center">
                <img class="h-16" src="/svg/vue.svg" alt="vue" />
              </li>
              <li class="flex items-center">
                <img class="h-16" src="/svg/react.svg" alt="react" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="800"
        class="rounded-md bg-surface-100 bg-opacity-40"
      >
        <div class="flex flex-col items-center justify-center gap-4 p-4">
          <strong class="text-xl uppercase text-accent-100">Back-end</strong>
          <div class="flex flex-col gap-3">
            <ul class="flex flex-row gap-3">
              <li>
                <img class="h-16" src="/svg/node.svg" alt="node" />
              </li>
              <li class="flex items-center">
                <img class="h-16" src="/svg/laravel.svg" alt="laravel" />
              </li>
              <li class="flex items-center">
                <img class="h-16" src="/svg/nestjs.svg" alt="nestjs" />
              </li>
            </ul>
            <ul class="flex flex-row gap-3">
              <li class="flex items-center">
                <img class="h-14" src="/svg/typescript.svg" alt="typescript" />
              </li>
              <li class="flex items-center">
                <img class="h-16" src="/svg/php.svg" alt="vue" />
              </li>
              <li class="flex items-center">
                <img class="h-16" src="/svg/mysql.svg" alt="react" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        class="rounded-md bg-surface-100 bg-opacity-40"
      >
        <div class="flex flex-col items-center justify-center gap-4 p-4">
          <strong class="text-xl uppercase text-accent-100"
            >Infraestrutra</strong
          >
          <div class="flex flex-col gap-3">
            <ul class="flex flex-row gap-3">
              <li>
                <img class="h-16" src="/svg/linux.svg" alt="linux" />
              </li>
              <li class="flex items-center">
                <img class="h-16" src="/svg/docker.svg" alt="docker" />
              </li>
              <li class="flex items-center">
                <img class="h-16" src="/svg/aws.svg" alt="aws" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="800"
        class="rounded-md bg-surface-100 bg-opacity-40"
      >
        <div class="flex flex-col items-center justify-center gap-4 p-4">
          <strong class="text-xl uppercase text-accent-100">Game Dev</strong>
          <div class="flex flex-col gap-3">
            <ul class="flex flex-row gap-3">
              <li>
                <img class="h-16" src="/svg/godot.svg" alt="godot" />
              </li>
              <li class="flex items-center">
                <img class="h-16" src="/svg/unity.svg" alt="unity" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
