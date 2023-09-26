<template>
  <li
    class="rounded-md p-1 hover:cursor-pointer hover:bg-surface-200 hover:text-accent-200"
  >
    <span>{{ text }} </span>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
