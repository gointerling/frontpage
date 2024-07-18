<template>
  <div>
    <NuxtLayout name="admin">
      <div class="w-full h-full p-2 flex flex-col justify-center items-center">
        <img :src="comingSoon" alt="" width="300px" />
        <span class="font-semibold text-2xl text-primary">
          Dashboard Coming Really Soon
        </span>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

import comingSoon from "~/assets/images/empty-dashboard.svg";
</script>
