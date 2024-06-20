<!-- banner image  -->
<template>
  <div class="bg-[#5ec8fa] -mt-16 pt-36 pb-12 bg-facilitator">
    <div class="flex gap-2 px-4 sm:px-6 lg:px-36 justify-start">
      <button class="flex gap-2" @click="backTo()">
        <nuxt-icon name="back" filled class="text-2xl" />
        Back
      </button>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

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
