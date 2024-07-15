// composables/useAuthService.js

import { useNuxtApp } from '#app'

export const useAuthService = () => {
  const { $axios } = useNuxtApp()

  return {
    login(credentials) {
      return $axios.post('/auth/login', credentials)
    },
    register(credentials) {
      return $axios.post('/auth/register', credentials)
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

    verifyGoogleToken(payload) {
      return $axios.post('/auth/sso/google/verify', payload)
    }
  }
}
