<template>
  <UModal
    v-model="internalIsOpen"
    fullscreen
    prevent-close
    :ui="{
      base: '!w-[600px] absolute top-0 right-0 h-screen bg-white dark:bg-gray-800 rounded-l-3xl',
      rounded: 'rounded-l-3xl rounded-r-0',
    }"
  >
    <UCard
      :ui="{
        base: 'h-full ',
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        rounded: 'rounded-l-3xl rounded-r-0',
        body: {
          base: 'flex flex-col justify-between h-full',
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
          Upload Result
        </h3>

        <!-- file -->
      </div>
      <div class="flex flex-col w-full h-full my-4">
        <span class="font-semibold py-4"> Work Result </span>
        <UCard
          v-if="!props.data.actions.result_file_url || isReupload"
          :ui="{
            base: 'w-full h-[200px] border-dashed border-2',
            body: {
              base: 'w-full h-[200px] flex justify-center items-center',
            },
          }"
          ref="dropzone-file"
        >
          <FileUpload
            title="Result"
            accept="*"
            :center="true"
            max-size="6291456"
            @file-uploaded="setFileUrl"
          />
        </UCard>

        <UCard
          v-else
          :ui="{
            base: 'w-full h-[200px] ',
            body: {
              base: 'w-full h-[200px] flex justify-center items-center',
            },
          }"
          ref="dropzone-file"
        >
          <div class="flex flex-col">
            <div class="flex gap-2 justify-center items-center p-4">
              <nuxt-icon name="file" />
              Your Past Result
            </div>
            <div class="flex justify-center gap-2">
              <UButton
                icon="i-heroicons-arrow-up-tray"
                @click="
                  displayConfirmationModal(
                    'Hang On',
                    'Are you sure you want to reupload this result?',
                    'Re Upload',
                    'Cancel',
                    () => (isReupload = true)
                  )
                "
              >
                Reupload
              </UButton>
              <UButton
                icon="i-heroicons-arrow-down-tray"
                @click="openNewTab(props.data.actions.result_file_url)"
              >
                Download
              </UButton>
            </div>
          </div>
        </UCard>

        <span class="font-semibold py-4"> Setup a Meeting </span>
        <UCard
          :ui="{
            base: 'w-full ',
            body: {
              base: 'flex justify-center items-center',
            },
          }"
          ref="dropzone-file"
        >
          <div class="flex flex-col items-center">
            <img :src="meetEmpty" width="200px" alt="" />
            <div
              class="flex gap-2 justify-center items-center p-4 font-semibold text-lg"
            >
              <UIcon name="i-heroicons-video-camera" />
              Meeting Link
            </div>
            <div class="flex justify-center gap-2">
              <UInput v-model="payload.meet_url" />
              <UButton
                v-if="props.data.actions.meet_url"
                color="primary"
                @click="openAndCopy(payload.meet_url)"
              >
                <UIcon name="i-heroicons-video-camera" />
                Open
              </UButton>
            </div>
          </div>
        </UCard>
      </div>

      <div class="w-full flex justify-end">
        <UButton color="primary" @click="updateFileResult()">
          <nuxt-icon name="floppy" />
          Save
        </UButton>
      </div>
    </UCard>

    <!-- confirmation modal -->
    <ConfirmationModal :isOpen="isModalOpen" :data="modalData" />
  </UModal>
</template>

<script setup>
import { ref, watch } from 'vue'
import ConfirmationModal from '~/components/ConfirmationModal.vue'

import meetEmpty from '@/assets/images/meeting.svg'

import { useOrderService } from '~/composables/useOrderService'
const { updateMerchantOrder } = useOrderService()

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
  },
})

// emit event to update the prop value
const emit = defineEmits(['update:isOpen', 'hide', 'refresh'])

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
  isModalOpen.value = false
  isReupload.value = false

  // reset all
  payload.value = {
    result_file_url: '',
    meet_url: '',
  }

  emit('hide')
}

// const data
const payload = ref({
  result_file_url: '',
  meet_url: '',
})

// state
const isModalOpen = ref(false)
const isReupload = ref(false)

const modalData = ref({
  title: '',
  message: '',
  callback: null,
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}

const setFileUrl = (file) => {
  payload.value.result_file_url = file
}

const displayConfirmationModal = (
  title,
  content,
  confirmText,
  cancelText,
  callback
) => {
  modalData.value = {
    title,
    content,
    confirmText,
    cancelText,
    callback,
  }
  isModalOpen.value = true
}

const openNewTab = (url) => {
  window.open(url, '_blank')
}

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)

  // Show toast
  toast.add({
    title: 'Copied!',
    color: 'green',
    icon: 'i-heroicons-check-circle',
    description: 'Meeting URL copied to clipboard!',
  })
}

const openAndCopy = (url) => {
  copyToClipboard(url)
  openNewTab(url)
}

// watch props
watch(
  () => props.data,
  (val) => {
    if (val && val.actions && val.actions.meet_url) {
      payload.value.meet_url = val.actions.meet_url
    }
  },
  {
    immediate: true,
    deep: true,
  }
)

const dynamicPayload = (payload) => {
  const cleanedPayload = {}
  for (const key in payload) {
    if (
      payload[key] !== '' &&
      payload[key] !== null &&
      payload[key] !== undefined
    ) {
      cleanedPayload[key] = payload[key]
    }
  }
  return cleanedPayload
}

const updateFileResult = async () => {
  const orderId = props.data.actions.id

  try {
    const { data } = await updateMerchantOrder(
      orderId,
      dynamicPayload({
        result_file_url: payload.value.result_file_url,
        meet_url: payload.value.meet_url,
      })
    )
    // Show toast
    toast.add({
      title: 'Success!',
      color: 'green',
      icon: 'i-heroicons-check-circle',
      description: 'Order updated successfully!',
    })

    // hide
    hideSidebar()
  } catch (error) {
    console.error('Updating order failed:', error)
    // Show toast
    toast.add({
      title: 'Failed!',
      color: 'red',
      icon: 'i-heroicons-x-circle',
      description: 'Failed to update order!',
    })
  }
}
</script>
