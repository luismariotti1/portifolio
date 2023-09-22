<template>
  <li>
    <a>{{ text }} </a>
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
