<template>
  <div>
    <NuxtLayout name="admin">
      <div
        v-if="isPageLoading"
        class="text-gray-500 flex justify-center items-center h-full gap-2"
      >
        <UIcon
          name="i-ph-rocket-launch"
          dynamic
          class="text-xl text-gray-600"
        />
        Loading Setting...
      </div>

      <div v-else class="w-full pt-0 p-6 flex flex-col gap-2">
        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col gap-2">
            <UCard
              :ui="{
                body: {
                  base: 'flex justify-between items-center',
                  background: '',
                  padding: 'p-2 sm:p-4',
                },
              }"
            >
              <h6 class="font-semibold flex gap-1 items-center">
                <UIcon name="i-heroicons-sparkles" />
                Subscription Packages
              </h6>
            </UCard>
            <UCard
              :ui="{
                body: {
                  base: 'flex justify-between items-center',
                  background: '',
                  padding: 'p-2 sm:p-6',
                },
              }"
            >
              <div class="flex gap-4">
                <!-- list of card of package -->
                <div class="grid grid-cols-2 gap-2">
                  <UCard
                    :ui="{
                      body: {
                        base: 'flex justify-between items-center grow ',
                        background: '',
                        padding: 'p-2 sm:p-4',
                      },
                    }"
                  >
                    <h6 class="font-semibold">Package 1</h6>
                  </UCard>
                  <UCard
                    :ui="{
                      body: {
                        base: 'flex justify-between items-center grow',
                        background: '',
                        padding: 'p-2 sm:p-4',
                      },
                    }"
                  >
                    <h6 class="font-semibold">Package 2</h6>
                  </UCard>
                  <UCard
                    :ui="{
                      body: {
                        base: 'flex justify-between items-center grow',
                        background: '',
                        padding: 'p-2 sm:p-4',
                      },
                    }"
                  >
                    <h6 class="font-semibold">Package 3</h6>
                  </UCard>
                </div>
              </div>
            </UCard>
          </div>

          <div class="flex flex-col gap-2">
            <UCard
              :ui="{
                body: {
                  base: 'flex justify-between items-center',
                  background: '',
                  padding: 'p-2 sm:p-4',
                },
              }"
            >
              <h6 class="font-semibold flex gap-1 items-center">
                <UIcon name="i-heroicons-megaphone" /> Ads Packages
              </h6>
            </UCard>
            <UCard
              :ui="{
                body: {
                  base: 'flex justify-between items-center',
                  background: '',
                  padding: 'p-2 sm:p-6',
                },
              }"
            >
              <div class="flex gap-4"></div>
            </UCard>
          </div>
        </div>
      </div>
    </NuxtLayout>

    <ConfirmationModal :isOpen="isModalOpen" :data="modalData" />
  </div>
</template>
<script setup>
import FileUpload from "~/components/FileUpload.vue";

import { useSettingService } from "~/composables/useSettingService";
const { getSetting, updateSetting } = useSettingService();

import { useDebounceFn } from "@vueuse/core";

// components
const toast = useToast();

definePageMeta({
  layout: false,
});

// state
const isPageLoading = ref(true);
const isButtonLoading = ref(false);
const isModalOpen = ref(false);
const modalData = ref({
  title: "",
  message: "",
  callback: null,
});

// data
const pageTitle = "Settings";
const bankList = [
  { id: "bca", name: "BCA" },
  { id: "bni", name: "BNI" },
  { id: "bri", name: "BRI" },
  { id: "mandiri", name: "Mandiri" },
];

const payload = ref({
  title: "",
  logo: "https://dev-api.gointerling.com/storage/uploads/oEwc2avbfrCEn3Gb4CSaytNjGcul3UGqHxES7wrA.svg",
  bank: "",
  bank_account: "",
  bank_account_name: "",
});

const setAppsLogo = (file) => {
  payload.value.logo = file;
};

watch(
  () => payload.value,
  () => {
    if (payload.value.logo === "") {
      payload.value.logo =
        "https://dev-api.gointerling.com/storage/uploads/oEwc2avbfrCEn3Gb4CSaytNjGcul3UGqHxES7wrA.svg";
    }
  },
  { deep: true }
);

const fetchSetting = async () => {
  try {
    const { data } = await getSetting();

    payload.value = data.data.setting;

    // set bank value
    payload.value.bank = bankList.find(
      (bank) => bank.id === data.data.setting.bank
    );
  } catch (error) {
    console.error("Error fetching merchant orders:", error);
  } finally {
    isPageLoading.value = false;
  }
};

const updateAppsSetting = async () => {
  isButtonLoading.value = true;
  try {
    const payloadData = {
      title: payload.value.title,
      logo: payload.value.logo,
      bank: payload.value.bank.id,
      bank_account: `${payload.value.bank_account}`,
      bank_account_name: payload.value.bank_account_name,
    };
    const { data } = await updateSetting(payloadData);

    toast.add({
      title: "Success!",
      color: "green",
      icon: "i-heroicons-check-circle",
      description: "Setting updated successfully!",
    });
  } catch (error) {
    console.error("Error updating setting:", error);
    toast.add({
      title: "Error",
      color: "red",
      description: "Failed to update setting.",
      type: "error",
    });
  } finally {
    isButtonLoading.value = false;
  }
};

// Mounted lifecycle hook
onMounted(() => {
  fetchSetting();
});
</script>
