<template>
  <div>
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
              :options="[
                { label: 'All Role', value: 'all', color: 'gray' },
                { label: 'Admin', value: '1', color: 'blue' },
                { label: 'User', value: '0', color: 'orange' },
              ]"
              v-model="selectedRole"
              placeholder="Pilih Role"
              by="value"
              option-attribute="label"
              :search-attributes="['label']"
              @change="filterData"
              class="max-w-[180px]"
            />
            <UInputMenu
              :options="[
                { label: 'All Status', value: 'all', color: 'gray' },
                { label: 'Verified', value: 'verified', color: 'blue' },
                { label: 'Pending', value: 'pending', color: 'orange' },
                { label: 'Active', value: 'active', color: 'green' },
                { label: 'Inactive', value: 'inactive', color: 'gray' },
              ]"
              v-model="selectedStatus"
              placeholder="Pilih Status"
              by="value"
              option-attribute="label"
              :search-attributes="['label']"
              @change="filterData"
              class="max-w-[180px]"
            />
            <UInput
              icon="i-heroicons-magnifying-glass-20-solid"
              size="sm"
              color="white"
              :trailing="false"
              placeholder="Search User"
              v-model="searchQuery"
              @input="onSearchChange()"
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
            :rows="data"
            :loading="isTableLoading"
            :loading-state="{
              icon: 'i-heroicons-arrow-path-20-solid',
              label: 'Loading...',
            }"
          >
            <template #phone-data="{ row }">
              <!-- button wa.me -->
              <UButton
                v-if="row.phone"
                target="_blank"
                size="sm"
                color="green"
                :trailing="false"
                @click="openLink(`https://wa.me/${row.phone}`)"
              >
                <nuxt-icon name="whatsapp" class="text-white" />
                {{ row.phone }}
              </UButton>

              <span v-else class="text-gray-300"> Kosong </span>
            </template>

            <template #user-data="{ row }">
              <div class="flex gap-3 items-center">
                <UAvatar
                  :src="row.user.photo"
                  :alt="row.user.fullname"
                  size="sm"
                  variant="rounded-full"
                  imgClass="object-cover"
                />

                <div class="flex flex-col">
                  <span class="font-semibold text-primary">
                    {{ row.user.fullname }}
                  </span>
                  <span class="text-sm text-gray-600">
                    {{ row.user.email }}
                  </span>
                </div>
              </div>
            </template>

            <template #address-data="{ row }">
              <div>
                <UTooltip
                  v-if="row.address"
                  :text="row.address"
                  :popper="{ arrow: true }"
                  :ui="{
                    base: '[@media(pointer:coarse)]:hidden h-full px-2 py-1 text-xs font-normal text-wrap text-center',
                  }"
                >
                  <p
                    class="text-gray-600 max-w-48 text-sm truncate cursor-pointer"
                  >
                    {{ row.address }}
                  </p>
                </UTooltip>

                <span v-else class="text-gray-300"> Kosong </span>
              </div>
            </template>

            <template #admin-data="{ row }">
              <div>
                <UBadge
                  size="xs"
                  :label="row.admin ? 'Admin' : 'User'"
                  :color="row.admin ? 'blue' : 'orange'"
                  variant="subtle"
                  class="capitalize"
                >
                  {{ row.admin ? "Admin" : "User" }}
                </UBadge>
              </div>
            </template>

            <template #status-data="{ row }">
              <UBadge
                size="xs"
                :label="row.status"
                :color="resolveStatusColor(row.status)"
                variant="subtle"
                class="capitalize"
              />
            </template>

            <template #actions-data="{ row }">
              <div class="flex gap-1">
                <UTooltip text="Deactive" v-if="row.status === 'verified'">
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
                        'Are you sure you want to deactivate this user?',
                        'Deactivate',
                        'Cancel',
                        () => {
                          updateUserStatus(row.user.id, 'inactive');
                        }
                      )
                    "
                  />
                </UTooltip>

                <UTooltip text="Verify" v-else>
                  <UButton
                    icon="i-heroicons-check"
                    size="2xs"
                    color="emerald"
                    variant="outline"
                    :ui="{ rounded: 'rounded-full' }"
                    square
                    @click="
                      displayConfirmationModal(
                        'Verify User',
                        'Are you sure you want to verify this user?',
                        'Verify',
                        'Cancel',
                        () => {
                          updateUserStatus(row.user.id, 'verified');
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
import { useMerchantService } from "~/composables/useMerchantService";
import { useUserService } from "~/composables/useUserService";

const { getMerchants, updateMerchantStatus } = useUserService();
const { getUsers } = useUserService();

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
const pageTitle = "Users List";
const data = ref([]);
const selectedStatus = ref({
  label: "All",
  value: "all",
});

const selectedRole = ref({
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

// Fetch data
const fetchData = async () => {
  try {
    await getUsers({
      page: page.value,
      per_page: paginationsData.value.itemsPerPage,
      status:
        selectedStatus.value.value === "all" ? "" : selectedStatus.value.value,
      is_admin:
        selectedRole.value.value === "all" ? null : selectedRole.value.value,
      search: searchQuery.value,
    }).then((response) => {
      data.value = response.data.data.users.data.map((user, index) => ({
        no: index + 1,
        user: {
          id: user.id,
          fullname: user.fullname,
          email: user.email,
          photo: user.photo,
        },
        phone: convertPhone(user.phone ?? ""),
        address: user.address,
        admin: user.is_admin,
        status: user.status,
        actions: {
          id: user.id,
          status: user.status,
        },
      }));

      paginationsData.value = {
        page: response.data.data.users.current_page,
        totalPage: response.data.data.users.last_page,
        totalItems: response.data.data.users.total,
        itemsPerPage: response.data.data.users.per_page,
      };
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    isTableLoading.value = false;
  }
};

const convertPhone = (phone) => {
  // remove non numeric characters
  phone = phone.replace(/\D/g, "");

  // change phone format to 62
  if (phone.startsWith("0")) {
    return `62${phone.slice(1)}`;
  }

  return phone;
};

// Watcher to fetch data when page changes
watch(page, fetchData);

// Filter users based on search query
const filterData = () => {
  page.value = 1;
  fetchData();
};

// Search change handler with manual debounce
const onSearchChange = debounce(() => {
  filterData();
}, 500);

// debounce function
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Open link in new tab
const openLink = (url) => {
  // Open link in new tab
  window.open(url, "_blank");
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
    return "green";
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

const updateUserStatus = async (userId, status) => {
  await updateMerchantStatus(userId, status)
    .then(() => {
      // Close modal
      isModalOpen.value = false;

      // Show toast
      toast.add({
        title: "Success!",
        color: "green",
        icon: "i-heroicons-check-circle",
        description: "User status updated successfully!",
      });

      // Fetch user data
      fetchData();
    })
    .catch((error) => {
      console.error("Error updating user status:", error);

      // Show toast
      toast.add({
        title: "Uh Oh!",
        color: "red",
        icon: "i-heroicons-x-circle",
        description: "Error updating user status!",
      });
    });
};

// Mounted lifecycle hook
onMounted(async () => {
  await fetchData();
});
</script>
