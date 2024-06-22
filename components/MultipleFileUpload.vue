<template>
  <div class="file-upload">
    <input
      ref="fileInput"
      type="file"
      :accept="accept"
      multiple
      class="hidden"
      @change="handleFileChange"
    />

    <button
      v-if="isUploadProgress"
      class="px-4 py-2 border border-primary rounded-lg hover:bg-primary flex items-center gap-1 group transition duration-200"
    >
      <span class="text-primary group-hover:text-white transition duration-200">
        Uploading...
      </span>
    </button>

    <div v-else>
      <button
        v-if="fileNames.length === 0"
        @click="triggerFileInput"
        class="px-4 py-2 border border-primary rounded-lg hover:bg-primary flex items-center gap-1 group transition duration-200"
      >
        <nuxt-icon
          name="file-add"
          class="text-primary group-hover:text-white transition duration-200"
        />
        <span
          class="text-primary group-hover:text-white transition duration-200"
        >
          {{ title }}
        </span>
      </button>

      <div v-if="fileNames.length > 0" class="flex flex-wrap gap-2">
        <div
          v-for="(fileName, index) in fileNames"
          :key="index"
          class="relative group"
        >
          <button
            @click="clearFile(index)"
            class="relative group flex items-center gap-1 px-4 py-2 border border-primary bg-slate-100 rounded-lg transition duration-200 hover:bg-red-500"
          >
            <div
              class="absolute top-2 right-2 p-1 text-white bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-200"
            >
              <nuxt-icon name="circle-x" class="h-4 w-4" />
            </div>

            <nuxt-icon
              name="file"
              class="text-primary transition duration-200 group-hover:text-white"
            />
            <span
              class="text-primary transition duration-200 group-hover:text-white"
            >
              <!-- truncate filename -->
              {{
                fileName.length > 5
                  ? fileName.substring(0, 5) + '...'
                  : fileName
              }}
            </span>
          </button>
        </div>

        <button
          @click="triggerFileInput"
          class="px-4 py-2 border border-primary rounded-lg hover:bg-primary flex items-center gap-1 group transition duration-200"
        >
          <nuxt-icon
            name="file-add"
            class="text-primary group-hover:text-white transition duration-200"
          />
          <span
            class="text-primary group-hover:text-white transition duration-200"
          >
            {{ title }}
          </span>
        </button>
      </div>
    </div>

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
    default: 'Files',
  },
  accept: {
    type: String,
    default: '',
  },
  maxSize: {
    type: Number,
    default: 0, // size in bytes, default 0 means no limit
  },
})

const toast = useToast()
const emit = defineEmits(['fileUploaded'])

const fileInput = ref(null)
const fileNames = ref([])
const fileError = ref('')
const uploadedFiles = ref([])
const isUploadProgress = ref(false)

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFileChange = () => {
  const files = Array.from(fileInput.value.files)
  let totalSize = 0

  files.forEach((file) => {
    totalSize += file.size
    fileNames.value.push(file.name)
  })

  if (props.maxSize > props.maxSize) {
    fileError.value = `Total file size exceeds the limit of ${round(
      props.maxSize / 1024 / 1024,
      2
    )} MB.`

    // Remove the last files from the list
    fileNames.value.splice(-files.length, files.length)
  } else {
    fileError.value = ''
    handleUploadFiles(files) // Call function to upload files
  }
}

const clearFile = async (index) => {
  const file = uploadedFiles.value.splice(index, 1)[0]
  await handleDeleteFile(file)
  fileNames.value.splice(index, 1)
}

const round = (value, decimals) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}

const handleUploadFiles = (files) => {
  isUploadProgress.value = true
  const uploadPromises = files.map((file) => uploadFile(file))

  Promise.all(uploadPromises)
    .then((responses) => {
      isUploadProgress.value = false
      responses.forEach((response) => {
        uploadedFiles.value.push(response.data.data.fileRecord)

        // set file url array url
        const arrayOfUrls = uploadedFiles.value.map((file) => file.url)
        setFileUrl(arrayOfUrls)
      })

      toast.add({
        title: 'Success!',
        color: 'green',
        icon: 'i-heroicons-check-circle',
        description: 'Files uploaded successfully!',
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

const handleDeleteFile = async (file) => {
  if (file) {
    await deleteFile(file.id)
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
}

const setFileUrl = (urls) => {
  emit('fileUploaded', urls)
}

const getFirstErrorMessage = (error) => {
  if (error.errors) {
    return error.errors[Object.keys(error.errors)[0]][0]
  }
  return error.message
}
</script>
