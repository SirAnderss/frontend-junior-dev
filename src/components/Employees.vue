<template>
  <div
    class="employees w-full rounded-xl flex flex-col items-center lg:items-start overflow-hidden shadow-2xl hover:shadow-xl p-8 ml-4 bg-white dark:bg-gray-800"
  >
    <div>
      <H2 content="Employees" />
    </div>
    <div v-if="users.length > 0" class="w-full">
      <div class="w-full pt-8">
        <table
          class="min-w-max w-full table-auto border-t border-l border-r dark:border-gray-600 rounded-t-lg"
        >
          <thead>
            <tr
              class="bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-200 text-xs leading-normal"
            >
              <th class="py-3 px-1 text-left pl-4 w-5/12">Employee</th>
              <th class="py-3 px-1 text-left w-3/12">Last Login</th>
              <th class="py-3 px-1 text-left w-2/12">Departament</th>
              <th class="py-3 px-1 text-left w-1/12">Status</th>
              <th class="py-3 px-1 text-left w-1/12" v-if="lastCol"></th>
            </tr>
          </thead>
        </table>
      </div>
      <simplebar class="table-container h-80 w-full">
        <table
          class="min-w-max w-full table-auto border-b border-l border-r rounded-b-lg"
        >
          <tbody class="text-gray-600 dark:text-gray-200 text-xs font-light">
            <tr
              class="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              v-for="user in users"
              :key="user.id"
            >
              <td class="py-3 px-1 text-left pl-4 w-5/12 whitespace-nowrap">
                <div class="flex items-center">
                  <img
                    :src="user.profile_img"
                    alt=""
                    class="mr-2 w-8 rounded-full"
                  />
                  <div>
                    <p
                      class="text-sm font-semibold"
                      v-text="user.first_name + ' ' + user.last_name"
                    ></p>
                    <p
                      class="text-xs text-gray-500 dark:text-gray-400"
                      v-text="user.email"
                    ></p>
                  </div>
                </div>
              </td>
              <td class="py-3 px-1 text-left w-3/12">
                <div class="flex items-start flex-col">
                  <div
                    v-for="(date, key) in formatDate(user.sessions)"
                    :key="key"
                  >
                    <div
                      v-if="extendKey.id === user.id && extendKey.active"
                      class="text-sm font-semibold flex flex-col"
                    >
                      <span
                        v-text="date.date"
                        class="w-full tracking-wider"
                      ></span>
                      <span
                        v-text="date.last"
                        class="text-xs text-gray-500 dark:text-gray-400"
                      ></span>
                    </div>
                    <div v-else class="text-sm font-semibold flex flex-col">
                      <div v-if="key < 1">
                        <span
                          v-text="date.date"
                          class="w-full tracking-wider inline-block"
                        ></span>
                        <span
                          v-text="date.last"
                          class="text-xs text-gray-500 dark:text-gray-400"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="py-3 px-1 text-left w-2/12">
                <div class="flex items-center justify-start">
                  <span
                    v-text="user.department"
                    class="text-sm font-semibold"
                  ></span>
                </div>
              </td>
              <td class="py-3 px-1 text-left w-1/12">
                <span v-if="user.status" class="text-green-600 font-semibold"
                  >Active</span
                >
                <span v-else class="text-red-600 font-semibold">Inactive</span>
              </td>
              <td
                v-if="multipleRows(user.sessions)"
                class="py-3 px-1 text-center w-1/12"
              >
                <div class="flex item-center justify-center">
                  <i
                    class="arrow down cursor-pointer"
                    :class="{
                      up: extendKey.id === user.id && extendKey.active,
                      'arrow-dark': theme === '',
                      'arrow-light': theme === 'dark',
                    }"
                    @click="extendRows(user.id)"
                  ></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </simplebar>
    </div>
    <div v-else class="w-full h-full flex justify-center items-center">
      <span
        class="text-3xl text-gray-600 dark:text-gray-200 font-bold uppercase tracking-widest"
        >No records found</span
      >
    </div>
  </div>
</template>

<script>
import H2 from "./H2";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
import { dateFormat } from "../resources/dateFormat";

export default {
  name: "employees",
  components: {
    simplebar,
    H2,
  },
  data() {
    return {
      users: [],
      lastCol: false,
      extendKey: { id: null, active: false },
    };
  },
  methods: {
    formatDate(sessions) {
      /* Format API Dates to objects Date */
      const sessionsDate = sessions.map((item) => new Date(item));

      /* Organize and format Date objects to strings */
      return dateFormat(sessionsDate);
    },
    multipleRows(sessions) {
      /* Enable multiples rows if the user has more than one session */
      if (sessions.length > 1) {
        this.lastCol = true;
        return true;
      } else {
        return false;
      }
    },
    extendRows(userId) {
      /* Extend rows if there is no user activated or if the user is different   */
      if (this.extendKey.id !== userId) {
        this.extendKey.id = userId;
        this.extendKey.active = true;
      }
      /* Extends or hide row if the rows is extended or hidden */
      else if (this.extendKey.id === userId && !this.extendKey.active) {
        this.extendKey.active = true;
      } else if (this.extendKey.id === userId && this.extendKey.active) {
        this.extendKey.active = false;
      }
    },
  },
  async created() {
    const userResponse = await fetch("/api/users");
    const users = await userResponse.json();
    this.users = users.users;
  },
};
</script>

<style>
.employees {
  height: 32rem;
}

.table-container {
  overflow-x: hidden !important;
}

.arrow-dark {
  border: solid #111827;
}

.arrow-light {
  border: solid #eeeeee;
}

.arrow {
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.up {
  transform: rotate(-135deg) !important;
}

.down {
  transform: rotate(45deg);
}
</style>