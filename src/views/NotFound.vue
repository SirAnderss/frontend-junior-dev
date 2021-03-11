<template>
  <div class="h-screen w-screen bg-gray-100 dark:bg-gray-900 flex items-center">
    <div
      class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 dark:text-gray-200"
    >
      <div class="max-w-md">
        <div class="text-5xl font-dark font-bold">404</div>
        <p class="text-2xl md:text-3xl font-light leading-normal">
          Sorry we couldn't find this page.
        </p>
        <p class="mb-8">
          But dont worry, you can find plenty of other things on our homepage.
        </p>

        <router-link to="/"
          ><button
            class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white dark:text-gray-700 transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-indigo-700 dark:bg-gray-300 active:bg-blue-600 dark:hover:bg-gray-200 hover:bg-indigo-800"
          >
            Back to Home
          </button></router-link
        >
      </div>
      <div class="max-w-lg">
        <img src="@/assets/Cat.svg" alt="Not Found" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style>
</style>