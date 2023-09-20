<template>
  <li class="p-2">
    <a
      class="rounded-md hover:border hover:border-gray-300 hover:bg-gray-300 hover:bg-opacity-20 p-2"
      >{{ text }}
    </a>
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
