<template>
  <div class="flex h-full flex-col p-6 py-10">
    <div class="flex flex-col items-center gap-10 md:gap-14">
      <HomeHello ref="hello" />
      <HomeCode />
      <HomeBio ref="bio" />
      <HomeTechList ref="tech" />
      <HomeProjects ref="projects" />
      <HomeContact ref="contact" />
    </div>
  </div>
</template>

<script setup>
const navigation = useNavLink();
const projects = ref(null);
const tech = ref(null);
const hello = ref(null);
const bio = ref(null);
const contact = ref(null);

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
    case "contact":
      contact.value.$el.scrollIntoView({ behavior: "smooth" });
      break;
    default:
      break;
  }
}
</script>
