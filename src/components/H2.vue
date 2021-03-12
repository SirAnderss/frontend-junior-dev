<template>
  <h2
    class="text-lg lg:text-3xl tracking-wide text-gray-600 dark:text-gray-200"
    v-text="content"
  >
  </h2>
</template>

<script>
export default {
  name: "H2",
  props: ["content"],
};
</script>

<style>
</style>