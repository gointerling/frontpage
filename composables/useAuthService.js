// composables/useAuthService.js

import { useNuxtApp } from '#app'

export const useAuthService = () => {
  const { $axios } = useNuxtApp()

  return {
    login(credentials) {
      return $axios.post('/auth/login', credentials)
    },
    logout() {
      return $axios.post('/auth/logout')
    },
    getUser() {
      return $axios.get('/auth/user')
    },
    getTestData() {
      return $axios.get('/test')
    },
  }
}