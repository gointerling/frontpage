<template>
  <div>
    <NuxtLayout name="merchant">
      <div class="w-full p-2">content merchant</div>
    </NuxtLayout>
  </div>
</template>

<script setup>
// import { useMerchantService } from '~/composables/useMerchantService'
import { onMounted } from 'vue'

// route
const route = useRoute()

// const { getMyMerchants } = useMerchantService()

definePageMeta({
  layout: false,
})

const userId = route.params.id

onMounted(() => {
  console.log('mounted')

  // const result = getMyMerchants()
  // console.log(result)
})
</script>
