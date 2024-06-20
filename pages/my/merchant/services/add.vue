<template>
  <div>
    <NuxtLayout name="merchant">
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
        </UCard>
        <UCard
          :ui="{
            body: {
              base: 'flex flex-col gap-4',
            },
          }"
        >
          <!-- forms -->
          <u-form
            :validation-schema="validationSchema"
            @submit="handleRegister"
            class="h-full flex flex-col justify-between"
          >
            <u-form-group name="name" label="Tipe Service" class="mb-2">
              <UInputMenu
                v-model="name"
                :options="[
                  {
                    id: 'standard',
                    name: 'Standard',
                  },
                  {
                    id: 'premium',
                    name: 'Premium',
                  },
                ]"
                placeholder="Pilih Tipe Fasilitator"
                by="id"
                option-attribute="name"
                :search-attributes="['name']"
              />
            </u-form-group>
            <u-form-group name="type" label="Tipe Fasilitator" class="mb-2">
              <UInputMenu
                v-model="type"
                :options="typeList"
                placeholder="Pilih Tipe Fasilitator"
                by="id"
                option-attribute="name"
                :search-attributes="['name']"
              />
            </u-form-group>
            <u-form-group name="type" label="Tipe Fasilitator" class="mb-2">
              <UInputMenu
                v-model="type"
                :options="typeList"
                placeholder="Pilih Tipe Fasilitator"
                by="id"
                option-attribute="name"
                :search-attributes="['name']"
              />
            </u-form-group>
            <u-form-group name="type" label="Tipe Fasilitator" class="mb-2">
              <UInputMenu
                v-model="type"
                :options="typeList"
                placeholder="Pilih Tipe Fasilitator"
                by="id"
                option-attribute="name"
                :search-attributes="['name']"
              />
            </u-form-group>
          </u-form>
        </UCard>
      </div>
    </NuxtLayout>

    <ConfirmationModal :isOpen="isModalOpen" :data="modalData" />
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useMerchantService } from '~/composables/useMerchantService'

const { getMerchants, updateMerchantStatus } = useMerchantService()

// components
const toast = useToast()

definePageMeta({
  layout: false,
})

// state
const isModalOpen = ref(false)
const modalData = ref({
  title: '',
  message: '',
  callback: null,
})

// data
const pageTitle = 'Add Service '

// Mounted lifecycle hook
onMounted(() => {})
</script>
