<template>
  <div>
    <!-- onboarding -->
    <div
      v-if="!isPageLoading"
      class="w-full h-screen flex items-center justify-center bg-slate-200"
    >
      <UCard
        :ui="{ body: { padding: 'p-0', base: 'h-full' } }"
        class="min-w-[750px] min-h-[400px] flex items-center justify-center"
      >
        <div class="flex gap-4 p-4 h-full">
          <div class="flex align-middle justify-center items-center">
            <img :src="heroImage" width="300px" />
          </div>
          <div class="px-6 min-w-[400px] py-4">
            <nuxt-icon name="logo" filled class="text-4xl" />
            <h6 class="text-2xl font-semibold text-primary max-w-sm py-3">
              Greets our <br />
              <b class="text-accent text-3xl">Facilitators</b>!
            </h6>

            <h5 class="text-xl font-bold text-gray-800 mb-2">
              Status Pengajuan
            </h5>
            <UBadge
              :label="status.label"
              :color="status.color"
              variant="soft"
              size="md"
              class="capitalize"
              :class="
                status.color === 'gray' ? 'bg-slate-50 text-gray-700' : ''
              "
            />
            <p class="text-gray-600 text-sm leading-relaxed max-w-xs py-4">
              {{ status.message }}
            </p>

            <UButton @click="navigateTo('/')">
              <nuxt-icon name="chevron-left" />
              <span> Menu Utama </span>
            </UButton>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Loader -->
    <PageLoader v-else />
  </div>
</template>

<script setup>
import heroImage from '@/assets/images/facilitators-sm.svg'

// import components
import PageLoader from '~/components/PageLoader.vue'

import { useMerchantService } from '~/composables/useMerchantService'

// route
const route = useRoute()
const router = useRouter()

// import services
const { getMyMerchants } = useMerchantService()

// component setup
const isPageLoading = ref(true)
const isRedirecting = ref(true)

// data
const user = ref(null)
const status = ref({})

// methods
const checkFirstTimeSetup = async () => {
  const { data } = await getMyMerchants()
  const isFirstTime = data.data.user.merchants[0].is_first_time === 1
  const isStatusVerified = data.data.user.merchants[0].status === 'verified'

  const merchantStatus = data.data.user.merchants[0].status
  useCookie('token').value.user.merchant_status = merchantStatus

  if (isStatusVerified) {
    router.push({
      name: 'my-merchant-dashboard',
    })
  }

  if (isFirstTime) {
    router.push({
      name: 'my-merchant-onboarding',
    })
  }

  setResponseStatus(data.data.user.merchants[0].status)

  isRedirecting.value = false
}

const setResponseStatus = (statusValue) => {
  if (statusValue == 'pending') {
    status.value = {
      label: 'pending',
      color: 'orange',
      message:
        'Status pengajuan anda sedang dalam proses verifikasi oleh tim kami. Mohon tunggu hingga proses verifikasi selesai.',
    }
  }

  if (statusValue == 'inactive') {
    // set status
    status.value = {
      label: 'inactive',
      color: 'gray',
      message:
        'Status anda sedang di non-aktifkan, mohon hubungi tim kami untuk informasi lebih lanjut.',
    }
  }

  if (statusValue == 'verified') {
    status.value = {
      label: 'verified',
      color: 'blue',
      message:
        'Selamat! Status pengajuan anda telah diverifikasi oleh tim kami. Anda dapat menggunakan layanan kami sekarang.',
    }
  }
}

const fetchUser = async () => {
  try {
    user.value = useCookie('token').value.user || null
  } catch (error) {
    console.error('Fetching user failed:', error)
  } finally {
    isPageLoading.value = false
  }
}

const navigateTo = (path) => {
  router.push(path)
}

// on mount
onMounted(async () => {
  // check if the first time setup merchant
  await checkFirstTimeSetup()

  // fetch user data

  if (!isRedirecting.value) {
    if (useCookie('token').value) {
      await fetchUser()
    }
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
</script>
