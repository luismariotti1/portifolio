<template>
  <div class="flex min-h-screen flex-col">
    <PageHeader class="hidden md:block" />
    <PageMobileNavBar @navigate="navigateTo" class="block md:hidden" />
    <NuxtPage class="flex-grow" />
    <PageFooter />
  </div>
</template>
