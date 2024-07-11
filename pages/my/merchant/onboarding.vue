<template>
  <div>
    <!-- Loader -->
    <PageLoader v-if="isPageLoading" />

    <!-- onboarding -->
    <div
      v-else
      class="w-full h-screen flex items-center justify-center bg-slate-200"
    >
      <UCard
        :ui="{ body: { padding: 'p-0', base: 'h-full' } }"
        class="min-w-[750px] min-h-[400px] flex items-center justify-center"
      >
        <div class="flex gap-4 p-4 h-full">
          <div class="flex align-middle justify-center items-center">
            <img :src="heroImage" width="300px" />
          </div>
          <div class="px-6 min-w-[400px]">
            <MerchantForm :merchant_id="merchant_id" />
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
import heroImage from "@/assets/images/facilitators-sm.svg";

// import components
import PageLoader from "~/components/PageLoader.vue";
import MerchantForm from "~/components/facilitators/MerchantForm.vue";

// import services
import { useMerchantService } from "~/composables/useMerchantService";

// services
const { getMyMerchants } = useMerchantService();

// component setup
const isPageLoading = ref(true);
const merchant_id = ref(null);

// mounted
onMounted(async () => {
  // get my merchants
  await getMyMerchants().then((result) => {
    const merchantStatus = result.data.data.user.merchants[0].status;
    const isFirstTime = result.data.data.user.merchants[0].is_first_time;

    // check if merchant status is not onboarding
    useCookie("token").value.user.merchant_status = merchantStatus;
    useCookie("token").value.user.is_first_time = isFirstTime;

    // set merchant id
    merchant_id.value = result.data.data.user.merchants[0].id;

    isPageLoading.value = false;
  });
});
</script>

<style></style>
