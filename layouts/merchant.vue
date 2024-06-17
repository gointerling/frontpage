<template>
  <div>
    <div v-show="!isPageLoading" class="flex">
      <SideDrawer :navs="navs" :isSmallSize="isSmallSize" />

      <div class="flex flex-col w-full bg-slate-100">
        <nav class="p-6 w-full flex justify-between">
          <div class="flex gap-3 items-center">
            <UButton class="p-2 bg-gray-300" @click="toggleDrawerSize">
              <nuxt-icon name="sidebar" class="text-white" />
            </UButton>
            <span class="font-semibold">
              {{ menuTitle || 'Admin Dashboard' }}
            </span>
          </div>

          <button
            @click="open = !open"
            class="flex items-center align-middle text-sm font-medium text-gray-900 rounded-full focus:outline-none focus:shadow-outline"
          >
            <UAvatar :alt="user.fullname ?? ''" :src="user.photo" size="sm" />
            <span class="mx-2">{{ user.fullname ?? '' }}</span>
            <nuxt-icon name="chevron-simple-down" class="mx-4" filled />
          </button>

          <!-- Dropdown -->
          <div
            v-show="open"
            class="absolute right-0 z-10 mt-10 w-48 py-1 bg-white rounded-lg shadow-lg"
          >
            <a
              href="#"
              class="flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <nuxt-icon name="user-circle" class="text-2xl"></nuxt-icon>
              Profile
            </a>
            <button
              class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              href="#"
              @click="signOut"
            >
              <nuxt-icon name="logout" class="text-2xl"></nuxt-icon>
              Sign out
            </button>
          </div>
        </nav>

        <div class="w-full">
          <slot />
        </div>
      </div>
    </div>

    <!-- Loader -->
    <PageLoader v-if="isPageLoading" />
  </div>
</template>

<script setup>
// components
import SideDrawer from '~/components/admin/SideDrawer.vue'
import PageLoader from '~/components/PageLoader.vue'

// imports
import { ref, onMounted } from 'vue'
import { useMerchantService } from '~/composables/useMerchantService'

// services
const { getMyMerchants } = useMerchantService()

// router
const route = useRoute()
const router = useRouter()

// component setup
const isPageLoading = ref(true)
const user = ref({
  fullname: '',
  photo: '',
})

// state
const isSmallSize = ref(false)
const open = ref(false)

const toggleDrawerSize = () => {
  isSmallSize.value = !isSmallSize.value

  // set local storage
  localStorage.setItem('sidenav-closed', isSmallSize.value)
}

const userId = route.params.id

const navs = [
  {
    label: 'Dashboard',
    icon: 'i-heroicons-home',
    to: `/my/dashboard`,
  },
  {
    label: 'Transactions',
    icon: 'i-heroicons-chart-bar',
    to: '/my/transactions',
  },
  {
    label: 'Merchants',
    icon: 'i-heroicons-building-storefront',
    to: '/merchant/merchants',
  },
]

// fetch user data on mount
const fetchUser = async () => {
  try {
    user.value = useCookie('token').value.user || null
  } catch (error) {
    console.error('Fetching user failed:', error)
  }
}

const signOut = () => {
  const token = useCookie('token')
  token.value = null

  open.value = false

  // redirect to login
  router.push('/auth/login')
}

// check if the first time setup merchant
const checkFirstTimeSetup = async () => {
  const { data } = await getMyMerchants()
  const isFirstTime = data.data.user.merchants[0].is_first_time === 1

  if (isFirstTime) {
    router.push('/my/merchant/onboarding')
  }
}

// on mount
onMounted(async () => {
  // sidebar size
  isSmallSize.value = localStorage.getItem('sidenav-closed') === 'true'

  // fetch user data
  if (useCookie('token').value) {
    await fetchUser()
  }

  // check if the first time setup merchant
  await checkFirstTimeSetup()

  isPageLoading.value = false

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
</script>
