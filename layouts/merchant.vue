<template>
  <div class="h-[0px]">
    <div v-if="!isPageLoading" class="flex h-screen">
      <!-- SideDrawer with sticky positioning -->
      <div class="sticky top-0 h-screen">
        <SideDrawer :navs="navs" :isSmallSize="isSmallSize" title="Dash" />
      </div>

      <div class="flex flex-col w-full bg-slate-100">
        <nav class="p-6 w-full flex justify-between">
          <div class="flex gap-3 items-center">
            <UButton class="p-2 bg-gray-300" @click="toggleDrawerSize">
              <nuxt-icon name="sidebar" class="text-white" />
            </UButton>
            <span class="font-semibold">
              {{ menuTitle || 'Facilitator Dashboard' }}
            </span>
          </div>

          <button
            @click="open = !open"
            class="flex items-center align-middle text-sm font-medium text-gray-900 rounded-full focus:outline-none focus:shadow-outline"
          >
            <UAvatar
              :alt="user.fullname ?? ''"
              :src="user.photo"
              size="sm"
              imgClass="object-cover"
            />
            <span class="mx-2">{{ user.fullname ?? '' }}</span>
            <nuxt-icon name="chevron-simple-down" class="mx-4" filled />
          </button>

          <!-- Dropdown -->
          <div
            v-show="open"
            class="absolute right-0 z-10 mt-10 w-48 py-1 bg-white rounded-lg shadow-lg"
          >
            <button
              class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="navigateTo({ name: 'profile' })"
            >
              <nuxt-icon name="user-circle" class="text-2xl"></nuxt-icon>
              Profile
            </button>
            <button
              class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="navigateTo({ name: 'index' })"
            >
              <nuxt-icon name="home" class="text-2xl"></nuxt-icon>
              Home
            </button>
            <button
              class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="signOut"
            >
              <nuxt-icon name="logout" class="text-2xl"></nuxt-icon>
              Sign out
            </button>
          </div>
        </nav>

        <div class="w-full h-full">
          <slot />
        </div>
      </div>
    </div>

    <!-- Loader -->
    <PageLoader v-else />

    <Chat :is-chat-show="chatStore.isChatOpen" />

    <!-- Chat Button Absolute -->
    <button
      v-show="!chatStore.isChatOpen"
      class="absolute bottom-5 right-5 p-4 flex gap-2 align-middle items-center text-sm bg-primary text-accent hover:bg-blue-900 rounded-full"
      @click="chatStore.toggleChat"
    >
      <nuxt-icon name="chat" class="text-2xl"></nuxt-icon>
      <span
        v-if="chatStore.unreadMessages > 0"
        class="absolute top-2 right-8 bg-red-600 text-white text-xs px-2 ml-1 rounded-full z-20"
      >
        {{ chatStore.unreadMessages > 10 ? 'New' : chatStore.unreadMessages }}
      </span>
    </button>
  </div>
</template>

<script setup>
// components
import SideDrawer from '~/components/admin/SideDrawer.vue'
import PageLoader from '~/components/PageLoader.vue'

// store
import { useChatStore } from '~/stores/chat'
const chatStore = useChatStore()

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
    to: `/my/merchant/dashboard`,
  },
  // {
  //   label: 'Services',
  //   icon: 'i-heroicons-language',
  //   to: '/my/merchant/services',
  // },
  {
    label: 'Orders',
    icon: 'i-heroicons-building-storefront',
    to: '/my/merchant/orders',
  },
]

// fetch user data on mount
const fetchUser = async () => {
  try {
    user.value = useCookie('token').value.user || null
  } catch (error) {
    console.error('Fetching user failed:', error)
  } finally {
    isPageLoading.value = false
  }
}

const navigateTo = (to) => {
  router.push(to)
}

const signOut = () => {
  const token = useCookie('token')
  token.value = null

  open.value = false

  // redirect to login
  router.push('/auth/login')
}

// on mount
onMounted(async () => {
  // sidebar size
  isSmallSize.value = localStorage.getItem('sidenav-closed') === 'true'

  // check if the first time setup merchant

  // fetch user data
  if (useCookie('token').value) {
    await fetchUser()
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
</script>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
}
</style>
