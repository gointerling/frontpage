<template>
  <div class="flex justify-center items-center h-screen">
    <nuxt-icon name="logo" class="text-primary text-4xl animate-pulse" />
  </div>
</template>

<script>
export default {
  name: "PageLoader",
  data() {
    return {};
  },
};
</script>

<style>
/* animate pulse */
@keyframes pulse {
  0% {
    transform: scale(1.1);
    opacity: 0.5;
  }

  70% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
