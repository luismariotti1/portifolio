<template>
  <div>
    <div @click="toggleNav()" class="fixed right-3 top-3 z-50">
      <div class="rounded-md bg-primary-300">
        <Icon
          :name="!showNav ? 'ic:outline-menu' : 'ic:outline-close'"
          color="black"
          class="h-8 w-8"
        />
      </div>
    </div>
    <transition name="fade">
      <div v-if="showNav" class="fixed z-40 h-full w-full">
        <div class="h-full w-full bg-surface-100 bg-opacity-90">
          <div class="flex h-full flex-col gap-4 px-6 py-16">
            <div
              v-for="item in items"
              :key="item.key"
              @click="navigate(item.route)"
              class="rounded-md bg-surface-300 p-2"
            >
              <div class="ml-2 text-accent-200">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const items = ref([
  { key: "hello", name: "Hello World", route: "hello" },
  { key: "bio", name: "Sobre", route: "bio" },
  { key: "tech", name: "Tecnologias", route: "tech" },
  { key: "projects", name: "Projetos", route: "projects" },
  { key: "contact", name: "Contato", route: "contact" },
]);

const showNav = ref(false);
const navigation = useNavLink();
const canClick = ref(true);

function toggleNav() {
  canClick.value = false;
  setTimeout(() => {
    canClick.value = true;
  }, 500);

  showNav.value = !showNav.value;
  if (showNav.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function navigate(to) {
  if (!canClick.value) return;
  navigation.value = to;
  toggleNav();
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
