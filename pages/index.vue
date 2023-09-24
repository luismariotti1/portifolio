<template>
  <div class="flex h-full flex-col p-6">
    <div class="flex flex-col items-center gap-10">
      <HomeHello />
      <HomeCode />
      <HomeBio />
      <HomeTechList ref="tech" />
      <HomeProjects ref="projects" />
    </div>
  </div>
</template>

<script setup>
const navigation = useNavLink();
const projects = ref(null);

watch(navigation, (to) => {
  try {
    focusOn(to);
  } catch (error) {
    console.log(error);
  }
});

function focusOn(element) {
  projects.value.$el.scrollIntoView({ behavior: "smooth" });
}
</script>
