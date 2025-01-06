<template>
  <div>
    <NuxtLayout name="merchant">
      <div class="pt-0 p-6 flex flex-col gap-2">
        <UCard
          :ui="{
            body: {
              base: 'flex justify-between items-center w-full',
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
              @change="filterMerchantOrder"
              class="max-w-[180px]"
            />
            <UInput
              icon="i-heroicons-magnifying-glass-20-solid"
              size="sm"
              color="white"
              :trailing="false"
              placeholder="Search Order"
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
            :ui="{
              wrapper: 'max-w-full relative overflow-x-auto',
              base: ' table-fixed overflow-x-auto',
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

            <template #client-data="{ row }">
              <div class="flex gap-3 items-center">
                <UAvatar
                  :src="row.client.photo"
                  :alt="row.client.fullname"
                  size="sm"
                  variant="rounded-full"
                  imgClass="object-cover"
                />

                <div class="flex flex-col">
                  <span class="font-semibold text-primary">
                    {{ row.client.fullname }}
                  </span>
                  <span class="text-sm text-gray-600">
                    {{ row.client.email }}
                  </span>
                </div>
              </div>
            </template>

            <template #comments-data="{ row }">
              <UButton
                size="sm"
                color="blue"
                variant="soft"
                :trailing="false"
                @click="displayCommentModal(row)"
              >
                {{ row.comments.total }} Comments
              </UButton>
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

            <template #file-data="{ row }">
              <UButton
                v-if="row.file"
                size="sm"
                color="primary"
                :trailing="false"
                @click="openLink(row.file)"
              >
                <nuxt-icon name="file" class="text-white" />
                Open Client File
              </UButton>

              <span v-else class="text-gray-300"> No File Uploaded </span>
            </template>

            <template #actions-data="{ row }">
              <div class="flex gap-1">
                <!-- Accept Order -->
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
                        'Are you sure you want to accept this order?',
                        'Accept Order',
                        'Cancel',
                        () => {
                          updateUserStatus(row.user.id, 'waitingpaid')
                        }
                      )
                    "
                  />
                </UTooltip>

                <!-- Upload Work -->
                <UTooltip
                  v-if="row.actions.status === 'paid'"
                  text="Upload Works"
                >
                  <UButton
                    icon="i-heroicons-arrow-up-tray"
                    size="2xs"
                    color="green"
                    variant="outline"
                    :ui="{ rounded: 'rounded-full' }"
                    square
                    @click="displayUploadFileModal(row)"
                  />
                </UTooltip>

                <UTooltip
                  v-if="row.actions.status === 'completed'"
                  text="Check Result"
                >
                  <UButton
                    icon="i-heroicons-arrow-top-right-on-square"
                    size="2xs"
                    color="blue"
                    variant="outline"
                    :ui="{ rounded: 'rounded-full' }"
                    square
                    @click="displayUploadFileModal(row)"
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
    <CommentSidebar
      :isOpen="isCommentModalOpen"
      :data="selectedOrder"
      @hide="hideModal"
      @refresh="handleRefresh"
    />

    <UploadResultSidebar
      :isOpen="isUploadFileModalOpen"
      :data="selectedOrder"
      @hide="hideModal"
      @refresh="handleRefresh"
    />
  </div>
</template>
<script setup>
import ConfirmationModal from '~/components/ConfirmationModal.vue'
import CommentSidebar from '~/components/facilitators/CommentSidebar.vue'
import UploadResultSidebar from '~/components/facilitators/UploadResultSidebar.vue'

import { useDebounceFn } from '@vueuse/core'

import { ref, computed, onMounted } from 'vue'
import { useMerchantService } from '~/composables/useMerchantService'
import { useOrderService } from '~/composables/useOrderService'

const { getMerchants, updateMerchantStatus } = useMerchantService()
const { getMyMerchantOrders } = useOrderService()

// components
const toast = useToast()

// router
const router = useRouter()
const route = useRoute()

definePageMeta({
  layout: false,
})

// state
const isTableLoading = ref(true)
const isModalOpen = ref(false)
const isCommentModalOpen = ref(false)
const isUploadFileModalOpen = ref(false)
const modalData = ref({
  title: '',
  message: '',
  callback: null,
})

// data
const pageTitle = 'Order List'
const facilitators = ref([])
const orders = ref([])
const selectedStatus = ref({
  label: 'All',
  value: 'all',
})
const selectedOrder = ref(null)
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
    await getMyMerchantOrders({
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

        client: {
          id: order.user.id,
          fullname: order.user.fullname,
          email: order.user.email,
        },
        'Order Date': formatDate(order.created_at, 'dd MMM yyyy'),
        'Delivery Address': order.is_hardfile ?? '-',
        estimated: `${order.service.time_estimated} ${order.service.time_estimated_unit}`,
        languages: {
          language_source: order.language_source,
          language_destination: order.language_destination,
        },
        price: order.price,
        comments: {
          total: checkIfJSON(order.comment_json)
            ? order.comment_json.length
            : 0,
          data: order.comment_json || [],
        },
        status: order.order_status,
        file: order.user_file_url,
        actions: {
          id: order.id,
          status: order.order_status,
          result_file_url: order.result_file_url,
          meet_url: order.meet_url,
        },
      }))
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
  }, 300)
)

// Filter facilitators based on search query
const filterMerchantOrder = () => {
  fetchMerchantOrders(page.value, selectedStatus.value.value, searchQuery.value)
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

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const checkIfJSON = (data) => {
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

const handleRefresh = (updatedData) => {
  selectedOrder.value = updatedData
  console.log('Refreshed data:', selectedOrder)
}

const hideModal = () => {
  isCommentModalOpen.value = false
  isUploadFileModalOpen.value = false

  // Refresh data
  fetchMerchantOrders()
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

const displayCommentModal = (data) => {
  selectedOrder.value = data

  isCommentModalOpen.value = true
}

const displayUploadFileModal = (data) => {
  selectedOrder.value = data

  isUploadFileModalOpen.value = true
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
        text: 'In Progress',
      }

    case 'pending':
      return {
        color: 'violet',
        text: 'Pending',
      }

    case 'waitingpaid':
      return {
        color: 'orange',
        text: 'Waiting',
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
  // check if have url params detail_id then fetch data
  const detailId = route.query.detail_id

  if (detailId) searchQuery.value = detailId

  fetchMerchantOrders()
})
</script>
