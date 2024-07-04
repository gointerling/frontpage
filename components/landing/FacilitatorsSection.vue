<template>
  <div class="bg-gray-50 bg-facilitator">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-8"
    >
      <div class="max-w-[450px]">
        <h1 class="text-5xl font-bold text-primary">THESE FACILITATOR</h1>
        <p class="mt-4 text-xl text-primary">
          Are professional translators. They are certified and recognized as
          experts in their specific fields, ensuring top-quality service and
          reliable results
        </p>
        <button
          class="mt-8 px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-700 transition duration-300"
          @click="navigateTo({ name: 'facilitators' })"
        >
          Let's start translation
        </button>
      </div>

      <img :src="heroImage" alt="hero" class="-mb-3" />
    </div>
  </div>
</template>

<script>
import heroImage from '@/assets/images/facilitators.svg'

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

<style scoped>
.bg-facilitator {
  background-image: url('/assets/images/facilitators-bg.png');
  background-size: contain;
  background-position: center;
}
</style>
