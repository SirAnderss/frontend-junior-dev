<template>
  <div
    class="bg-indigo-700 dark:bg-gray-800 w-full h-20 px-12 rounded-lg flex justify-between items-center shadow-xl"
  >
    <div class="nav w-full h-full flex items-center">
      <div class="logo w-2/12">
        <router-link to="/" class="text-3xl text-white font-bold uppercase"
          >Logo</router-link
        >
      </div>
      <ul
        class="menu w-6/12 h-full flex justify-around items-center text-white font-bold"
      >
        <LiNav link="/" content="Home" />
        <LiNav link="/some" content="Some" />
        <LiNav link="/another" content="Another" />
        <LiNav link="/other" content="Other" />
      </ul>
    </div>
    <div class="profile float-right">
      <div class="relative flex items-center">
        <button
          v-if="!dark"
          class="h-10 w-10 text-yellow-400 focus:outline-none"
          @click="darkMode()"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </button>
        <button
          v-else
          class="h-10 w-10 text-white focus:outline-none"
          @click="darkMode()"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </button>
        <img
          src="https://images.generated.photos/9UyoCOD1Q6qDokgy6WrURCoMsN1tcyQxjHFtbF5R41k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzA4NzFfMDg2/MzMyOV8wNTIzNzI4/LmpwZw.jpg"
          alt="Profile avatar"
          @click="userMenu()"
          class="w-12 rounded-full border-2 border-white dark:border-gray-600 cursor-pointer"
        />
        <div
          class="absolute bg-white dark:bg-gray-700 w-64 right-2 top-12 mt-2 shadow-lg rounded-lg opacity-0 transition duration-400 ease-in-out"
          :class="{
            'block opacity-100': profileMenu,
            hidden: !profileMenu,
          }"
        >
          <div
            class="flex justify-around pt-3 px-3 border-b dark:border-gray-700"
          >
            <div
              class="avatar-icon w-7 h-7 table rounded-full bg-gray-600 dark:bg-gray-300 overflow-hidden border-b-4 border-gray-600 dark:border-gray-300"
            >
              <div
                class="avatar-icon-body relative table-cell align-middle"
              ></div>
            </div>
            <div class="w-9/12 mb-3">
              <h3
                class="inline-block text-gray-600 dark:text-gray-200 font-semibold"
              >
                My Profile
              </h3>
              <span
                class="inline-block text-gray-400 dark:text-gray-300 text-sm font-light"
                >Change settings of your profile</span
              >
            </div>
          </div>
          <div
            @click="userMenu()"
            class="flex justify-around items-center px-3 my-3 cursor-pointer"
          >
            <div class="logout-icon w-8 h-5 table">
              <div
                class="logout-icon-body relative h-full table-cell align-middle border-l-2 border-red-600"
              ></div>
            </div>
            <div class="w-9/12">
              <p class="text-red-600 font-semibold">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LiNav from "./LiNav";
export default {
  name: "navbar",
  components: { LiNav },
  data() {
    return {
      profileMenu: false,
      dark: false,
    };
  },
  methods: {
    userMenu() {
      this.profileMenu = !this.profileMenu;
    },
    darkMode() {
      let htmlClasses = document.querySelector("html").classList;

      if (localStorage.theme === "dark") {
        htmlClasses.remove("dark");
        localStorage.removeItem("theme");
      } else {
        htmlClasses.add("dark");
        localStorage.theme = "dark";
      }

      this.dark = !this.dark;
    },
  },
};
</script>

<style>
.avatar-icon-body::before,
.avatar-icon-body::after {
  content: "";
  position: absolute;
  background-color: #fff;
  left: 50%;
  transform: translateX(-50%);
}

.avatar-icon-body::before {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  top: 30%;
}

.avatar-icon-body::after {
  width: 20px;
  height: 12px;
  border-radius: 50%;
  bottom: -5px;
}

.logout-icon-body::before,
.logout-icon-body::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.logout-icon-body::before {
  width: 14px;
  height: 2px;
  left: 3px;
  background-color: #dc2626;
}

.logout-icon-body::after {
  width: 0;
  height: 0;
  border-left: 8px solid #dc2626;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  left: 14px;
}
</style>