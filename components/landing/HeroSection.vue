<template>
  <div class="bg-[#E4F1F7] -mt-16 pt-36 pb-12">
    <div
      class="mx-auto px-4 sm:px-6 lg:px-36 flex items-center align-middle justify-between"
    >
      <div class="max-w-[450px]">
        <h1 class="text-5xl font-bold text-primary">GOINTERLING</h1>
        <p class="mt-4 text-xl text-primary">
          “Gointerling is a job seeker and hiring service specifically for
          translators and interpreters.”
        </p>
        <p class="mt-2 text-xl text-primary">
          Join gointerling now! Get the best deals for your translation or
          interpreter needs!
        </p>
        <button
          class="mt-8 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-700 transition duration-300"
          @click="navigateTo({ name: 'facilitators' })"
        >
          Let's start translation
        </button>
      </div>
      <img :src="heroImage" />
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
