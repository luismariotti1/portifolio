<template>
  <div class="xs:w-2/3 w-full px-2">
    <div class="rounded-md bg-surface-100 bg-opacity-40">
      <div
        class="font-semibol flex w-full flex-col items-center justify-center p-2 text-white"
      >
        <div class="flex-grow text-center">
          <strong class="typewriter text-accent-200">
            {{ "new class Programmer {" }}
          </strong>
          <br />
          <strong
            class="typewriter text-accent-200"
            style="animation-delay: 1.8s"
          >
            {{ "constructor() {" }}
          </strong>
          <br />
          <strong
            class="typewriter text-accent-200"
            style="animation-delay: 2.9s"
          >
            {{ "this.name = 'Luís Mariotti'" }}
          </strong>
          <br />
          <strong
            class="typewriter text-accent-200"
            style="animation-delay: 4.5s"
          >
            {{ "this.skills = ['Front', 'Back']" }}
          </strong>
          <br />
          <strong
            class="typewriter text-accent-200"
            style="animation-delay: 6.2s"
          >
            {{ "} }" }}
          </strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: type 1.8s steps(40, end) forwards;
  animation-fill-mode: forwards;
}

@keyframes type {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
