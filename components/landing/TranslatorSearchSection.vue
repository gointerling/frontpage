<template>
  <div class="bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h6 class="py-4 text-primary text-2xl font-semibold">
        Find Facilitators for The Language Translator You Need
      </h6>
      <div class="flex justify-center gap-3 w-100">
        <input
          type="text"
          class="px-4 py-2 rounded-lg border border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent w-6/12"
          placeholder="Search Facilitators"
          v-model="searchQuery"
        />
        <button
          class="px-10 py-2 bg-accent ring-accent text-white rounded-lg hover:bg-accnet-700 transition duration-300"
          @click="handleSearch"
        >
          Find
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()

const searchQuery = ref('')

const handleSearch = () => {
  router.push({
    name: 'facilitators',
    query: { search: searchQuery.value },
  })
}
</script>
