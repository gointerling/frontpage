<template>
  <div class="bg-[#E4F1F7] h-screen">
    <PageLoader v-if="isPageLoading" />
    <div v-else class="w-100">
      <Navbar :user="user" @logout="logout" />
      <!-- <Banner class="min-h-[250px]" /> -->
      <div class="p-8 lg:px-36 mt-28">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-3 -mt-20">
            <UserSidebar />
          </div>
          <div class="col-span-9">
            <Detail />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageLoader from '~/components/PageLoader.vue'
import Navbar from '~/components/Navbar.vue'
import Banner from '~/components/facilitators/Banner.vue'
import UserSidebar from '~/components/facilitators/UserSidebar.vue'
import Detail from '~/components/facilitators/Detail.vue'

// ref
import { ref } from 'vue'
const route = useRoute()

// state
const isPageLoading = ref(true)

// data
const user = ref(null)

// fetch user data on mount
const fetchUser = async () => {
  try {
    user.value = useCookie('token').value.user || null
  } catch (error) {
    console.error('Fetching user failed:', error)
  }
}

const logout = () => {
  useCookie('token').value = null
  user.value = null
}

onMounted(async () => {
  // simulate a loading delay

  // fetch user data
  if (useCookie('token').value) {
    await fetchUser()
  }

  isPageLoading.value = false

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
</script>
