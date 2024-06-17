<template>
  <div>
    <NuxtLayout name="admin">
      <div class="w-full pt-0 p-6 flex flex-col gap-2">
        <UCard
          :ui="{
            body: {
              base: 'flex justify-between items-center',
              background: '',
              padding: 'p-2 sm:p-4',
            },
          }"
        >
          <h6 class="font-semibold">{{ pageTitle }}</h6>

          <!-- search and filter -->
          <div class="flex gap-2">
            <UInput
              icon="i-heroicons-magnifying-glass-20-solid"
              size="sm"
              color="white"
              :trailing="false"
              placeholder="Search Facilitator"
            />
          </div>
        </UCard>
        <UCard
          :ui="{
            body: {
              base: 'flex flex-col gap-4',
            },
          }"
        >
          <UTable :rows="facilitators" />
          <UPagination v-model="page" :page-count="5" :total="items.length" />
        </UCard>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
// import services
import { ref, onMounted } from 'vue'
import { useMerchantService } from '~/composables/useMerchantService'
const { getMerchants } = useMerchantService()

definePageMeta({
  layout: false,
})

const pageTitle = 'Facilitators List'
const facilitators = [
  {
    id: 1,
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  {
    id: 2,
    name: 'Courtney Henry',
    title: 'Designer',
    email: 'courtney.henry@example.com',
    role: 'Admin',
  },
  {
    id: 3,
    name: 'Tom Cook',
    title: 'Director of Product',
    email: 'tom.cook@example.com',
    role: 'Member',
  },
  {
    id: 4,
    name: 'Whitney Francis',
    title: 'Copywriter',
    email: 'whitney.francis@example.com',
    role: 'Admin',
  },
  {
    id: 5,
    name: 'Leonard Krasner',
    title: 'Senior Designer',
    email: 'leonard.krasner@example.com',
    role: 'Owner',
  },
  {
    id: 6,
    name: 'Floyd Miles',
    title: 'Principal Designer',
    email: 'floyd.miles@example.com',
    role: 'Member',
  },
]
const page = ref(1)
const items = ref(Array(55))

// methods
const fetchFacilitators = async () => {
  console.log('fetching facilitators')

  try {
    const response = await getMerchants()
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

// mounted
onMounted(() => {
  fetchFacilitators()
})
</script>
