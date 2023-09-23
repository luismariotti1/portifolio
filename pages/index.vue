<template>
  <div class="flex h-full flex-col p-6">
    <div class="flex flex-col items-center gap-10">
      <HomeHello />
      <HomeCode />
      <HomeBio />

      <HomeTechList />
      <div class="flex w-full flex-col gap-4">
        <h2 class="text-center text-2xl text-primary-300">Projetos</h2>
        <div class="flex w-full flex-col gap-2 p-2">
          <div class="rounded-md bg-surface-100 bg-opacity-60 p-4">
            <div class="flex w-full flex-col items-center justify-center gap-2">
              <h3 class="text-xl uppercase text-accent-100">
                <strong>Antares Solar</strong>
              </h3>
              <img src="/img/AntaresSolar.png" alt="projeto antares" />
              <p class="text-justify text-accent-200">
                Antares Solar é um SAAS, desenvolvido para instaladoras de
                energia solar. O software oferece como principal recurso a
                geração de propostas de sistemas fotovoltaicos, extremamente
                elegantes e com recursos inéditos como consulta via API de
                irradiância solar e cálculo da aréa disponível para instalação
                por satélites.
              </p>
              <div class="flex w-full flex-col gap-2">
                <div
                  class="flex w-full items-center justify-center gap-2 rounded-md bg-primary-300 p-2"
                >
                  <span>Mais informações</span>
                </div>
                <div
                  class="flex items-center justify-center gap-2 rounded-md bg-primary-300 p-2 text-center"
                >
                  <a href="">Visitar site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
