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
                base: 'w-full',
                body: {
                  base: 'flex justify-between items-center',
                  background: '',
                  padding: 'p-2 sm:p-4',
                },
              }"
            >
              <div class="flex justify-between w-full">
                <h6 class="font-semibold flex gap-1 items-center">
                  <UIcon name="i-heroicons-sparkles" />
                  Subscription Packages
                </h6>

                <!-- add button -->
                <div class="flex justify-end">
                  <UButton
                    variant="soft"
                    color="blue"
                    @click="openAddModal('subs')"
                  >
                    <UIcon name="i-heroicons-plus-circle" />
                    Add New Package
                  </UButton>
                </div>
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
              <div class="flex flex-col gap-4 w-full">
                <!-- list of card of package -->
                <UCard
                  v-for="(sub, index) in subsData"
                  :key="index"
                  :ui="{
                    body: {
                      base: 'w-full flex justify-between items-center flex-grow',
                      background: '',
                      padding: 'p-2 sm:p-4',
                    },
                  }"
                >
                  <div class="flex flex-col w-full">
                    <div class="flex justify-between w-full items-center">
                      <h6 class="font-semibold text-xl flex items-center gap-1">
                        <UIcon name="i-heroicons-bolt" />
                        {{ sub.name }} ({{ resolveDuration(sub.duration) }})
                      </h6>

                      <div class="flex gap-1">
                        <UButton
                          variant="soft"
                          color="blue"
                          @click="editPackage(sub)"
                        >
                          <nuxt-icon name="edit" />
                        </UButton>

                        <UButton
                          variant="soft"
                          color="red"
                          @click="showConfirmation(sub)"
                        >
                          <UIcon name="i-heroicons-trash" />
                        </UButton>
                      </div>
                    </div>
                    <span class="font-semibold text-accent">
                      {{ formatPrice(sub.price) }}
                    </span>
                    <ol class="py-4">
                      <li
                        v-for="(item, index) in sub.desc"
                        :key="index"
                        class="flex gap-2 items-start"
                      >
                        <nuxt-icon name="check-package" class="pt-1" />
                        {{ item }}
                      </li>
                    </ol>
                  </div>
                </UCard>
              </div>
            </UCard>
          </div>

          <div class="flex flex-col gap-2">
            <UCard
              :ui="{
                base: 'w-full',
                body: {
                  base: 'flex justify-between items-center',
                  background: '',
                  padding: 'p-2 sm:p-4',
                },
              }"
            >
              <div class="flex justify-between w-full">
                <h6 class="font-semibold flex gap-1 items-center">
                  <UIcon name="i-heroicons-megaphone" />
                  Ads Packages
                </h6>

                <!-- add button -->
                <div class="flex justify-end">
                  <UButton
                    variant="soft"
                    color="blue"
                    @click="openAddModal('ads')"
                  >
                    <UIcon name="i-heroicons-plus-circle" />
                    Add New Package
                  </UButton>
                </div>
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
              <div class="flex flex-col gap-4 w-full">
                <!-- list of card of package -->
                <UCard
                  v-for="(ads, index) in adsData"
                  :key="index"
                  :ui="{
                    body: {
                      base: 'w-full flex justify-between items-center flex-grow',
                      background: '',
                      padding: 'p-2 sm:p-4',
                    },
                  }"
                >
                  <div class="flex flex-col w-full">
                    <div class="flex justify-between w-full items-center">
                      <h6 class="font-semibold text-xl flex items-center gap-1">
                        <UIcon name="i-heroicons-bolt" />
                        {{ ads.name }} ({{ resolveDuration(ads.duration) }})
                      </h6>

                      <div class="flex gap-1">
                        <UButton
                          variant="soft"
                          color="blue"
                          @click="editPackage(ads)"
                        >
                          <nuxt-icon name="edit" />
                        </UButton>

                        <UButton
                          variant="soft"
                          color="red"
                          @click="showConfirmation(ads)"
                        >
                          <UIcon name="i-heroicons-trash" />
                        </UButton>
                      </div>
                    </div>
                    <span class="font-semibold text-accent">
                      {{ formatPrice(ads.price) }}
                    </span>

                    <span class="font-semibold"> Halaman : </span>
                    <ol class="pb-4">
                      <li
                        v-for="(item, index) in ads.route_json"
                        :key="index"
                        class="flex gap-2 items-center"
                      >
                        <UIcon name="i-heroicons-globe-alt" class="pt-1" />
                        {{ item.name }}
                      </li>
                    </ol>
                  </div>
                </UCard>
              </div>
            </UCard>
          </div>
        </div>

        <!-- Edit Modal -->
        <UModal
          v-model="isFormModalOpen"
          :ui="{
            width: 'w-full sm:max-w-2xl',
          }"
        >
          <UCard>
            <div class="flex justify-between items-center">
              <h6 class="font-semibold">Edit Package</h6>
              <UButton
                variant="soft"
                color="red"
                icon="i-heroicons-x-circle"
                @click="isFormModalOpen = false"
              >
              </UButton>
            </div>

            <div class="p-2">
              <form @submit.prevent="submitForm">
                <div class="flex flex-col gap-4">
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Package Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      v-model="selectedData.name"
                      class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label
                      for="duration"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Package Duration (Month)
                    </label>
                    <input
                      type="number"
                      id="duration"
                      min="0"
                      v-model="selectedData.duration"
                      class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label
                      for="price"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Package Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      min="0"
                      v-model="selectedData.price"
                      class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>
                <div class="mt-4 flex justify-end">
                  <UButton type="submit" variant="soft" color="blue">
                    Save
                  </UButton>
                </div>
              </form>
            </div>
          </UCard>
        </UModal>

        <!-- Add Modal -->
        <UModal
          v-model="isAddModalOpen"
          :ui="{
            width: 'w-full sm:max-w-2xl',
          }"
        >
          <UCard>
            <div class="flex justify-between items-center">
              <h6 class="font-semibold">Add New Package</h6>
              <UButton
                variant="soft"
                color="red"
                icon="i-heroicons-x-circle"
                @click="isAddModalOpen = false"
              >
              </UButton>
            </div>

            <div class="p-2">
              <form @submit.prevent="submitAddForm">
                <div class="flex flex-col gap-4">
                  <div>
                    <label
                      for="newName"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Package Name
                    </label>
                    <input
                      type="text"
                      id="newName"
                      v-model="newPackageData.name"
                      class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label
                      for="newDuration"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Package Duration (Month)
                    </label>
                    <input
                      type="number"
                      id="newDuration"
                      v-model="newPackageData.duration"
                      class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                    />
                  </div>
                  <div>
                    <label
                      for="newPrice"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Package Price
                    </label>
                    <input
                      type="number"
                      id="newPrice"
                      v-model="newPackageData.price"
                      class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div v-if="packageType === 'subs'">
                    <label
                      for="newPrice"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Package Rule
                    </label>

                    <!-- checkbox -->
                    <div class="flex flex-col gap-2">
                      <label
                        v-for="rule in subsriptionRules"
                        :key="rule.id"
                        class="flex gap-1 py-[0.1em] w-fit"
                      >
                        <input
                          type="checkbox"
                          class="form-checkbox h-5 w-5 text-primary rounded-md"
                          :value="rule.id"
                          v-model="newPackageData.rule_json"
                        />
                        <span class="ml-2 text-gray-700">{{ rule.name }}.</span>
                      </label>
                    </div>
                  </div>

                  <div v-if="packageType === 'ads'">
                    <label
                      for="newRoute"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Package Route
                    </label>
                    <USelectMenu
                      v-model="newPackageData.route_json"
                      searchable
                      :options="pageList"
                      placeholder="Select Ads Show Page"
                      option-attribute="name"
                      multiple
                      trailing
                      by="id"
                      class="w-full"
                    >
                      <UButton color="gray" class="flex-1 justify-between">
                        <div
                          v-if="pageList.length > 0"
                          class="flex flex-wrap gap-2"
                        >
                          <UBadge
                            v-for="(selected, index) in selectedData.route_json"
                            :key="index"
                            color="blue"
                            variant="soft"
                          >
                            <span class="text-sm">{{ selected.name }}</span>
                          </UBadge>
                        </div>

                        <span v-else class="text-gray-400">
                          Select Main Skills
                        </span>

                        <UIcon
                          name="i-heroicons-chevron-down-20-solid"
                          class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
                          :class="[open && 'transform rotate-90']"
                        />
                      </UButton>
                    </USelectMenu>
                  </div>
                </div>
                <div class="mt-4 flex justify-end">
                  <UButton type="submit" variant="soft" color="blue">
                    Save
                  </UButton>
                </div>
              </form>
            </div>
          </UCard>
        </UModal>
      </div>
    </NuxtLayout>

    <ConfirmationModal :isOpen="isModalOpen" :data="modalData" />
  </div>
</template>

<script setup>
import ConfirmationModal from '~/components/ConfirmationModal.vue'

import { usePackageService } from '~/composables/usePackageService'
const {
  getSubsPackages,
  updateSubsPackage,
  createSubsPackage,
  deleteSubsPackage,

  getAdsPackages,
  createAdsPackage,
  updateAdsPackage,
  deleteAdsPackage,
} = usePackageService()

// state
const isPageLoading = ref(true)
const isModalOpen = ref(false)
const isFormModalOpen = ref(false)
const isAddModalOpen = ref(false)
const modalData = ref({})

// data
const packageType = ref('subs')
const subsData = ref([])
const adsData = ref([])

const pageList = ref([
  {
    name: 'Homepage',
    route: '/',
  },
  {
    name: 'Packages',
    route: '/packages',
  },
  {
    name: 'Facilitator',
    route: '/facilitators',
  },
])

const subsriptionRules = ref([
  {
    id: 1,
    name: 'Can open a stall on the website according to the tang package they choose',
    value: {
      is_stall: true,
    },
  },
  {
    id: 2,
    name: 'Online lias life shop',
    value: {
      is_online_shop: true,
    },
  },
  {
    id: 3,
    name: 'Reviews appear',
    value: {
      is_reviewed: true,
    },
  },
  {
    id: 4,
    name: 'Advertised (the shop appears at the top or most recommended)',
    value: {
      is_advertised: true,
    },
  },
  {
    id: 5,
    name: 'Free Shipping',
    value: {
      is_free_shipped: true,
    },
  },
])

// selected
const selectedData = ref({})
const newPackageData = ref({})

// methods
const stringToArray = (str) => {
  return str.match(/"([^"]+)"/g).map((item) => item.replace(/"/g, ''))
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}

const fetchSubsPackages = async () => {
  isPageLoading.value = true
  const { data } = await getSubsPackages()

  subsData.value = data.data.packages.map((item) => ({
    name: item.name,
    desc: stringToArray(item.desc),
    duration: item.duration,
    price: item.price,
  }))

  isPageLoading.value = false
}

const fetchAdsPackages = async () => {
  isPageLoading.value = true
  const { data } = await getAdsPackages()

  console.log(data)

  adsData.value = data.data.packages.map((item) => ({
    name: item.name,
    route_json: JSON.parse(item.route_json),
    duration: item.duration,
    price: item.price,
  }))

  isPageLoading.value = false
}

const resolveDuration = (duration) => {
  if (duration > 1) {
    return duration + ' Months'
  } else {
    return duration + ' Month'
  }
}

const editPackage = (packageData) => {
  selectedData.value = { ...packageData }
  isFormModalOpen.value = true
}

const openAddModal = (type) => {
  packageType.value = type
  newPackageData.value = { type }
  isAddModalOpen.value = true

  if (type === 'subs') {
    newPackageData.value.rule_json = []
  } else {
    newPackageData.value.route_json = []
  }
}

const submitForm = async () => {
  // handle form submission logic here
  console.log('Form submitted with:', selectedData.value)

  if (selectedData.value.type === 'subs') {
    await updateSubsPackage(selectedData.value)
  } else {
    await updateAdsPackage(selectedData.value)
  }

  isFormModalOpen.value = false
  fetchSubsPackages()
  fetchAdsPackages()
}

const submitAddForm = async () => {
  // handle add form submission logic here
  // console.log('New Package Data submitted with:', newPackageData.value)

  if (newPackageData.value.type === 'subs') {
    const convertedRules = subsriptionRules.value.filter((rule) =>
      newPackageData.value.rule_json.includes(rule.id)
    )

    newPackageData.value.rule_json = JSON.stringify(convertedRules)

    console.log(newPackageData.value.rule_json)
    // await createSubsPackage(newPackageData.value)
  } else {
    await createAdsPackage(newPackageData.value)
  }

  isAddModalOpen.value = false
  fetchSubsPackages()
  fetchAdsPackages()
}

onMounted(() => {
  isPageLoading.value = false

  fetchSubsPackages()
  fetchAdsPackages()
})
</script>
