<template>
  <PageHeader class="hidden md:block" />
  <PageMobileNavBar @navigate="navigate" class="block md:hidden" />
  <NuxtPage />
</template>

<script>
export default {
  methods: {
    navigate(refName) {
      this.$refs[refName].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
  },
};
</script>
