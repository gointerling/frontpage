<template>
  <UModal
    v-model="internalIsOpen"
    fullscreen
    :overlay="false"
    :ui="{
      base: 'w-[500px] absolute top-0 right-0 h-screen bg-white dark:bg-gray-800 rounded-l-3xl',
      rounded: 'rounded-l-3xl rounded-r-0',
    }"
  >
    <UCard
      :ui="{
        base: 'h-full',
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        rounded: 'rounded-l-3xl rounded-r-0',
        body: {
          base: 'h-full',
          padding: 'px-6 py-5 sm:p-10',
        },
        header: {
          padding: 'px-6 py-5 sm:px-8',
        },
        footer: {
          padding: 'px-6 py-4 sm:px-10',
        },
      }"
    >
      <div
        class="flex justify-between items-center w-full border-b border-1 pb-4"
      >
        <button @click="hideSidebar">
          <nuxt-icon
            name="back"
            class="text-2xl text-primary dark:text-gray-300"
          />
        </button>
        <h3
          class="text-lg font-semibold w-full flex justify-center text-primary"
        >
          Your Order
        </h3>
      </div>

      <div class="flex flex-col justify-between pt-4 pb-10 h-full">
        <div class="flex flex-col justify-start gap-4 items-center">
          <div class="flex flex-col w-full">
            <label class="text-primary uppercase">STANDARD PACKAGE</label>
            <span class="text-xl font-semibold text-primary">{{
              formatPrice(payload.price)
            }}</span>
          </div>

          <div class="flex flex-col w-full">
            <label class="text-primary">Category</label>
            <span class="text-xl font-semibold text-primary">
              {{ payload.type }}
            </span>
          </div>

          <div
            class="w-full border-t border-b border-1 pt-4 pb-8 flex flex-col gap-4"
          >
            <UFormGroup label="From" class="w-full">
              <UInputMenu
                placeholder="Find Your Language"
                :options="fromLanguageList"
                v-model="payload.from"
                by="id"
                option-attribute="name"
                :search-attributes="['name']"
              />
            </UFormGroup>
            <UFormGroup label="To" class="w-full">
              <UInputMenu
                placeholder="Find Your Language"
                :options="toLanguageList"
                v-model="payload.to"
                by="id"
                option-attribute="name"
                :search-attributes="['name']"
              />
            </UFormGroup>
          </div>

          <UFormGroup label="To" class="w-full">
            <UInputMenu
              placeholder="Find Your Language"
              :options="toLanguageList"
              v-model="payload.to"
              by="id"
              option-attribute="name"
              :search-attributes="['name']"
            />
          </UFormGroup>
        </div>

        <div class="flex justify-end space-x-2 px-4">
          <div class="flex flex-col items-center w-full gap-2">
            <UButton
              @click="confirm"
              block
              class="px-4 py-2 bg-accent text-white rounded hover:bg-accent-700 rounded-full"
            >
              {{ data.confirmText }}
              {{ formatPrice(payload.price) }}
            </UButton>
            <UButton @click="cancel" color="orange" variant="link">
              {{ data.cancelText }}
            </UButton>
          </div>
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script setup>
import { ref, watch } from 'vue'

// define props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  languages: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Object,
    default: () => ({
      title: 'Sidebar Title',
      content: 'Sidebar Content',
      confirmText: 'Continue',
      cancelText: 'Cancel',
      callback: () => {},
    }),
  },
})

const fromLanguageList = computed(() => {
  return props.languages.filter((lang) => lang.id !== payload.value.to.id)
})

const toLanguageList = computed(() => {
  return props.languages.filter((lang) => lang.id !== payload.value.from.id)
})

const payload = ref({
  price: 0,
  type: 'Translator',
  from: {},
  to: {},
})

// emit event to update the prop value
const emit = defineEmits(['update:isOpen'])

// internal state to handle the modal visibility
const internalIsOpen = ref(props.isOpen)

// watch for changes in the prop to update the internal state
watch(
  () => props.isOpen,
  (newVal) => {
    internalIsOpen.value = newVal
  }
)

// watch for changes in the internal state to emit the event
watch(internalIsOpen, (newVal) => {
  emit('update:isOpen', newVal)

  console.log(newVal)
})

const hideSidebar = () => {
  internalIsOpen.value = false

  emit('hide')
}

// methods for handling confirmation and cancellation
const confirm = () => {
  props.data.callback(true)
  internalIsOpen.value = false
}

const cancel = () => {
  props.data.callback(false)
  internalIsOpen.value = false
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}
</script>
