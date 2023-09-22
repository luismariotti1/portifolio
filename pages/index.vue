<template>
  <div class="flex h-full flex-col p-6">
    <div class="flex flex-col items-center gap-10">
      <HomeHello />
      <HomeCode />
      <h2 class="text-2xl text-primary-300">Principais Habilidades</h2>
    </div>
  </div>

  <!-- <img
    src="/img/Polygon1.png"
    class="absolute pointer-events-none hidden trianglePosition1 hideTriangle"
    alt="Triangle 2"
  />
  <img
    src="/img/Polygon2.png"
    class="absolute trianglePosition2 pointer-events-none hidden hideTriangle"
    alt="Triangle 2"
  /> -->
</template>

<style>
.trianglePosition1 {
  bottom: calc(8vw + 5vh);
  left: calc(5vw + 3vh);
}

.trianglePosition2 {
  top: calc(6vw + 5vh);
  right: calc(3vw + 3vh);
}

@media (min-height: 700px) {
  .hideTriangle {
    display: block;
  }
}

@media (max-width: 768px) {
  .hideTriangle {
    display: none;
  }
}
</style>
