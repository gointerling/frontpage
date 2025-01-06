<template>
  <UModal
    v-model="internalIsOpen"
    fullscreen
    prevent-close
    :ui="{
      base: 'w-full lg:w-[500px] absolute top-0 right-0 h-screen bg-white dark:bg-gray-800 lg:rounded-l-3xl',
      rounded: 'rounded-none lg:rounded-l-3xl',
    }"
  >
    <UCard
      :ui="{
        base: 'h-full',
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        rounded: 'rounded-none lg:rounded-l-3xl',
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
            <label class="text-primary uppercase"
              >{{ props.data.type }} PACKAGE</label
            >
            <span class="text-xl font-semibold text-primary">{{
              formatPrice(props.data.price)
            }}</span>
          </div>

          <div class="flex flex-col w-full">
            <label class="text-primary">Category</label>
            <span class="text-xl font-semibold text-primary capitalize">{{
              props.data.merchants[0].type
            }}</span>
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

          <UFormGroup label="Upload File" class="w-full">
            <FileUpload
              title="Order"
              accept="*"
              max-size="52428800"
              @file-uploaded="setOrderFile"
            />
          </UFormGroup>

          <UFormGroup
            label="Do you want to send the document as a hard file?"
            class="w-full"
          >
            <UCheckbox v-model="isUsingHardFile" label="Yes" />

            <!-- Conditional rendering for the custom text area -->
            <div v-if="isUsingHardFile" class="mt-4">
              <UTextarea
                v-model="payload.is_hardfile"
                placeholder="Enter your address"
                class="w-full"
              />
            </div>
          </UFormGroup>
        </div>

        <div class="flex justify-end space-x-2 px-4">
          <div class="flex flex-col items-center w-full gap-2">
            <UButton
              @click="setOrder"
              block
              class="px-4 py-2 bg-accent text-white hover:bg-accent-700 rounded-full"
            >
              Continue ({{ formatPrice(props.data.price) }})
            </UButton>
            <UButton @click="hideSidebar" color="orange" variant="link">
              {{ data.cancelText }}
              Cancel
            </UButton>
          </div>
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

import { useOrderService } from '~/composables/useOrderService'
const { setMyOrder } = useOrderService()

const route = useRoute()
const router = useRouter()
const toast = useToast()

// define props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
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
  return props.data.language_sources.filter(
    (lang) => lang.id !== payload.value.to.id
  )
})

const toLanguageList = computed(() => {
  return props.data.language_destinations.filter(
    (lang) => lang.id !== payload.value.from.id
  )
})

const isUsingHardFile = ref(false)
const payload = ref({
  price: 0,
  type: 'Translator',
  from: {},
  to: {},
  file_url: '',
  is_hardfile: null,
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

    if (!newVal) {
      hideSidebar()
    }
  }
)

// watch for changes in the internal state to emit the event
watch(internalIsOpen, (newVal) => {
  emit('update:isOpen', newVal)
})

const hideSidebar = () => {
  internalIsOpen.value = false

  emit('hide')
}

const setOrderFile = (file) => {
  payload.value.file_url = file
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

const setPayload = () => {
  // Initialize the payload object
  const data = {
    service_id: props.data.id,
    merchant_id: props.data.merchants[0].id,
    merchant_user_id: props.data.merchants[0].users[0].id,
    language_source: payload.value.from,
    language_destination: payload.value.to,
    user_file_url: payload.value.file_url,
    is_hardfile:
      payload.value.is_hardfile === '' ? null : payload.value.is_hardfile,
  }

  // Function to check if a value is null or empty
  const isNullOrEmpty = (value) => {
    return value === null || value === undefined || value === ''
  }

  // Mapping of field names to human-readable names
  const fieldNames = {
    service_id: 'Service ID',
    merchant_id: 'Merchant ID',
    merchant_user_id: 'Merchant User ID',
    language_source: 'Source Language',
    language_destination: 'Destination Language',
    user_file_url: 'Upload File',
  }

  // Validate data fields
  const fieldsToValidate = [
    'service_id',
    'merchant_id',
    'merchant_user_id',
    'language_source',
    'language_destination',
    'user_file_url',
  ]

  for (const field of fieldsToValidate) {
    if (isNullOrEmpty(data[field])) {
      toast.add({
        title: 'Uh Oh!',
        color: 'red',
        icon: 'i-heroicons-exclamation-triangle',
        description: `${fieldNames[field]} cannot be empty`,
      })
      return null
    }
  }

  // If all fields are valid, return the data
  return data
}

const setOrder = async () => {
  try {
    const { data } = await setMyOrder(setPayload())

    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: 'Your order have been successfully listed!',
    })

    // close the side bar
    hideSidebar()

    // route to order
    router.push({
      name: 'my-client-orders-id',
      params: {
        id: data.data.order.id,
      },
    })
  } catch (err) {
    console.error('Creating order failed:', err)

    toast.add({
      title: 'Uh Oh!',
      color: 'red',
      icon: 'i-heroicons-exclamation-triangle',
      description: err.response.data.message,
    })
  }
}
</script>
