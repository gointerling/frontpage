<template>
  <div>
    <PageLoader v-if="isPageLoading" />
    <div v-else class="w-full">
      <Navbar :user="user" @logout="logout" />
      <Banner is-title-visible is-historical-back class="min-h-[250px] pt-60" />
      <div class="mt-8 sm:mt-0 py-20 sm:py-8 px-4 lg:px-36">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 md:col-span-4 lg:col-span-3 -mt-20">
            <UserSidebar :data="merchant" @order="isOrderSidebarOpen = true" />
          </div>
          <div class="col-span-12 md:col-span-4 lg:col-span-9">
            <Detail :data="merchant" />
          </div>
        </div>
      </div>
    </div>

    <!-- Order Sidebar -->
    <OrderSidebar
      :isOpen="isOrderSidebarOpen"
      :data="selectedMerchant"
      @hide="isOrderSidebarOpen = false"
    />
  </div>
</template>

<script setup>
import PageLoader from "~/components/PageLoader.vue";
import Navbar from "~/components/Navbar.vue";
import Banner from "~/components/facilitators/Banner.vue";
import UserSidebar from "~/components/facilitators/UserSidebar.vue";
import Detail from "~/components/facilitators/Detail.vue";
import OrderSidebar from "~/components/facilitators/OrderSidebar.vue";

// composable
import { useMerchantService } from "~/composables/useMerchantService";
const { getMerchantDetails } = useMerchantService();

// ref
import { ref, computed, onMounted } from "vue";
const route = useRoute();

// current facilitator id from route params
const id = ref(route.params.id);

// state
const isPageLoading = ref(true);
const isOrderSidebarOpen = ref(false);

// data
const user = ref(null);
const merchant = ref({
  services: [],
});

const selectedMerchant = computed(() => {
  // format with service->merchants->users
  const service = { ...merchant.value.services[0] };
  const dataMerchant = { ...merchant.value };

  // remove services from merchant
  delete dataMerchant.services;

  return {
    ...service,
    merchants: [dataMerchant],
  };
});

// methods
const logout = () => {
  useCookie("token").value = null;
  user.value = null;
};

// fetch users
const fetchUser = async () => {
  try {
    user.value = useCookie("token").value.user || null;
  } catch (error) {
    console.error("Fetching user failed:", error);
  }
};

// fetch merchant details
const fetchFacilitators = async () => {
  await getMerchantDetails(id.value).then((result) => {
    merchant.value = result.data.data.merchant;
    isPageLoading.value = false;
  });
};

onMounted(async () => {
  await fetchFacilitators();

  if (useCookie("token").value) {
    await fetchUser();
  }
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
