<template>
  <div class="bg-[#E4F1F7] -mt-16 pt-36 pb-12">
    <div
      class="container mx-auto px-4 sm:px-6 lg:px-36 flex flex-col lg:flex-row items-center justify-between"
    >
      <div
        class="max-w-full lg:max-w-[450px] mb-8 lg:mb-0 text-center lg:text-left"
      >
        <h1 class="text-3xl sm:text-5xl font-bold text-primary">GOINTERLING</h1>
        <p class="mt-4 text-lg sm:text-xl text-primary">
          “Gointerling is a job seeker and hiring service specifically for
          translators and interpreters.”
        </p>
        <p class="mt-2 text-lg sm:text-xl text-primary">
          Join gointerling now! Get the best deals for your translation or
          interpreter needs!
        </p>
        <button
          class="mt-8 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-700 transition duration-300"
          @click="navigateTo({ name: 'facilitators' })"
        >
          Let's start translation
        </button>
      </div>
      <div class="flex justify-center lg:justify-end w-full lg:w-auto">
        <img :src="heroImage" class="max-w-full h-auto" />
      </div>
    </div>
  </div>
</template>

<script>
import heroImage from '@/assets/images/hero.svg'

export default {
  data() {
    return {
      heroImage,
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
  },
}
</script>
