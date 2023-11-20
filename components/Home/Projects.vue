<template>
  <div class="flex w-full flex-col gap-4 xlg:w-3/5">
    <h2 class="text-center text-2xl text-primary-300">Projetos</h2>
    <div class="flex w-full flex-col gap-6">
      <div
        data-aos="flip-right"
        data-aos-duration="1200"
        class="rounded-md bg-surface-100 bg-opacity-40 p-4"
      >
        <div
          class="flex w-full flex-col items-center justify-center gap-6 xs:p-4"
        >
          <h3 class="text-xl uppercase text-accent-100">
            <strong>Antares Solar</strong>
          </h3>
          <NuxtImg
            src="/img/AntaresSolar.png"
            alt="projeto antares"
            loading="lazy"
          />
          <p class="text-justify text-accent-200">
            Antares Solar é um SAAS, desenvolvido para instaladoras de energia
            solar. O software oferece ao seus usuário geração de propostas de
            sistemas fotovoltaicos extremamente elegantes e precisas, além de
            trazer um recurso inédito para está modadalidade de software,
            permitindo calcular a área de instalação por meio de imagens de
            satélite.
          </p>
          <div class="flex w-full flex-col gap-2">
            <a href="https://antaressolar.com" target="_blank">
              <div
                class="flex items-center justify-center gap-2 rounded-md bg-primary-300 p-2 text-center"
              >
                Visitar site
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="flip-left"
        data-aos-duration="1200"
        class="rounded-md bg-surface-100 bg-opacity-40 p-4"
      >
        <div
          class="flex w-full flex-col items-center justify-center gap-6 xs:p-4"
        >
          <h3 class="text-xl uppercase text-accent-100">
            <strong>TrucoMax</strong>
          </h3>
          <NuxtImg src="/img/TrucoMax.png" alt="trucomax" loading="lazy" />
          <p class="text-justify text-accent-200">
            TrucoMax é uma plataforma inovadora de jogo de cartas, desenvolvida
            com a tecnologia WebSocket para assegurar uma experiência de jogo
            contínua e em tempo real. Este jogo online gratuito revoluciona o
            Truco tradicional ao trazê-lo para a era digital, permitindo que
            jogadores de todo o mundo se conectem e compitam. Destaca-se por sua
            interface intuitiva, focada em uma jogabilidade amigável e um design
            visual impressionante.
          </p>
          <div class="flex w-full flex-col gap-2">
            <a href="http://trucomax.com" target="_blank">
              <div
                class="flex items-center justify-center gap-2 rounded-md bg-primary-300 p-2 text-center"
              >
                Visitar site
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="flip-right"
        data-aos-duration="1200"
        class="rounded-md bg-surface-100 bg-opacity-40 p-4"
      >
        <div
          class="flex w-full flex-col items-center justify-center gap-6 xs:p-4"
        >
          <h3 class="text-xl uppercase text-accent-100">
            <strong>Geo2D</strong>
          </h3>
          <NuxtImg src="/img/Geo2D.png" alt="geo2d" loading="lazy" />
          <p class="text-justify text-accent-200">
            Geo2D é um software de código aberto que permite que os usuários
            criem figuras geométricas em um plano cartesiano e apliquem
            multiplas transformações geométricas sobre elas.
          </p>
          <div class="flex w-full flex-col gap-2">
            <a href="https://github.com/luismariotti1/Geo2D" target="_blank">
              <div
                class="flex items-center justify-center gap-2 rounded-md bg-primary-300 p-2 text-center"
              >
                Visitar repositório
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
