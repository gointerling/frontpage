<template>
  <div class="absolute px-4 sm:px-24 top-6 w-full z-50">
    <nav class="bg-white rounded-full shadow min-w-full">
      <div class="flex justify-between h-16 px-8 sm:px-8">
        <!-- Logo -->
        <div class="flex gap-4 items-center">
          <nuxt-link
            :to="{ name: 'index' }"
            class="flex-shrink-0 flex items-center align-middle"
          >
            <div class="flex-shrink-0 flex items-center align-middle">
              <nuxt-icon name="logo" class="text-primary text-3xl" />
              <span class="text-primary ml-2">gointerling</span>
            </div>
          </nuxt-link>

          <nuxt-link
            v-if="!isMobileView"
            :to="{ name: 'facilitators' }"
            class="inline-flex items-center px-1 font-semibold border-primary text-gray-900 focus:outline-none focus:border-blue-900 transition duration-150 ease-in-out"
          >
            <span class="text-gray-900"> Facilitators List </span>
          </nuxt-link>
        </div>

        <!-- Hamburger Button -->
        <div class="md:hidden flex items-center gap-3">
          <button
            @click="
              navigateTo({ name: 'admin-dashboard', query: { as: 'admin' } })
            "
          >
            <nuxt-icon
              v-if="user?.is_admin === 1"
              name="admin"
              class="text-2xl"
              filled
            />
          </button>
          <button @click="navigateTo({ name: 'packages' })">
            <nuxt-icon name="badge" class="text-2xl" filled />
          </button>
          <button
            @click="
              navigateTo({
                name: 'my-client-orders',
                query: { section: 'order-history' },
              })
            "
          >
            <nuxt-icon name="order" class="text-2xl" filled />
          </button>
          <button
            @click="toggleNotification"
            :class="
              isNotificationOpen
                ? 'bg-primary text-white p-2 rounded-full'
                : 'p-2'
            "
          >
            <nuxt-icon
              name="notification"
              class="text-xl"
              :class="isNotificationOpen ? 'text-white' : 'text-primary'"
            />
          </button>

          <button
            @click="toggleMobileMenu"
            class="text-gray-900 focus:outline-none"
          >
            <nuxt-icon name="menu" class="text-lg text-primary" />
          </button>
        </div>

        <!-- Desktop Menu -->
        <div
          class="hidden md:flex sm:items-center sm:space-x-8 justify-between"
        >
          <div v-if="!user" class="flex items-center gap-2">
            <button
              class="px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"
              @click="navigateTo({ name: 'auth-login', query: { as: 'user' } })"
            >
              Sign in as User
            </button>
            <button
              class="px-4 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"
              @click="
                navigateTo({ name: 'auth-login', query: { as: 'facilitator' } })
              "
            >
              Sign in as Facilitator
            </button>
          </div>

          <div v-else class="flex items-center gap-2">
            <button
              class="p-2 rounded-full"
              @click="
                navigateTo({ name: 'admin-dashboard', query: { as: 'admin' } })
              "
            >
              <nuxt-icon
                v-if="user.is_admin === 1"
                name="admin"
                class="text-2xl"
                filled
              />
            </button>
            <button
              class="p-2 rounded-full"
              @click="navigateTo({ name: 'packages' })"
            >
              <nuxt-icon name="badge" class="text-2xl" filled />
            </button>
            <button
              class="p-2 rounded-full"
              @click="
                navigateTo({
                  name: 'my-client-orders',
                  query: { section: 'order-history' },
                })
              "
            >
              <nuxt-icon name="order" class="text-2xl" filled />
            </button>
            <button
              @click="toggleNotification"
              :class="
                isNotificationOpen
                  ? 'bg-primary text-white p-2 rounded-full'
                  : 'p-2'
              "
            >
              <nuxt-icon
                name="notification"
                class="text-2xl"
                :class="isNotificationOpen ? 'text-white' : 'text-primary'"
              />
            </button>
            <button
              @click="toggleDropdown"
              class="flex items-center text-sm font-medium text-gray-900 rounded-full focus:outline-none focus:shadow-outline"
            >
              <UAvatar
                :alt="user?.fullname"
                :src="user?.photo"
                size="sm"
                imgClass="object-cover"
              />
              <span class="mx-2 capitalize">{{ user?.fullname }}</span>
              <nuxt-icon name="chevron-simple-down" class="mx-4" filled />
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-white rounded-lg mt-2 z-50 shadow-md"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 rounded-none">
        <div v-if="!user" class="flex flex-col space-y-2">
          <button
            class="px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"
            @click="navigateTo({ name: 'auth-login', query: { as: 'user' } })"
          >
            Sign in as User
          </button>
          <button
            class="px-4 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"
            @click="
              navigateTo({ name: 'auth-login', query: { as: 'facilitator' } })
            "
          >
            Sign in as Facilitator
          </button>
        </div>

        <div v-else class="flex flex-col space-y-2">
          <nuxt-link
            :to="{ name: 'facilitators' }"
            class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <nuxt-icon name="user-group" class="text-2xl"></nuxt-icon>
            Facilitators List
          </nuxt-link>

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
            @click="
              navigateTo({
                name: 'my-client-orders',
                query: { section: 'order-history' },
              })
            "
            class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <nuxt-icon name="history" class="text-2xl"></nuxt-icon>
            Order History
          </button>
          <button
            v-if="user?.is_facilitator"
            class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            @click="navigateTo({ name: 'my-merchant-dashboard' })"
          >
            <nuxt-icon name="merchant" class="text-2xl"></nuxt-icon>
            Facilitator
            <UBadge
              v-if="user?.merchant_status === 'pending'"
              color="orange"
              :label="user?.merchant_status"
              variant="soft"
              class="uppercase"
            />
          </button>
          <button
            class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            href="#"
            @click="signOut"
          >
            <nuxt-icon name="logout" class="text-2xl"></nuxt-icon>
            Sign out
          </button>
        </div>
      </div>
    </div>

    <!-- Notification -->
    <div
      v-show="isNotificationOpen"
      :class="
        isMobileView
          ? 'mt-2 bg-white rounded-lg shadow-lg z-10'
          : 'absolute right-24 z-10 mt-2 w-96 py-1 bg-white rounded-lg shadow-lg'
      "
    >
      <div
        class="flex justify-between px-4 items-center border-b border-gray-200"
      >
        <span class="uppercase text-primary font-semibold">Notifications</span>
        <UButton variant="link" color="red">Mark all as read</UButton>
      </div>
      <button
        class="w-full flex justify-start gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200"
        href="#"
      >
        Your order has been received and is now being processed. Thank you for
        choosing Gointering!
      </button>
      <button
        class="w-full flex justify-start gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200"
        href="#"
      >
        Your order has been received and is now being processed. Thank you for
        choosing Gointering!
      </button>
    </div>

    <!-- Dropdown -->
    <div
      v-show="open"
      :class="
        isMobileView
          ? 'z-10 mt-2 w-58 py-1 bg-white rounded-lg shadow-lg'
          : ' absolute right-24 z-12  w-58 py-1 bg-white rounded-lg shadow-lg'
      "
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
        @click="
          navigateTo({
            name: 'my-client-orders',
            query: { section: 'order-history' },
          })
        "
        class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        <nuxt-icon name="history" class="text-2xl"></nuxt-icon>
        Order History
      </button>
      <button
        v-if="user?.is_facilitator"
        class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        @click="navigateTo({ name: 'my-merchant-dashboard' })"
      >
        <nuxt-icon name="merchant" class="text-2xl"></nuxt-icon>
        Facilitator
        <UBadge
          v-if="user?.merchant_status === 'pending'"
          color="orange"
          :label="user?.merchant_status"
          variant="soft"
          class="uppercase"
        />
      </button>
      <button
        class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        href="#"
        @click="signOut"
      >
        <nuxt-icon name="logout" class="text-2xl"></nuxt-icon>
        Sign out
      </button>
    </div>
  </div>
</template>

<script setup>
// components
const toast = useToast()

// router
const router = useRouter()

// props
const props = defineProps({
  user: {
    type: Object,
    default: null,
  },
})

// state
const open = ref(false)
const isNotificationOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileView = ref(false)

// emits
const emit = defineEmits(['update'])

// methods
const navigateTo = (path) => {
  router.push(path)

  console.log('path', path)
}

const toggleNotification = () => {
  isNotificationOpen.value = !isNotificationOpen.value

  // close the mobile menu
  isMobileMenuOpen.value = false

  // close the user dropdown
  open.value = false
}

const toggleDropdown = () => {
  open.value = !open.value

  // close the notification dropdown
  isNotificationOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value

  // close the user dropdown
  open.value = false

  // close the notification dropdown
  isNotificationOpen.value = false
}

const signOut = () => {
  const token = useCookie('token')
  token.value = null

  open.value = false

  // rebuild the component by emitting an event
  emit('logout')

  // toast
  toast.add({
    title: 'Success!',
    color: 'green',
    icon: 'i-heroicons-check-circle',
    description: 'Successfully signed out!',
  })

  // redirect if not on the home page
  if (router.currentRoute.value.name !== 'index') {
    router.push({
      name: 'auth-login',
    })
  }
}

// watch for screen size
const checkScreenSize = () => {
  isMobileView.value = window.innerWidth < 900
}

// on mount
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})
</script>

<style>
.nav-center {
  left: 50%;
  transform: translateX(-50%);
}
</style>
