<template>
  <div>
    <div @click="toggleNav" class="fixed right-3 top-3 z-50">
      <div class="rounded-md bg-primary-300">
        <Icon
          :name="!showNav ? 'ic:outline-menu' : 'ic:outline-close'"
          color="black"
          class="h-8 w-8"
        />
      </div>
    </div>
    <div v-if="showNav">
      <div class="fixed z-40 h-full w-full bg-surface-100 bg-opacity-90">
        <div class="flex h-full flex-col gap-4 px-6 py-16">
          <div class="rounded-md bg-surface-300 p-2">
            <div class="ml-2 text-accent-200">Sobre</div>
          </div>
          <div class="rounded-md bg-surface-300 p-2">
            <div class="ml-2 text-accent-200">Tecnologias</div>
          </div>
          <div class="rounded-md bg-surface-300 p-2">
            <div class="ml-2 text-accent-200">Projetos</div>
          </div>
          <div class="rounded-md bg-surface-300 p-2">
            <div class="ml-2 text-accent-200">Contato</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageMobileNavBar",
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>
