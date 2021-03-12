<template>
  <router-link
    :to="link"
    class="w-full h-full py-6 text-center text-xl tracking-wider font-normal cursor-pointer outline-none transform transition duration-300 ease-in-out hover:bg-indigo-900 dark:hover:bg-gray-700 hover:font-medium"
    ><li v-text="content"></li
  ></router-link>
</template>

<script>
export default {
  name: "LiNav",
  props: ["content", "link"],
};
</script>

<style>
</style>