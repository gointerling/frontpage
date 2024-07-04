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
              placeholder="Search Transactions"
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
            :rows="orders"
            :loading="isTableLoading"
            :loading-state="{
              icon: 'i-heroicons-arrow-path-20-solid',
              label: 'Loading...',
            }"
          >
            <template #service-data="{ row }">
              <!-- button wa.me -->
              <div
                v-if="row.service"
                class="flex flex-col gap-1 items-start capitalize"
              >
                <span class="text-primary">
                  {{ row.service.name }} Service
                </span>
                <UBadge variant="soft" color="orange" class="capitalize">
                  {{ row.service.type }}
                </UBadge>
              </div>

              <span v-else class="text-gray-300"> Kosong </span>
            </template>

            <template #price-data="{ row }">
              <span class="text-primary"> {{ formatPrice(row.price) }} </span>
            </template>

            <template #languages-data="{ row }">
              <span class="text-primary">
                {{ row.languages.language_source.name }} ->
                {{ row.languages.language_destination.name }}
              </span>
            </template>

            <template #buyer-data="{ row }">
              <div class="flex gap-3 items-center">
                <UAvatar
                  :src="row.buyer.photo"
                  :alt="row.buyer.fullname"
                  size="sm"
                  variant="rounded-full"
                  imgClass="object-cover"
                />

                <div class="flex flex-col">
                  <span class="font-semibold text-primary">
                    {{ row.buyer.fullname }}
                  </span>
                  <span class="text-sm text-gray-600">
                    {{ row.buyer.email }}
                  </span>
                </div>
              </div>
            </template>

            <template #facilitator-data="{ row }">
              <div class="flex gap-3 items-center">
                <UAvatar
                  :src="row.facilitator.photo"
                  :alt="row.facilitator.fullname"
                  size="sm"
                  variant="rounded-full"
                  imgClass="object-cover"
                />

                <div class="flex flex-col">
                  <span class="font-semibold text-primary">
                    {{ row.facilitator.fullname }}
                  </span>
                  <span class="text-sm text-gray-600">
                    {{ row.facilitator.email }}
                  </span>
                </div>
              </div>
            </template>

            <template #payment-data="{ row }">
              <UButton
                v-if="row.payment"
                size="sm"
                color="primary"
                :trailing="false"
                @click="openLink(row.payment)"
              >
                <nuxt-icon name="file" class="text-white" />
                Proof of Payment
              </UButton>

              <span v-else class="text-gray-300"> No Payment Uploaded </span>
            </template>

            <template #status-data="{ row }">
              <UBadge
                size="xs"
                :label="resolveOrderStatus(row.status).text"
                :color="resolveOrderStatus(row.status).color"
                variant="subtle"
                class="capitalize"
              />
            </template>

            <template #actions-data="{ row }">
              <div class="flex gap-1">
                <UTooltip
                  v-if="row.actions.status === 'pending'"
                  text="Accept Order"
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
                        'Are you sure you want to deactivate this facilitator?',
                        'Deactivate',
                        'Cancel',
                        () => {
                          updateUserStatus(row.user.id, 'inactive')
                        }
                      )
                    "
                  />
                </UTooltip>

                <UTooltip
                  v-if="row.actions.status === 'waitingpaid'"
                  text="Verify Payment"
                >
                  <UButton
                    icon="i-heroicons-check"
                    size="2xs"
                    color="blue"
                    variant="outline"
                    :ui="{ rounded: 'rounded-full' }"
                    square
                    @click="
                      displayConfirmationModal(
                        'Hang On',
                        'Are you sure you want to accept this payment?',
                        'Accept Payment',
                        'Cancel',
                        () => {
                          acceptPayment(row.actions.id)
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
import { ref, computed, onMounted } from 'vue'
import { useMerchantService } from '~/composables/useMerchantService'
import { useOrderService } from '~/composables/useOrderService'

const { getMerchants, updateMerchantStatus } = useMerchantService()
const { getAllOrders, updateClientOrderStatus } = useOrderService()

import { useDebounceFn } from '@vueuse/core'

// components
const toast = useToast()

definePageMeta({
  layout: false,
})

// state
const isTableLoading = ref(true)
const isModalOpen = ref(false)
const modalData = ref({
  title: '',
  message: '',
  callback: null,
})

// data
const pageTitle = 'Transactions List'
const facilitators = ref([])
const orders = ref([])
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

const statusList = [
  { label: 'All', value: 'all', color: 'gray' },
  { label: 'Completed', value: 'completed', color: 'orange' },
  { label: 'Paid', value: 'paid', color: 'blue' },
  { label: 'Pending', value: 'pending', color: 'orange' },
  { label: 'Waiting Payment', value: 'waitingpaid', color: 'orange' },
  { label: 'Failed', value: 'failed', color: 'orange' },
]

const fetchMerchantOrders = async () => {
  try {
    await getAllOrders({
      page: page.value,
      per_page: paginationsData.value.itemsPerPage,
      order_status:
        selectedStatus.value.value === 'all' ? '' : selectedStatus.value.value,
      search: searchQuery.value,
    }).then((response) => {
      orders.value = response.data.data.orders.data.map((order, index) => ({
        no: index + 1,
        service: {
          id: order.service.id,
          name: order.merchant.type,
          type: order.service.type,
        },

        buyer: {
          id: order.user.id,
          fullname: order.user.fullname,
          email: order.user.email,
          photo: order.user.photo,
        },

        facilitator: {
          id: order.merchant_user.id,
          fullname: order.merchant_user.fullname,
          email: order.merchant_user.email,
          photo: order.merchant_user.photo,
        },
        languages: {
          language_source: order.language_source,
          language_destination: order.language_destination,
        },
        price: order.price,
        payment: order.payment_file_url,
        status: order.order_status,
        actions: {
          id: order.id,
          status: order.order_status,
        },
      }))

      // set paginations

      paginationsData.value.totalPage = response.data.data.orders.last_page
      paginationsData.value.totalItems = response.data.data.orders.total
    })
  } catch (error) {
    console.error('Error fetching merchant orders:', error)
  } finally {
    isTableLoading.value = false
  }
}

// Watcher to fetch data when page changes
watch(page, fetchMerchantOrders)

watch(
  selectedStatus,
  () => {
    fetchMerchantOrders()
  },
  {
    deep: true,
  }
)

watch(
  searchQuery,
  useDebounceFn(() => {
    fetchMerchantOrders()
  }, 300),
  {
    deep: true,
  }
)

// Filter facilitators based on search query
const filterMerchantOrder = () => {
  filterMerchantOrder(page.value, selectedStatus.value.value, searchQuery.value)
}
// Open link in new tab
const openLink = (url) => {
  // Open link in new tab
  window.open(url, '_blank')
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
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

const acceptPayment = async (orderId) => {
  await updateClientOrderStatus(orderId, 'paid')
    .then(() => {
      // Close modal
      isModalOpen.value = false

      // Show toast
      toast.add({
        title: 'Success!',
        color: 'green',
        icon: 'i-heroicons-check-circle',
        description: 'Payment status updated!',
      })

      // Fetch facilitators
      fetchMerchantOrders()
    })
    .catch((error) => {
      console.error('Error updating payment status:', error)

      // Show toast
      toast.add({
        title: 'Uh Oh!',
        color: 'red',
        icon: 'i-heroicons-x-circle',
        description: 'Error updating payment status!',
      })
    })
}

const resolveOrderStatus = (status) => {
  switch (status) {
    case 'completed':
      return {
        color: 'green',
        text: 'Completed',
      }

    case 'paid':
      return {
        color: 'blue',
        text: 'Paid',
      }

    case 'pending':
      return {
        color: 'violet',
        text: 'Pending',
      }

    case 'waitingpaid':
      return {
        color: 'orange',
        text: 'Waiting Payment',
      }

    case 'failed':
      return {
        color: 'red',
        text: 'Failed',
      }

    default:
      return {
        color: 'gray',
        text: 'Unknown',
      }
  }
}

// Mounted lifecycle hook
onMounted(() => {
  fetchMerchantOrders()
})
</script>
