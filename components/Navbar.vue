<template>
  <div class="relative px-24 top-6">
    <nav class="bg-white rounded-full shadow min-w-full">
      <div class="flex justify-between h-16 px-8">
        <!-- Logo -->
        <div class="flex">
          <nuxt-link
            :to="{
              name: 'index',
            }"
            class="flex-shrink-0 flex items-center align-middle"
          >
            <div class="flex-shrink-0 flex items-center align-middle">
              <nuxt-icon name="logo" class="text-primary text-3xl" />
              <span class="text-primary ml-2">gointerling</span>
            </div>
          </nuxt-link>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <nuxt-link
              :to="{
                name: 'facilitators',
              }"
              class="inline-flex items-center px-1 pt-1 font-semibold border-primary text-sm leading-5 text-gray-900 focus:outline-none focus:border-blue-900 transition duration-150 ease-in-out"
            >
              Facilitators List
            </nuxt-link>
          </div>
        </div>

        <!-- Button -->
        <div v-if="!user" class="hidden sm:ml-6 sm:flex sm:items-center gap-2">
          <button
            class="px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"
            @click="
              navigateTo({
                name: 'auth-login',
                query: { as: 'user' },
              })
            "
          >
            Sign in as User
          </button>
          <button
            class="px-4 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"
            @click="
              navigateTo({
                name: 'auth-login',
                query: { as: 'facilitator' },
              })
            "
          >
            Sign in as Facilitator
          </button>
        </div>

        <!-- User -->
        <div v-else class="py-4">
          <div class="sm:ml-6 sm:flex sm:items-center">
            <div class="relative flex gap-1">
              <!-- Button -->
              <div class="flex align-middle items-center gap-6 mr-4">
                <button
                  @click="
                    navigateTo({
                      name: 'admin-dashboard',
                      query: { as: 'admin' },
                    })
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
                  @click="
                    navigateTo({
                      name: 'notification',
                    })
                  "
                >
                  <nuxt-icon name="badge" class="text-2xl" filled />
                </button>
                <button
                  @click="
                    navigateTo({
                      name: 'my-client-orders',
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
              </div>
              <button
                @click="toggleDropdown"
                class="flex items-center align-middle text-sm font-medium text-gray-900 rounded-full focus:outline-none focus:shadow-outline"
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

              <!-- Dropdown -->
              <div
                v-show="open"
                class="absolute right-0 z-10 mt-12 w-58 py-1 bg-white rounded-lg shadow-lg"
              >
                <button
                  class="w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  @click="
                    navigateTo({
                      name: 'profile',
                    })
                  "
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
                  @click="
                    navigateTo({
                      name: 'my-merchant-dashboard',
                    })
                  "
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

              <!-- Notification -->
              <div
                v-show="isNotificationOpen"
                class="absolute right-20 z-10 mt-12 w-96 py-1 bg-white rounded-lg shadow-lg"
              >
                <div
                  class="flex justify-between px-4 items-center border-b border-gray-200"
                >
                  <span class="uppercase text-primary font-semibold">
                    Notifications
                  </span>
                  <UButton variant="link" color="red" class="">
                    Mark all as read
                  </UButton>
                </div>
                <button
                  class="w-full flex justify-start gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200"
                  href="#"
                >
                  Your order has been received and is now being processed. Thank
                  you for choosing Gointering!
                </button>
                <button
                  class="w-full flex justify-start gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200"
                  href="#"
                >
                  Your order has been received and is now being processed. Thank
                  you for choosing Gointering!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
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

// emits
const emit = defineEmits(['update'])

// methods
const navigateTo = (path) => {
  router.push(path)
}

const toggleNotification = () => {
  isNotificationOpen.value = !isNotificationOpen.value

  // close the user dropdown
  open.value = false
}

const toggleDropdown = () => {
  open.value = !open.value

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
</script>

<style>
.nav-center {
  left: 50%;
  transform: translateX(-50%);
}
</style>
