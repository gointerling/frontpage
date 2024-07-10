<template>
  <div>
    <div v-if="!isSmallScreen" class="bg-gray-50 bg-facilitator pt-16">
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
    <div v-else class="bg-gray-50 bg-facilitator-mobile py-8 px-4">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-primary">THESE FACILITATOR</h1>
        <p class="mt-4 text-lg text-primary">
          Are professional translators. They are certified and recognized as
          experts in their specific fields, ensuring top-quality service and
          reliable results
        </p>
        <button
          class="mt-6 px-4 py-2 bg-accent text-white rounded-full hover:bg-accent-700 transition duration-300"
          @click="navigateTo({ name: 'facilitators' })"
        >
          Let's start translation
        </button>
      </div>
      <img
        :src="heroImage"
        alt="hero"
        class="w-full max-w-[300px] mx-auto mt-8"
      />
    </div>
  </div>
</template>

<script>
import heroImage from "@/assets/images/facilitators.svg";

export default {
  data() {
    return {
      heroImage,
      isSmallScreen: false,
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 1024;
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>

<style scoped>
.bg-facilitator {
  background-image: url("/assets/images/facilitators-bg.png");
  background-size: cover;
  background-position: center;
}
.bg-facilitator-mobile {
  background-image: url("/assets/images/facilitators-bg.png");
  background-size: cover;
  background-position: center;
}
</style>
