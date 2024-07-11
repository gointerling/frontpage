<template>
  <!-- card -->
  <div
    class="bg-[#D7EEF8] rounded-3xl shadow-lg pt-8 flex flex-col items-center"
  >
    <UAvatar
      :alt="data.users[0].fullname"
      :src="data.users[0].photo"
      imgClass="object-cover"
      class="rounded-full"
      size="4xl"
      :ui="{
        size: {
          '4xl': 'h-32 w-32 text-4xl',
        },
      }"
    />

    <h2 class="text-xl text-primary font-bold pt-3 pb-1 capitalize">
      {{ data.users[0].fullname }}
    </h2>

    <UBadge
      color="orange"
      :label="data.type"
      variant="soft"
      class="uppercase my-2"
    />

    <div class="flex gap-2 pt-2 pb-6">
      <div class="flex gap-2 items-center px-2">
        <nuxt-icon name="star" filled />
        <span class="font-bold text-primary">
          {{ data.rating }}
        </span>
      </div>

      <div class="w-[2px] h-100 rounded bg-primary"></div>
      <div class="flex gap-2 items-center px-2">
        <nuxt-icon name="love" filled />
        <span class="font-bold text-primary"> {{ data.recomended_count }}</span>
      </div>
    </div>

    <UTabs
      :items="serviceItems"
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

          <UButton
            :disabled="!data.services[0].language_sources"
            class="px-4 py-2 mt-4 mb-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out flex justify-center items-center"
            @click="emitOrder"
          >
            Order Now
          </UButton>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const emit = defineEmits(['order'])

// props
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      name: 'Facilitator Name',
      role: 'Facilitator Role',
      bio: 'Facilitator Bio',
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

// computed items
const serviceItems = computed(() => {
  return props.data.services.map((service) => {
    return {
      label: service.name,
      price: service.price,
      contents: [
        service.desc,
        `${service.time_estimated} ${service.time_estimated_unit} delivery`,
        `${service.working_hours} Working Hours`,
        'Proofreading',
        'Document formatting',
      ],
    }
  })
})

// emit order
const emitOrder = () => {
  emit('order')
}
</script>
