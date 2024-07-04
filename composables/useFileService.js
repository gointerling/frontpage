// composables/useAuthService.js

import { useNuxtApp } from '#app'

export const useFileService = () => {
  const { $axios } = useNuxtApp()

  return {
    uploadFile(file, fileName) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('file_name', fileName)
      return $axios.post('/files', formData)
    },
    uploadAdsFile(file, fileName) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('file_name', fileName)
      return $axios.post('/files/ads', formData)
    },
    deleteFile(id) {
      return $axios.delete(`/files/${id}`)
    }
  }
}
