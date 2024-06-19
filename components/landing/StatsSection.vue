<template>
  <div class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="bg-[#E4F1F7] rounded-2xl shadow-md p-6 flex items-center gap-4"
        >
          <div class="bg-accent p-2 rounded-full">
            <nuxt-icon :name="stat.icon" class="text-xl icon" filled />
          </div>
          <div>
            <p class="text-3xl font-bold text-primary">{{ stat.number }}</p>
            <p class="text-primary">{{ stat.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        {
          id: 1,
          number: '500+',
          text: 'Translators',
          icon: 'users',
        },
        {
          id: 2,
          number: '400+',
          text: 'Verified Clients',
          icon: 'verified',
        },
        {
          id: 3,
          number: '300+',
          text: 'Secure Transaction',
          icon: 'checked-list',
        },
        {
          id: 4,
          number: '200+',
          text: 'Professional Service',
          icon: 'pro-badge',
        },
        // Add more stats here
      ],
    }
  },
}
</script>
