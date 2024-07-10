<template>
  <div
    :class="[
      '-mt-16 pt-36 pb-12',
      isLinearGradient ? 'banner-container-linear' : 'banner-container',
    ]"
  >
    <div
      class="flex gap-2 px-4 sm:px-6 lg:px-36 items-center sm:justify-between justify-between sm:mb-12"
    >
      <button class="flex gap-2 cursor-pointer" @click="backTo()">
        <nuxt-icon name="back" filled class="text-2xl" />
        <span class="hidden sm:block"> Back </span>
      </button>
      <h6
        class="text-center sm:text-left text-xl sm:text-4xl font-semibold uppercase text-primary sm:mt-0"
      >
        {{ bannerTitle }}
      </h6>
      <div v-if="isTitleVisible" class="flex gap-2 opacity-0">
        <nuxt-icon name="back" filled class="text-2xl opacity-0" />
        <span class="hidden sm:block"> Back </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const props = defineProps({
  isTitleVisible: {
    type: Boolean,
    default: false,
  },
  bannerTitle: {
    type: String,
    default: "Facilitators",
  },
  isLinearGradient: {
    type: Boolean,
    default: false,
  },
  isHistoricalBack: {
    type: Boolean,
    default: false,
  },
});

const backTo = () => {
  // back to specific page
  router.go(-1);
};
</script>

<style>
.banner-container-linear {
  background-image: linear-gradient(
      to bottom,
      rgba(94, 200, 250, 0) 40%,
      rgba(234, 234, 234, 0.276) 55%,
      rgba(255, 255, 255, 1) 100%
    ),
    url("/assets/images/facilitators-blue-bg.png");
  background-size: cover;
  background-position: center;
}

.banner-container {
  background-image: url("/assets/images/facilitators-blue-bg.png");
  background-size: cover;
  background-position: center;
}
</style>
