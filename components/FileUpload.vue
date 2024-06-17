<template>
  <div class="file-upload">
    <input
      ref="fileInput"
      type="file"
      :accept="accept"
      class="hidden"
      @change="handleFileChange"
    />
    <button
      v-if="!fileName"
      @click="triggerFileInput"
      class="px-4 py-2 border border-primary rounded hover:bg-primary flex items-center gap-1 group transition duration-200"
    >
      <nuxt-icon
        name="file-upload"
        class="text-primary group-hover:text-white transition duration-200"
      />
      <span class="text-primary group-hover:text-white transition duration-200">
        Upload File
      </span>
    </button>

    <button
      v-if="fileName"
      @click="clearFile"
      class="px-4 py-2 border border-red-800 rounded hover:bg-red-800 flex items-center gap-1 group transition duration-200"
    >
      <nuxt-icon
        name="circle-x"
        class="text-red-800 group-hover:text-white transition duration-200 mb-0 pb-0"
      />
      <span class="text-red-800 group-hover:text-white transition duration-200">
        Cancel
      </span>
    </button>

    <p v-if="fileName" class="mt-2 text-gray-700 text-xs">
      Selected file: {{ fileName }}
    </p>
    <p v-if="fileError" class="mt-2 text-red-500 text-xs">{{ fileError }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  accept: {
    type: String,
    default: '',
  },
  maxSize: {
    type: Number,
    default: 0, // size in bytes, default 0 means no limit
  },
})

const fileInput = ref(null)
const fileName = ref('')
const fileError = ref('')

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
    }
  }
}

const clearFile = () => {
  fileInput.value.value = null
  fileName.value = ''
  fileError.value = ''
}

const round = (value, decimals) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
