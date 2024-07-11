<template>
  <div
    class="file-upload inline-block"
    :class="center ? 'flex flex-col items-center' : ''"
  >
    <input
      ref="fileInput"
      type="file"
      :accept="accept"
      class="hidden"
      @change="handleFileChange"
    />

    <button
      v-if="isUploadProgress"
      class="px-4 py-2 border border-primary rounded-lg hover:bg-primary flex items-center gap-1 group transition duration-200 w-full"
    >
      <span class="text-primary group-hover:text-white transition duration-200">
        Uploading...
      </span>
    </button>

    <div v-else>
      <button
        v-if="!fileName"
        @click="triggerFileInput"
        class="px-4 py-2 border border-primary rounded-lg hover:bg-primary flex items-center gap-1 group transition duration-200 w-full"
      >
        <nuxt-icon
          name="file-upload"
          class="text-primary group-hover:text-white transition duration-200"
        />
        <span
          class="text-primary group-hover:text-white transition duration-200"
        >
          Upload {{ title }}
        </span>
      </button>

      <button
        v-if="fileName"
        @click="clearFile"
        class="px-4 py-2 border border-red-800 rounded-lg hover:bg-red-800 flex items-center gap-1 group transition duration-200 w-full"
      >
        <nuxt-icon
          name="circle-x"
          class="text-red-800 group-hover:text-white transition duration-200 mb-0 pb-0"
        />
        <span
          class="text-red-800 group-hover:text-white transition duration-200"
        >
          Cancel
        </span>
      </button>
    </div>

    <p v-if="fileName && isDisplayFile" class="mt-2 text-gray-700 text-xs">
      Selected file: {{ fileName }}
    </p>
    <p v-if="fileError" class="mt-2 text-red-500 text-xs">{{ fileError }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useFileService } from '~/composables/useFileService'
const { uploadFile, deleteFile } = useFileService()

const props = defineProps({
  title: {
    type: String,
    default: 'File',
  },
  accept: {
    type: String,
    default: '',
  },
  maxSize: {
    type: Number,
    default: 0, // size in bytes, default 0 means no limit
  },
  isDisplayFile: {
    type: Boolean,
    default: true,
  },
  center: {
    type: Boolean,
    default: false,
  },
})

const toast = useToast()
const emit = defineEmits(['fileUploaded'])

const fileInput = ref(null)
const fileName = ref('')
const fileError = ref('')
const uploadedFile = ref(null)
const isUploadProgress = ref(false)

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFileChange = () => {
  const file = fileInput.value.files[0]
  if (file) {
    fileName.value = file.name
    if (props.maxSize && file.size > props.maxSize) {
      fileError.value = `File size exceeds the limit of ${round(
        props.maxSize / 1024 / 1024,
        2
      )} MB.`
      fileName.value = ''
    } else {
      fileError.value = ''

      handleUploadFile(file, `${props.title}_${file.name}`)
    }
  }
}

const clearFile = () => {
  fileInput.value.value = null
  fileName.value = ''
  fileError.value = ''

  handleDeleteFile(uploadedFile.value)
}

const round = (value, decimals) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}

const handleUploadFile = (file, customFileName) => {
  isUploadProgress.value = true

  uploadFile(file, customFileName)
    .then((response) => {
      isUploadProgress.value = false

      uploadedFile.value = response.data.data.fileRecord
      setFileUrl(response.data.data.fileRecord.url)

      console.log('File uploaded:', response.data.data.fileRecord.url)

      toast.add({
        title: 'Success!',
        color: 'green',
        icon: 'i-heroicons-check-circle',
        description: 'File uploaded successfully!',
      })
    })
    .catch((err) => {
      console.error(err)
      toast.add({
        title: 'Uh Oh!',
        color: 'red',
        icon: 'i-heroicons-exclamation-triangle',
        description: getFirstErrorMessage(err.response.data.error),
      })
    })
}
const handleDeleteFile = (file) => {
  deleteFile(file.id)
    .then(() => {
      setFileUrl('')
      toast.add({
        title: 'Success!',
        color: 'green',
        icon: 'i-heroicons-check-circle',
        description: 'File deleted successfully!',
      })
    })
    .catch((err) => {
      console.error(err)
      toast.add({
        title: 'Uh Oh!',
        color: 'red',
        icon: 'i-heroicons-exclamation-triangle',
        description: getFirstErrorMessage(err.response.data.error),
      })
    })
}

const setFileUrl = (url) => {
  emit('fileUploaded', url)
}

const getFirstErrorMessage = (error) => {
  if (error.errors) {
    return error.errors[Object.keys(error.errors)[0]][0]
  }
  return error.message
}
</script>
