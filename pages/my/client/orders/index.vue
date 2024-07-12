<template>
  <div>
    <!-- Loader -->
    <PageLoader v-if="isPageLoading" />
    <div v-else class="w-full flex flex-col items-center">
      <Navbar :user="user" @logout="logout" class="w-full" />

      <div
        class="flex flex-col md:flex-row justify-between items-stretch w-11/12 my-16 gap-8 px-4 md:px-8 pt-16"
      >
        <!-- side nav -->
        <div class="w-full md:w-3/12">
          <h6 class="font-semibold">Client Dashboard</h6>
          <div class="flex flex-col items-start mt-4">
            <UButton
              v-for="(nav, index) in filteredNavs"
              :key="index"
              block
              class="py-3 px-3.5 flex justify-start bg-white hover:bg-[#FDF1EE] shadow-none"
              :class="selectedTab === nav.key ? 'bg-[#FDF1EE]' : 'bg-white'"
              @click="changeData(nav.key)"
            >
              <nuxt-icon :name="nav.icon" class="text-2xl text-primary" />
              <span class="text-md text-primary">{{ nav.label }}</span>
            </UButton>
          </div>
        </div>

        <!-- Content Wrapper -->
        <div class="w-full md:w-9/12">
          <div v-if="selectedTab === 'order-history'" class="w-full">
            <!-- Personal info -->
            <h6 class="font-semibold mb-3">
              My Order History ({{ totalData ?? 0 }})
            </h6>

            <div class="flex flex-col md:flex-row gap-2 mb-4 justify-between">
              <UInputMenu
                :options="[
                  { label: 'All', value: '', color: 'gray' },
                  { label: 'Completed', value: 'completed', color: 'blue' },
                  { label: 'In Progress', value: 'paid', color: 'green' },
                  {
                    label: 'Waiting Payment & Verication',
                    value: 'waitingpaid',
                    color: 'orange',
                  },
                  { label: 'Pending', value: 'pending', color: 'violet' },
                  { label: 'Failed', value: 'failed', color: 'red' },
                ]"
                v-model="selectedStatus"
                placeholder="Status"
                by="value"
                option-attribute="label"
                :search-attributes="['label']"
                @change="filterFacilitators"
                class="max-w-[180px]"
              />
              <UInput
                icon="i-heroicons-magnifying-glass-20-solid"
                size="sm"
                color="white"
                :trailing="false"
                placeholder="Search Facilitator"
                v-model="searchQuery"
              />
            </div>

            <div
              v-if="isContentLoading"
              class="flex w-full justify-center items-center py-4"
            >
              <UIcon
                name="i-ph-rocket-launch"
                dynamic
                class="text-xl text-gray-600"
              />
              Loading Data...
            </div>
            <div v-else>
              <UCard>
                <div class="flex flex-col gap-4">
                  <UCard
                    v-for="(order, index) in orders"
                    :key="index"
                    :ui="{
                      header: {
                        padding: 'px-4 py-2 sm:px-3',
                      },
                      body: {
                        padding: 'px-4 py-0  sm:p-3',
                      },
                    }"
                  >
                    <template #header>
                      <div class="flex justify-between items-center">
                        <div class="flex items-center gap-2 capitalize">
                          <UIcon name="i-heroicons-language" />
                          <span class="font-semibold">
                            {{ order.merchant.type }}
                          </span>
                        </div>
                        <div class="flex justify-between items-center gap-2">
                          <UBadge
                            variant="soft"
                            :color="
                              resolveOrderStatus(order.order_status).color
                            "
                          >
                            <span class="capitalize">{{
                              resolveOrderStatus(order.order_status).text
                            }}</span>
                          </UBadge>
                        </div>
                      </div>
                    </template>
                    <div
                      class="flex flex-row gap-3 justify-between items-center py-2"
                    >
                      <div class="flex gap-3">
                        <div class="">
                          <UAvatar
                            :alt="order.merchant_user.fullname"
                            :src="order.merchant_user.photo"
                            size="lg"
                            imgClass="object-cover"
                          />
                        </div>
                        <div class="flex flex-col">
                          <span class="font-semibold text-primary">
                            {{ order.merchant_user.fullname }}
                          </span>
                          <div
                            class="flex flex-wrap gap-2 text-xs text-gray-700"
                          >
                            <span class="hidden md:block">{{
                              order.service.name
                            }}</span>
                            <span>
                              ({{ order.language_source.name }} -
                              {{ order.language_destination.name }})
                            </span>
                            <span class="hidden md:block">x 1</span>
                          </div>

                          <span class="font-semibold text-primary text-md">
                            {{ formatPrice(order.price) }}
                          </span>
                        </div>
                      </div>
                      <UButton
                        color="primary"
                        class="text-white mr-4"
                        @click="
                          navigateTo({
                            name: 'my-client-orders-id',
                            params: { id: order.id },
                          })
                        "
                      >
                        Detail
                      </UButton>
                    </div>
                  </UCard>

                  <div class="flex flex-col" v-if="orders.length === 0">
                    <div class="flex flex-col items-center justify-center">
                      <span class="text-gray-400">No orders found</span>
                    </div>
                  </div>

                  <div class="flex flex-col" v-if="!isLastPage">
                    <UButton
                      block
                      @click="loadMore"
                      class="mt-4 bg-accent"
                      :loading="isButtonLoading"
                    >
                      <!-- <nuxt-icon name="floppy" class="text-white" /> -->
                      Load More
                    </UButton>
                  </div>
                </div>
              </UCard>
            </div>
          </div>

          <div v-if="selectedTab === 'ads-history'" class="w-full">
            <!-- Personal info -->
            <h6 class="font-semibold mb-3">
              My Ads History ({{ totalData ?? 0 }})
            </h6>

            <div class="flex flex-col md:flex-row gap-2 mb-4 justify-between">
              <UInputMenu
                :options="[
                  { label: 'All', value: '', color: 'gray' },
                  { label: 'Active', value: 'active', color: 'blue' },
                  { label: 'Pending', value: 'pending', color: 'orange' },
                  { label: 'Inactive', value: 'inactive', color: 'red' },
                ]"
                v-model="selectedStatus"
                placeholder="Status"
                by="value"
                option-attribute="label"
                :search-attributes="['label']"
                @change="filterFacilitators"
                class="max-w-[180px]"
              />
              <UInput
                icon="i-heroicons-magnifying-glass-20-solid"
                size="sm"
                color="white"
                :trailing="false"
                placeholder="Search Ads"
                v-model="searchQuery"
              />
            </div>

            <div
              v-if="isContentLoading"
              class="flex w-full justify-center items-center py-4"
            >
              <UIcon
                name="i-ph-rocket-launch"
                dynamic
                class="text-xl text-gray-600"
              />
              Loading Data...
            </div>
            <div v-else>
              <UCard>
                <div class="flex flex-col gap-4">
                  <UCard
                    v-for="(advertisement, index) in advertisements"
                    :key="index"
                    :ui="{
                      header: {
                        padding: 'px-4 py-2 sm:px-3',
                      },
                      body: {
                        padding: 'px-4 py-0  sm:p-3',
                      },
                    }"
                  >
                    <template #header>
                      <div class="flex justify-between items-center">
                        <div class="flex items-center gap-2 capitalize">
                          <UIcon name="i-heroicons-megaphone" />
                          <span class="font-semibold">
                            {{ advertisement.package.name }}
                          </span>
                        </div>
                        <div class="flex justify-between items-center gap-2">
                          <UBadge
                            variant="soft"
                            :color="
                              resolveOrderStatus(advertisement.status).color
                            "
                          >
                            <span class="capitalize">{{
                              resolveOrderStatus(advertisement.status).text
                            }}</span>
                          </UBadge>
                        </div>
                      </div>
                    </template>
                    <div
                      class="flex flex-row gap-3 justify-between items-center py-2"
                    >
                      <div class="flex gap-3">
                        <div class="">
                          <UAvatar
                            :alt="advertisement.name"
                            :src="advertisement.image_url"
                            size="lg"
                            imgClass="object-cover"
                          />
                        </div>
                        <div class="flex flex-col">
                          <span class="font-semibold text-primary">
                            {{ advertisement.name }}
                          </span>
                          <div
                            class="flex flex-wrap gap-2 text-xs text-gray-700"
                          >
                            <span>{{ advertisement.tagline }}</span>
                            <span>x 1</span>
                          </div>

                          <span class="font-semibold text-primary text-md">
                            {{ formatPrice(advertisement.package.price) }}
                          </span>
                        </div>
                      </div>
                      <UButton
                        color="primary"
                        class="text-white mr-4"
                        @click="
                          navigateTo({
                            name: 'ads-setup',
                            query: {
                              transaction_id: advertisement.id,
                              section: 'payment',
                            },
                          })
                        "
                      >
                        Detail
                      </UButton>
                    </div>
                  </UCard>

                  <div class="flex flex-col" v-if="advertisements.length === 0">
                    <div class="flex flex-col items-center justify-center">
                      <span class="text-gray-400">No advertisements found</span>
                    </div>
                  </div>

                  <div class="flex flex-col" v-if="!isLastPage">
                    <UButton
                      block
                      @click="loadMore"
                      class="mt-4 bg-accent"
                      :loading="isButtonLoading"
                    >
                      <!-- <nuxt-icon name="floppy" class="text-white" /> -->
                      Load More
                    </UButton>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// components
import PageLoader from "~/components/PageLoader.vue";
import Navbar from "~/components/Navbar.vue";
import ServiceTab from "~/components/profile/ServiceTab.vue";

// imports
import { ref, onMounted } from "vue";
const toast = useToast();
const route = useRoute();
const router = useRouter();

// services
import { useMerchantService } from "~/composables/useMerchantService";
import { useOrderService } from "~/composables/useOrderService";
import { useAdvertisementService } from "~/composables/useAdvertisementService";

import { useDebounceFn } from "@vueuse/core";

const { getMyOrders } = useOrderService();
const { getMyAds } = useAdvertisementService();

// navs
const fileInput = ref(null);
const navs = [
  {
    key: "order-history",
    label: "Order History",
    icon: "user-circle",
    scope: "all",
  },
  {
    key: "ads-history",
    label: "Ads History",
    icon: "ads-report",
    scope: "all",
  },
];

const modalData = ref({
  title: "",
  content: "",
  confirmText: "",
  cancelText: "",
  callback: null,
});

// state
const isPageLoading = ref(true);
const isConfirmationModalOpen = ref(false);
const isButtonLoading = ref(false);
const isContentLoading = ref(false);
const selectedTab = ref("order-history");

// data
const user = ref({
  fullname: "",
  photo: "",
  email: "",
  phone: "",
  address: "",
  role: "",
  personal_description: "",
  main_skills: [],
  additional_skills: [],
  is_admin: false,
  is_facilitator: false,
});

const orders = ref([]);
const advertisements = ref([]);
const perPage = ref(5);
const isLastPage = ref(false);
const totalData = ref(0);
const selectedStatus = ref({
  label: "All",
  value: "",
  color: "gray",
});
const searchQuery = ref("");

const filteredNavs = computed(() => {
  if (!user.value) return [];

  const isAdmin = user.value.is_admin ?? false;
  const isMerchant = user.value.is_facilitator ?? false;

  return navs.filter(
    (nav) =>
      nav.scope === "all" ||
      (nav.scope === "admin" && isAdmin) ||
      (nav.scope === "merchant" && isMerchant)
  );
});

// methods
// resolve order status
const resolveOrderStatus = (status) => {
  switch (status) {
    case "completed":
      return {
        color: "green",
        text: "Completed",
      };

    case "active":
      return {
        color: "blue",
        text: "Active",
      };

    case "paid":
      return {
        color: "blue",
        text: "In Progress",
      };

    case "pending":
      return {
        color: "orange",
        text: "Pending",
      };

    case "waitingpaid":
      return {
        color: "orange",
        text: "Waiting Payment & Verication",
      };

    case "failed":
      return {
        color: "red",
        text: "Failed",
      };

    default:
      return {
        color: "gray",
        text: "Unknown",
      };
  }
};

const openNewTab = (url) => {
  window.open(url, "_blank");
};

const navigateTo = (route) => {
  router.push(route);
};

// logout
const logout = () => {
  console.log("Logging out...");
  useCookie("token").value = null;
  user.value = {
    fullname: "",
    photo: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    personal_description: "",
    main_skills: [],
    additional_skills: [],
    is_admin: false,
    is_facilitator: false,
  };
};

// check if json
const checkIfJSON = (data) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

const loadMore = async () => {
  isButtonLoading.value = true;
  perPage.value = perPage.value + 5;

  fetchAll();
};

const fetchAll = async () => {
  if (selectedTab.value === "order-history") {
    await fetchMyOrders();
  }

  if (selectedTab.value === "ads-history") {
    await fetchMyAds();
  }
};

const filterFacilitators = async () => {
  isContentLoading.value = true;
  perPage.value = 5;

  fetchAll();
};

const resetFilter = () => {
  searchQuery.value = "";
  perPage.value = 5;
  isLastPage.value = false;

  // set to first array of status
  selectedStatus.value = { label: "All", value: "", color: "gray" };
};

const changeData = async (nav) => {
  selectedTab.value = nav;

  // set query params
  router.push({
    query: {
      section: nav,
    },
  });

  isContentLoading.value = true;

  resetFilter();

  fetchAll();
};

// fetch user data on mount
const fetchUser = async () => {
  try {
    user.value = useCookie("token").value.user || null;
  } catch (error) {
    console.error("Fetching user failed:", error);
  }
};

const fetchMyOrders = async () => {
  try {
    const { data } = await getMyOrders({
      page: 1,
      per_page: perPage.value,
      order_status: selectedStatus.value.value,
      search: searchQuery.value,
    });

    orders.value = data.data.orders.data;

    // check if last page
    isLastPage.value =
      data.data.orders.current_page === data.data.orders.last_page;

    totalData.value = data.data.orders.total;
  } catch (error) {
    console.error("Fetching orders failed:", error);
  } finally {
    isButtonLoading.value = false;
    isContentLoading.value = false;
  }
};

const fetchMyAds = async () => {
  try {
    const { data } = await getMyAds({
      page: 1,
      per_page: perPage.value,
      search: searchQuery.value,
      status: selectedStatus.value.value,
    });

    advertisements.value = data.data.advertisements.data;

    // check if last page
    isLastPage.value =
      data.data.advertisements.current_page ===
      data.data.advertisements.last_page;

    totalData.value = data.data.advertisements.total;
  } catch (error) {
    console.error("Fetching orders failed:", error);
  } finally {
    isButtonLoading.value = false;
    isContentLoading.value = false;
  }
};

const getFirstErrorMessage = (errors) => {
  for (const field in errors) {
    if (errors[field].length > 0) {
      return errors[field][0];
    }
  }
  return null;
};

// watch for changes
watch(selectedStatus, async (newVal) => {
  fetchAll();
});

watch(
  searchQuery,
  useDebounceFn(async () => {
    fetchAll();
  }, 300),
  {
    immediate: true,
  }
);

onMounted(async () => {
  // set selected tab
  selectedTab.value = route.query.section ?? "order-history";

  // fetch user data
  if (useCookie("token").value) {
    await fetchUser();

    if (selectedTab.value === "order-history") {
      await fetchMyOrders();
    }

    if (selectedTab.value === "ads-history") {
      await fetchMyAds();
    }
  }

  // set page loading to false

  isPageLoading.value = false;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
</script>
