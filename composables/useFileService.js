// composables/useAuthService.js

import { useNuxtApp } from '#app'

export const useFileService = () => {
  const { $axios } = useNuxtApp()

  return {
    uploadFile(file) {
      const formData = new FormData()
      formData.append('file', file)
      return $axios.post('/files', formData)
    },
    deleteFile(id) {
      return $axios.delete(`/files/${id}`)
    }
  }
}
