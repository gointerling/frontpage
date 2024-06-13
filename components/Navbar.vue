<template>
  <div class="relative px-24 top-6">
    <nav class="bg-white rounded-full shadow min-w-full">
      <div class="flex justify-between h-16 px-8">
        <!-- Logo -->
        <div class="flex">
          <div class="flex-shrink-0 flex items-center align-middle">
            <nuxt-icon name="logo" class="text-primary text-3xl" />
            <span class="text-primary ml-2">gointerling</span>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="#"
              class="inline-flex items-center px-1 pt-1 border-b-2 font-semibold border-primary text-sm leading-5 text-gray-900 focus:outline-none focus:border-blue-900 transition duration-150 ease-in-out"
            >
              Facilitators List
            </a>
          </div>
        </div>

        <!-- Button -->
        <div v-if="!user" class="hidden sm:ml-6 sm:flex sm:items-center">
          <button
            class="px-4 py-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"
          >
            Sign in
          </button>
        </div>

        <!-- User -->
        <div v-else class="py-4">
          <div class="sm:ml-6 sm:flex sm:items-center">
            <div class="relative" x-data="{ open: false }">
              <!-- Button -->
              <button
                @click="open = !open"
                class="flex items-center align-middle text-sm font-medium text-gray-900 rounded-full focus:outline-none focus:shadow-outline"
              >
                <div class="flex align-middle items-center gap-6 mr-4">
                  <nuxt-icon name="badge" class="text-2xl" filled />
                  <nuxt-icon name="order" class="text-2xl" filled />
                  <nuxt-icon name="notification" class="text-2xl" filled />
                </div>
                <img
                  :src="user.photo"
                  alt="avatar"
                  class="w-8 h-8 mx-2 rounded-full"
                />
                <span class="mx-2">{{ user.name }}</span>
                <nuxt-icon name="chevron-simple-down" class="mx-4" filled />
              </button>

              <!-- Dropdown -->
              <div
                v-show="open"
                @click.away="open = false"
                class="absolute right-0 z-10 mt-4 w-48 py-1 bg-white rounded-lg shadow-lg"
              >
                <a
                  href="#"
                  class="flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <nuxt-icon name="user-circle" class="text-2xl"></nuxt-icon>
                  Profile
                </a>
                <a
                  href="#"
                  class="flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <nuxt-icon name="history" class="text-2xl"></nuxt-icon>

                  Order History
                </a>
                <a
                  href="#"
                  class="flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <nuxt-icon name="logout" class="text-2xl"></nuxt-icon>
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// const image url
export default {
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      logo: "https://fastly.picsum.photos/id/579/200/300.jpg?hmac=9MD8EV4Jl9EqKLkTj5kyNdBUKQWyHk2m4pE4UCBGc8Q",
      open: false,
    };
  },
};
</script>

<style>
.nav-center {
  left: 50%;
  transform: translateX(-50%);
}
</style>
