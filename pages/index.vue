<template>
  <div class="flex flex-col h-full p-6">
    <div class="">
      <div
        class="min-h-screen flex flex-col items-center justify-between gap-4"
      >
        <HomeHello />
        <div class="w-full p-8">
          <div class="bg-primary-300 rounded-md bg-opacity-60">
            <h2 class="text-center">
              class Person { <br />
              constructor () { <br />
              this.name = “Luís” <br />
              this.skills = [“Front”, “Back”]<br />} }
            </h2>
          </div>
        </div>
        <h2 class="text-primary-300 py-4 text-2xl">Principais Habilidades</h2>
      </div>
    </div>
    <div>test</div>
    <div>test2</div>
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
