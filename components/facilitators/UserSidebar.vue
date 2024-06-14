<template>
  <!-- card -->
  <div
    class="bg-[#D7EEF8] rounded-3xl shadow-lg pt-8 flex flex-col items-center"
  >
    <img :src="facilitator.image" class="w-32 h-32 rounded-full" />

    <h2 class="text-xl text-primary font-bold py-3">{{ facilitator.name }}</h2>
    <div class="flex gap-2 pt-2 pb-6">
      <div class="flex gap-2 items-center px-2">
        <nuxt-icon name="star" filled />
        <span class="font-bold text-primary"> 5.0 </span>
      </div>

      <div class="w-[2px] h-100 rounded bg-primary"></div>
      <div class="flex gap-2 items-center px-2">
        <nuxt-icon name="love" filled />
        <span class="font-bold text-primary"> 768 </span>
      </div>
    </div>
    <UTabs
      :items="items"
      class="w-full h-full bg-white rounded-b-3xl"
      :ui="tabConfig"
    >
      <template #item="{ item }">
        <div class="bg-white rounded-b-2xl py-4 px-8 flex flex-col">
          <span class="text-sm text-primary font-thin uppercase">
            {{ item.label }}
          </span>
          <span class="text-primary font-semibold mb-2">
            Rp. {{ item.price }}
          </span>
          <ul class="text-primary text-sm">
            <li v-for="(content, i) in item.contents" :key="i">
              {{ content }}
            </li>
          </ul>

          <button
            class="px-4 py-2 mt-4 mb-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out"
          >
            Order Now
          </button>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// props
const props = defineProps({
  facilitator: {
    type: Object,
    required: true,
    default: () => ({
      name: 'Facilitator Name',
      role: 'Facilitator Role',
      bio: 'Facilitator Bio',
      linkedin: 'https://linkedin.com',
      image: 'https://via.placeholder.com/150',
    }),
  },
})

const tabConfig = {
  wrapper: 'relative space-y-2',
  container: 'relative w-full',
  base: 'focus:outline-none',
  list: {
    base: 'relative',
    background: 'bg-gray-100 dark:bg-gray-800',
    rounded: 'rounded-none',
    shadow: '',
    padding: 'p-0',
    height: 'h-10',
    width: 'w-full',
    marker: {
      wrapper:
        'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
      base: 'w-full h-full',
      background: 'bg-white dark:bg-gray-900',
      rounded: 'rounded-none',
      shadow: 'shadow-sm',
    },
    tab: {
      base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
      background: '',
      active: 'text-gray-900 dark:text-white',
      inactive: 'text-gray-500 dark:text-gray-400',
      height: 'h-8',
      padding: 'p-0',
      size: 'text-sm',
      font: 'font-medium',
      rounded: 'rounded-none',
      shadow: '',
    },
  },
}

// data
const items = [
  {
    label: 'Standard',
    price: 50000,
    contents: [
      'This package includes 1000 words.',
      '5-day delivery',
      'Unlimited Revisions',
      'Proofreading',
      'Document formatting',
    ],
  },
  {
    label: 'Premium',
    price: 150000,
    contents: [
      'This package includes 1000 words.',
      '5-day delivery',
      'Unlimited Revisions',
      'Proofreading',
      'Document formatting',
    ],
  },
]
</script>
