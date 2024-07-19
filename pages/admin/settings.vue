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
            <UInput
              icon="i-heroicons-magnifying-glass-20-solid"
              size="sm"
              color="white"
              :trailing="false"
              placeholder="Search Settings"
              v-model="searchQuery"
            />
          </div>
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
            <img
              :src="payload.logo"
              class="w-24 h-24 object-cover rounded-lg border border-primary p-2"
            />
            <div class="flex gap-2 flex-col">
              <UFormGroup label="Apps Name">
                <UInput placeholder="Your Apps Name" v-model="payload.title" />
              </UFormGroup>
              <UFormGroup label="Logo">
                <FileUpload
                  title="Logo"
                  accept="image/*"
                  max-size="6291456"
                  @file-uploaded="setAppsLogo"
                />
              </UFormGroup>
              <UFormGroup label="Bank">
                <UInputMenu
                  v-model="payload.bank"
                  :options="bankList"
                  placeholder="Fill Provider"
                  by="id"
                  option-attribute="name"
                  :search-attributes="['name']"
                />
              </UFormGroup>
              <UFormGroup label="Bank Account">
                <UInput
                  placeholder="Fill Bank Account"
                  type="text"
                  v-model="payload.bank_account"
                />
              </UFormGroup>
              <UFormGroup label="Bank Account Name">
                <UInput
                  placeholder="Fill Bank Account Name"
                  v-model="payload.bank_account_name"
                />
              </UFormGroup>

              <hr class="my-2" />

              <UButton
                color="primary"
                @click="updateAppsSetting"
                block
                :loading="isButtonLoading"
              >
                Save
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </NuxtLayout>

    <ConfirmationModal :isOpen="isModalOpen" :data="modalData" />
  </div>
</template>
<script setup>
import FileUpload from "~/components/FileUpload.vue";
import ConfirmationModal from "~/components/ConfirmationModal.vue";

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
