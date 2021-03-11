<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.main {
  height: calc(100vh - 15rem);
}

/* Table with rounded corners and tailwind shadows bug */
table {
  border-collapse: separate;
  border-spacing: 0;
}

table tr th,
table tr td {
  border-bottom: 1px solid #e5e7eb;
}
/* Table with rounded corners and tailwind shadows bug */
</style>
