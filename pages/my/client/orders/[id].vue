<template>
  <div>
    <div v-show="!isPageLoading" class="w-100 flex flex-col items-center">
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
              <div class="flex gap-3">
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
              <UButton
                v-if="order.order_status === 'completed'"
                color="primary"
                class="text-white mr-4"
                @click="
                  openNewTab(
                    `https://gointering.com/api/v1/orders/${order.id}/download-result`
                  )
                "
              >
                Download Result
              </UButton>

              <div class="flex flex-col text-right">
                <span class="font-thin text-primary text-md">
                  Amount to be transfer :
                </span>
                <h6 class="font-semibold text-primary text-lg my-1">
                  {{ formatPrice(order.price) }}
                </h6>

                <span class="font-thin text-primary text-md">
                  Gointering Account
                </span>
                <h6
                  class="font-bold text-primary text-md text-xl py-1 flex gap-2 items-center"
                >
                  {{ order.merchant.bank_account }} (BCA)
                  <UButton
                    size="xs"
                    variant="outline"
                    color="blue"
                    @click="copyToClipboard(order.merchant.bank_account)"
                    class=""
                  >
                    <nuxt-icon name="copy" class="text-lg" />
                  </UButton>
                </h6>

                <img src="" alt="" />
              </div>
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
const { getDetailOrder } = useOrderService()

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
// toggle password visibility
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
        color: 'orange',
        text: 'Waiting to be paid',
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

    payload.value = {
      fullname: user.value.fullname,
      email: user.value.email,
      phone: user.value.phone,
      address: user.value.address,
      personal_description: user.value.personal_description,
      photo: user.value.photo,
      main_skills: checkIfJSON(user.value.main_skills) ?? [],
      additional_skills: checkIfJSON(user.value.additional_skills) ?? [],
    }
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

const fetchDetailOrder = async () => {
  const orderId = route.params.id

  console.log(orderId)
  try {
    const { data } = await getDetailOrder(orderId)

    orders.value = [data.data.order]
  } catch (error) {
    console.error('Fetching orders failed:', error)
  }
}

// trigger file input click
const triggerFileInput = () => {
  fileInput.value.click()
}

// handle file change
const onFileChange = async (event) => {
  const file = event.target.files[0]
  if (file) {
    // toast upload progress
    toast.add({
      title: 'Uploading...',
      color: 'blue',
      icon: 'i-heroicons-arrow-up-tray',
      description: 'Please wait while we upload your photo...',
    })

    try {
      const response = await uploadFile(file, `profile_picture_${file.name}`)

      payload.value.photo = response.data.data.fileRecord.url
      photoWarning.value =
        'This preview is temporary, please save to apply changes.'
    } catch (err) {
      console.error('Photo upload failed:', err)

      // show error message
      toast.add({
        title: 'Uh Oh!',
        color: 'red',
        icon: 'i-heroicons-exclamation-triangle',
        description: getFirstErrorMessage(err.response.data.error),
      })
    }
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

// update profile
const updateProfile = async () => {
  try {
    console.log(payload.value)

    const { data } = await updateMyProfile(payload.value)

    const userData = {
      ...useCookie('token').value.user,
      email: data.data.user.email,
      fullname: data.data.user.fullname,
      photo: data.data.user.photo,
      address: data.data.user.address,
      phone: data.data.user.phone,
      personal_description: data.data.user.personal_description,
      main_skills: data.data.user.main_skills,
      additional_skills: data.data.user.additional_skills,
    }

    console.log(JSON.parse(JSON.stringify(userData)))

    // set local user
    user.value = userData

    // update cookie
    useCookie('token').value.user = userData

    // show success message
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: data.message,
    })

    // reset photo warning
    photoWarning.value = ''
  } catch (error) {
    console.error('Update profile failed:', error)

    // show error message
    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-exclamation-triangle',
      description: getFirstErrorMessage(error.response.data.error),
    })
  }
}

const updatePassword = async () => {
  try {
    const { data } = await updateMyPassword({
      password: newPassword.value,
      password_confirmation: confirmPassword.value,
    })

    // show success message
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: data.message,
    })

    // reset password fields
    newPassword.value = ''
    confirmPassword.value = ''
  } catch (error) {
    console.error('Change password failed:', error)

    // show error message
    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-exclamation-triangle',
      description: getFirstErrorMessage(error.response.data.error),
    })
  }
}

const updateBank = async () => {
  try {
    const { data } = await updateMyMerchant({
      type: merchant.value.type,
      bank_id: merchant.value.bank.id,
      bank_account: `${merchant.value.bank_account}`,
      bank: merchant.value.bank.name,
      cv_url: merchant.value.cv_url,
      certificates: merchant.value.certificates,
      portfolios: merchant.value.portfolios,
    })

    // show success message
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: data.message,
    })
  } catch (error) {
    console.error('Update merchant failed:', error)

    // show error message
    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-exclamation-triangle',
      description: getFirstErrorMessage(error.response.data.error),
    })
  }
}

const updateMerchantType = async () => {
  try {
    const { data } = await updateMyMerchant({
      type: merchant.value.type.id,
      bank_id: merchant.value.bank.id,
      bank_account: `${merchant.value.bank_account}`,
      bank: merchant.value.bank.name,
      cv_url: merchant.value.cv_url,
      certificates: merchant.value.certificates,
      portfolios: merchant.value.portfolios,
    })

    // show success message
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: data.message,
    })

    // set user cookie
    useCookie('token').value.user.merchant_status = 'pending'

    // redirect to merchant status page
    router.push({
      name: 'my-merchant-status',
    })
  } catch (error) {
    console.error('Update merchant failed:', error)

    // show error message
    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-exclamation-triangle',
      description: getFirstErrorMessage(error.response.data.error),
    })
  }
}

const updateService = async () => {
  try {
    const { data } = await updateMyService(service.value.id, {
      name: service.value.name,
      price: service.value.price,
      type: service.value.type,
      time_estimated: service.value.time_estimated,
      time_estimated_unit: service.value.time_estimated_unit,
      desc: service.value.desc,
      working_hours: service.value.working_hours,
      language_sources: service.value.languages,
      language_destinations: service.value.languages,
    })

    // show success message
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: data.message,
    })
  } catch (error) {
    console.error('Update service failed:', error)

    // show error message
    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-exclamation-triangle',
      description: getFirstErrorMessage(error.response.data.error),
    })
  }
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

onMounted(async () => {
  // fetch user data
  if (useCookie('token').value) {
    await fetchUser()
    await fetchDetailOrder()
  }

  isPageLoading.value = false

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
</script>
