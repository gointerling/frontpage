<template>
  <div>
    <div v-show="!isPageLoading" class="w-100 flex flex-col items-center">
      <Navbar :user="user" @logout="logout" class="w-full" />

      <div
        class="flex justify-between items-stretch w-10/12 my-16 gap-16 px-8 pt-16"
      >
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
          <div class="flex gap-2 items-center mb-3">
            <UButton
              variant="link"
              @click="
                navigateTo({
                  name: 'my-client-orders',
                })
              "
            >
              <nuxt-icon name="chevron-left" />
            </UButton>
            <h6 class="font-semibold">Detail Order</h6>
          </div>

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
            class="p-2"
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
            <div class="flex gap-3 justify-between items-center px-2">
              <div class="flex gap-3 w-7/12">
                <div class="flex flex-col gap-1">
                  <UAvatar
                    :alt="order.merchant_user.fullname"
                    :src="order.merchant_user.photo"
                    size="xl"
                    imgClass="object-cover"
                    class="mb-2"
                  />
                  <span class="font-semibold text-primary">
                    {{ order.merchant_user.fullname }}
                  </span>
                  <div class="">
                    <span class="text-sm text-gray-700"
                      >{{ order.service.name }} Service <br />
                    </span>
                    <span class="text-sm text-gray-700">
                      ({{ order.language_source.name }} -
                      {{ order.language_destination.name }})
                    </span>
                  </div>
                </div>
              </div>
              <div v-if="order.order_status === 'completed'">
                <div
                  v-if="order.result_file_url"
                  class="mt-4 flex flex-col items-end gap-2"
                >
                  <span class="font-semibold text-sm pb-1">
                    Download Result
                  </span>

                  <UButton
                    color="primary"
                    class="text-white"
                    @click="openNewTab(order.result_file_url)"
                  >
                    <UIcon name="i-heroicons-arrow-down-tray" />
                    Download
                  </UButton>
                </div>

                <div
                  v-if="order.meet_url"
                  class="mt-4 flex flex-col items-end gap-2"
                >
                  <span class="font-semibold text-sm pb-1">Meeting Link</span>

                  <UButton color="primary" @click="openNewTab(order.meet_url)">
                    <UIcon name="i-heroicons-video-camera" />
                    Open Meeting Url
                  </UButton>
                </div>
              </div>

              <div
                v-if="order.order_status === 'waitingpaid'"
                class="flex flex-col text-right items-end"
              >
                <span class="font-thin text-primary text-sm">
                  Amount to be transfer :
                </span>
                <h6 class="font-semibold text-primary text-lg my-1">
                  {{ formatPrice(order.price) }}
                </h6>

                <span class="font-thin text-primary text-sm">
                  {{ transferBank.bank_account_name }}
                </span>
                <h6
                  class="font-bold text-primary text-md text-xl py-2 flex gap-2 items-center uppercase"
                >
                  {{ transferBank.bank_account }} ({{ transferBank.bank }})
                  <UButton
                    size="xs"
                    variant="outline"
                    color="blue"
                    @click="copyToClipboard(transferBank.bank_account)"
                    class=""
                  >
                    <nuxt-icon name="copy" class="text-lg" />
                  </UButton>
                </h6>

                <span class="font-thin text-primary text-sm mb-2">
                  {{ order.payment_file_url ? 'Re' : '' }} Upload Proof of
                  Payment
                </span>
                <FileUpload
                  v-if="isReupload || !order.payment_file_url"
                  title="Proof of Payment"
                  accept="*"
                  :center="true"
                  max-size="6291456"
                  @file-uploaded="updateProofOfPayment"
                />

                <UButton
                  v-if="!isReupload && order.payment_file_url"
                  color="primary"
                  class="text-white"
                  @click="isReupload = true"
                >
                  <UIcon name="i-heroicons-arrow-path" />
                  Reupload
                </UButton>
              </div>

              <div
                v-if="order.order_status === 'paid'"
                class="flex flex-col text-right items-end"
              >
                <span class="font-semibold text-xl pb-2">Work In Progress</span>
                <p class="w-7/12 text-gray-600 text-sm">
                  Your order has been received and is now being processed. Thank
                  you for your trust in using our services.
                </p>

                <div v-if="order.meet_url" class="mt-4 flex flex-col gap-2">
                  <span class="font-semibold text-sm pb-1">Meeting Link</span>

                  <UButton color="primary" @click="openNewTab(order.meet_url)">
                    <UIcon name="i-heroicons-video-camera" />
                    Open Meeting Url
                  </UButton>
                </div>
              </div>
            </div>

            <div
              class="mt-6"
              v-if="
                order.order_status === 'paid' ||
                order.order_status === 'completed'
              "
            >
              <h6 class="font-semibold mb-2">Discussions</h6>

              <UButton
                v-if="commentlimit < comments.length"
                block
                color="primary"
                variant="soft"
                class="my-4 bg-blue-100 hover:bg-blue-200"
                @click="commentlimit = comments.length"
              >
                <UIcon name="i-heroicons-chat-bubble-oval-left-ellipsis" />
                Load Previous Comments
              </UButton>

              <!-- Comments -->
              <div v-for="comment in filteredComments" :key="comment">
                <!-- Others -->
                <div v-if="comment.is_facilitator" class="pb-4">
                  <UCard
                    :ui="{
                      body: {
                        base: 'w-full',
                        padding: 'p-4 sm:p-4',
                      },
                    }"
                    class="flex gap-4 items-center w-full"
                  >
                    <div class="flex gap-2 items-center">
                      <UAvatar
                        :alt="comment.user.fullname"
                        :src="comment.user.photo"
                        size="md"
                        imgClass="object-cover"
                      />
                      <div class="flex flex-col items-start gap-1">
                        <span class="font-semibold">
                          {{ comment.user.fullname }}
                        </span>
                        <UBadge variant="soft" size="xs" color="blue">
                          <span class="capitalize"> Faciliator </span>
                        </UBadge>
                      </div>
                    </div>

                    <div class="flex text-gray-700 my-3 text-sm">
                      {{ comment.message }}
                    </div>

                    <div
                      class="flex items-center"
                      :class="
                        comment.file_url ? 'justify-between' : 'justify-end'
                      "
                    >
                      <UButton
                        v-if="comment.file_url"
                        color="green"
                        variant="soft"
                        @click="openNewTab(comment.file_url)"
                      >
                        <UIcon name="i-heroicons-arrow-down-tray" />
                        Attached File
                      </UButton>

                      <span class="text-gray-700 text-sm">
                        {{ formatDistanceToNow(new Date(comment.time)) }}
                      </span>
                    </div>
                  </UCard>
                </div>

                <!-- You -->
                <div v-else class="pb-4">
                  <UCard
                    :ui="{
                      body: {
                        base: 'w-full',
                        padding: 'p-4 sm:p-4',
                      },
                    }"
                    class="flex gap-4 items-center w-ful bg-blue-50"
                  >
                    <div class="flex gap-2 items-center">
                      <UAvatar
                        :alt="comment.user.fullname"
                        :src="comment.user.photo"
                        size="md"
                        imgClass="object-cover"
                      />
                      <div class="flex flex-col items-start gap-1">
                        <span class="font-semibold text-primary"> You </span>
                      </div>
                    </div>

                    <div class="flex text-gray-700 my-3 text-sm">
                      {{ comment.message }}
                    </div>

                    <div
                      class="flex items-center"
                      :class="
                        comment.file_url ? 'justify-between' : 'justify-end'
                      "
                    >
                      <UButton
                        v-if="comment.file_url"
                        color="green"
                        variant="soft"
                        @click="openNewTab(comment.file_url)"
                      >
                        <UIcon name="i-heroicons-arrow-down-tray" />
                        Attached File
                      </UButton>

                      <span class="text-gray-700 text-sm">
                        {{
                          formatDistanceToNow(new Date(comment.time), {
                            addSuffix: true,
                          })
                        }}
                      </span>
                    </div>
                  </UCard>
                </div>
              </div>

              <UCard
                :ui="{
                  body: {
                    base: 'w-full',
                    padding: 'p-4 sm:p-2',
                  },
                }"
                class="flex gap-4 items-center w-full"
              >
                <UTextarea
                  v-model="userComment.message"
                  class="w-full mb-2"
                  placeholder="Add Comment..."
                  variant="none"
                />
                <div class="flex justify-end border-t border-1 pt-2 gap-2">
                  <FileUpload
                    :is-display-file="false"
                    accept="*"
                    max-size="6291456"
                    @file-uploaded="setCommentFileUrl"
                  />

                  <UButton
                    color="primary"
                    @click="updateComment(order.id, userComment)"
                  >
                    <UIcon name="i-heroicons-paper-airplane" />
                    Send
                  </UButton>
                </div>
              </UCard>
            </div>
          </UCard>
        </div>
      </div>
    </div>

    <!-- Loader -->
    <PageLoader v-if="isPageLoading" />

    <ConfirmationModal :isOpen="isConfirmationModalOpen" :data="modalData" />
  </div>
</template>

<script setup>
// components
import PageLoader from '~/components/PageLoader.vue'
import Navbar from '~/components/Navbar.vue'
import FileUpload from '~/components/FileUpload.vue'

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
import { useSettingService } from '~/composables/useSettingService'

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
const { getDetailOrder, updateMyOrder } = useOrderService()
const { getSettingBank } = useSettingService()

// navs
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
const isReupload = ref(false)
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

const transferBank = ref({
  bank_name: '',
  bank_account: '',
  bank_account_name: '',
})
const orders = ref([])
const commentlimit = ref(3)
const comments = ref([])
const userComment = ref({
  user: {
    fullname: 'You',
    photo: '/images/avatar.jpg',
  },
  message: '',
  time: new Date().toISOString(),
  file_url: '',
  other_link: '',
  is_facilitator: false,
})

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

const filteredComments = computed(() => {
  // limit only 3 last comments

  return comments.value.slice(-(commentlimit.value ?? 3))
})

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
        text: 'Waiting Payment & Verification',
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

const openNewTab = (url) => {
  window.open(url, '_blank')
}

const navigateTo = (route) => {
  router.push(route)
}

const formatDistanceToNow = (date) => {
  const now = new Date()
  const past = new Date(date)
  const diffInSeconds = Math.floor((now - past) / 1000)

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  }

  for (const interval in intervals) {
    const value = Math.floor(diffInSeconds / intervals[interval])
    if (value >= 1) {
      return value === 1
        ? `${value} ${interval} ago`
        : `${value} ${interval}s ago`
    }
  }
  return 'just now'
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

const fetchDetailOrder = async () => {
  const orderId = route.params.id

  try {
    const { data } = await getDetailOrder(orderId)

    orders.value = [data.data.order]

    comments.value = checkIfJSON(data.data.order.comment_json) ?? []
  } catch (error) {
    console.error('Fetching orders failed:', error)
  }
}

const setCommentFileUrl = (value) => {
  console.log('File uploaded:', value)
  userComment.value.file_url = value
}

const getFirstErrorMessage = (errors) => {
  for (const field in errors) {
    if (errors[field].length > 0) {
      return errors[field][0]
    }
  }
  return null
}

// watch for changes
watch(
  () => selectedTab.value,
  (newValue) => {
    if (newValue === 'service') {
      const user = useCookie('token').value.user

      if (user.merchant_status === 'pending') {
        // redirect to merchant status page
        router.push({
          name: 'my-merchant-status',
        })
      }
    }
  }
)

const fetchUser = async () => {
  try {
    user.value = useCookie('token').value.user || null

    userComment.value.user = {
      fullname: user.value.fullname,
      photo: user.value.photo,
    }
  } catch (error) {
    console.error('Fetching user failed:', error)
  }
}

const updateComment = async (orderId, payload) => {
  const comment_payload = comments.value ?? []

  if (!payload.message && payload.file_url) {
    payload.message = 'Here I attached a file.'
  }

  if (!payload.message && !payload.file_url) {
    toast.add({
      title: 'Failed!',
      color: 'red',
      icon: 'i-heroicons-x-circle',
      description: 'Comment message is required!',
    })
    return
  }

  comment_payload.push(payload)

  try {
    const { data } = await updateMyOrder(orderId, {
      comment_json: comment_payload,
    })
    // Show toast
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: 'Order updated successfully!',
    })
    // fetch updated order
    await fetchDetailOrder()

    // reset comment
    userComment.value = {
      user: {
        fullname: user.value.fullname,
        photo: user.value.photo,
      },
      message: '',
      time: new Date().toISOString(),
      file_url: '',
      other_link: '',
      is_facilitator: false,
    }
  } catch (error) {
    console.error('Updating order failed:', error)
    // Show toast
    toast.add({
      title: 'Failed!',
      color: 'red',
      icon: 'i-heroicons-x-circle',
      description: 'Failed to update order!',
    })
  }
}

const updateProofOfPayment = async (value) => {
  const orderId = route.params.id

  try {
    const { data } = await updateMyOrder(orderId, {
      payment_file_url: value,
    })
    // Show toast
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: 'Order updated successfully!',
    })
    // fetch updated order
    await fetchDetailOrder()
  } catch (error) {
    console.error('Updating order failed:', error)
    // Show toast
    toast.add({
      title: 'Failed!',
      color: 'red',
      icon: 'i-heroicons-x-circle',
      description: 'Failed to update order!',
    })
  }
}

const fetchSettingBank = async () => {
  try {
    const { data } = await getSettingBank()

    transferBank.value = data.data.setting
  } catch (error) {
    console.error('Error fetching bank data:', error)
  } finally {
    isPageLoading.value = false
  }
}

onMounted(async () => {
  // fetch user data
  if (useCookie('token').value) {
    await fetchUser()
    await fetchDetailOrder()
    await fetchSettingBank()
  }
  isPageLoading.value = false

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
</script>
