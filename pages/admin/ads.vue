<template>
  <div class="">
    <NuxtLayout name="admin">
      <div class="w-full pt-0 p-6 flex flex-col gap-2">
        <UCard
          :ui="{
            body: {
              base: 'flex justify-between items-center',
              background: '',
              padding: 'p-2 sm:p-4',
            },
          }"
        >
          <h6 class="font-semibold">{{ pageTitle }}</h6>

          <!-- search and filter -->
          <div class="flex gap-2">
            <UInputMenu
              :options="statusList"
              v-model="selectedStatus"
              placeholder="Pilih Status"
              by="value"
              option-attribute="label"
              :search-attributes="['label']"
              class="max-w-[180px]"
            />
            <UInput
              icon="i-heroicons-magnifying-glass-20-solid"
              size="sm"
              color="white"
              :trailing="false"
              placeholder="Search Ads Transactions"
              v-model="searchQuery"
            />
          </div>
        </UCard>
        <UCard
          :ui="{
            body: {
              base: 'flex flex-col gap-4',
            },
          }"
        >
          <UTable
            :rows="advertisements"
            :loading="isTableLoading"
            :loading-state="{
              icon: 'i-heroicons-arrow-path-20-solid',
              label: 'Loading...',
            }"
          >
            <template #title-data="{ row }">
              <div class="flex items-center gap-2">
                <UTooltip
                  :text="row.title"
                  :popper="{ arrow: true }"
                  :ui="{
                    base: '[@media(pointer:coarse)]:hidden h-full px-1 py-1 text-xs font-normal text-wrap text-center',
                  }"
                >
                  <!-- text wrap -->
                  <span
                    class="text-primary font-semibold truncate max-w-40 cursor-pointer"
                  >
                    {{ row.title }}
                  </span>
                </UTooltip>
              </div>
            </template>
            <template #content-data="{ row }">
              <div
                v-if="row.content"
                class="flex flex-col gap-1 items-start capitalize"
              >
                <span class="text-primary font-semibold">
                  {{ row.content.tagline }}
                </span>
                <UTooltip
                  :text="row.content.description"
                  :popper="{ arrow: true }"
                  :ui="{
                    base: '[@media(pointer:coarse)]:hidden h-full px-2 py-1 text-xs font-normal text-wrap text-center',
                  }"
                >
                  <p
                    class="text-gray-600 max-w-72 text-sm truncate cursor-pointer"
                  >
                    {{ row.content.description }}
                  </p>
                </UTooltip>
              </div>

              <span v-else class="text-gray-300"> Kosong </span>
            </template>

            <template #package-data="{ row }">
              <div
                v-if="row.package"
                class="flex flex-col gap-1 items-start capitalize"
              >
                <span class="text-primary font-semibold">
                  {{ row.package.name }}
                </span>
                <span class="text-accent">
                  {{ formatPrice(row.package.price) }}
                </span>
                <span class="text-gray-500">
                  {{ row.package.duration }} bulan
                </span>
              </div>

              <span v-else class="text-gray-300"> Kosong </span>
            </template>

            <template #valid-data="{ row }">
              <div
                v-if="row.valid"
                class="flex flex-col gap-1 items-start capitalize"
              >
                <span
                  class="text-primary font-semibold flex flex-col gap-1 items-start"
                >
                  Sampai {{ formatDate(row.valid) }}

                  <UBadge
                    :color="resolveStatusColor(row.status)"
                    class="text-xs"
                    variant="soft"
                  >
                    {{ minDay(row.valid) }} Hari Lagi
                  </UBadge>
                </span>
              </div>

              <span v-else-if="row.status === 'inactive'" class="text-gray-300">
                Iklan Tidak Aktif
              </span>
              <span v-else class="text-gray-300"> Kosong </span>
            </template>

            <template #payment-data="{ row }">
              <div
                v-if="row.payment"
                class="flex flex-col gap-1 items-start capitalize"
              >
                <UButton @click="openLink(row.payment)">
                  Bukti transfer
                </UButton>
              </div>

              <span v-else class="text-gray-300"> Kosong </span>
            </template>

            <template #status-data="{ row }">
              <div
                v-if="row.status"
                class="flex flex-col gap-1 items-start capitalize"
              >
                <UBadge
                  :color="resolveStatusColor(row.status)"
                  class="text-xs"
                  variant="soft"
                >
                  {{ row.status }}
                </UBadge>
              </div>

              <span v-else class="text-gray-300"> Kosong </span>
            </template>

            <template #actions-data="{ row }">
              <div class="flex gap-1">
                <UTooltip
                  v-if="
                    row.actions.status === 'pending' ||
                    row.actions.status === 'inactive'
                  "
                  text="Accept Ads Payment"
                >
                  <UButton
                    icon="i-heroicons-check"
                    size="2xs"
                    color="green"
                    variant="outline"
                    :ui="{ rounded: 'rounded-full' }"
                    square
                    @click="
                      displayConfirmationModal(
                        'Hang On',
                        'Are you sure you want to activate this advertisement?',
                        'Activate',
                        'Cancel',
                        () => {
                          updateClientAdsStatus(row.actions.id, 'active');
                        }
                      )
                    "
                  />
                </UTooltip>
                <UTooltip
                  v-if="row.actions.status === 'active'"
                  text="Deactivate Ads"
                >
                  <UButton
                    icon="i-heroicons-trash"
                    size="2xs"
                    color="orange"
                    variant="outline"
                    :ui="{ rounded: 'rounded-full' }"
                    square
                    @click="
                      displayConfirmationModal(
                        'Hang On',
                        'Are you sure you want to deactivate this advertisement?',
                        'Deactivate',
                        'Cancel',
                        () => {
                          updateClientAdsStatus(row.actions.id, 'inactive');
                        }
                      )
                    "
                  />
                </UTooltip>
              </div>
            </template>
          </UTable>

          <UPagination
            v-model="page"
            :page-count="1"
            :total="paginationsData.totalPage"
          />
        </UCard>
      </div>
    </NuxtLayout>

    <ConfirmationModal :isOpen="isModalOpen" :data="modalData" />
  </div>
</template>
<script setup>
import { useAdvertisementService } from "~/composables/useAdvertisementService";
import { useOrderService } from "~/composables/useOrderService";

const { getAllAds, updateAdsStatus } = useAdvertisementService();

import { useDebounceFn } from "@vueuse/core";

// components
const toast = useToast();

definePageMeta({
  layout: false,
});

// state
const isTableLoading = ref(true);
const isModalOpen = ref(false);
const modalData = ref({
  title: "",
  message: "",
  callback: null,
});

// data
const pageTitle = "Advertisement List";
const facilitators = ref([]);
const advertisements = ref([]);
const selectedStatus = ref({
  label: "All",
  value: "all",
});
const searchQuery = ref("");
const page = ref(1);
const paginationsData = ref({
  page: 1,
  totalPage: 1,
  totalItems: 0,
  itemsPerPage: 10,
});

const statusList = [
  { label: "All", value: "all", color: "gray" },
  { label: "Completed", value: "completed", color: "orange" },
  { label: "Paid", value: "paid", color: "blue" },
  { label: "Pending", value: "pending", color: "orange" },
  { label: "Waiting Payment", value: "waitingpaid", color: "orange" },
  { label: "Failed", value: "failed", color: "orange" },
];

const fetchAds = async () => {
  try {
    await getAllAds({
      page: page.value,
      per_page: paginationsData.value.itemsPerPage,
      order_status:
        selectedStatus.value.value === "all" ? "" : selectedStatus.value.value,
      search: searchQuery.value,
    }).then((response) => {
      advertisements.value = response.data.data.advertisements.data.map(
        (advertisement, index) => ({
          no: index + 1,
          title: advertisement.name,
          content: {
            image_url: advertisement.image_url,
            tagline: advertisement.tagline,
            description: advertisement.description,
          },
          package: advertisement.package,
          valid: advertisement.valid_until_date,
          payment: advertisement.payment_file_url,
          status: advertisement.status,

          actions: {
            id: advertisement.id,
            status: advertisement.status,
          },
        })
      );

      // set paginations

      paginationsData.value.totalPage =
        response.data.data.advertisements.last_page;
      paginationsData.value.totalItems =
        response.data.data.advertisements.total;
    });
  } catch (error) {
    console.error("Error fetching merchant advertisements:", error);
  } finally {
    isTableLoading.value = false;
  }
};

const updateClientAdsStatus = async (orderId, status) => {
  await updateAdsStatus(orderId, {
    status,
  })
    .then(() => {
      // Close modal
      isModalOpen.value = false;

      // Show toast
      toast.add({
        title: "Success!",
        color: "green",
        icon: "i-heroicons-check-circle",
        description: "Advertisement status updated!",
      });

      // Fetch facilitators
      fetchAds();
    })
    .catch((error) => {
      console.error("Error updating advertisement status:", error);

      // Show toast
      toast.add({
        title: "Uh Oh!",
        color: "red",
        icon: "i-heroicons-x-circle",
        description: "Error updating advertisement status!",
      });
    });
};

// Watcher to fetch data when page changes
watch(page, fetchAds);

watch(
  selectedStatus,
  () => {
    fetchAds();
  },
  {
    deep: true,
  }
);

watch(
  searchQuery,
  useDebounceFn(() => {
    fetchAds();
  }, 300),
  {
    deep: true,
  }
);

// Filter facilitators based on search query
const filterMerchantOrder = () => {
  filterMerchantOrder(
    page.value,
    selectedStatus.value.value,
    searchQuery.value
  );
};
// Open link in new tab
const openLink = (url) => {
  // Open link in new tab
  window.open(url, "_blank");
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const minDay = (date) => {
  const today = new Date();
  const validDate = new Date(date);

  const diffTime = validDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);

  // Show toast
  toast.add({
    title: "Copied!",
    color: "green",
    icon: "i-heroicons-check-circle",
    description: "No Rekening copied to clipboard!",
  });
};

const resolveStatusColor = (status) => {
  if (status === "verified") {
    return "blue";
  } else if (status === "active") {
    return "blue";
  } else if (status === "pending") {
    return "orange";
  } else {
    return "gray";
  }
};

const displayConfirmationModal = (
  title,
  content,
  confirmText,
  cancelText,
  callback
) => {
  modalData.value = {
    title,
    content,
    confirmText,
    cancelText,
    callback,
  };
  isModalOpen.value = true;
};

const acceptPayment = async (orderId) => {
  await updateClientOrderStatus(orderId, "paid")
    .then(() => {
      // Close modal
      isModalOpen.value = false;

      // Show toast
      toast.add({
        title: "Success!",
        color: "green",
        icon: "i-heroicons-check-circle",
        description: "Payment status updated!",
      });

      // Fetch facilitators
      fetchAds();
    })
    .catch((error) => {
      console.error("Error updating payment status:", error);

      // Show toast
      toast.add({
        title: "Uh Oh!",
        color: "red",
        icon: "i-heroicons-x-circle",
        description: "Error updating payment status!",
      });
    });
};

// Mounted lifecycle hook
onMounted(() => {
  fetchAds();
});
</script>
