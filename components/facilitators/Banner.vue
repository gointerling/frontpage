<!-- banner image  -->
<template>
  <div class="bg-[#5ec8fa] -mt-16 pt-36 pb-12 bg-facilitator">
    <div
      class="flex gap-2 px-4 sm:px-6 lg:px-36 items-center"
      :class="isTitleVisible ? 'justify-between' : 'justify-start'"
    >
      <button class="flex gap-2" @click="backTo()">
        <nuxt-icon name="back" filled class="text-2xl" />
        Back
      </button>
      <h6
        class="flex justify-center text-4xl font-semibold uppercase text-primary"
      >
        Advertising Form on Gointerling Website
      </h6>
      <div v-if="isTitleVisible" class="flex gap-2 opacity-0">
        <nuxt-icon name="back" filled class="text-2xl opacity-0" />
        Back
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const props = defineProps({
  isTitleVisible: {
    type: Boolean,
    default: false,
  },
})

const backTo = () => {
  // back to previous page history
  router.go(-1)
}
</script>

<style>
.bg-facilitator {
  background-image: url('/assets/images/facilitators-blue-bg.png');
  background-size: contain;
  background-position: center;
}
</style>
