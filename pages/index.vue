<template>
  <div class="flex h-full flex-col p-6">
    <div class="flex flex-col items-center gap-10">
      <HomeHello ref="hello" />
      <HomeCode />
      <HomeBio ref="bio" />
      <HomeTechList ref="tech" />
      <HomeProjects ref="projects" />
      <div class="flex w-full flex-col gap-4">
        <h2 class="text-center text-2xl text-primary-300">Contato</h2>
        <div class="flex flex-col gap-4 p-2">
          <p class="text-center text-xl text-secundary-200">
            gostou do meu trabalho? entre em contato comigo pelo email
          </p>
          <a href="mailto:luismariottip@gmail.com">
            <div
              class="flex items-center justify-center gap-2 rounded-md bg-primary-300 p-2 text-center"
            >
              luismariottip@gmail.com
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const navigation = useNavLink();
const projects = ref(null);
const tech = ref(null);
const hello = ref(null);
const bio = ref(null);

watch(navigation, (to) => {
  try {
    focusOn(to);
  } catch (error) {
    console.log(error);
  }
});

function focusOn(element) {
  navigation.value = "";
  switch (element) {
    case "projects":
      projects.value.$el.scrollIntoView({ behavior: "smooth" });
      break;
    case "tech":
      tech.value.$el.scrollIntoView({ behavior: "smooth" });
      break;
    case "bio":
      bio.value.$el.scrollIntoView({ behavior: "smooth" });
      break;
    case "hello":
      hello.value.$el.scrollIntoView({ behavior: "smooth" });
      break;
    default:
      break;
  }
}
</script>
