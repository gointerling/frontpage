<template>
  <div>
    <NuxtLayout name="merchant">
      <!-- <div class="w-full pt-0 p-6 flex flex-col gap-2">
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

          <div class="flex gap-2">
            <UInputMenu
              :options="[
                { label: 'All', value: 'all', color: 'gray' },
                { label: 'Verified', value: 'verified', color: 'blue' },
                { label: 'Pending', value: 'pending', color: 'orange' },
              ]"
              v-model="selectedStatus"
              placeholder="Pilih Status"
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
              placeholder="Search "
              v-model="searchQuery"
              @input="onSearchChange()"
            />
          </div>
        </UCard>
      </div>

      <div class="w-full pt-0 p-6 grid grid-cols-4 gap-4">
        <UCard
          v-for="i in 4"
          :key="i"
          :ui="{
            body: {
              base: 'flex justify-between items-center',
              background: '',
              padding: 'p-2 sm:p-4',
            },
          }"
        >
          <div>
            <h6 class="font-semibold text-2xl">40</h6>
            <span>Order</span>
          </div>
          <div>
            <nuxt-icon name="user-circle" class="text-3xl" />
          </div>
        </UCard>
      </div> -->

      <div class="w-full h-full p-2 flex flex-col justify-center items-center">
        <img :src="comingSoon" alt="" width="300px" />
        <span class="font-semibold text-2xl text-primary">
          Dashboard Comingsoon
        </span>
      </div>
    </NuxtLayout>

    <ConfirmationModal :isOpen="isModalOpen" :data="modalData" />
  </div>
</template>
<script setup>
import comingSoon from '~/assets/images/empty-dashboard.svg'

import { ref, computed, onMounted } from 'vue'
import { useMerchantService } from '~/composables/useMerchantService'

const { getMerchants, updateMerchantStatus } = useMerchantService()

// components
const toast = useToast()

definePageMeta({
  layout: false,
  middleware: ['merchant-status'],
})

// state
const isModalOpen = ref(false)
const modalData = ref({
  title: '',
  message: '',
  callback: null,
})

// data
const pageTitle = 'Dashboard'
const facilitators = ref([])
const selectedStatus = ref({
  label: 'All',
  value: 'all',
})
const searchQuery = ref('')
const page = ref(1)
const paginationsData = ref({
  page: 1,
  totalPage: 1,
  totalItems: 0,
  itemsPerPage: 10,
})

const actions = [
  [
    {
      key: 'completed',
      label: 'Completed',
      icon: 'i-heroicons-check',
      callback: () => {
        console.log('completed')
      },
    },
  ],
  [
    {
      key: 'uncompleted',
      label: 'In Progress',
      icon: 'i-heroicons-arrow-path',
      callback: () => {
        console.log('uncompleted')
      },
    },
  ],
]

// Fetch facilitators
const fetchFacilitators = async () => {
  try {
    await getMerchants({
      page: page.value,
      per_page: paginationsData.value.itemsPerPage,
      status:
        selectedStatus.value.value === 'all' ? '' : selectedStatus.value.value,
      search: searchQuery.value,
    }).then((response) => {
      facilitators.value = response.data.data.data.map((user) => ({
        user: {
          id: user.id,
          fullname: user.fullname,
          email: user.email,
        },
        phone: user.phone,
        type: user.merchants[0].type,
        bank: {
          bank: user.merchants[0].bank,
          bankAccount: user.merchants[0].bank_account,
        },
        CV: user.merchants[0].cv_url,
        portfolio: JSON.parse(user.merchants[0].portfolios),
        certificate: JSON.parse(user.merchants[0].certificates),
        status: user.merchants[0].status,
        actions: actions,
      }))
      paginationsData.value = {
        page: response.data.data.current_page,
        totalPage: response.data.data.last_page,
        totalItems: response.data.data.total,
        itemsPerPage: response.data.data.per_page,
      }
    })
  } catch (error) {
    console.error('Error fetching facilitators:', error)
  }
}

// Watcher to fetch data when page changes
watch(page, fetchFacilitators)

// Filter facilitators based on search query
const filterFacilitators = () => {
  fetchFacilitators(page.value, selectedStatus.value.value, searchQuery.value)
}

// Search change handler with manual debounce
const onSearchChange = debounce(() => {
  filterFacilitators()
}, 500)

// debounce function
function debounce(func, wait, immediate) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// Open link in new tab
const openLink = (url) => {
  // Open link in new tab
  window.open(url, '_blank')
}

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)

  // Show toast
  toast.add({
    title: 'Copied!',
    color: 'green',
    icon: 'i-heroicons-check-circle',
    description: 'No Rekening copied to clipboard!',
  })
}

const resolveStatusColor = (status) => {
  if (status === 'verified') {
    return 'blue'
  } else if (status === 'pending') {
    return 'orange'
  } else {
    return 'gray'
  }
}

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
  }
  isModalOpen.value = true
}

const updateUserStatus = async (userId, status) => {
  await updateMerchantStatus(userId, status)
    .then(() => {
      // Close modal
      isModalOpen.value = false

      // Show toast
      toast.add({
        title: 'Success!',
        color: 'green',
        icon: 'i-heroicons-check-circle',
        description: 'User status updated successfully!',
      })

      // Fetch facilitators
      fetchFacilitators()
    })
    .catch((error) => {
      console.error('Error updating user status:', error)

      // Show toast
      toast.add({
        title: 'Uh Oh!',
        color: 'red',
        icon: 'i-heroicons-x-circle',
        description: 'Error updating user status!',
      })
    })
}

// Mounted lifecycle hook
onMounted(() => {
  fetchFacilitators()
})
</script>
