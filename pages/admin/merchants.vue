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
              placeholder="Search Facilitator"
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
            :rows="facilitators"
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
                <data class="cursor-pointer" @click="openLink(row.user.photo)">
                  <UAvatar
                    :src="row.user.photo"
                    :alt="row.user.fullname"
                    size="sm"
                    variant="rounded-full"
                    imgClass="object-cover"
                  />
                </data>

                <div class="flex flex-col">
                  <span class="font-semibold text-primary">
                    <UBadge
                      size="xs"
                      :label="row.user.type"
                      :color="
                        row.user.type === 'interpreter' ? 'emerald' : 'blue'
                      "
                      variant="subtle"
                      class="capitalize"
                    />
                  </span>
                  <span class="font-semibold text-primary py-1 capitalize">
                    {{ row.user.fullname }}
                  </span>
                  <span class="text-sm text-gray-600">
                    {{ row.user.email }}
                  </span>
                </div>
              </div>
            </template>

            <template #bank-data="{ row }">
              <div v-if="row.bank.bank" class="flex gap-1 flex-col">
                <div class="flex gap-1 items-center">
                  <span class="font-semibold text-primary">
                    Bank {{ row.bank.bank }}
                  </span>
                  <UButton
                    size="xs"
                    variant="outline"
                    color="blue"
                    @click="copyToClipboard(row.bank.bankAccount)"
                    class=""
                  >
                    <nuxt-icon name="copy" class="text-xs" />
                  </UButton>
                </div>
                <span> {{ row.bank.bankAccount }} </span>
              </div>

              <span v-else class="text-gray-300"> Kosong </span>
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

            <template #type-data="{ row }">
              <UBadge
                size="xs"
                :label="row.type"
                :color="row.type === 'interpreter' ? 'emerald' : 'blue'"
                variant="subtle"
                class="capitalize"
              />
            </template>

            <template #subscription-data="{ row }">
              <div class="flex gap-1 flex-col">
                <span class="font-semibold text-primary">
                  {{ row.subscription.name }}
                  (
                  {{ resolveDuration(row.subscription.duration) }}
                  )
                </span>
                <span>
                  {{
                    checkSubsriptionStatus(
                      row.subscription.pivot.is_valid,
                      row.subscription.pivot.is_trial
                    )
                  }}
                </span>
                <div v-if="row.subscription.pivot.is_valid">
                  <span
                    v-if="
                      isExpired(row.subscription.pivot.valid_until) ===
                      'expired'
                    "
                    class="text-sm text-red-500"
                  >
                    Expired
                    <b>
                      : {{ formatDate(row.subscription.pivot.valid_until) }}
                    </b>
                  </span>
                  <span
                    v-else
                    :class="
                      isExpired(row.subscription.pivot.valid_until) ===
                      'near-expired'
                        ? 'text-orange-500'
                        : 'text-green-500'
                    "
                  >
                    Valid Until :
                    {{ formatDate(row.subscription.pivot.valid_until) }}
                  </span>
                </div>

                <div v-else class="text-gray-300">
                  <UButton
                    v-if="row.bank.bank"
                    variant="soft"
                    color="blue"
                    icon="i-heroicons-document-check"
                  >
                    Verify Subscription
                  </UButton>
                </div>
              </div>
            </template>

            <template #CV-data="{ row }">
              <UButton
                v-if="row.CV"
                size="sm"
                color="accent"
                :trailing="false"
                @click="openLink(row.CV)"
              >
                <nuxt-icon name="file" class="text-white" />

                Open CV
              </UButton>

              <span v-else class="text-gray-300"> No CV </span>
            </template>

            <template #portfolio-data="{ row }">
              <div
                v-if="row.portfolio"
                class="flex gap-1 flex-col justify-center"
                :class="
                  row.portfolio.length === 0 ? 'items-start' : 'items-center'
                "
              >
                <UButton
                  v-for="(portfolioLink, index) in row.portfolio"
                  :key="index"
                  size="sm"
                  color="accent"
                  :trailing="false"
                  @click="openLink(portfolioLink)"
                >
                  <nuxt-icon name="file" class="text-white" />
                  Portfolio {{ index + 1 }}
                </UButton>

                <span v-if="row.portfolio.length === 0" class="text-gray-300">
                  No Portfolio
                </span>
              </div>

              <span v-else class="text-gray-300"> No Portfolio </span>
            </template>

            <template #certificate-data="{ row }">
              <div
                v-if="row.certificate"
                class="flex gap-1 flex-col justify-center"
                :class="
                  row.certificate.length === 0 ? 'items-start' : 'items-center'
                "
              >
                <UButton
                  v-for="(certificateLink, index) in row.certificate"
                  :key="index"
                  size="sm"
                  color="accent"
                  :trailing="false"
                  @click="openLink(certificateLink)"
                >
                  <nuxt-icon name="file" class="text-white" />
                  Certificate {{ index + 1 }}
                </UButton>

                <span v-if="row.certificate.length === 0" class="text-gray-300">
                  No Certificate
                </span>
              </div>

              <span v-else class="text-gray-300"> No Certificate </span>
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
                        'Verify Facilitator',
                        'Are you sure you want to verify this facilitator?',
                        'Verify',
                        'Cancel',
                        () => {
                          updateUserStatus(row.user.id, 'verified')
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

const { getMerchants, updateMerchantStatus } = useMerchantService()

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
const pageTitle = 'Facilitators List'
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
      facilitators.value = response.data.data.data.map((user, index) => ({
        id: index + 1,
        user: {
          id: user.id,
          fullname: user.fullname,
          email: user.email,
          photo: user.photo,
          type: user.merchants[0].type,
        },
        phone: convertPhone(user.phone ?? ''),
        // type: user.merchants[0].type,
        subscription: user.merchants[0].subscription_packages[0] ?? {
          name: 'No Subscription',
          duration: 0,
          pivot: {
            is_valid: false,
            is_trial: false,
            valid_until: null,
          },
        },
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
  } finally {
    isTableLoading.value = false
  }
}

const convertPhone = (phone) => {
  // remove non numeric characters
  phone = phone.replace(/\D/g, '')

  // change phone format to 62
  if (phone.startsWith('0')) {
    return `62${phone.slice(1)}`
  }

  return phone
}

const formatDate = (date) => {
  console.log(date)
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const resolveDuration = (duration) => {
  if (duration > 1) {
    return duration + ' Months'
  } else {
    return duration + ' Month'
  }
}

const isExpired = (date) => {
  // expired
  if (new Date(date) < new Date()) {
    return 'expired'
  }

  // near to expired 1 week
  if (
    new Date(date) < new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
  ) {
    return 'near-expired'
  }

  return 'valid'
}

const checkSubsriptionStatus = (isValid, isTrial) => {
  if (isTrial && isValid) {
    return 'Trial'
  }

  if (isValid) {
    return 'Active'
  }

  return 'Pending'
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
  // Open link in new tab if not empty
  if (url) window.open(url, '_blank')
  else
    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-x-circle',
      description: 'Link is empty!',
    })
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
