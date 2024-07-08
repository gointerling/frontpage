<template>
  <div>
    <div
      v-if="!isSmallScreen"
      class="flex items-center justify-center relative h-[500px] bg-white"
    >
      <!-- Welcome Card -->
      <div
        class="bg-white rounded-xl shadow-md p-8 max-w-3xl flex gap-4 justify-between z-30 relative-card h-full"
      >
        <img :src="welcomeImage" alt="Welcome Image" />
        <div>
          <h2 class="text-2xl text-primary font-bold mb-4">
            Welcome to Gointerling
          </h2>
          <p class="text-primary mb-6">
            Your ultimate destination for all language services. Our platform
            offers top-notch professional translators for seamless real-time
            spoken language support and translation for accurate and polished
            written content. Whether you're hosting an international event or
            need precise document translation, our expert translators are ready
            to elevate your communication.
          </p>
        </div>
      </div>
      <!-- Translator Card -->
      <div
        class="bg-[#E4F1F7] h-full rounded-r-xl shadow-md pl-10 pr-6 py-6 max-w-3xl flex flex-col gap-4 justify-between items-center z-20 left-0"
        style="transform: translateX(-25%)"
      >
        <div class="h-full flex flex-column items-center align-middle">
          <h4 class="text-[#B8D7E5] text-3xl font-semibold text-rotate">
            Translator
          </h4>
        </div>
        <button
          class="bg-accent p-3 rounded-full text-white hover:bg-accent-700 transition duration-300"
        >
          <nuxt-icon name="chevron-right" class="text-white" />
        </button>
      </div>
      <!-- Interpreting Card -->
      <div
        class="bg-[#7DCAE8] h-full rounded-r-xl shadow-md pl-10 pr-6 py-6 max-w-3xl flex flex-col gap-4 justify-between items-center z-10 left-0"
        style="transform: translateX(-50%)"
      >
        <div class="h-full flex flex-column items-center align-middle">
          <h4 class="text-[#4FAED3] text-3xl font-semibold text-rotate">
            Interpreting
          </h4>
        </div>
        <button
          class="bg-accent p-3 rounded-full text-white hover:bg-accent-700 transition duration-300"
        >
          <nuxt-icon name="chevron-right" class="text-white" />
        </button>
      </div>
    </div>
    <div v-else class="p-4 bg-white">
      <!-- Small screen layout -->
      <div class="bg-white rounded-xl shadow-md p-6 mb-4">
        <img :src="welcomeImage" alt="Welcome Image" class="w-full mb-4" />
        <h2 class="text-xl text-primary font-bold mb-2">
          Welcome to Gointerling
        </h2>
        <p class="text-primary text-sm mb-4">
          Your ultimate destination for all language services. Our platform
          offers top-notch professional translators for seamless real-time
          spoken language support and translation for accurate and polished
          written content.
        </p>
      </div>
      <div
        class="bg-[#E4F1F7] rounded-xl shadow-md p-4 mb-4 flex justify-between items-center"
      >
        <h4 class="text-[#B8D7E5] text-2xl font-semibold">Translator</h4>
        <button
          class="bg-accent p-2 rounded-full text-white hover:bg-accent-700 transition duration-300"
        >
          <nuxt-icon name="chevron-right" class="text-white" />
        </button>
      </div>
      <div
        class="bg-[#7DCAE8] rounded-xl shadow-md p-4 flex justify-between items-center"
      >
        <h4 class="text-[#4FAED3] text-2xl font-semibold">Interpreting</h4>
        <button
          class="bg-accent p-2 rounded-full text-white hover:bg-accent-700 transition duration-300"
        >
          <nuxt-icon name="chevron-right" class="text-white" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import welcomeImage from '@/assets/images/welcome.svg'

export default {
  data() {
    return {
      welcomeImage,
      isSmallScreen: false,
    }
  },
  mounted() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 768
    },
  },
}
</script>

<style scoped>
.text-rotate {
  writing-mode: sideways-lr;
  text-orientation: mixed;
}
.relative-card {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
