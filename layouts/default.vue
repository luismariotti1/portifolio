<template>
  <div class="flex min-h-screen flex-col">
    <PageHeader class="hidden md:block" />
    <PageMobileNavBar @navigate="navigateTo" class="block md:hidden" />
    <div class="md:grid md:grid-cols-6">
      <div class="md:col-span-4 md:col-start-2">
        <NuxtPage />
      </div>
    </div>
    <PageFooter />
  </div>
</template>
