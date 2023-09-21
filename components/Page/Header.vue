<template>
  <div class="flex w-full p-2 justify-between bg-primary-300 items-center">
    <div class="px-2 text-xl capitalize font-semibold">
      <span>Bem-Vindo</span>
    </div>
    <div class="px-2">
      <ul class="flex text-center items-center gap-6">
        <PageHeaderButton text="Sobre"></PageHeaderButton>
        <PageHeaderButton text="Projetos"></PageHeaderButton>
        <PageHeaderButton text="Contato"></PageHeaderButton>
        <Icon name="grommet-icons:github" color="black" class="w-5 h-5" />
        <Icon name="grommet-icons:linkedin" color="black" class="w-4 h-4" />
      </ul>
    </div>
  </div>
</template>
