<template>
  <div>
    <PageLoader v-if="isPageLoading" />
    <div v-else class="w-100">
      <Navbar />
      <Banner class="min-h-[250px]" />
      <div class="p-8 lg:px-36">
        <div class="grid grid-cols-12 gap-4">ads</div>
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

// current facilitator id from route params
const id = ref(route.params.id)

// state
const isPageLoading = ref(true)

onMounted(() => {
  isPageLoading.value = false
})
</script>
