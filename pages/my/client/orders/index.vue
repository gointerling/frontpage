<template>
  <div>
    <!-- Loader -->
    <PageLoader v-if="isPageLoading" />
    <div v-else class="w-100 flex flex-col items-center">
      <Navbar :user="user" @logout="logout" class="w-full" />

      <div class="flex justify-between items-stretch w-10/12 my-16 gap-16 px-8">
        <!-- side nav -->
        <div class="w-2/12">
          <h6 class="font-semibold">Client Dashboard</h6>
          <div class="flex flex-col items-start mt-4">
            <UButton
              v-for="(nav, index) in filteredNavs"
              :key="index"
              block
              class="py-3 px-3.5 flex justify-start bg-white hover:bg-[#FDF1EE] shadow-none"
              :class="selectedTab === nav.key ? 'bg-[#FDF1EE]' : 'bg-white'"
              @click="selectedTab = nav.key"
            >
              <nuxt-icon :name="nav.icon" class="text-2xl text-primary" />
              <span class="text-md text-primary">{{ nav.label }}</span>
            </UButton>
          </div>
        </div>

        <div v-if="selectedTab === 'order-history'" class="w-10/12">
          <!-- Personal info -->
          <h6 class="font-semibold mb-3">
            My Order History ({{ orders.length ?? 0 }})
          </h6>

          <div class="flex gap-2 mb-4 justify-between">
            <UInputMenu
              :options="[
                { label: 'All', value: '', color: 'gray' },
                { label: 'Completed', value: 'completed', color: 'blue' },
                { label: 'In Progress', value: 'paid', color: 'green' },
                {
                  label: 'Waiting Payment',
                  value: 'waitingpaid',
                  color: 'orange',
                },
                { label: 'Pending', value: 'pending', color: 'violet' },
                { label: 'Failed', value: 'failed', color: 'red' },
              ]"
              v-model="selectedStatus"
              placeholder="Status"
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
            />
          </div>

          <UCard>
            <div class="flex flex-col gap-4">
              <UCard
                v-for="(order, index) in orders"
                :key="index"
                :ui="{
                  header: {
                    padding: 'px-4 py-2 sm:px-3',
                  },
                  body: {
                    padding: 'px-4 py-0  sm:p-3',
                  },
                }"
              >
                <template #header>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center gap-2 capitalize">
                      <UIcon name="i-heroicons-language" />
                      <span class="font-semibold">
                        {{ order.merchant.type }}
                      </span>
                    </div>
                    <div class="flex justify-between items-center gap-2">
                      <UBadge
                        variant="soft"
                        :color="resolveOrderStatus(order.order_status).color"
                      >
                        <span class="capitalize">{{
                          resolveOrderStatus(order.order_status).text
                        }}</span>
                      </UBadge>
                      <UButton variant="link">
                        <nuxt-icon name="dots" class="text-md text-primary" />
                      </UButton>
                    </div>
                  </div>
                </template>
                <div class="flex gap-3 justify-between items-center">
                  <div class="flex gap-3">
                    <div class="">
                      <UAvatar
                        :alt="order.merchant_user.fullname"
                        :src="order.merchant_user.photo"
                        size="lg"
                        imgClass="object-cover"
                      />
                    </div>
                    <div class="flex flex-col">
                      <span class="font-semibold text-primary">
                        {{ order.merchant_user.fullname }}
                      </span>
                      <div class="flex gap-2 text-xs text-gray-700">
                        <span>{{ order.service.name }}</span>
                        <span
                          >({{ order.language_source.name }} -
                          {{ order.language_destination.name }})</span
                        >
                        <span>x 1</span>
                      </div>

                      <span class="font-semibold text-primary text-md">
                        {{ formatPrice(order.price) }}
                      </span>
                    </div>
                  </div>
                  <UButton
                    color="primary"
                    class="text-white mr-4"
                    @click="
                      navigateTo({
                        name: 'my-client-orders-id',
                        params: { id: order.id },
                      })
                    "
                  >
                    Show Detail
                  </UButton>
                </div>
              </UCard>

              <div class="flex flex-col" v-if="orders.length === 0">
                <div class="flex flex-col items-center justify-center">
                  <nuxt-icon name="search" class="text-4xl text-gray-400" />
                  <span class="text-gray-400">No orders found</span>
                </div>
              </div>

              <div class="flex flex-col" v-if="!isLastPage">
                <UButton block @click="loadMore" class="mt-4 bg-accent">
                  <!-- <nuxt-icon name="floppy" class="text-white" /> -->
                  Load More
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>

    <ConfirmationModal :isOpen="isConfirmationModalOpen" :data="modalData" />
  </div>
</template>

<script setup>
// components
import PageLoader from '~/components/PageLoader.vue'
import Navbar from '~/components/Navbar.vue'
import ServiceTab from '~/components/profile/ServiceTab.vue'

// imports
import { ref, onMounted } from 'vue'
const toast = useToast()
const route = useRoute()
const router = useRouter()

// services
import { useMerchantService } from '~/composables/useMerchantService'
import { useUserService } from '~/composables/useUserService'
import { useSkillService } from '~/composables/useSkillService'
import { useFileService } from '~/composables/useFileService'
import { useMasterDataService } from '~/composables/useMasterDataService'
import { useOrderService } from '~/composables/useOrderService'

const {
  getMyMerchants,
  updateMyMerchant,
  getMyMerchantServices,
  updateMyService,
} = useMerchantService()
const { updateMyProfile, updateMyPassword } = useUserService()
const { getSkills } = useSkillService()
const { uploadFile } = useFileService()
const { getLanguages } = useMasterDataService()
const { getMyOrders } = useOrderService()

// navs
const fileInput = ref(null)
const navs = [
  {
    key: 'order-history',
    label: 'Order History',
    icon: 'user-circle',
    scope: 'all',
  },
]

const modalData = ref({
  title: '',
  content: '',
  confirmText: '',
  cancelText: '',
  callback: null,
})

// state
const isPageLoading = ref(true)
const isConfirmationModalOpen = ref(false)
const selectedTab = ref('order-history')

// data
const user = ref({
  fullname: '',
  photo: '',
  email: '',
  phone: '',
  address: '',
  role: '',
  personal_description: '',
  main_skills: [],
  additional_skills: [],
  is_admin: false,
  is_facilitator: false,
})

const orders = ref([])
const perPage = ref(5)
const isLastPage = ref(false)
const selectedStatus = ref({
  label: 'All',
  value: '',
  color: 'gray',
})
const searchQuery = ref('')

const filteredNavs = computed(() => {
  if (!user.value) return []

  const isAdmin = user.value.is_admin ?? false
  const isMerchant = user.value.is_facilitator ?? false

  return navs.filter(
    (nav) =>
      nav.scope === 'all' ||
      (nav.scope === 'admin' && isAdmin) ||
      (nav.scope === 'merchant' && isMerchant)
  )
})

// methods
// resolve order status
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

const openNewTab = (url) => {
  window.open(url, '_blank')
}

const navigateTo = (route) => {
  router.push(route)
}

// logout
const logout = () => {
  console.log('Logging out...')
  useCookie('token').value = null
  user.value = {
    fullname: '',
    photo: '',
    email: '',
    phone: '',
    address: '',
    role: '',
    personal_description: '',
    main_skills: [],
    additional_skills: [],
    is_admin: false,
    is_facilitator: false,
  }
}

// check if json
const checkIfJSON = (data) => {
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}

const loadMore = async () => {
  perPage.value++
  await fetchMyOrders()
}

// fetch skills list
const fetchSkills = async () => {
  try {
    const { data } = await getSkills({
      per_page: 10000,
    })

    skillList.value = data.data.data
  } catch (error) {
    console.error('Fetching skills failed:', error)
  }
}

// fetch user data on mount
const fetchUser = async () => {
  try {
    user.value = useCookie('token').value.user || null
  } catch (error) {
    console.error('Fetching user failed:', error)
  }
}

const fetchMyMerchant = async () => {
  try {
    const { data } = await getMyMerchants()

    if (data.data.user.merchants.length > 0) {
      merchant.value = data.data.user.merchants[0]

      merchant.value.bank = {
        id: data.data.user.merchants[0].bank_id,
        name: data.data.user.merchants[0].bank,
      }

      merchant.value.certificates = JSON.parse(
        data.data.user.merchants[0].certificates
      )

      merchant.value.portfolios = JSON.parse(
        data.data.user.merchants[0].portfolios
      )
    }
  } catch (error) {
    console.error('Fetching merchant failed:', error)
  }
}

const fetchLanguages = async () => {
  try {
    const { data } = await getLanguages({
      per_page: 10000,
    })

    languageList.value = data.data.data
  } catch (error) {
    console.error('Fetching languages failed:', error)
  }
}

const fetchMyService = async () => {
  try {
    const { data } = await getMyMerchantServices()

    if (data.data.user.merchants[0].services.length > 0) {
      service.value = {
        ...data.data.user.merchants[0].services[0],
        languages: checkIfJSON(
          data.data.user.merchants[0].services[0].language_sources ?? []
        ),
      }
    }
  } catch (error) {
    console.error('Fetching service failed:', error)
  }
}

const fetchMyOrders = async () => {
  try {
    const { data } = await getMyOrders({
      page: 1,
      per_page: perPage.value,
      order_status: selectedStatus.value.value,
      search: searchQuery.value,
    })

    orders.value = data.data.orders.data

    // check if last page
    isLastPage.value =
      data.data.orders.current_page === data.data.orders.last_page
  } catch (error) {
    console.error('Fetching orders failed:', error)
  }
}

const getFirstErrorMessage = (errors) => {
  for (const field in errors) {
    if (errors[field].length > 0) {
      return errors[field][0]
    }
  }
  return null
}

const debounce = (func, wait) => {
  let timeout
  return function (...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      func.apply(context, args)
    }, wait)
  }
}

// watch for changes
watch(selectedStatus, async (newVal) => {
  await fetchMyOrders()
})

watch(
  searchQuery,
  debounce(async () => {
    await fetchMyOrders()
  }, 500),
  {
    immediate: true,
  }
)

onMounted(async () => {
  // fetch user data
  if (useCookie('token').value) {
    await fetchUser()
    await fetchMyOrders()
  }

  isPageLoading.value = false

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
</script>
