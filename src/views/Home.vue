<template>
  <div class="h-screen pt-6 px-6 bg-gray-200 dark:bg-gray-900">
    <Navbar />
    <div class="h-16 px-10 flex items-center text-gray-600 dark:text-gray-00 text-xl">
      <router-link :to="this.$route.path" class="mr-2">{{ this.$route.name }}</router-link> /
      <span class="ml-2 underline">&nbsp;Reports & Insights</span>
    </div>
    <div class="main w-full mx-auto flex justify-around">
      <Reports />
      <Employees />
    </div>
  </div>
</template>

<script>
import Reports from "../components/Reports";
import Employees from "../components/Employees";
import Navbar from "../components/Navbar";
export default {
  name: "home",
  components: { Employees, Reports, Navbar },
  data() {
    return {
      slug: "",
    };
  },
};
</script>

<style>
</style>