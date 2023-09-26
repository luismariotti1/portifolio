<template>
  <div class="sticky left-0 top-0 z-50">
    <div class="flex w-full items-center justify-between bg-primary-300 p-2">
      <div class="px-2 text-xl font-semibold capitalize">
        <span>Bem-Vindo</span>
      </div>
      <div class="px-2">
        <ul class="flex items-center gap-6 text-center">
          <PageHeaderButton text="Hello World" @click="navigate('hello')" />
          <PageHeaderButton text="Sobre" @click="navigate('bio')" />
          <PageHeaderButton text="Tecnologias" @click="navigate('tech')" />
          <PageHeaderButton text="Projetos" @click="navigate('projects')" />
          <PageHeaderButton text="Contato" @click="navigate('contact')" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const navigation = useNavLink();
const canClick = ref(true);

function navigate(to) {
  if (!canClick.value) return;
  canClick.value = false;
  setTimeout(() => {
    canClick.value = true;
  }, 500);

  navigation.value = to;
}
</script>
