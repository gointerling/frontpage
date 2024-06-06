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
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <button
            class="px-4 py-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"
          >
            Sign in
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// const image url
export default {
  data() {
    return {
      logo: "https://fastly.picsum.photos/id/579/200/300.jpg?hmac=9MD8EV4Jl9EqKLkTj5kyNdBUKQWyHk2m4pE4UCBGc8Q",
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
